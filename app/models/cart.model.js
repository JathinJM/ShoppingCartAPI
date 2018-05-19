const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    id:Number,
    name: String, 
    image: String,
    price:Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);
