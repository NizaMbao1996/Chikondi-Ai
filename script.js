// Greeting message
const greetingMessage = "Hi, my name is Chikondi Ai. I am an AI Chatbot built for empowering women and girls in Africa.";

// Function to add message to chat
function addMessage(message, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value;

    if (userMessage.trim() !== "") {
        addMessage(userMessage, "You");
        userInput.value = ""; // Clear input field

        // Respond based on user input
        respondToUser(userMessage);
    }
}

// Function to respond to user questions
function respondToUser(message) {
    if (message.toLowerCase().includes("education")) {
        respondWithEducation(message);
    } else if (message.toLowerCase().includes("economy") || message.toLowerCase().includes("economic") || message.toLowerCase().includes("opportunities")) {
        respondWithEconomicOpportunities(message);
    } else {
        const response = "Hi, my name is Chikondi Ai. I'm here to provide information about empowering women and girls in Africa, including education and economic opportunities. How can I assist you further?";
        addMessage(response, "Chikondi Ai");
        speak(response); // Call the speak function
    }
}

// Function to speak the message
function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

// Event listener for send button
document.getElementById('send-button').addEventListener('click', handleUserInput);

// Event listener for Enter key
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting
addMessage(greetingMessage, "Chikondi Ai");
speak(greetingMessage); // Speak the initial greeting