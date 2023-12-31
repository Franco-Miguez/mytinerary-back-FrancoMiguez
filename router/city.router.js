import express from "express";
import cityController from "../controller/city.controller.js";

const router = express.Router();

const {getCities, createCity, getCityById} = cityController

router.get("/", getCities);
router.get("/:id", getCityById)
router.post("/", createCity);

export default router;
