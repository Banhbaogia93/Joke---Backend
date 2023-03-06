import { Router } from 'express'
import { getJokes, getJoke } from '../controllers/JokeController.js'

const router = Router()

router.get('/', getJokes)

router.get('/:jokeID', getJoke)

export default router