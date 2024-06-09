// import express from "express";

// const app = express();

// app.HTTP_METHOD(PATH, CALLBACK)

// app.get("/", (req, res) => {
//   res.send("Hello from server!!!!");
// });

// app.post("/users", (req, res) => {
//   res.json({ id: 1, name: "Jane Doe" });
// });

// app.delete("/users/:id", (req, res) => {
//   res.json(1);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({ id: id, name: "Fake name" });
// });

// request params

// app.get("/users/:userId/profiles/:profileId", (req, res) => {
//   console.log(req.params);

//   const { userId, profileId } = req.params;

//   res.json({ id: userId, name: "Fake name" });

//   console.log(userId, profileId);
// });

// request query

// app.get("/users/:userId/profiles/:profileId", (req, res) => {
//   const queryStringValues = req.query;

//   const { userId, profileId } = req.params;

//   res.json({
//     id: userId,
//     name: "Fake name",
//     queryStringValues,
//   });

//   console.log(userId, profileId, queryStringValues);
// });

// request body

// app.use(express.json());

// app.post("/users/:userId/profiles/:profileId", (req, res) => {
//   const queryStringValues = req.query;
//   const params = req.params;
//   const body = req.body;

//   res.json({
//     params,
//     queryStringValues,
//     body,
//   });

//   console.log(params, queryStringValues, body);
// });

// express router

// app.get("/", (req, res) => {
//   res.send("Hello from server!!!!");
// });

// app.use(express.json());

// const fakeUser = {
//   id: 3,
//   name: "Jane Doe",
//   email: "somemail@gmail.com",
// };

// app
//   .route("/users")
//   .post((req, res) => {
//     res.send({ ...fakeUser, ...req.body });
//   })
//   .get((req, res) => {
//     res.send(fakeUser);
//   })
//   .put((req, res) => {
//     res.send(fakeUser);
//   });

// export default app;

// import app from "./app.js";

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";
const app = express();

import usersRouter from "./routes/users-route.js";

app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello from express server!");
});

app.all("*", (req, res) => {
  res.json({ message: "app.all handler" });
});

export default app;
