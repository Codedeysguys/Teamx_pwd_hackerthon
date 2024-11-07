"use client";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setUserInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    console.log(data);

    setMessages((prev) => [...prev, { sender: "gpt", text: data.response }]);
    
  };

  return (
    <div>
      <div className="flex flex-col  h-96 overflow-y-auto bg-gray-100 p-4 rounded-lg space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${
              msg.sender === "gpt"
                ? "text-left bg-blue-300 p-2 rounded text-white"
                : "text-right bg-blue-500 p-2 rounded text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 border p-2 rounded-lg focus:outline-none"
          placeholder="Ask Maish anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat; 
