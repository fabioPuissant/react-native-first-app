<?php

namespace App\Util;

use PDO;

class PdoFactory
{
    private $pdo;
    private $user = "student";
    private $password = "root";
    private $host = "192.168.33.22";
    private $dbName = "wp1DB";

    public function __construct()
    {
        $this->pdo = new \PDO("mysql:host=$this->host;dbname=$this->dbName", $this->user, $this->password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    /**
     * @return PDO
     */
    public function getPdo(): PDO
    {
        return $this->pdo;
    }

}