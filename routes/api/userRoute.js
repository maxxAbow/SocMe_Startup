const router = require('express').Router();
const {
    getSingleUser,
    getUsers,
    createUser,
} = require('../../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;