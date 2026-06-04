const express = require('express');
const router = express.Router();
const { getHealth, getRoot } = require('../controllers/healthController');

router.get('/', getRoot);
router.get('/health', getHealth);

module.exports = router; 