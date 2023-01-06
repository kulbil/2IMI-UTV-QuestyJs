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
            <p>Room: 1</p>
            <p>HP: 100</p>
            <p>Weapon: Stick(5)</p>
        </div>
    </div>
    <div id="gameSCRight">
        <div id="monsterWindow">
            <div id="monsterWindowTop">
                <div id="monsterName">
                    Garmadon
                </div>
                <div id="monsterStats">
                    <p>50</p>
                </br>
                    <p>9</p>
                </div>
            </div>
            <div id="monsterWindowBottom">
                
            </div>
        </div>
        <div id="selectWindow">
            <button class="menuButton" id="fightBut">Fight</button>
            <button class="menuButton" id="itemsBut">Items</button>
            <button class="menuButton" id="runBut">Run</button>
            <button class="menuButton" id="quitBut">Save & Quit</button>
        </div>
    </div>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="classes/weapon.js"></script>
    <script src="classes/monster.js"></script>
    <script src="classes/player.js"></script>
    <script src="classes/room.js"></script>
    <script src="script.js"></script>

<?php
    include_once 'footer.php';
?>