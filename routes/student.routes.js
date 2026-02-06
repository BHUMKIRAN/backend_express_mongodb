import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  await Student.create(req.body);
  res.send("Student added successfully");
});

// READ ALL
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

// UPDATE
router.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Student updated");
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student deleted");
});

export default router;
