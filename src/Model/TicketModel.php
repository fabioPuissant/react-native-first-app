<?php


namespace App\Model;


use App\Entity\Ticket;
use App\IllegalStateException;
use App\Util\PdoFactory;
use PDO;

class TicketModel
{
    private $pdo;

    /**
     * RoomModel constructor.
     * @param PdoFactory $pdoFactory
     */
    public function __construct(PdoFactory $pdoFactory)
    {
        $this->pdo = $pdoFactory->getPdo();
    }

    public function getAll(){
        $statement = $this->pdo->query("SELECT * FROM ticket;");
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $tickets = array();
        while ($row = $statement->fetch()) {
            $tickets[] = $this->mapDataToTicket($row);
        }

        return $tickets;
    }

    public function addTicket(Ticket $ticket)
    {
        $this->validatePostTicket($ticket);
        try {
            $this->pdo->beginTransaction();
            $statement = $this->pdo->prepare("INSERT INTO ticket (AssetId, NumberOfVotes, Description)VALUES(:assetId, 0, :description);");
            $statement->bindParam(":assetId", $ticket->assetId, PDO::PARAM_INT);
            $statement->bindParam(":description", $ticket->description, PDO::PARAM_STR);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();
            $this->pdo->commit();
        } catch (\PDOException $exception) {
            $this->pdo->rollBack();
        }
    }

    public function getAllTicketsOfAsset(int $assetId)
    {
        if ($assetId < 1) {
            throw new IllegalStateException("AssetId must have a value greater then 0 in order to find tickets of asset!");
        }
        $statement = $this->pdo->prepare("SELECT * FROM ticket WHERE AssetId=:assetId;");
        $statement->bindParam(":assetId", $assetId, PDO::PARAM_INT);
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $tickets = array();
        while ($row = $statement->fetch()) {
            $tickets[] = $this->mapDataToTicket($row);
        }

        return $tickets;
    }

    public function addVoteToTicket(int $ticketId){
        try {
            $this->validateIdMoreThanZero($ticketId);
            $statement = $this->pdo->prepare("UPDATE ticket SET NumberOfVotes= NumberOfVotes + 1 WHERE Id=:id;");
            $statement->bindParam(":id", $ticketId, PDO::PARAM_INT);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();
        }
        catch (\PDOException $exception){
            $this->pdo->rollBack();
            throw new IllegalStateException("Cannot raise votes by one of ticket with id: " . $ticketId);
        }
    }

    public function getTicketWithId(int $ticketId): Ticket{
        $this->validateIdMoreThanZero($ticketId);
        $statement = $this->pdo->prepare("SELECT * FROM ticket WHERE Id=:id;");
        $statement->bindParam(":id", $ticketId, PDO::PARAM_INT);
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        if($row = $statement->fetch()){
            $ticket = $this->mapDataToTicket($row);

            return $ticket;
        }

        throw new IllegalStateException("No ticket found with id of " . $ticketId);
    }

    private function mapDataToTicket($data)
    {
        $ticket = new Ticket();
        $ticket->setId($data["Id"]);
        $ticket->setAssetId($data["AssetId"]);
        $ticket->setNumberOfVotes($data["NumberOfVotes"]);
        $ticket->setDescription($data["Description"]);

        return $ticket;
    }

    private function validatePostTicket(Ticket $ticket)
    {
        if ($ticket->id != 0) {
            throw new IllegalStateException("Id of new ticket is not 0!");
        }
        if (!ctype_digit($ticket->assetId)) {
            throw new IllegalStateException("AssetId of new ticket is not a number!");
        }
        if (!$ticket->description) {
            throw new IllegalStateException("Description of new ticket is not set!");
        }
    }

    private function validateIdMoreThanZero(int $ticketId)
    {
        if($ticketId <= 0){
            throw new IllegalStateException("Given Ticket Id should be more than 0 in order to raise the votes for a ticket!");
        }
    }
}