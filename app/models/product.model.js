const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id:Number,
    name: String,
    image: String,
    price:Number
}, {
    timestamps: true
});


module.exports = mongoose.model('Product', ProductSchema);

