const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { isPrime, isPerfect, isArmstrong, getDigitSum } = require("./utils/numberUtils");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Function to classify a number
const classifyNumber = async (num) => {
  try {
    if (isNaN(num)) {
      return { number: num, error: true };
    }

    const response = await axios.get(`http://numbersapi.com/${num}/math`);

    return {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: [
        ...(isArmstrong(num) ? ["armstrong"] : []),
        num % 2 === 0 ? "even" : "odd",
      ],
      digit_sum: getDigitSum(num),
      fun_fact: response.data,
    };
  } catch (error) {
    return { number: num, error: true };
  }
};

// Default Route - Classify predefined numbers (371, 28, 7)
app.get("/", async (req, res) => {
  const numbers = [371, 28, 7];
  const results = await Promise.all(numbers.map(classifyNumber));
  res.json(results);
});

// Route for classifying any number via **path parameters**
app.get("/api/classify-number/:number", async (req, res) => {
  const { number } = req.params;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const result = await classifyNumber(Number(number));
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
