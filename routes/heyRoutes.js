const express= require('express')
const router= express.Router()
const hey = require('../controllers/testFunction')

router.get('/', hey.hey)

module.exports = router