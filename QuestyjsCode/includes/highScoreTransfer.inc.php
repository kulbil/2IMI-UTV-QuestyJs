<?php
include "functions.inc.php";
session_start();

$_SESSION["userhighscore"] = $_GET['js2phpHs'];

echo $_SESSION["userhighscore"] . " ";
echo $_SESSION["userid"];
updHs();

header("location: ../gameoverPage.php");

