<?php


namespace App\Model;


use App\Entity\Ticket;
use App\IllegalStateException;
use PDO;

class TicketModel
{
    private $pdo;
    private $user = "student";
    private $password = "root";

    /**
     * RoomModel constructor.
     * @param $pdo
     */
    public function __construct()
    {
        $this->pdo = new \PDO("mysql:host=192.168.33.22;dbname=wp1DB", $this->user, $this->password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function addTicket(Ticket $ticket)
    {
        $this->validatePostTicket($ticket);
        try {
            $this->pdo->beginTransaction();
            $statement = $this->pdo->prepare("INSERT INTO ticket (AssetId, NumberOfVotes, Description)VALUES(:assetId, :numberOfVotes, :description);");
            $statement->bindParam(":assetId", $ticket->assetId, PDO::PARAM_INT);
            $statement->bindParam(":numberOfVotes", $ticket->numberOfVotes, PDO::PARAM_INT);
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
        $statement = $this->pdo->prepare("SELECT * FROM asset WHERE AssetId=:assetId;");
        $statement->bindParam(":assetId", $assetId, PDO::PARAM_INT);
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $tickets = array();
        while ($row = $statement->fetch()) {
            $tickets[] = $this->mapDataToTicket($row);
        }

        return $tickets;
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
        if (!ctype_digit($ticket->numberOfVotes)) {
            throw new IllegalStateException("NumberOfVotes of new ticket is not a number!!");
        }
        if (!ctype_digit($ticket->assetId)) {
            throw new IllegalStateException("AssetId of new ticket is not a number!");
        }
        if (!$ticket->description) {
            throw new IllegalStateException("Description of new ticket is not 0!");
        }
    }
}