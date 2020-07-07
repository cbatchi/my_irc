const express = require('express')
const router = express.Router()

// Crée une route '/' de type get 
router.get('/', (req, res) => {
  res.send({ response: 'Server is up and running.' }).status(200)
})

// Export le router
module.exports = router