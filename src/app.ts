import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`SmashHub is running on port ${PORT}`);

})
