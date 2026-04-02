const Diagnosis = require("../models/Diagnosis");
const { getDiagnosis } = require("../services/Aiservices");

const diagnose = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.trim() === "") {
      return res.status(400).json({ error: "Symptoms are required" });
    }

    const conditions = await getDiagnosis(symptoms);

    const record = await Diagnosis.create({ symptoms, conditions });

    res.status(201).json({
      id: record._id,
      symptoms: record.symptoms,
      conditions: record.conditions,
      createdAt: record.createdAt,
    });
  } catch (err) {
    console.error("Diagnose error:", err.message);
    res.status(500).json({ error: "Diagnosis failed. Please try again." });
  }
};

const getHistory = async (req, res) => {
  try {
    const records = await Diagnosis.find().sort({ createdAt: -1 });
    res.status(200).json(records);
  } catch (err) {
    console.error("History error:", err.message);
    res.status(500).json({ error: "Failed to fetch history." });
  }
};

module.exports = { diagnose, getHistory };