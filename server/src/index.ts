import express from "express";
import cors from "cors";
import { generateCode } from "./utils/generateCode";

const app = express();

app.use(cors());

const PORT = 3000;

const links: Record<string, string> = {
};

app.get("/api/links/:code", (req, res) => {
    const { code } = req.params;

    const url = links[code as keyof typeof links];

    if (!url) {
        return res.status(404).json({
            error: "Link not found",
        });
    }

    res.json({
        url,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.post("/api/links", (req, res) => {
    const { url, customCode } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "URL required",
        });
    }

    try {
        new URL(url);
    } catch {
        return res.status(400).json({
            error: "Invalid URL",
        });
    }

    // continue creating the short link...
});