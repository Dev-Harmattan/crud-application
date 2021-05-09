const router = require('express').Router();
const {get_user, post_user, update_user, delete_user} = require('../controllers/userController');


router.post('/create', post_user)

router.get('/:id', get_user);

router.put('/update/:id', update_user);

router.delete('/delete/:id', delete_user)

module.exports = router;
