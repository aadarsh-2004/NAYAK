const fs = require('fs'); // Import the fs module

const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function appendMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.innerText = message;
    chatBody.appendChild(messageElement);

    // Scroll to the bottom of the chat window to show the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return; // Don't send empty messages

    appendMessage(userMessage, "user");
    // Save the user's message to a text file
    saveMessageToFile(userMessage);

    // You can add code here to process the user's message and generate a chatbot response
    // For simplicity, we'll just echo the user's message back for now
    appendMessage("I'm just a basic chatbot. You said: " + userMessage, "bot");
    userInput.value = "";
}

function saveMessageToFile(message) {
    const filePath = 'C:\\Users\\Aadarsh\\example.txt'; // Specify the file path
    fs.appendFile(filePath, message + '\n', 'utf8', (err) => {
        if (err) {
            console.error(`Error saving message to file: ${err}`);
        }
    });
}

sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

// Initial greeting from the chatbot
appendMessage("Hello! How can I assist you today?", "bot");
