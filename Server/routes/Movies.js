const express = require('express')
const { getMovies,searchMovies } = require('../controllers/movieControllers')
const router = express.Router()



router.get('/', getMovies)
router.get('/search',searchMovies)


module.exports=router