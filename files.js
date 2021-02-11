const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (err, data) => {
  console.log(data);
});

const content = 'Some data';

fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});

fs.appendFile('test.txt', 'Some more data', err => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});
