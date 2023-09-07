const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/save-message') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {


            // Write the received message to a text file
            const filePath = 'request.txt'; 
            fs.appendFile(filePath, body + '\n', 'utf8', (err) => {
                if (err) {
                    console.error(`Error saving message to file: ${err}`);
                }
            });

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Message saved to file.');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
