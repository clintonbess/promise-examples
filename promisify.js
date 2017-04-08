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

readFile(file_1)
.then(data => console.log(data))
.catch(err => console.log(err))

// readFile(file_1)
// .then(data => console.log(data))
// .then(() => 'this goes on to the next "then"')
// .then(data => console.log(data))
// .then(() => {
//   return 'this is an eqivalent return statement to the expression three line above'
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))