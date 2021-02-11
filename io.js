// Input output

const name = 'Eskil';
console.log('Hello ' + name);

const args = process.argv.slice(2);
const argName = args[0];
console.log('Hello ' + argName);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});
