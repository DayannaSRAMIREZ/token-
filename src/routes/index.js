const express = require('express'); 
const router = express.Router(); 
const{index, info, login}= require('../controllers/indexController')
const verificacion= require('../middlewares/token')


router
    .get('/', index)
    .post('/login', login)
    .get('/info', verificacion, info)

    module.exports= router