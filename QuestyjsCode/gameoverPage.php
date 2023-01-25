<?php
    include_once 'header.php';
        
    if(!isset($_SESSION["useruid"])) { 
        header("location: index.php");
    }
    
?>

<h1>gggg</h1>



<?php
    include_once 'footer.php';
?>

