<?php
namespace services;
class Database {
    private function __construct()
    {
        error_log(__METHOD__);
    }
    public static function query($sql, $data = array(), $mode = \PDO::FETCH_ASSOC) {
        error_log(__METHOD__);
        $stm = static::open()->prepare($sql);
        $stm->execute($data);
        return $stm->fetchAll($mode);
    }
    public static function open() : \PDO {
        error_log(__METHOD__);
        static $pdo;
        $pdo = $pdo ?? new \PDO($_SERVER["DOCUMENT_ROOT"] . "/data/game.sqlite");
        return $pdo;
    }
}