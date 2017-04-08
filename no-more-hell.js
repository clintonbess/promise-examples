const fs = require('fs');

const file_1 = './test-files/first.txt';
const file_2 = './test-files/second.txt';
const file_3 = './test-files/third.txt';
const file_4 = './test-files/fourth.txt';
const file_5 = './test-files/fifth.txt';

const readFirstFile = (file_name) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(file_name, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      console.log(data);
      resolve();
    });
  });
};

const readFile = (file_name) => () => {
  return new Promise( (resolve, reject) => {
    fs.readFile(file_name, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      console.log(data);
      resolve();
    });
  });
};

readFirstFile(file_1)
.then(readFile(file_2))
.then(readFile(file_3))
.then(readFile(file_4))
.then(readFile(file_5))