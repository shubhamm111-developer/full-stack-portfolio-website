import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Project from "./models/Project.js";

const projects = [
  {
    title: "AURA Mind",
    subtitle: "IoT-AI Mental Health Platform",
    description:
      "An IoT-AI platform integrating an EEG headband, AI glasses, and smart earbuds to detect stress in real time and automate work-rest cycles. Node.js backend orchestrates calls to Grok, OpenAI, and Gemini APIs.",
    techStack: ["Node.js", "EEG signal processing", "OpenAI API", "Gemini API", "IoT hardware"],
    githubLink: "https://github.com/<your-username>/aura-mind",
    featured: true,
    order: 1,
  },
  {
    title: "Voice-Controlled Robo Car",
    subtitle: "ESP8266 + Flutter",
    description:
      "A voice-controlled robotic car built on an ESP8266 microcontroller, paired with a custom Flutter mobile app for real-time voice command input.",
    techStack: ["ESP8266", "Flutter", "Embedded C"],
    githubLink: "https://github.com/<your-username>/voice-robo-car",
    featured: true,
    order: 2,
  },
  {
    title: "Robo War Bot",
    subtitle: "1st Prize — Robo War Competition",
    description:
      "A competitive combat robot designed and built for a robo war event, winning first prize.",
    techStack: ["Robotics", "Motor control", "Mechanical design"],
    githubLink: "https://github.com/<your-username>/robo-war-bot",
    featured: false,
    order: 3,
  },
];

async function seed() {
  await connectDB();
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log(`Inserted ${projects.length} projects`);
  await mongoose.disconnect();
}

seed();