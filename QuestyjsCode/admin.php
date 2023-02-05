<?php
    include_once 'header.php';
    if(!isset($_SESSION)) { 
        session_start(); 
    }
    if($_SESSION["userstatus"] != "admin") {
        header("location: index.php");
        exit();
    }
    
?>

    eyo admin

<?php
    include_once 'footer.php';
?>