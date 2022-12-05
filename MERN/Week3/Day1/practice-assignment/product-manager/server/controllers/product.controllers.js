const Product = require("../models/product.models");

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allDaProducts => res.json({ allDaProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProducts = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneSingleProduct => res.json({ oneSingleProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProducts = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProducts = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProducts => res.json({ updatedProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProducts = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
