const Author = require("../models/author.model");

module.exports.findAll = (req, res) => {
    Author.find()
    .then(all => res.json( all ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingle = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNew = (req, res) => {
    Author.create(req.body)
    .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExisting = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators:true })
    .then(updated => res.json({ updated }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExisting = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};