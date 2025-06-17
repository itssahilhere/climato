import React from "react";
import Chatbot from "../component/Chatbot.js";

const temp = () => {
  return (
    <div className="h-[200vh] relative">
      <div className="fixed bottom-10 right-10 z-10">
        <Chatbot />
      </div>
    </div>
  );
};

export default temp;
