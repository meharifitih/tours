const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

// router.post('/create', authController.protect, reviewController.createReview);
// router.get('/fetch', authController.protect, reviewController.getAllReviews);

module.exports = router;
