class player {
    constructor(name, health, weapon, healing, zeus) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.healing = healing;
        this.zeus = zeus;
    }

    damaged(dmg) {
        this.health -= dmg;
        if(this.health < 0) {
            this.health = 0;
        }
        return this.health;
    }
}