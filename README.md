# Smart Diagnosis API

A RESTful API built with Node.js and Express that leverages Google's Gemini AI to provide preliminary medical condition suggestions based on user-provided symptoms.

## 🚀 Approach

The project follows a modular architecture designed for scalability and maintainability:

1.  **Controller-Service Pattern:** Business logic is decoupled from the routing layer. The `diagnosisController` handles HTTP requests, while `Aiservices` manages the interaction with the AI model.
2.  **Schema-First Data Modeling:** Uses Mongoose to define a structured `Diagnosis` model, ensuring symptoms and their corresponding AI-generated conditions are stored consistently in MongoDB.
3.  **Security & Stability:** Integrated `helmet` for basic security headers, `cors` for cross-origin resource sharing, and global error handling to prevent server crashes on unexpected failures.

## 🤖 AI Integration

The core "smart" feature is powered by the **Google Generative AI SDK (@google/generative-ai)** using the `gemini-1.5-flash-latest` model.

### How it works:
- **Prompt Engineering:** The system uses a strictly defined prompt that instructs the AI to act as a medical assistant. It enforces a specific JSON output format to ensure the API can reliably parse the response.
- **Parsing Logic:** The service includes a robust extraction layer that cleans the AI's response (removing markdown code blocks) and parses it into a usable JSON object for the frontend/database.
- **Model Choice:** `gemini-1.5-flash-latest` was selected for its high speed and low latency, making it ideal for real-time diagnosis suggestions.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **AI:** Google Gemini (Generative AI)
- **Utilities:** Dotenv (Environment Management), Morgan (Logging), Helmet (Security)

## 📖 API Documentation

### 1. Diagnose Symptoms
- **URL:** `/diagnose`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "symptoms": "persistent headache, high fever, stiff neck"
  }
  ```
- **Response:** Returns a 201 status with the ID, symptoms, and AI-suggested conditions.

### 2. Get Diagnosis History
- **URL:** `/history`
- **Method:** `GET`
- **Response:** Returns a list of all previous diagnoses sorted by date (newest first).

## ⚙️ Setup Instructions

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Environment Setup:**
    Create a `.env` file in the root directory and add:
    ```env
    MONGO_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_google_ai_key
    PORT=5000
    ```
3.  **Run the Server:**
    ```bash
    npm run dev
    ```

---
*Disclaimer: This tool is for educational purposes only and does not provide professional medical advice.*
