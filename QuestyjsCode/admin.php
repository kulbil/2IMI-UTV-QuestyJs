<?php
    include 'header.php';
    include "includes/dbh.inc.php";

    if(!isset($_SESSION)) { 
        session_start(); 
    }
    if($_SESSION["userstatus"] != "admin") {
        header("location: index.php");
        exit();
    }

    if(isset($_SESSION['searchedInput'])) {
        $_SESSION['searchedInput'] = "";
    }
    
?>

    <div id="adminContainer">
        <div id="adminBackground">
            <div id="adminListContainer">
                <input type="text" id="userSearch" placeholder="Search for username">
                <div id="userList">
                    <table id="tableHeader">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Highscore</th>
                        <th>Status</th>
                        <th>Action</th>
                    </table>
                    <table id="dbTable">
                        <?php
                            $sql = "SELECT * FROM users WHERE NOT rank='admin'";
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
                        ?>
                    </table>
                </div>
            </div>
        </div>
        <a href="velgMethod.php" id="backButton"></a>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
        $("#dbTable").on("click", ".banBtn", function(){
            console.log(this.id);
            $.post("includes/admin.inc.php", {
                selectedRowId: this.id,
                selectedRowRank: this.value
            }, function(data) {
                $("#dbTable").html(data);
            });
        });

        $("#userSearch").keyup(function(){
            $.post("includes/admin.inc.php", {
                searchedInput: this.value
            }, function(data) {
                $("#dbTable").html(data);
            });
        });

</script>
</body>
</html>

