const express = require("express");
const router = express.Router();
const { diagnose, getHistory } = require("../controllers/diagnosisController");

router.post("/diagnose", diagnose);
router.get("/history", getHistory);

module.exports = router;