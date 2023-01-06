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

console.log(monster1.health -= 1)
console.log(monster1.health -= 1)
console.log(monster1.health)

console.log(monster1.test(2));
console.log(monster1.test(2));
console.log(monster1.test(2));


