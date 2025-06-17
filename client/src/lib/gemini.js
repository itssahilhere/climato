import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_CHATBOT_GEMINI_API_KEY,
});

export default ai;
