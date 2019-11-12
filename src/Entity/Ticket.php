<?php


namespace App\Entity;


class Ticket
{
    public $id;
    public $assetId;
    public $numberOfVotes;
    public $description;

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
    public function getAssetId()
    {
        return $this->assetId;
    }

    /**
     * @param mixed $assetId
     */
    public function setAssetId($assetId): void
    {
        $this->assetId = $assetId;
    }

    /**
     * @return mixed
     */
    public function getNumberOfVotes()
    {
        return $this->numberOfVotes;
    }

    /**
     * @param mixed $numberOfVotes
     */
    public function setNumberOfVotes($numberOfVotes): void
    {
        $this->numberOfVotes = $numberOfVotes;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }


}