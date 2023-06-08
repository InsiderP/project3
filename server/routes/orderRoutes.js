const express = require('express');
const Order = require('../models/order');
const { authenticateJWT } = require('../middleware/authenticate');
const router = express.Router();

// Add Order
router.post('/add-order', authenticateJWT, async (req, res) => {
  try {
    const { user_id, sub_total, phone_number } = req.body;
    const order = await Order.create({
      user_id,
      sub_total,
      phone_number,
    });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get Order Details
router.get('/get-order', authenticateJWT, async (req, res) => {
  try {
    const { user_id } = req.query;
    const orders = await Order.find({ user_id });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Protected Route
router.get('/protected-route', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route' });
});


module.exports = router;
