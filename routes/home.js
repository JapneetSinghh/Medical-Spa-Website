const express = require('express');
const router = express.Router();

// Home Controller
const homeController = require('../controller/homeController');

// Get Home Page
router.get('/',homeController.getHomePage);
// Get Home Page
router.get('/services',homeController.getServicesPage);
router.get('/serviceDetails',homeController.getServiceDetailsPage);
router.get('/about',homeController.getAboutPage);
router.get('/contact',homeController.getContactPage);

exports.router = router;