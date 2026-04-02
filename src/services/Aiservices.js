const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

const getDiagnosis = async (symptoms) => {
  const prompt = `You are a medical diagnosis assistant. Given the following symptoms, return exactly 2-3 possible conditions in this exact JSON format with no extra text or markdown:
[
  {
    "condition": "condition name",
    "probability": "XX%",
    "nextSteps": ["step1", "step2", "step3"]
  }
]

Symptoms: ${symptoms}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const raw = response.text().trim();
  
  // Extract JSON if model returns markdown block
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  const cleanedJson = jsonMatch ? jsonMatch[0] : raw;

  const parsed = JSON.parse(cleanedJson);
  return parsed;
};

module.exports = { getDiagnosis };