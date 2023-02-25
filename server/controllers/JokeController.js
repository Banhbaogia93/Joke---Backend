const jokes = require("../jokes.js");

const getJokes = ((req, res) => {
  res.json(jokes)
})

const getJoke = ((req, res) => {
  var joke = Object.values(jokes).find((j) => j.id === req.params.jokeID)
  if (!joke) {
    return res.status(404).send()
  }
  res.json(joke);
})

module.exports = {
  getJokes,
  getJoke,
}