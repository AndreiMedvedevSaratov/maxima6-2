import { Router } from "express";
import todoRepository from "./todo-repository.js";

const router = Router();

router.post("/", async (req, res) => {
  const result = await todoRepository.create(req.body);

  res.status(201).json(result);
});

router.get("/", async (req, res) => {
  const result = await todoRepository.findAll();

  res.status(200).json(result);
});

router.get("/:id", async (req, res) => {
  const result = await todoRepository.findOne(+req.params.id);

  res.status(200).json(result);
});

router.put("/:id", async (req, res) => {
  const result = await todoRepository.updateOne(+req.params.id, req.body);

  res.json(result);
});

router.patch("/:id", async (req, res) => {
  const result = await todoRepository.patchOne(+req.params.id, req.body);

  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await todoRepository.deleteOne(+req.params.id);

  res.json(result);
});

export default router;
