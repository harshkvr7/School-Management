import express from "express";
import { listSchools } from "../controllers/listSchools.js";

const router = express.Router();

router.get("/", listSchools);

export default router;