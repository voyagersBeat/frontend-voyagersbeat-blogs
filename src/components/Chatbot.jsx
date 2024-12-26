import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai"; // Import React Icons

const App = () => {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi, how can I help you?" }, // Initial message
  ]);
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // Controls chatbot visibility
  const chatWindowRef = useRef(null);

  const BACKEND_URL = "https://backend-voyagersbeat-blogs.onrender.com/api/chatbot";

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    try {
      const res = await axios.post(`${BACKEND_URL}/options`, {
        message: input,
      });
      const { message, options: newOptions } = res.data;
      setMessages((prev) => [...prev, { role: "bot", content: message }]);
      setOptions(newOptions || []);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong!" },
      ]);
    }
  };

  const selectOption = async (id) => {
    const selectedOptionText =
      options.find((opt) => opt.id === id)?.text || "Invalid option";
    setMessages((prev) => [
      ...prev,
      { role: "user", content: selectedOptionText },
    ]);
    setOptions([]);

    try {
      const res = await axios.post(`${BACKEND_URL}/answer`, { choice: id });
      const { messages: botMessages, options: newOptions } = res.data;

      if (botMessages && botMessages.length > 0) {
        botMessages.forEach((msg) =>
          setMessages((prev) => [
            ...prev,
            { role: "bot", content: msg.content },
          ])
        );
      }

      if (newOptions && newOptions.length > 0) {
        setOptions(newOptions);
      } else {
        setOptions([]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong! Please try again." },
      ]);
    }
  };

  // Auto-scroll to the bottom of the chat window when messages update
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      {/* Chatbot Icon */}
      {!isChatOpen && (
        <button
          className="fixed bottom-4 right-4 bg-[#1e73be] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50 animate-bounce"
          onClick={() => setIsChatOpen(true)}
        >
          <AiOutlineMessage className="h-6 w-6" />
        </button>
      )}

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 md:w-80 w-72 md:h-[500px] h-[400px] shadow-lg rounded-sm bg-white border border-gray-200 flex flex-col z-50">
          {/* Chatbot Header */}
          <div className="bg-[#1e73be] text-white p-4 rounded-t-sm flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>

          {/* Chatbot Messages */}
          <div
            ref={chatWindowRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`${
                    msg.role === "bot"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-blue-600 text-white"
                  } px-4 py-2 rounded-lg max-w-xs`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => selectOption(option.id)}
                className="w-full text-left px-4 py-2 mt-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                {option.text}
              </button>
            ))}
          </div>

          {/* Chatbot Input */}
          <div className="flex items-center p-2 border-t border-gray-200 bg-gray-100">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-grow px-3 py-1.5 rounded-sm border border-gray-300 focus:outline-none text-sm md:text-base"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-3 py-1.5 text-sm md:text-base bg-[#1e73be] text-white rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
