require("dotenv").config();
const { getDiagnosis } = require("./src/services/Aiservices");

async function test() {
  try {
    console.log("Testing Gemini API with symptoms: 'headache, fever'...");
    const result = await getDiagnosis("headache, fever");
    console.log("Success! API response:");
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error testing Gemini API:");
    console.error(error.message);
  }
}

test();