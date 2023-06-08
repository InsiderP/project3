const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  sub_total: { type: Number, required: true },
  phone_number: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
