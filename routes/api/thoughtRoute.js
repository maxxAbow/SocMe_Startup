const router = require('express').Router();
const {
    getSingleThought,
    getThots,
    createThought,
} = require('../../controller/userController');

router.route('/').get(getThots).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;