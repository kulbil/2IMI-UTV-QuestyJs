//player(name, health, weapon, healing, zeus)
//weapon(name, damage)
//monster(name, strength, health)
//room()

var weaponList = [];
weaponList.push(new weapon("Stick", 5));
weaponList.push(new weapon("Axe", 10));
weaponList.push(new weapon("Spear", 15));

var monsterList = [];
monsterList.push(new monster("Garmadon", 24, 5));
monsterList.push(new monster("SanchayDenSure", 10, 4));
monsterList.push(new monster("Jwoodh", 13, 8)); 

const monster1 = new monster("Garmadon", 24, 5)

console.log(monster1.damaged(2));
console.log(monster1.damaged(2));
console.log(monster1.damaged(2));


$("#selectWindow").on('click', '#fightBut', function() {
    console.log("fight")
})

$("#selectWindow").on('click', '#itemsBut', function() {
    console.log("items")
    $('.menuButton').remove();

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
    console.log("run")
})

$("#selectWindow").on('click', '#quitBut', function() {
    console.log("quit")
})

$("#selectWindow").on('click', '#healingBut', function() {
    console.log("healing")
})

$("#selectWindow").on('click', '#strengthBut', function() {
    console.log("strength")
})

$("#selectWindow").on('click', '#zeusBut', function() {
    console.log("zeus")
})

$("#selectWindow").on('click', '#backBut', function() {
    console.log("back")
    $('.menuButton').remove();

    var button1 = $('<button></button>').text("Fight");
    button1.attr("class", "menuButton");
    button1.attr("id", "fightBut");

    var button2 = $('<button></button>').text("Items");
    button2.attr("class", "menuButton");
    button2.attr("id", "itemsBut");

    var button3 = $('<button></button>').text("Run");
    button3.attr("class", "menuButton");
    button3.attr("id", "runBut");

    var button4 = $('<button></button>').text("Save & Quit");
    button4.attr("class", "menuButton");
    button4.attr("id", "quitBut");
    button4.attr("value", "logoutBut");
    $('#selectWindow').append(button1, button2, button3, button4);
})