import express from "express";
import { deleteDetails, fetchDetails, getDetails, updateDetails } from "../controller/fetchDetails.js";

const router = express.Router();

router.post("/",fetchDetails);

router.get("/",getDetails);

router.put("/",updateDetails);

router.delete("/",deleteDetails);

export default router;