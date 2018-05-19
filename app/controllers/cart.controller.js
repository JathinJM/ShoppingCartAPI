const Cart = require('../models/cart.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
   
    // Create a Product
    
    const cart = new Cart({
       id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price
    });

    // Save Product in the database
cart.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all Products from the database.
exports.findAll = (req, res) => {
    
    Cart.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
};

// Find a single Product with a ProductID
exports.findOne = (req, res) => {
    Cart.find({ id: req.params.cartId })
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.cartId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.cartId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    Cart.remove({ id: req.params.cartId })
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.cartId
            });
        }
        res.send({message: "product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + req.params.cartId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.cartId
        });
    });
};
