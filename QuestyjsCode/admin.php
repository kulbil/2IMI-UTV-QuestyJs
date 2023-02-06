<?php
    include_once 'header.php';
    include "includes/dbh.inc.php";

    if(!isset($_SESSION)) { 
        session_start(); 
    }
    if($_SESSION["userstatus"] != "admin") {
        header("location: index.php");
        exit();
    }
    
?>

    <div id="adminContainer">
        <div id="userList">
            <table>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Highscore</th>
                <th>Status</th>
                <th>Action</th>
            <?php
                $sql = "SELECT * FROM users WHERE NOT rank like 'admin'";
                $result = $conn->query($sql);

                while ($row = $result -> fetch_assoc()) {
                    echo "<tr>
                        <td>".$row['id']."</td>
                        <td>".$row['name']."</td>
                        <td>".$row['uid']."</td>
                        <td>".$row['highscore']."</td>
                        <td>".$row['rank']."</td>
                        <td><button id='banBtn'>Wallah!</button></td>
                        </tr>";
                };
            ?>
            </table>
        </div>
    </div>

<?php
    include_once 'footer.php';
?>