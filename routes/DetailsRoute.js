import express from "express";
import { fetchDetails, getDetails } from "../controller/fetchDetails.js";

const router = express.Router();

router.post("/",fetchDetails);

router.get("/",getDetails);

export default router;