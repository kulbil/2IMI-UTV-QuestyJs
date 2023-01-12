<?php
include "functions.inc.php";
session_start();

$_SESSION["userhighscore"] = $_GET['js2phpHs'];
updHs();
echo $_SESSION["userhighscore"];

//header("location: ../index.php");

