module.exports = (app) => {
    const carts = require('../controllers/cart.controller.js');

    // Create a new Cart
    app.post('/carts', carts.create);

    // Retrieve all 
    app.get('/carts', carts.findAll);

    // Retrieve a single Item
    app.get('/carts/:cartId', carts.findOne);

    // Delete 
    app.delete('/carts/:cartId', carts.delete);
}