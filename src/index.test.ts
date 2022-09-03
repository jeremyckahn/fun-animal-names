import { funAnimalName } from '.';

describe('funAnimalName', () => {
  test('creates a fun animal name', () => {
    const name = funAnimalName('123');

    expect(name).toEqual('Glamorous Starfish');
  });

  test('creates a fun animal name based on provided configuration', () => {
    const name = funAnimalName('123', {
      animalNames: ['Cow'],
      adjectives: ['Happy'],
    });

    expect(name).toEqual('Happy Cow');
  });
});
