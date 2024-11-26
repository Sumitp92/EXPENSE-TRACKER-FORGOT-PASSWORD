const express = require('express');
const router = express.Router();
const { AddUser, LoginUser, getExp, addExp, delExp, editExp } = require('../controllers/Auth');
const { authenticate } = require('../middlewares/auth');

router.post('/signup', AddUser);
router.post('/login', LoginUser);

router.get('/expenses', authenticate, getExp);
router.post('/expenses', authenticate, addExp);
router.delete('/expenses/:id', authenticate, delExp);
router.put('/expenses/:id', authenticate, editExp);

module.exports = router;
