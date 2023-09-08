const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

function chatbot(message) {
  message = message.toLowerCase();
  if (message.includes('hello')) {
    return 'Hello! How can I assist you?';
  } else if (message.includes('how are you')) {
    return "I'm just a bot, but thanks for asking!";
  } else if (message.includes('goodbye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return "'I m sorry, I don't understand that question.'";
  }
}

app.post('/', (req, res) => {
  const { message } = req.body;

  if (message) {
    // Process the incoming message using the chatbot function
    const response = chatbot(message);

    // Send the response back to the client
    res.json({ message: response });
  } else {
    res.status(400).json({ error: 'Message is required.' });
  }
});

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
