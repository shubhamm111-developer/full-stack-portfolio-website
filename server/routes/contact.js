import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/contact - save a contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are required" });
    }

    const saved = await Message.create({ name, email, message });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;