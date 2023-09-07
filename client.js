const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
// Function to add a message to the chat window
function appendMessage(message, sender) {
    // Create a new message element
    const messageElement = document.createElement("div");
    // Set its CSS class for styling (either 'user' or 'bot')
    messageElement.className = `message ${sender}`;
    // Set the text content of the message element
    messageElement.innerText = message;
    // Add the message element to the chat window
    chatBody.appendChild(messageElement);
    // Scroll to the bottom of the chat window to show the latest message
    chatBody.scrollTop = chatBody.scrollHeight;


}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        return;
    }

    // Add the user's message to the chat window with 'user' label
    appendMessage(userMessage, "user");

    // Save the user's message to a text file (not shown in this simplified example)
    // This is where you would typically store user interactions for later analysis.

    // For now, let's provide a basic response
    const botResponse = "I'm just a basic chatbot. You said: " + userMessage;
    appendMessage(botResponse, "bot");

    // Clear the input field after handling the user's message
    userInput.value = "";
    
}

sendButton.addEventListener("click", handleUserInput);

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

appendMessage("Hello! How can I assist you today?", "bot");
