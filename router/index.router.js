import express from "express";
import cityRouter from "./city.router.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Word in router");
});

router.use("/city", cityRouter)

export default router;
