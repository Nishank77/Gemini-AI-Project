import { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponse";
import { fetchChatResponse } from "./services/api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get a Response");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app relative">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/1 flex items-center justify-center z-50">
          <div className="loader animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}

      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white text-center py-6 shadow-md">
        <h1 className="text-4xl font-extrabold tracking-wide">ChatBot</h1>
      </header>

      <main className="mt-8 px-4">
        <div className="grid grid-cols-1 gap-6">
          {/* Chat Input */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <ChatInput onSubmit={handleQuestionSubmit} />
          </div>

          {/* Chat Response */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <ChatResponse response={response} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
