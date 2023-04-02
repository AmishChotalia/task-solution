const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
