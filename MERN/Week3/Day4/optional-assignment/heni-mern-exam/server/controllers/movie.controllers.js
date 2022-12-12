const Movie = require("../models/movie.models");

module.exports.findAllMovies = (req, res) => {
    Movie.find()
    .then(allDaMovies => res.json( {allDaMovies} ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleMovies = (req, res) => {
	Movie.findOne({ _id: req.params.id })
		.then(oneSinglemovie => res.json({ oneSinglemovie }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewMovies = (req, res) => {
    Movie.create(req.body)
    .then(newlyCreatedMovie => res.json({ newlyCreatedMovie }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingMovies = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators:true })
    .then(updatedMovies => res.json({ updatedMovies }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingMovies = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
// ADD NEW REVIEW
module.exports.addReview = (req, res) => {
    Movie.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { interaction: req.body } },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((movie) => res.json(movie))
      .catch((err) => res.status(400).json(err));
  };

//   average

module.exports.average = (req, res) => {
    Movie.findOne({ _id: req.params.id })
    .count(interaction[{rating}]).then(result => res.json({ result }))
}