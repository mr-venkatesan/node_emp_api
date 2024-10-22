import express from "express";

const app = express();
const PORT = 1317;

app.get("/", (req, res) => {
    res.end();
  });

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
  });