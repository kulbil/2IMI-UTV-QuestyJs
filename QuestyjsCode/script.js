//Objects------------------------------------------------------------------------

//player(name, health, weapon, healing, zeus)
//weapon(name, damage)
//monster(name, strength, health)
//room(number, monster, weapon)

var playerData = JSON.parse(document.getElementById('php2jsData').value);
var playerName = document.getElementById('php2jsUid').value;
console.log(playerName);
console.log(playerData);
//PlayerData[room, health, weapon, healing, zeus]

var weaponList = [];
weaponList.push(new weapon("Stick", 5));
weaponList.push(new weapon("Axe", 10));
weaponList.push(new weapon("Spear", 15));

var monsterList = [];
monsterList.push(new monster("Garmadon", 1, 5));
monsterList.push(new monster("SanchayDenSure", 1, 4));
monsterList.push(new monster("Jwoodh", 1, 8));
monsterList.push(new monster("AdrianGrenseHopper", 1, 30));
monsterList.push(new monster("ArvidExcel", 1, 2));
monsterList.push(new monster("JegVetDaFaen", 1, 100));

var currentRoom;
var currentPlayer;

//Functions------------------------------------------------------------------------

function createPlayer() {
    currentPlayer = new player(playerName, playerData[1], playerData[2], playerData[3], playerData[4])
}

function saveData() {
    playerData[0] = currentRoom.number;
    playerData[1] = currentPlayer.health;
    playerData[2] = currentPlayer.weapon;
    playerData[3] = currentPlayer.healing;
    playerData[4] = currentPlayer.zeus;
    document.getElementById("js2phpData").value = JSON.stringify(playerData);
    document.forms["playerDataTransfer"].submit();
}

function createRoom() {
    var roomMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
    var roomWeapon =  weaponList[Math.floor(Math.random() * weaponList.length)];
    currentRoom = new room(playerData[0], roomMonster, roomWeapon);
}

function createNewRoom() {
    var roomMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
    var roomWeapon =  weaponList[Math.floor(Math.random() * weaponList.length)];
    currentRoom = new room(currentRoom.number + 1, roomMonster, roomWeapon);
}

function updPIIW() {
    $("#roomPIIW").text("Room: " + currentRoom.number);
    $("#hpPIIW").text("HP: " + currentPlayer.health);
    $("#weaponPIIW").text("Weapon: " + weaponList[playerData[2]].name + "(" + weaponList[playerData[2]].damage + ")");
    $("#healingPIIW").text("Healing: " + currentPlayer.healing);
    $("#zeusPIIW").text("Zeus: " + currentPlayer.zeus);
}

function updGameData(object, value) {
    switch(object) {
        case "room":
            currentRoom.number += value;
            $("#roomPIIW").text("Room: " + currentRoom.number);
            break;
        case "hp":
            currentPlayer.health += value;
            if(currentPlayer.health > 100) {
                currentPlayer.health = 100;
            }
            $("#hpPIIW").text("HP: " + currentPlayer.health);
            if(currentPlayer.health <= 0) {
                gameOver();
            }
            break;
        case "weapon":
            playerData[2] = value;
            $("#weaponPIIW").text("Weapon: " + weaponList[playerData[2]].name + "(" + weaponList[playerData[2]].damage + ")");
            break;
        case "healing":
            if(currentPlayer.health != 100) {
                currentPlayer.healing += value;
            } else {
                alert("you're already at max health!");
            }
            $("#healingPIIW").text("Healing: " + currentPlayer.healing);
            break;
        case "zeus":
            currentPlayer.zeus += value;
            $("#zeusPIIW").text("Zeus: " + currentPlayer.zeus);
            break;
        case "monsterHp":
            currentRoom.monster.health += value;
            if(currentRoom.monster.health <= 0) {
                updGameIW("You defeated " + currentRoom.monster.name + " and moved on to the next challenge!");
            }
            break;
    }   
    updPIIW(); 
    updMonSts();
}


function updMonSts() {
    $("#monsterName").text(currentRoom.monster.name);
    $("#healthMonSts").text("Health " + currentRoom.monster.health);
    $("#strengthMonSts").text("Strength " + currentRoom.monster.strength);
}

function gameOver() {
    highScore = currentRoom.number;
    document.getElementById('js2phpHs').value = highScore;

    currentRoom.number = 0;
    currentRoom.monster = monsterList[Math.floor(Math.random() * monsterList.length)];
    currentRoom.weapon = weaponList[Math.floor(Math.random() * weaponList.length)];
    
    currentPlayer.health = 100;
    currentPlayer.weapon = 0;
    currentPlayer.healing = 5;
    currentPlayer.zeus = 1;

    saveData();
}

function playerFight() {
    updGameIW("You attacked " + currentRoom.monster.name + " and did " + weaponList[currentPlayer.weapon].damage + " damage!");
    updGameData("monsterHp", -weaponList[currentPlayer.weapon].damage);
    if(currentRoom.monster.health > 0) {
        monsterTurn();
    } else {
        createNewRoom();
    }
}

function monsterTurn() {
    updGameIW(currentRoom.monster.name + " attacked and did " + currentRoom.monster.strength + " damage!");
    updGameData("hp", -currentRoom.monster.strength);
}

function updGameIW(text) {
    var addedInfo = $('<p></p>').text(text);
    addedInfo.attr("class", "addedInfo");
    $('#gameInfoWindow').append(addedInfo);
    var objDiv = document.getElementById("gameInfoWindow");
    objDiv.scrollTop = objDiv.scrollHeight;
}

createPlayer();
createRoom();
updMonSts();
updPIIW();


//Button-Events------------------------------------------------------------------------

$("#selectWindow").on('click', '#fightBut', function() {
    console.log("fight")
    playerFight();

})

$("#selectWindow").on('click', '#itemsBut', function() {
    console.log("items")
    $('.menuButton').remove();
    $('#buttonForm').remove();

    var button1 = $('<button></button>').text("Healing Potion");
    button1.attr("class", "menuButton");
    button1.attr("id", "healingBut");

    var button2 = $('<button></button>').text("Strength Potion");
    button2.attr("class", "menuButton");
    button2.attr("id", "strengthBut");

    var button3 = $('<button></button>').text("Zeus Smite");
    button3.attr("class", "menuButton");
    button3.attr("id", "zeusBut");

    var button4 = $('<button></button>').text("Back");
    button4.attr("class", "menuButton");
    button4.attr("id", "backBut");
    $('#selectWindow').append(button1, button2, button3, button4);
})

$("#selectWindow").on('click', '#runBut', function() {
    console.log("run");
    console.log(playerData);
    console.log(currentRoom);
    monsterTurn();
    updGameData("room", 1);
})

$("#selectWindow").on('click', '#quitBut', function() {
    console.log("quit");
    saveData();
    document.getElementById("quitInput").value = JSON.stringify(playerData);
    document.forms["quitForm"].submit();
})

$("#selectWindow").on('click', '#healingBut', function() {
    if (currentPlayer.healing > 0) {
        updGameData("healing", -1);
        updGameData("hp", 50);
    } else {
        alert("out of healing!");
    }
    console.log("healing")
})

$("#selectWindow").on('click', '#strengthBut', function() {
    console.log("strength")
    saveData();
})

$("#selectWindow").on('click', '#zeusBut', function() {
    if (currentPlayer.zeus > 0) {
        updGameData("zeus", -1);
    } else {
        alert("out of zeus!");
    }
    console.log("zeus")
})

$("#selectWindow").on('click', '#backBut', function() {
    console.log("back")
    $('.menuButton').remove();

    var button1 = $('<button></button>');
    button1.attr("class", "menuButton");
    button1.attr("id", "fightBut");

    var button2 = $('<button></button>');
    button2.attr("class", "menuButton");
    button2.attr("id", "itemsBut");

    var button3 = $('<button></button>');
    button3.attr("class", "menuButton");
    button3.attr("id", "runBut");

    var button4 = $('<button></button>');
    button4.attr("class", "menuButton");
    button4.attr("id", "quitBut");

    $('#selectWindow').append(button1, button2, button3, button4);
})

//------------------------------------------------------------------------
