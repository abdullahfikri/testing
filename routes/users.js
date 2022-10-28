const express = require('express');
const { signin } = require('../controllers/users.js');
const router = express.Router();

router.post('signin', signin);
module.exports = router;
