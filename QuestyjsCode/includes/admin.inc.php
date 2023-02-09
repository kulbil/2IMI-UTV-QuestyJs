<?php

include "dbh.inc.php";
if(!isset($_SESSION)) { 
    session_start(); 
}

if(isset($_POST['searchedInput'])) {
    $_SESSION['searchedInput'] = $_POST['searchedInput'];
}



if(isset($_POST['selectedRowId'])) {
    if(isset($_SESSION['searchedInput'])) {
        $searchedInput = $_SESSION['searchedInput'];
    } else {
        $searchedInput = "";
    }
    $selectedRowId = $_POST['selectedRowId'];
    $selectedRowRank = $_POST['selectedRowRank'];

    if ($selectedRowRank == "user") {
        $sql = "UPDATE users SET rank='banned' WHERE id='".$selectedRowId."';";
        $result = $conn->query($sql);
    } elseif ($selectedRowRank == "banned") {
        $sql = "UPDATE users SET rank='user' WHERE id='".$selectedRowId."';";
        $result = $conn->query($sql);
    }

    $sql = "SELECT * FROM users WHERE NOT rank='admin' AND uid like '%$searchedInput%' OR NOT rank='admin' AND name like '%$searchedInput%'";
    $result = $conn->query($sql);

    while ($row = $result -> fetch_assoc()) {
        echo "<tr>
            <td>".$row['id']."</td>
            <td>".$row['name']."</td>
            <td>".$row['uid']."</td>
            <td>".$row['highscore']."</td>
            <td>".$row['rank']."</td>
            <td class='buttonColumn'><button class='banBtn ".$row['rank']."' id=".$row['id']." value=".$row['rank']."></button></td>
            </tr>";
    };
}

if(isset($_POST['searchedInput'])) {
    if(isset($_SESSION['searchedInput'])) {
        $searchedInput = $_SESSION['searchedInput'];
    }

    $sql = "SELECT * FROM users WHERE NOT rank='admin' AND uid like '%$searchedInput%' OR NOT rank='admin' AND name like '%$searchedInput%'";
    $result = $conn->query($sql);

    while ($row = $result -> fetch_assoc()) {
        echo "<tr>
            <td>".$row['id']."</td>
            <td>".$row['name']."</td>
            <td>".$row['uid']."</td>
            <td>".$row['highscore']."</td>
            <td>".$row['rank']."</td>
            <td class='buttonColumn'><button class='banBtn ".$row['rank']."' id=".$row['id']." value=".$row['rank'].">Wallah!</button></td>
            </tr>";
    };
}




