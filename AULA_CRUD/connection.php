<?php

$host = "localhost";
$user = "root";
$password = "root";
$database = "aula_sesi";
$port = 3307;

try{
    $conn = mysqli_connect($host, $user, $password, $database, $port);
    echo "Conectando com o banco de dados do MySQL";
}
catch(Exception $e){
    echo $e;
}