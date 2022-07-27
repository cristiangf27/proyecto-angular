const express = require('express');
const router = express.Router();

const ctrlUser = require('../contollers/user.controller');

router.post('/register', ctrlUser.register);

module.exports = router;