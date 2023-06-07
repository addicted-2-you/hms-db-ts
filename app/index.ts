import express from "express";

// routes
import creditCardsRouter from "./credit-cards/routes";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/credit-cards", creditCardsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
