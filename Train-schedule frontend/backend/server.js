const express = require("express");

const app = express();
const port = 5000;
const { trains } = require("./data/data");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.get("/allTrains", (req, res) => {
  // console.log(trains);
  res.json(trains);
});

app.get("/singleTrain/:id", (req, res) => {
  const trainId = parseInt(req.params.id);
  const train = trains.find((train) => train.id === trainId);

  if (train) {
    res.json(train);
  } else {
    res.status(404).json({ error: "Train not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
