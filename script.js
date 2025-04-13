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

// Enhanced function to respond to user questions
function respondToUser(message) {
    if (message.toLowerCase().includes("education")) {
        respondWithEducation(message);
    } else if (message.toLowerCase().includes("economic") || message.toLowerCase().includes("opportunities")) {
        respondWithEconomicOpportunities(message);
    } else if (message.toLowerCase().includes("mentorship") || message.toLowerCase().includes("jobs")) {
        respondWithJobMentorship(message);
    } else {
        const response = "Hi, my name is Chikondi Ai. I'm here to assist you with information about empowering women and girls in Africa, including education, job opportunities, and mentorships. How can I help you further?";
        addMessage(response, "Chikondi Ai");
        speak(response);
    }
}

// Function to speak the message
function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    // Set options for a suitable African woman's voice (if available)
    const voices = window.speechSynthesis.getVoices();
    const africanVoice = voices.find(voice => voice.name.includes('African') || voice.lang === 'en-ZA' || voice.lang === 'en-NG');
    utterance.voice = africanVoice || voices[0]; // Fallback to the first available voice
    window.speechSynthesis.speak(utterance);
}

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', handleUserInput);

// Event listener for the Enter key
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting
addMessage(greetingMessage, "Chikondi Ai");
speak(greetingMessage); // Speak the initial greeting.