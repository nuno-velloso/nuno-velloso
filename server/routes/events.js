// server/routes/events.js
import { Router } from "express";
import Event from "../models/Event.js";
import mongoose from "mongoose";

const router = Router();

// GET /api/events (lista)
router.get("/", async (req, res) => {
  try {
    const items = await Event.find().sort({ date: -1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Erro a listar eventos" });
  }
});

// GET /api/events/:idOrSlug
router.get("/:idOrSlug", async (req, res) => {
  const { idOrSlug } = req.params;
  try {
    let doc;
    if (mongoose.isValidObjectId(idOrSlug)) {
      doc = await Event.findById(idOrSlug);
    } else {
      doc = await Event.findOne({ slug: idOrSlug });
    }
    if (!doc) return res.status(404).json({ error: "Evento não encontrado" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: "Erro a obter evento" });
  }
});

// POST /api/events (criar)
router.post("/", async (req, res) => {
  try {
    const created = await Event.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Erro a criar evento", details: err.message });
  }
});

// PUT /api/events/:id (editar)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated)
      return res.status(404).json({ error: "Evento não encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Erro a editar evento" });
  }
});

// DELETE /api/events/:id (apagar)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Event.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ error: "Evento não encontrado" });
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ error: "Erro a apagar evento" });
  }
});

export default router;
