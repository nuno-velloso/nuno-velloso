// server/seed.js
import "dotenv/config";
import mongoose from "mongoose";
import Event from "./models/Event.js";

const { MONGODB_URI, DB_NAME } = process.env;

const data = [
  {
    title: "Torneio de Abril 2025",
    date: "2025-04-12",
    description: "Resumo do torneio...",
    cover: "https://cdn.exemplo.com/eventos/abril25/capa.jpg",
    gallery: [
      "https://cdn.exemplo.com/eventos/abril25/foto1.jpg",
      "https://cdn.exemplo.com/eventos/abril25/foto2.jpg",
    ],
    videos: ["https://www.youtube.com/watch?v=ABCDEFG"],
    featured: true,
  },
];

async function run() {
  await mongoose.connect(MONGODB_URI, { dbName: DB_NAME || "nv_site_dev" });
  await Event.deleteMany({});
  await Event.insertMany(data);
  console.log("✅ Seed concluído");
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
