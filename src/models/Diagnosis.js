const mongoose = require("mongoose");

const conditionSchema = new mongoose.Schema({
  condition: { type: String, required: true },
  probability: { type: String, required: true },
  nextSteps: { type: [String], required: true },
});

const diagnosisSchema = new mongoose.Schema(
  {
    symptoms: { type: String, required: true },
    conditions: { type: [conditionSchema], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diagnosis", diagnosisSchema);