import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.join(__dirname, "../public")));
// app.use(express.static(path.resolve()))
const publicDirectoryPath = path.normalize(`${path.resolve()}/../public`);
app.use(express.static(publicDirectoryPath));
const fileDirectoryPath = path.normalize(`${path.resolve()}/../files`);
app.use(express.static(path.join(path.resolve(), "../files")));
console.log(path.join(__dirname, "../public"));

app.get("/", (req, res) => {
  res.send({ name: "Marc", surnanme: "James" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
