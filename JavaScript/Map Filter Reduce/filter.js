const pets = [
  {
    name: 'pingo',
    type: 'dog',
    age: 4,
  },
  {
    name: 'bilbo',
    type: 'cat',
    age: 2,
  },
  {
    name: 'beta',
    type: 'fish',
    age: 1,
  },
];

const petsthanfiveyears = pets.filter((pet) => pet.age < 3);
console.log(pets);
console.log(petsthanfiveyears);
