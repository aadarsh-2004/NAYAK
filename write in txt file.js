const fs = require('fs');

const filePath = 'C:\\Users\\Aadarsh\\request.txt'; 
const dataToWrite = 'This is the data you want to write to the file.\n';

fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to the file: ${err}`);
    return;
  }
  console.log('Data has been written to the file.');
});