import Character from './Character';

class Bowman extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name, level) {
    super(name, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}


export {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
};
