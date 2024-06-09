import { Router } from "express";
import { login } from "../utils/helpers.js";

const router = Router();

router.post("/login", (req, res) => {
  const data = login(req.body);

  if (!data) {
    return res.status(401).json({ message: "incorrect login credentials" });
  }

  return res.json(data);
});

export default router;
