const str = "Hello world!";
const myStr = str.toLowerCase();
const charMap = {};
for (let char of myStr) {
  charMap[char] ? charMap[char]++ : (charMap[char] = 1);
}
console.log('Char Map is:', charMap)
/* returns 
Char Map is:
 {
 h:1,
 e:1,
 l:3,
 o:2,
 :1,
 w:1,
 r:1,
 d:1,
 !:1
 } */
let max = 0; // set to zero
let maxChar = ''; // set to an empty string
for (let char in charMap) {
  if (charMap[char] > max) {
    max = charMap[char];
    maxChar = char;
  }
}
console.log('Max char is', maxChar) // returns 'l'
