const router = require('express').Router();
const deleteThought = require('./thoughtRoute');
const {
    getSingleUser,
    getUsers,
    createUser,
    deleteUser,
} = require('../../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId').delete(deleteUser);

if (!userId) {
    router.route('/:userId').delete(deleteThought);
};

module.exports = router;