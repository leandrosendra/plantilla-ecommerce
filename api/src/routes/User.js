const { Router } = require('express');
const router = Router();
const {getUser, postUser, bulkUser, deleteUser } = require('../Controller/User.js')

router.get('/', getUser)

router.post('/', postUser);
router.post('/bulk', bulkUser) 

router.delete('/:id', deleteUser)

module.exports = router