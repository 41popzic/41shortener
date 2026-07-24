import express from "express";
import cors from "cors";
import db from "./database";
import { generateCode } from "./utils/generateCode";
import rateLimit from "express-rate-limit";

const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30
});

app.use("/api/", limiter);

const PORT = 3000;


// API route
app.get("/api/links/:code", (req, res) => {
    const { code } = req.params;

    db.get(
        "SELECT url FROM links WHERE code = ?",
        [code],
        (err, row) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error",
                });
            }

            if (!row) {
                return res.status(404).json({
                    error: "Link not found",
                });
            }

            res.json({
                url: (row as { url: string }).url,
            });
        }
    );
});


// Redirect route
app.get("/:code", (req, res) => {
    const { code } = req.params;

    db.get(
        "SELECT url FROM links WHERE code = ?",
        [code],
        (err, row) => {
            if (err) {
                return res.status(500).send("Database error");
            }

            if (!row) {
                return res.status(404).send("Link not found");
            }

            res.redirect((row as { url: string }).url);
        }
    );
});


app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
});