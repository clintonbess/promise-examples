const fs = require('fs');

const file_1 = './test-files/first.txt';
const file_2 = './test-files/second.txt';
const file_3 = './test-files/third.txt';
const file_4 = './test-files/fourth.txt';
const file_5 = './test-files/fifth.txt';

fs.readFile(file_1, 'utf8', (err, data) => {
  console.log(data);
  fs.readFile(file_2, 'utf8', (err, data) => {
    console.log(data);
    fs.readFile(file_3, 'utf8', (err, data) => {
      console.log(data);
      fs.readFile(file_4, 'utf8', (err, data) => {
        console.log(data);
        fs.readFile(file_5, 'utf8', (err, data) => {
          console.log(data);
        });
      });
    });
  });
});