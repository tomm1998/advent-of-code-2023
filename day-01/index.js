const fs = require('fs');
const readline = require('readline');

const filePath = 'input.txt';
const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let result = 0;
rl.on('line', (line) => {
    let num = extractDigits(line);
    result += Number(num);
});


function extractDigits(line) {
    const first = line.match(/\d/);
    const last = line.match(/\d(?=\D*$)/);
  
    if (first && last) {
      return `${firstDigit[0]}${lastDigit[0]}`;
    }
    return '';
  }


rl.on('close', () => {
    console.log("Result of the sum", result);
});
