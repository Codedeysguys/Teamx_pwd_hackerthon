"use client";

import "./globals.css";
import Footer from "./widgets/Footer";
import Navbar from "./widgets/Navbar";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "../components/ui/sheet";

export default function RootLayout({ children }) {
  
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  
  const sendMessage = async () => {
    if (!userInput.trim()) return; 


    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);


    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    console.log(data)


    setMessages((prev) => [...prev, { sender: "gpt", text: data.response }]);
    setUserInput(""); 
  };

  return (
    <html lang="en">
      <body>
        <div className="fixed bottom-10 right-10">
          <Sheet >
            <SheetTrigger>
              <img className="h-14" src="/chat.png" alt="chat" />
            </SheetTrigger>
            <SheetContent className="max-w-md h-[80vh] rounded-lg mt-10">


              <SheetHeader>
                <SheetTitle className=" relative bg-gradient-to-r from-blue-500  to-teal-500 p-6 rounded-lg shadow-lg text-center animate-fadeIn">
                  {/* Introducing Maish with an animated gradient background */}
                  <h2 className="text-2xl font-bold text-white mb-2 animate-bounce">
                    Meet Maish, Your Friendly Assistant
                  </h2>

       
                  <p className="text-white text-opacity-90 text-lg">
                    I'm here to answer any of your questions
                  </p>
                </SheetTitle>

                <SheetDescription className="">
                 
                  <div className="flex flex-col h-96  overflow-y-auto bg-gray-100 p-4 rounded-lg space-y-4">
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
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
