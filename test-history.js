const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const URL = `http://localhost:${PORT}/history`;

async function testHistory() {
  try {
    console.log(`Fetching history from ${URL}...`);
    const response = await axios.get(URL);
    console.log("Success! History retrieved:");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error fetching history:");
    if (error.code === 'ECONNREFUSED') {
      console.error("Server is not running. Please start it with 'npm run dev' or 'npm start' first.");
    } else {
      console.error(error.message);
    }
  }
}

testHistory();