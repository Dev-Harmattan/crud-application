const router = require('express').Router();
const {get_user, post_user, update_user, delete_user} = require('../controllers/userController');


router.post('/create', post_user)

router.get('/', get_user);

router.patch('/update', update_user);

router.delete('/delete', delete_user)

module.exports = router;
