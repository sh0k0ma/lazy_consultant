import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const dataDir = path.join(__dirname, "../data");

// Helper to read/write JSON files
async function readData(filename) {
  const filePath = path.join(dataDir, filename);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

async function writeData(filename, data) {
  const filePath = path.join(dataDir, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Static files
app.use(express.static(path.join(__dirname, "../../public")));

// API Routes - Projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await readData("projects.json");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/projects", async (req, res) => {
  try {
    const projects = await readData("projects.json");
    const newProject = { id: Date.now().toString(), ...req.body };
    projects.push(newProject);
    await writeData("projects.json", projects);
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/projects/:id", async (req, res) => {
  try {
    const projects = await readData("projects.json");
    const idx = projects.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Not found" });
    projects[idx] = { ...projects[idx], ...req.body };
    await writeData("projects.json", projects);
    res.json(projects[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/projects/:id", async (req, res) => {
  try {
    let projects = await readData("projects.json");
    projects = projects.filter(p => p.id !== req.params.id);
    await writeData("projects.json", projects);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API Routes - Works
app.get("/api/works", async (req, res) => {
  try {
    const works = await readData("works.json");
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/works", async (req, res) => {
  try {
    const works = await readData("works.json");
    const newWork = { id: Date.now().toString(), ...req.body };
    works.push(newWork);
    await writeData("works.json", works);
    res.json(newWork);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/works/:id", async (req, res) => {
  try {
    const works = await readData("works.json");
    const idx = works.findIndex(w => w.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Not found" });
    works[idx] = { ...works[idx], ...req.body };
    await writeData("works.json", works);
    res.json(works[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/works/:id", async (req, res) => {
  try {
    let works = await readData("works.json");
    works = works.filter(w => w.id !== req.params.id);
    await writeData("works.json", works);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API Routes - Tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await readData("tasks.json");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const tasks = await readData("tasks.json");
    const newTask = { id: Date.now().toString(), ...req.body };
    tasks.push(newTask);
    await writeData("tasks.json", tasks);
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const tasks = await readData("tasks.json");
    const idx = tasks.findIndex(t => t.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Not found" });
    tasks[idx] = { ...tasks[idx], ...req.body };
    await writeData("tasks.json", tasks);
    res.json(tasks[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    let tasks = await readData("tasks.json");
    tasks = tasks.filter(t => t.id !== req.params.id);
    await writeData("tasks.json", tasks);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API Routes - Knowledge
app.get("/api/knowledge", async (req, res) => {
  try {
    const knowledge = await readData("knowledge.json");
    res.json(knowledge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/knowledge", async (req, res) => {
  try {
    const knowledge = await readData("knowledge.json");
    const newKnowledge = { id: Date.now().toString(), ...req.body };
    knowledge.push(newKnowledge);
    await writeData("knowledge.json", knowledge);
    res.json(newKnowledge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/knowledge/:id", async (req, res) => {
  try {
    const knowledge = await readData("knowledge.json");
    const idx = knowledge.findIndex(k => k.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Not found" });
    knowledge[idx] = { ...knowledge[idx], ...req.body };
    await writeData("knowledge.json", knowledge);
    res.json(knowledge[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/knowledge/:id", async (req, res) => {
  try {
    let knowledge = await readData("knowledge.json");
    knowledge = knowledge.filter(k => k.id !== req.params.id);
    await writeData("knowledge.json", knowledge);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Lazy Consultant Server: http://127.0.0.1:${PORT}`);
});
