const express = require('express');
const router = express.Router();
const { showLeaderboard } = require('../controllers/Auth'); 


router.get('/premium/showleaderboard', showLeaderboard);

module.exports = router;