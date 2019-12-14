<?php


namespace App\Model;


use App\Entity\Asset;
use App\IllegalStateException;
use App\Util\PdoFactory;
use PDO;

class AssetModel
{
    private $pdo;

    /**
     * AssetModel constructor.
     * @param PdoFactory $pdoFactory
     */
    public function __construct(PdoFactory $pdoFactory)
    {
        $this->pdo = $pdoFactory->getPdo();
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
            $statement = $this->pdo->prepare("SELECT * FROM asset WHERE Name = :name");
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
        $asset->name = $data["name"];
        $asset->roomId = $data["roomId"];

        return $asset;
    }
}