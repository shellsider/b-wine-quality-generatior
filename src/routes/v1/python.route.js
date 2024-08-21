/* eslint-disable */

const express = require('express');

const router = express.Router();
const pythonController = require('../../controllers/python.controller');

router.post('/', pythonController.python)
router.post('/post', pythonController.pythonPost)

module.exports = router