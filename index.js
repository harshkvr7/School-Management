import express from "express";
import dotenv from "dotenv"; 
import addSchoolRoutes from "./routes/addSchool.js";
import listSchoolsRoutes from "./routes/listSchools.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/addSchool", addSchoolRoutes);
app.use("/api/listSchools", listSchoolsRoutes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

