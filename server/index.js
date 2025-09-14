// server/index.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import eventsRouter from "./routes/events.js";

const app = express(); // <-- cria app primeiro!

// middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(morgan("dev"));

// health/info
app.get("/health", (_, res) => res.json({ ok: true }));
app.get("/api/info", (_, res) => res.json({ name: "Nuno Velloso API" }));

// rotas
app.use("/api/events", eventsRouter);

// Mongo
const { MONGODB_URI, DB_NAME, PORT } = process.env;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI não definido no .env");
  process.exit(1);
}

try {
  await mongoose.connect(MONGODB_URI, { dbName: DB_NAME || "nv_site_dev" });
  console.log("✅ MongoDB ligado");
} catch (err) {
  console.error("❌ Erro a ligar ao MongoDB:", err.message);
  process.exit(1);
}

const port = Number(PORT) || 8080;
app.listen(port, () => {
  console.log(`🚀 Server a correr em http://localhost:${port}`);
});
