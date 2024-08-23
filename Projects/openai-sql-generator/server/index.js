import express from "express";
import cors from "cors";
//
import generate from "./generate.js";
const port = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors(
  { origin: "*" }
));

// endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body;
  //res.json({ response: `you sent this: ${queryDescription}` });
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
