import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ChatPage = ({ language, handleLanguageChange }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Here you can implement the logic to process the user message and get a response from the chatbot
      // For demonstration purposes, let's just simulate a response after 1 second
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: 'This is a sample response from the chatbot', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-200">

      {/* Chatbot interface */}
      <div className="container mx-auto py-8 mt-16">
        <div className="max-w-md mx-auto w-full h-96">
          <div className="bg-white p-4 rounded-lg shadow w-full h-full overflow-y-auto">
            {/* Messages */}
            <div className="mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block px-4 py-2 rounded ${
                      message.sender === 'user'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-300'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Input field */}
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="border rounded-l-lg px-4 py-2 w-3/4"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="btn rounded-r-lg bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Send
        </button>
      </div>

    </div>
  );
};

export default ChatPage;
