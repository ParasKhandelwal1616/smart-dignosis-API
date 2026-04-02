require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // There is no direct listModels in the JS SDK, we might need to use fetch if we want to see it or just try common names.
    // Actually, I'll just try 'gemini-1.5-flash-latest' and 'gemini-1.5-flash'.
    // If that fails, I'll check if the key is restricted.
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result = await model.generateContent("Hello");
    console.log("Success with gemini-1.5-flash-latest");
  } catch (error) {
    console.error("Failed with gemini-1.5-flash-latest:", error.message);
  }
}

listModels();