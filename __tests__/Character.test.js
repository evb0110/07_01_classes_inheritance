import Character from '../src/js/Character';

test('testing creation of a character', () => {
  const character = new Character('Вася', 1, 'Студент', 100, 200);
  const expected = {
    name: 'Вася',
    type: 'Студент',
    level: 1,
    attack: 100,
    defence: 200,
  };

  expect(character).toEqual(expected);
});
