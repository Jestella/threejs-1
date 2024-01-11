import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Routes" });
});

export default router;
