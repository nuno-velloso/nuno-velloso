/* eslint-env node */
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    date: { type: Date, required: true }, // data/hora do evento
    location: { type: String, default: "Quinta da Marinha" },
    instructor: { type: String, default: "" },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
