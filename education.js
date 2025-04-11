function respondWithEducation(message) {
    let response = "Hi, my name is Chikondi Ai. ";

    if (message.toLowerCase().includes("importance of education")) {
        response += "Education is a powerful tool for empowerment. It provides the skills and knowledge needed for women and girls in Africa to succeed in various fields.";
    } else if (message.toLowerCase().includes("access to education")) {
        response += "Access to education is essential for women and girls in Africa. It helps reduce poverty and improves community well-being.";
    } else if (message.toLowerCase().includes("educational programs")) {
        response += "There are many educational programs aimed at empowering women and girls in Africa, focusing on STEM, literacy, and vocational training.";
    } else {
        response += "I'm here to provide information about education for women and girls in Africa. How can I assist you further?";
    }

    addMessage(response, "Chikondi Ai");
    speak(response); // Call the speak function
}