import sqlite3 from "sqlite3";

const db = new sqlite3.Database("links.db");

db.run(`
    CREATE TABLE IF NOT EXISTS links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT UNIQUE NOT NULL,
        url TEXT NOT NULL
    )
`);

export default db;