const axios = require("axios");

axios
  .get("http://localhost:8000/idPokemon/5")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
