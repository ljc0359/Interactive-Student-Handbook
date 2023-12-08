import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const conf = dotenv.config();
if (conf.error) {
    throw conf.error;
}

const app = express();
const port = process.env.PORT || 5000;
const dbURL = `${process.env.DB_URL}`;
app.use(cors());

app.get("/", (req, res) => {
    res.json("MAIN PAGE");
})

mongoose
    .connect(dbURL)
    .then(() => {
        app.listen(port, () => {
            console.log(
                `Connected to database. Server is running on port: ${port}`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });