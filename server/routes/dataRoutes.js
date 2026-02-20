const express = require("express");
const router = express.Router();

// Test route (very important for debugging)
router.get("/", (req, res) => {
  res.json({ message: "Data route working" });
});

module.exports = router;