import express from "express";
import { addSchool } from "../controllers/addSchool.js";

const router = express.Router();

router.post("/", addSchool);

export default router;