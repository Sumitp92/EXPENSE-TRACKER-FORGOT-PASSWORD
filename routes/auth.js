const { authenticate } = require('../middlewares/auth');

router.get('/expenses', authenticate, getExp);
router.post('/expenses', authenticate, addExp);
router.delete('/expenses/:id', authenticate, delExp);
router.put('/expenses/:id', authenticate, editExp);
