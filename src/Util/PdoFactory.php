<?php

namespace App\Util;

use PDO;

class PdoFactory
{
    private $pdo;
    private $user = "fabiorn408_student";
    private $password = "root123";
    private $host = "vserver408.axc.eu";
    private $dbName = "fabiorn408_wp1DB";

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