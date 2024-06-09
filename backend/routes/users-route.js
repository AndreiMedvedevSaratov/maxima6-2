import { Router } from "express";
const router = Router();

const fakeUser = {
  id: 2,
  name: "John",
};

const fakeUserPatch = {
  id: 2,
  name: "Vasya",
};

router.post("/", (req, res) => {
  return res.json({ ...fakeUser, ...req.body });
});

router.get("/:id", (req, res) => {
  return res.json(fakeUser);
});

router.patch("/:id", (req, res) => {
  return res.json({ ...fakeUserPatch, ...req.body });
});

router.delete("/:id", (req, res) => {
  return res.sendStatus(200);
});

export default router;
