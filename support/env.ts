import * as dotenv from "dotenv";

// Load .env before scenarios start
dotenv.config();

console.log("✅ Environment loaded:", process.env.URL);
