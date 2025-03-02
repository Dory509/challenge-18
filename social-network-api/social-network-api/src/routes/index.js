const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

// API Routes
router.use('/api', apiRoutes);

module.exports = router;