const path = require("path");
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "studentDB";
const collectionName = "frontend_text";
const client = new MongoClient(mongoUrl);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function notesCollection() {
  return client.db(dbName).collection(collectionName);
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "backend", time: new Date().toISOString() });
});

app.get("/api/content", async (_req, res) => {
  try {
    const doc = await notesCollection().findOne({ key: "main" });
    res.json({ text: doc?.text ?? "" });
  } catch (_error) {
    res.status(500).json({ error: "Failed to load content." });
  }
});

app.post("/api/content", async (req, res) => {
  try {
    const text = typeof req.body?.text === "string" ? req.body.text : "";
    const now = new Date();

    await notesCollection().updateOne(
      { key: "main" },
      { $set: { key: "main", text, updatedAt: now } },
      { upsert: true }
    );

    res.json({ message: "Saved.", updatedAt: now.toISOString() });
  } catch (_error) {
    res.status(500).json({ error: "Failed to save content." });
  }
});

async function startServer() {
  await client.connect();
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log("Connected successfully to server");
      console.log(`App running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function shutdown() {
  await client.close();
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error("Startup failed:", error);
    process.exit(1);
  });

  process.on("SIGINT", async () => {
    await shutdown();
    process.exit(0);
  });
}

module.exports = { app, startServer, shutdown };
