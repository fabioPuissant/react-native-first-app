<?php


namespace App\Entity;


class Room
{
     public $id;
     public $name;
     public $happinessScore;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getHappinessScore()
    {
        return $this->happinessScore;
    }

    /**
     * @param mixed $happinessScore
     */
    public function setHappinessScore($happinessScore): void
    {
        $this->happinessScore = $happinessScore;
    }

}