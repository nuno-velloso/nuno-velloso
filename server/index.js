import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import eventsRouter from "./routes/events.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health + info
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/api/info", (_req, res) => res.json({ name: "Nuno Velloso API" }));

// Routers
app.use("/api/events", eventsRouter);

// Handler de erros
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const { MONGODB_URI, DB_NAME, PORT = 8080 } = process.env;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI em falta no .env (server/.env)");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, { dbName: DB_NAME })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ API ligada em http://localhost:${PORT}`)
    );
  })
  .catch((e) => {
    console.error("❌ Erro a ligar ao Mongo:", e);
    process.exit(1);
  });
