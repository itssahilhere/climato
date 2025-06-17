import React, { useEffect, useRef, useState } from "react";
import assistant from "../lib/gemini.js";
import { PaperPlaneRight, X } from "@phosphor-icons/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import chatbotData from "./qustions/chatbotData.json";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    const stored = localStorage.getItem("chatHistory");
    return stored
      ? JSON.parse(stored)
      : [
          {
            role: "model",
            parts: [
              { text: "Hey,👋 I am Printoo! Your friendly AI assistant." },
            ],
          },
          {
            role: "model",
            parts: [{ text: "How can I help you today?" }],
          },
        ];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const location = useLocation();

  const chatBoxRef = useRef(null);
  const scrollRef = useRef(null);

  const quickQuestions = [
    "What is Printopher",
    "Service Charge",
    "Printing Options",
    "Are you available 24/7?",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target) &&
        !event.target.closest("[name='circle']")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const generate = async (query, updatedHistory) => {
    const chat = assistant.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: `You are a helpful chatbot whose name is Printoo! You help solve user queries with the knowledge you have
        about the website named Printopher. If you don't know the answer, just say that you are not sure about it respectfully. Don't try to come up with an answer.
        Here are the questions and answers for reference which you can use:

        ${JSON.stringify(chatbotData, null, 2)}
        `,
      },
      history: updatedHistory,
    });

    const stream = await chat.sendMessageStream({
      message: query,
    });

    let streamedText = "";

    for await (const chunk of stream) {
      streamedText += chunk.text;

      // Live-update the last message (partial response)
      setChatHistory((prev) => {
        const temp = [...prev];
        temp[temp.length - 1] = {
          role: "model",
          parts: [{ text: streamedText }],
        };
        return temp;
      });

      // Also update localStorage
      const latestHistory = [
        ...updatedHistory,
        {
          role: "model",
          parts: [{ text: streamedText }],
        },
      ];
      localStorage.setItem("chatHistory", JSON.stringify(latestHistory));
    }
  };

  const sendQuery = async (filteredQuery) => {
    setIsResponseLoading(true);

    const updatedHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: filteredQuery }] },
      { role: "model", parts: [{ text: "" }] }, // Placeholder
    ];

    setChatHistory(updatedHistory);
    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    setQuery("");

    try {
      await generate(filteredQuery, updatedHistory.slice(0, -1)); // Don't include placeholder yet
    } catch (error) {
      console.error("Bot error:", error);
    } finally {
      setIsResponseLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredQuery = query.trim();
    if (!filteredQuery) {
      setQuery("");
      return;
    }

    await sendQuery(filteredQuery);
  };

  return (
    <>
      <div
        className="p-4 rounded-full relative cursor-pointer bg-red-500"
        name="circle"
        onClick={() => setIsOpen((prev) => !prev)}
      ></div>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-[24rem] h-[36rem] -translate-x-[102%] -translate-y-[102%] flex flex-col rounded-[12px] overflow-hidden cursor-auto"
          name="chatbox"
          ref={chatBoxRef}
        >
          <div
            className="w-full basis-[18%] bg-[#faf3dd] flex items-center gap-3 px-4"
            name="header"
          >
            <div className="p-4 rounded-full bg-red-500" name="logo"></div>
            <div className="text-black text-3xl" name="title">
              Printopher™
            </div>
            <X
              size={24}
              color="black"
              className="ml-auto cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="w-full flex-1 bg-white overflow-hidden" name="body">
            <div
              className="flex flex-col gap-2 p-4 overflow-y-auto h-full"
              ref={scrollRef}
            >
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } my-1`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-[#22C55E] ml-12"
                        : "bg-[#1F1F1F] mr-12"
                    }`}
                  >
                    {message.parts.map((part, partIndex) => (
                      <div
                        key={partIndex}
                        className={`chat-markdown ${
                          message.role === "user" ? "text-[#1F1F1F]" : ""
                        }`}
                      >
                        <Markdown remarkPlugins={[remarkGfm]}>
                          {part.text}
                        </Markdown>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {!isResponseLoading && (
                <div className="flex flex-wrap justify-end gap-2">
                  {quickQuestions.map((question, index) => (
                    <p
                      key={index}
                      className="text-[#1F1F1F] border-2 border-[#22C55E] p-2 rounded-[8px] cursor-pointer hover:bg-[#22C55E] hover:text-[#1F1F1F] transition-all duration-300 ease-in-out"
                      onClick={() => sendQuery(question)}
                    >
                      {question}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className="w-full basis-[12%] bg-[white] shadow-[0_-2px_4px_rgba(0,0,0,0.1)]"
            name="footer"
          >
            <form
              className="flex items-center w-full h-full"
              onSubmit={handleSubmit}
            >
              <input
                name="query"
                className="w-full h-full px-4 text-black outline-none border-none focus:outline-none focus:border-none"
                placeholder="Ask query..."
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="h-fit p-2 rounded-full mr-4 hover:bg-gray-200"
              >
                <PaperPlaneRight size={24} color="#1F1F1F" weight="fill" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
