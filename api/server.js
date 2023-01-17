const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber % 2 === 0) {
    res.send(`Le nombre est ${randomNumber}.`);
  } else {
    res.status(404).send("Le nombre est impaire, veuillez reessayer.");
  }
});

app.post("/delay", (req, res) => {
  const delay = req.body.delay;
  setTimeout(() => {
    res.send("La demande avec un delai de " + delay + " millisecondes.");
  }, delay);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
