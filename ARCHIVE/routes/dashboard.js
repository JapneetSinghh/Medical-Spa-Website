const express = require('express');
const router = express.Router();

const dashboardController = require('../controller/dashboard');

router.get('/dashboard',dashboardController.getDashboard);
router.get('/addService',dashboardController.getAddService);

exports.router = router;