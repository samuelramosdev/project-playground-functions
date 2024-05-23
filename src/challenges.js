const compareTrue = (bool1, bool2) => bool1 && bool2 ? true : false;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = sentence => sentence.split(' ');

// Desafio 4
const concatName = names => names[names.length - 1].concat(' ', names[0]);

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 6
const highestCount = (numbers) => {
  const highest = Math.max(...numbers);
  const counter = numbers.filter(number => number === highest).length;
  return counter;
}

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  return Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse) ? 'os gatos trombam e o rato foge' :
    Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ? 'cat2' : 'cat1';
}

// Desafio 8
const fizzBuzz = (numbers) => {
  return numbers.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "fizzBuzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else {
      return "bug!";
    }
  });
}

// Desafio 9
const encode = (word) => {
  const vowelMap = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return word.split('').map(char => vowelMap[char] || char).join('');
}
const decode = (encodedWord) => {
  const numberMap = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return encodedWord.split('').map(char => numberMap[char] || char).join('');
}

// Desafio 10
const techList = (techsToLearn, name) => {
  const orderedTechs = techsToLearn.sort();
  const techsObj = orderedTechs.map(tech => ({ tech, name }));
  return techsObj;
}

// Desafio 11
const generatePhoneNumber = (arrayOfNumbers) => {
  if (arrayOfNumbers !== 11) 'Array com tamanho incorreto.'

  let counter = {};

  for (num in arrayOfNumbers) {
    if (num < 0 || num > 9 || (counter[num] = (counter[num] || 0) + 1) > 2) {
      return `(${arrayOfNumbers.slice(0, 2).join('')}) ${arrayOfNumbers.slice(2, 7).join('')}-${arrayOfNumbers.slice(7).join('')}`;
    }
  }
};

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
