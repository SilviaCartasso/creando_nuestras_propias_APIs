const express = require('express');
const router = express.Router();
const {create, destroy} = require('../../controllers/api/moviesController');

//router.get('/api/genres', list);
//router.get('/api/genres/detail/:id', detail);
router.post('/api/movies/create', create);
router.delete('/api/movies/delete/:id', destroy);



module.exports = router;