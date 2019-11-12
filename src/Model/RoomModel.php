<?php

namespace App\Model;


use App\Entity\Room;
use PDO;

class RoomModel
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
        $room->setName($row["Name"]);
        $room->setId($row["Id"]);
        $room->setHappinessScore($row["HappinessScore"]);

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