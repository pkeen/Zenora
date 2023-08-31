const express = require("express");
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/enusreLoggedIn');

// All path start with '/api/users'

// POST api/users (create user signup)
router.post('/', usersCtrl.create);

// POST api/users/login (login)
router.post('/login', usersCtrl.login);

// GET /api/users/check-token 
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router;

