const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber % 2 === 0) {
    res.send(`Le nombre généré est ${randomNumber}.`);
  } else {
    res.status(404).send("Le nombre généré est impaire, veuillez réessayer.");
  }
});

app.post("/delay", (req, res) => {
  const delay = req.body.delay;
  setTimeout(() => {
    res.send(
      "La demande a été traitée avec un délai de " + delay + " millisecondes."
    );
  }, delay);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
