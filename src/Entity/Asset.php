<?php


namespace App\Entity;


class Asset
{
    public $id;
    public $name;
    public $roomId;

    /**
     * @return mixed
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName(): String
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName(String $name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getRoomId(): int
    {
        return $this->roomId;
    }

    /**
     * @param mixed $roomId
     */
    public function setRoomId(int $roomId): void
    {
        $this->roomId = $roomId;
    }
}