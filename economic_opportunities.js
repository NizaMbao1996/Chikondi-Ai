function respondWithJobMentorship(message) {
    let response = "Hi, my name is Chikondi Ai. Here's some detailed information on job opportunities and mentorship programs available for women and girls in Africa:\n\n";
    
    response += "1. **Job Search Malawi**: This platform curates various job listings across different sectors in Malawi, including technology, healthcare, education, and more. ";
    response += "They also provide resources on how to create effective CVs and prepare for interviews, along with a blog that discusses job market trends in Malawi.\n\n";
    
    response += "2. **Tony Elumelu Foundation**: This foundation is dedicated to empowering African entrepreneurs through mentorship, training, and funding. ";
    response += "Each year, they choose thousands of entrepreneurs to participate in its 12-week online training program, where participants learn key business skills. ";
    response += "Successful applicants can also receive seed capital to help kickstart their business ventures. Check their official site for application details and deadlines.\n\n";
    
    response += "3. **Growth Accelerators**: These programs are designed specifically to support small businesses and startups. ";
    response += "They provide mentorship from industry experts, access to networking opportunities, and workshops to develop essential business skills. ";
    response += "Many growth accelerators focus on sectors crucial for women's participation, such as renewable energy, agriculture, and technology. Be sure to research local accelerators in your country for specific programs.\n\n";
    
    response += "4. **S Vontsct**: This initiative connects young professionals with experienced mentors in their fields across various African countries. ";
    response += "The platform allows users to create profiles showcasing their skills and aspirations, which mentors can review to offer personalized guidance. ";
    response += "In addition, they host events and workshops focused on skill development and networking, creating a vibrant community for young professionals.\n\n";

    response += "5. **She Leads Africa**: This organization focuses on supporting aspiring young women entrepreneurs through a network of resources, training programs, and competitions. ";
    response += "Their initiatives help build skills in areas like finance management, marketing, and technology while providing networking opportunities that can lead to mentorship.\n\n";
    
    response += "If you're interested in a specific sector or country, let me know, and I can provide more targeted information or resources!";
    
    addMessage(response, "Chikondi Ai");
    speak(response);
}