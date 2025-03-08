import express from "express";
import http from "http";
import cors from "cors";
import path from "path";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, "data");
const fs = require("fs");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
