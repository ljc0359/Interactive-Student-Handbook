import mongoose from "mongoose";
import Unit from "./unit-model.js";

export const getUnit = async (req, res) => {
    const { unitCode } = req.params;

    try {
        const unit = await Unit.findById({ unitCode }).exec();
        res.status(200).json({ unit });
    } catch (error) {
        res.status(404).json({ message: "Error retrieving unit by unit code!" });
    }
};

export const getUnits = async (req, res) => {
    try {
        const units = await Unit.find({});
        res.status(200).json({ data: units });
    } catch (error) {
        res.status(404).json({ message: "Error retrieving all units" });
    }
};

export const createUnit = async (req, res) => {
    const unit = req.body;

    const newUnit = new Unit({ ...unit });

    try {
        await newUnit.save();

        res.status(201).json(newUnit);
    } catch (error) {
        res.status(409).json({ message: "Error creating new unit!" });
    }

};

export const deleteUnit = async (req, res) => {
    const { unitCode } = req.params;
    try {
        unitId = await Unit.exists({ unitCode });
        
        if (unitId == null) {
            return res.status(404).send("No unit with this unit code!");
        }

        await Unit.findByIdAndDelete(unitId._id);

        res.json({ message: "Unit deleted succesfully!" });
    } catch (error) {
        res.send("Error deleting unit!");
    }
};

export const updateUnit = async (req, res) => {
    const { unitCode } = req.params;
    const unitContent = req.body;

    try {
        unitId = await Unit.exists({ unitCode });

        if (unitId == null) {
            return res.status(404).send("No post with this unit code!");
        }

        const updatedUnit = await Unit.findByIdAndUpdate(_id, { ...unitContent, __id }, { new: true });

        res.json(updateUnit);
    } catch (error) {
        res.send("Error updating unit!");
    }
}