const express = require('express');
const router = express.Router();
const { forgotPassword, resetPassword } = require('../controllers/Auth');

router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword', resetPassword);

module.exports = router;
