import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let links = [];
let members = [];
let users = [];
let supports = [];
let home = [];

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

app.get("/api/users", (req, res) => res.json(users));
app.post("/api/users", (req, res) => {
  users.push(req.body);
  res.json({ success: true });
});

app.get("/api/supports", (req, res) => res.json(supports));
app.post("/api/supports", (req, res) => {
  supports.push(req.body);
  res.json({ success: true });
});

app.get("/api/home", (req, res) => res.json(home));
app.post("/api/home", (req, res) => {
  home.push(req.body);
  res.json({ success: true });
});

// Server starten
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Backend läuft auf Port ${port}`));
