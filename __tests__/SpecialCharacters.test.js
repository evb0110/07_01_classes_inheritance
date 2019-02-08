import {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/SpecialCharacters';


test('testing Bowman', () => {
  const bowman = new Bowman('John', 20);
  const expected = {
    name: 'John',
    level: 20,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});

test('testing Swordsman', () => {
  const swordsman = new Swordsman('Merlin', 20);
  const expected = {
    name: 'Merlin',
    level: 20,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

test('testing Magician', () => {
  const magician = new Magician('Peter', 20);
  const expected = {
    name: 'Peter',
    level: 20,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

test('testing Undead', () => {
  const undead = new Undead('Vampi', 50);
  const expected = {
    name: 'Vampi',
    level: 50,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

test('testing Zombie', () => {
  const zombie = new Zombie('Zommi', 73);
  const expected = {
    name: 'Zommi',
    level: 73,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('testing Daemon', () => {
  const daemon = new Daemon('Devil', 111);
  const expected = {
    name: 'Devil',
    level: 111,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});
