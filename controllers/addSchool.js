import db from "../db.js";
import { validateSchoolData } from "../utils/validateSchoolData.js";

export const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    const validationError = validateSchoolData({ name, address, latitude, longitude });
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const values = [name, address, latitude, longitude];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Database insertion error:", err);
            return res.status(500).json({ error: "Internal server error." });
        }
        res.status(201).json({ message: "School added successfully.", schoolId: result.insertId });
    });
};