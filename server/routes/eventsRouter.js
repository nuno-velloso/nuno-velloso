/* eslint-env node */
const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// LISTAR (com filtros simples ?q=&active=)
router.get("/", async (req, res, next) => {
  try {
    const { q = "", active } = req.query;
    const where = {
      ...(q && { title: { $regex: q, $options: "i" } }),
      ...(active !== undefined && { isActive: active === "true" }),
    };
    const items = await Event.find(where).sort({ date: 1 });
    res.json(items);
  } catch (e) {
    next(e);
  }
});

// OBTER POR ID
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Event.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Event not found" });
    res.json(item);
  } catch (e) {
    next(e);
  }
});

// CRIAR
router.post("/", async (req, res, next) => {
  try {
    const { title, date, location, instructor, description, isActive } =
      req.body;
    if (!title || !date)
      return res.status(400).json({ error: "title and date are required" });
    const created = await Event.create({
      title,
      date,
      location,
      instructor,
      description,
      isActive,
    });
    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
});

// ATUALIZAR
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Event not found" });
    res.json(updated);
  } catch (e) {
    next(e);
  }
});

// REMOVER
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Event not found" });
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
