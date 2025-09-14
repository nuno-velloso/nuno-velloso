/* eslint-env node */
require("dotenv").config();
const mongoose = require("mongoose");
const Event = require("./models/Event");

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    await Event.deleteMany({});
    await Event.insertMany([
      {
        title: "Aula de Iniciação – Pista Coberta",
        date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        location: "Manège Coberto",
        instructor: "Nuno Velloso",
        description: "Primeiro contacto com o cavalo. Postura e segurança.",
      },
      {
        title: "Trilho pela Quinta da Marinha",
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        location: "Exterior",
        instructor: "Sandra",
        description: "Passeio relaxado em trilho marcado.",
      },
    ]);
    console.log("Seed OK");
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();
