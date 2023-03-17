const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/hello', controllers.hello)
router.post('/sortnum', controllers.sortnum)

module.exports = router