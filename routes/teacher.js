import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await Teacher.create(req.body);
  res.send("Teacher added");
});

router.get("/", async (req, res) => {
  const teachers = await Teacher.find();
  res.send(teachers);
});

router.get("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.send(teacher);
});

router.put("/:id", async (req, res) => {
  await Teacher.findByIdAndUpdate(req.params.id, req.body);
  res.send("Teacher updated");
});

router.delete("/:id", async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.send("Teacher deleted");
});

export default router;
