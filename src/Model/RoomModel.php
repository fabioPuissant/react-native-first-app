<?php

namespace App\Model;


use App\Entity\Room;
use App\Util\PdoFactory;
use PDO;

class RoomModel
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

    public function getAll(): array
    {
        $statement = $this->pdo->query("SELECT * FROM room");
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $rooms = array();
        while ($row = $statement->fetch()) {
            $room = $this->mapToRoom($row);
            array_push($rooms, $room);
        }
        return $rooms;
    }

    public function getByName(String $name): Room
    {
        $statement = $this->pdo->prepare("SELECT * FROM room WHERE Name = :name");
        $statement->bindParam(":name", $name, PDO::PARAM_STR);
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $row = $statement->fetch();
        return $this->mapToRoom($row);
    }

    public function updateHappinessScore(String $name, int $score)
    {
        $room = $this->getByName($name);
        $room->happinessScore = $room->happinessScore + $score;
        $this->updateRoom($room);
    }

    private function updateRoom(Room $room)
    {
        try {
            $this->pdo->beginTransaction();
            $statement = $this->pdo->prepare("UPDATE room SET Name= :name, HappinessScore = :score WHERE Id = :id");
            $statement->bindParam(":name", $room->name, PDO::PARAM_STR);
            $statement->bindParam(":id", $room->id, PDO::PARAM_STR);
            $statement->bindParam(":score", $room->happinessScore, PDO::PARAM_INT);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();
            $this->pdo->commit();
        } catch (\PDOException $exception) {
            $this->pdo->rollBack();
            throw new \Exception("");
        }
    }

    private function mapToRoom($row): Room
    {
        $room = new Room();
        $room->setName($row["name"]);
        $room->setId($row["id"]);
        $room->setHappinessScore($row["happinessScore"]);
        $room->setImageUrl($row["imageUrl"]);

        return $room;
    }

    public function getAllLowerThan(string $score)
    {
        $statement = $this->pdo->prepare("SELECT * FROM room WHERE HappinessScore < :score");
        $statement->bindParam(":score", $score, PDO::PARAM_INT);
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();

        $rooms = array();
        while ($row = $statement->fetch()) {
            $room = $this->mapToRoom($row);
            array_push($rooms, $room);
        }
        return $rooms;
    }

}