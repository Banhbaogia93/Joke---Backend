const express = require('express')
const router = express.Router()

const  { 
    getJokes,
    getJoke
} = require('../controllers/JokeController.js')

router.get('/', getJokes)

router.get('/:jokeID', getJoke)

module.exports = router