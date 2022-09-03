import { animalNames as defaultAnimalNames } from './data/animal-names';
import { adjectives as defaultAdjectives } from './data/adjectives';

const convertStringToInteger = (str: string) => {
  return str
    .split('')
    .reduce((acc, char, i) => acc + char.charCodeAt(0) * i, 0);
};

export interface FunAnimalNameConfig {
  animalNames?: string[];
  adjectives?: string[];
}

export const funAnimalName = (
  stringToHash: string,
  {
    adjectives = defaultAdjectives,
    animalNames = defaultAnimalNames,
  }: FunAnimalNameConfig = {}
): `${string} ${string}` => {
  const hashNumber = convertStringToInteger(stringToHash);
  const adjective = adjectives[hashNumber % adjectives.length];
  const adjectiveNumberValue = convertStringToInteger(adjective);

  const animal =
    animalNames[(hashNumber + adjectiveNumberValue) % animalNames.length];

  return `${adjective} ${animal}`;
};
