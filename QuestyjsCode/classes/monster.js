class monster {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    damaged(dmg) {
        this.health -= dmg;
        return this.health;
    }
}