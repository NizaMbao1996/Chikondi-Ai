function respondWithEconomicOpportunities(message) {
    let response = "Hi, my name is Chikondi Ai. ";

    if (message.toLowerCase().includes("financial inclusion")) {
        response += "Financial inclusion is crucial for empowering women and girls in Africa. It allows access to banking services, loans, and financial education.";
    } else if (message.toLowerCase().includes("job opportunities")) {
        response += "Job opportunities for women in Africa are increasing, especially in sectors like technology, healthcare, and entrepreneurship.";
    } else if (message.toLowerCase().includes("entrepreneurship")) {
        response += "Supporting women entrepreneurs in Africa is vital for economic growth and empowerment. Many organizations provide resources and training.";
    } else {
        response += "I'm here to provide information about economic opportunities for women and girls in Africa. How can I assist you further?";
    }

    addMessage(response, "Chikondi Ai");
    speak(response); // Call the speak function
}