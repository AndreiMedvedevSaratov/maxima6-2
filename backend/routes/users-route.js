// import { Router } from "express";
// const router = Router();

// const fakeUser = {
//   id: 2,
//   name: "John",
// };

// const fakeUserPatch = {
//   id: 2,
//   name: "Vasya",
// };

// router.post("/", (req, res) => {
//   return res.json({ ...fakeUser, ...req.body });
// });

// router.get("/:id", (req, res) => {
//   return res.json(fakeUser);
// });

// router.patch("/:id", (req, res) => {
//   return res.json({ ...fakeUserPatch, ...req.body });
// });

// router.delete("/:id", (req, res) => {
//   return res.sendStatus(200);
// });

// export default router;

// -----------------------------------------

// import { Router } from "express";
// import { findById, findMany } from "../utils/helpers.js";

// const router = Router();

// router.get("/", (req, res) => {
//   return res.json(findMany());
// });

// router.get("/:id", (req, res) => {
//   return res.json(findById(req.params.id));
// });

// export default router;

// -----------------------------------------

import { Router } from "express";
import { findById, findMany } from "../utils/helpers.js";
import { auth } from "../middleware/auth.js";
import { role } from "../middleware/role.js";

const router = Router();

// router.use(auth);

router.get("/", [auth, role("admin")], (req, res) => {
  console.log("authenticated:", req.authenticated);
  console.log("auth data:", req.auth);

  return res.json(findMany());
});

router.get("/:id", (req, res) => {
  return res.json(findById(req.params.id));
});

export default router;
