const fs = require('fs');

const file_1 = './test-files/first.txt';

const readFile = (file_name) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(file_name, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

const writeFile = (file_name) => (data) => {
  return new Promise( (resolve, reject) => {
    fs.writeFile(file_name, data + '\nWe did it!', 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

readFile(file_1)
.then(writeFile('./new-file.txt'))
.catch(err => console.log(err))