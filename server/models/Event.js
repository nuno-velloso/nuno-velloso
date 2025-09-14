// server/models/Event.js
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    date: { type: Date },
    description: { type: String },
    cover: { type: String }, // URL da capa
    gallery: [{ type: String }], // URLs de fotos
    videos: [{ type: String }], // URLs/IDs do YouTube
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// cria automaticamente slug se não passar
EventSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

export default mongoose.model("Event", EventSchema);
