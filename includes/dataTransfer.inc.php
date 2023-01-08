<?php
include "functions.inc.php";
session_start();

$_SESSION["userplayerdata"] = $_GET['js2phpData'];
updDb();

header("location: ../index.php");

