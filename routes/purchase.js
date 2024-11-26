const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const { buyPremium, updatePremiumStatus } = require('../controllers/Auth');

router.get('/premiummember', authenticate, buyPremium);
router.post('/updatetransactionstatus', authenticate, updatePremiumStatus);

module.exports = router;
