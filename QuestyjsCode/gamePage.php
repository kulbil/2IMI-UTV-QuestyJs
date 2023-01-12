<?php
    include "includes/functions.inc.php";
    include "header.php";
?>

<div id=gameWrapper>
    <div id="gameSCLeft">
        <div id="gameInfoWindow">
            <p>INFO WINDOW</p>
        </div>
        <div id="playerItemInfoWindow">
            <p id="roomPIIW">Room: </p>
            <p id="hpPIIW">HP: </p>
            <p id="weaponPIIW">Weapon: </p>
        </div>
    </div>
    <div id="gameSCRight">
        <div id="monsterWindow">
            <div id="monsterWindowTop">
                <div id="monsterName">
                    Garmadon
                </div>
                <div id="monsterStats">
                    <p id="healthMonSts">Health: </p>
                    <p id="strengthMonSts">Strength: </p>
                </div>
            </div>
            <div id="monsterWindowBottom">
                
            </div>
        </div>
        <div id="selectWindow">
            <button class="menuButton" id="fightBut"></button>
            <button class="menuButton" id="itemsBut"></button>
            <button class="menuButton" id="runBut"></button>
            <button class="menuButton" id="quitBut">Save & Quit</button>
        </div>
    </div>
</div>

<?php
    echo '<form id="playerDataTransfer" action="includes/dataTransfer.inc.php" method="GET">';
    echo '<input id="php2jsData" type="hidden" name="php2js" value="'.$_SESSION['userplayerdata'].'"></input>';
    echo '<input id="php2jsUid" type="hidden" name="php2js" value="'.$_SESSION['useruid'].'"></input>';
    echo '<input id="js2phpData" type="hidden" name="js2phpData" value=""></input>';
    echo '</form>';
    
    echo '<form method="get" id="highScoreTransfer" action="includes/highScoreTransfer.inc.php">';
    echo '<input id="php2jsHs" type="hidden" name="php2js" value="'.$_SESSION['userhighscore'].'"></input>';
    echo '<input id="js2phpHs" type="hidden" name="js2phpHs" value=""></input>';
    echo '</form>';
    
    echo '<form method="get" id="quitForm" action="includes/logout.inc.php">';
    echo '<input id="quitInput" type="hidden" name="quitInput" value=""></input>';
    echo '</form>';
?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="classes/weapon.js"></script>
<script src="classes/monster.js"></script>
<script src="classes/player.js"></script>
<script src="classes/room.js"></script>
<script src="script.js"></script>

<?php
    include_once 'footer.php';
?> 