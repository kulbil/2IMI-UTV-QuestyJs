//Objects------------------------------------------------------------------------

//player(name, health, weapon, healing, zeus)
//weapon(name, damage)
//monster(name, strength, health)
//room(number, monster, weapon)

var playerData = JSON.parse(document.getElementById('php2jsData').value);
var playerName = document.getElementById('php2jsUid').value;
var highScore = document.getElementById('php2jsHs').value;
console.log(playerName);
console.log(playerData);
console.log(highScore);
//PlayerData[room, health, weapon, healing, zeus]

var weaponList = [];
weaponList.push(new weapon("Stick", 5));
weaponList.push(new weapon("Axe", 10));
weaponList.push(new weapon("Spear", 15));

var monsterList = [];
monsterList.push(new monster("Garmadon", 24, 5));
monsterList.push(new monster("SanchayDenSure", 10, 4));
monsterList.push(new monster("Jwoodh", 13, 8)); 

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

function updPIIW() {
    $("#roomPIIW").text("Room: " + currentRoom.number);
    $("#hpPIIW").text("HP: " + currentPlayer.health);
    $("#weaponPIIW").text("Weapon " + weaponList[playerData[2]].name + "(" + weaponList[playerData[2]].damage + ")")
}

function updMonSts() {
    $("#monsterName").text(currentRoom.monster.name);
    $("#healthMonSts").text("Health " + currentRoom.monster.health);
    $("#strengthMonSts").text("Strength " + currentRoom.monster.strength);
}

function gameOver() {
    //if(highScore < currentRoom.number) {
        highScore = currentRoom;
        document.getElementById('js2phpHs').value = highScore;
        document.forms["highScoreTransfer"].submit();
    //}

    currentRoom.number = 0;
    currentRoom.monster = monsterList[Math.floor(Math.random() * monsterList.length)];
    currentRoom.weapon = weaponList[Math.floor(Math.random() * weaponList.length)];
    
    currentPlayer.health = 100;
    currentPlayer.weapon = 0;
    currentPlayer.healing = 5;
    currentPlayer.zeus = 1;
    alert("du døde");
    //saveData();
    
}

function monsterTurn() {
    updGameIW("Monster attacked!")
    currentPlayer.damaged(currentRoom.monster.strength);
    if(currentPlayer.health <= 0) {
        gameOver();
    }
    
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

})

$("#selectWindow").on('click', '#itemsBut', function() {
    console.log("items")
    $('.menuButton').remove();
    $('#buttonForm').remove();

    var button1 = $('<button></button>').text("Healing Potion X5");
    button1.attr("class", "menuButton");
    button1.attr("id", "healingBut");

    var button2 = $('<button></button>').text("Strength Potion");
    button2.attr("class", "menuButton");
    button2.attr("id", "strengthBut");

    var button3 = $('<button></button>').text("Zeus Smite X1");
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
    currentRoom.number += 1;
    monsterTurn();
    updPIIW();
})

$("#selectWindow").on('click', '#quitBut', function() {
    console.log("quit");
    saveData();
    document.getElementById("quitInput").value = JSON.stringify(playerData);
    document.forms["quitForm"].submit();
})

$("#selectWindow").on('click', '#healingBut', function() {
    console.log("healing")
})

$("#selectWindow").on('click', '#strengthBut', function() {
    console.log("strength")
    saveData();
})

$("#selectWindow").on('click', '#zeusBut', function() {
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
