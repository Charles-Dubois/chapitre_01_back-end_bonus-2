const express = require("express");
const app = express();
const axios = require("axios");
let myPokemon;
function catchPokemon(idPokemon) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((res) => {
      myPokemon = { id: idPokemon, name: res.data.name };
    })
    .catch((err) => {
      console.log("Something went wrong");
    });
}

app.get("/", (_req, res, _next) => {
  res.send(
    "Recherchez des pokemon selon leur id, ajouter à l'uri :( idPokemon/ ) et un chiffre"
  );
});
app.get("/idPokemon/:idPokemon", (req, res, _next) => {
  catchPokemon(req.params.idPokemon);
  if (!myPokemon) {
    return res.send("une erreur s'est produite");
  }
  res.json(myPokemon);
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
