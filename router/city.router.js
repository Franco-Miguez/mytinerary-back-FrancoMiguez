import express from "express";
import cityController from "../controller/city.controller.js";

const router = express.Router();

router.get("/", cityController.getCities);
router.post("/", cityController.createCity);

export default router;
