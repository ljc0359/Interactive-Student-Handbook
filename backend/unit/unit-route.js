import express from "express";
import * as Unit from "./unit-controller.js";

const router = express.Router();

router.get("/", Unit.getUnits);
router.get("/:unitCode", Unit.getUnit);
router.post("/", Unit.createUnit);
router.patch("/:unitCode", Unit.updateUnit);
router.delete("/:unitCode", Unit.deleteUnit);

export default router;