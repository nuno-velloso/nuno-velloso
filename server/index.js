/* eslint-env node */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Health + info
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/api/info", (_req, res) => res.json({ name: "Nuno Velloso API" }));

// Routers
const eventsRouter = require("./routes/eventsRouter");
app.use("/api/events", eventsRouter);

// 404 para API desconhecida (opcional)
app.use("/api", (_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Handler de erros
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Boot
const { MONGODB_URI, DB_NAME, PORT = 8080 } = process.env;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI em falta no .env");
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
