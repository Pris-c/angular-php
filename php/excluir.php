<?php

//Incluir conexao
include("conexao.php");

//OBTENDO DADOS VIA URL
$idCurso = $_GET["idCurso"];

//SQL
$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";
mysqli_query($conexao, $sql);


?>