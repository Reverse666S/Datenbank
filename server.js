import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let links = [];
let members = [];

// API-Routen
app.get("/api/links", (req, res) => res.json(links));
app.post("/api/links", (req, res) => {
  links.push(req.body);
  res.json({ success: true });
});

app.get("/api/members", (req, res) => res.json(members));
app.post("/api/members", (req, res) => {
  members.push(req.body);
  res.json({ success: true });
});

// Server starten
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Backend läuft auf Port ${port}`));
