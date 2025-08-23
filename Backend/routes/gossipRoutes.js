import express from "express";
import { getGossipsByFilter } from "../controllers/gossipController.js";
const router = express.Router();
router.post("/gossipsByFilter", getGossipsByFilter);

export default router;