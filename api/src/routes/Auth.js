const { Router } = require('express');
const router = Router();
const {getUser, registerUser, loginUser } = require('../Controller/Auth.js');



router.get('/', getUser)

//REGISTER
router.post('/register', registerUser);

// LOG IN 
router.post('/login', loginUser);

module.exports = router