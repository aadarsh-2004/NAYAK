const fs = require('fs');

const filePath = './NAYAK/request.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }
  console.log('File content:');
  console.log(data);
});
