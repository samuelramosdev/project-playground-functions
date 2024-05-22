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
function highestCount() {
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
}
function decode() {
}

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
