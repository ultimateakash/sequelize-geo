const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/',         userController.nearByUsersExample1);
router.get('/eaxmple2', userController.nearByUsersExample2);

module.exports = router;
