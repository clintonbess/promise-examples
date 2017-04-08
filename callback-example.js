const fs = require('fs');

const file_1 = './test-files/first.txt';

const ourCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
};

fs.readFile(file_1, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});