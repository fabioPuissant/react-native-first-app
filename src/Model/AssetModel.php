<?php


namespace App\Model;


use App\Entity\Asset;
use App\IllegalStateException;
use PDO;

class AssetModel
{
    private $pdo;
    private $user = "student";
    private $password = "root";

    /**
     * AssetModel constructor.
     */
    public function __construct()
    {
        $this->pdo = new \PDO("mysql:host=192.168.33.22;dbname=wp1DB", $this->user, $this->password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function getAll() {
        $statement = $this->pdo->query("SELECT * FROM asset");
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $assets = array();
        while($row = $statement->fetch()){
            $assets[] = $this->mapDataToAsset($row);
        }

        return $assets;
    }

    public function getByName(string $name){
        if($name) {
            $statement = $this->pdo->query("SELECT * FROM asset WHERE Name=:name");
            $statement->bindParam(":name", $name, PDO::PARAM_STR);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();
            if($row = $statement->fetch()){
                return $this->mapDataToAsset($row);
            }

            throw new IllegalStateException(`No asset found with name: ${name}!`);
        }

        throw new IllegalStateException("Name of asset not correctly set!");
    }

    private function mapDataToAsset($data): Asset{
        $asset = new Asset();
        $asset->id = $data["id"];
        $asset->name = $data["Name"];
        $asset->roomId = $data["RoomId"];
    }
}