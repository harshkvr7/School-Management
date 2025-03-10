import db from "../db.js";
import { calculateDistance } from "../utils/calculateDistance.js";

export const listSchools = (req, res) => {
    const { latitude, longitude } = req.query;
    
    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required." });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ error: "Invalid latitude or longitude." });
    }

    const query = "SELECT * FROM schools";
    
    db.query(query, (err, results) => {
        if (err) {
            console.error("Database retrieval error:", err);
            return res.status(500).json({ error: "Internal server error." });
        }

        const sortedSchools = results.map(school => ({
            ...school,
            distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    });
};
