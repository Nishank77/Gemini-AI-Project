# AI Chatbot

An intelligent chatbot application where users can ask questions and engage in meaningful conversations. This project integrates with **Google's Gemini model** for generating AI responses, offering a seamless and interactive experience.

---

## Features
- **AI-Powered Conversations**: Powered by Google's Gemini model to deliver accurate and contextual responses.  
- **Modern User Interface**: A clean, responsive design built with React and styled using Tailwind CSS.  
- **RESTful Backend**: Spring Boot backend for robust API integrations.  

---

## Tech Stack  

### Frontend  
- **React**: For building dynamic and interactive UI components.  
- **Tailwind CSS**: For a sleek and modern look.  
- **Axios**: To handle HTTP requests to the backend.  

### Backend  
- **Spring Boot**: For backend services and API integration.  
- **Google Gemini Model**: Leveraged for generating AI responses.  

---

## Getting Started  

### Prerequisites  
- **Node.js** (for running the frontend)  
- **Java** and **Maven** (for the backend)  

### Setup  

#### Backend  

1. Clone the repository and navigate to the backend folder:
   
   git clone <repository-url>  
   cd backend


2. Generate an API key for Gemini:

  Visit Google AI Studio to generate your API key.
  Copy the generated API key.


3. Configure your application.properties file:
   
  spring.application.name=gemini  
  gemini.api.url=https://generativelanguage.googleapis.com/v1beta  
  gemini.api.key=<YOUR_API_KEY>  


4. Build and run the Spring Boot application:


mvn clean install  
mvn spring-boot:run  





#### Frontend

1. Navigate to the frontend folder:

  cd frontend  


2. Install dependencies and start the development server:

  npm install  
  npm start  


## Insights & Lessons Learned
### Integration Challenges

Integrating the AI backend with Google's Gemini API posed significant challenges, particularly in constructing API requests using Spring Boot's webClient.post(). The process required careful attention to syntactical details, and debugging was a key part of resolving errors.

### Key Takeaways
The Gemini model provides highly accurate and relevant responses but demands precise API configuration.

Visiting Google AI Studio to generate and manage the API key is essential for successful integration.

Patience and iterative testing were crucial in overcoming integration hurdles.

### Future Enhancements

Add conversational memory to allow follow-up queries.

Explore additional customization options for Gemini model responses.

Improve animations and transitions in the frontend for a smoother user experience.

Feel free to explore, contribute, and share your thoughts. Happy coding! 🚀
