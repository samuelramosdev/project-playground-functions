function compareTrue(bool1, bool2) {
  return bool1 && bool2 ? true : false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1].concat(' ', names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  const highest = Math.max(...numbers);
  const counter = numbers.filter(number => number === highest).length;
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse) ? 'os gatos trombam e o rato foge' :
    Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ? 'cat2' : 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
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
function encode(word) {
  const vowelMap = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return word.split('').map(char => vowelMap[char] || char).join('');
}

function decode() {
}

console.log(encode('samuel'));

// Desafio 10
function techList() {
}

// Desafio 11
function generatePhoneNumber() {
}

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
