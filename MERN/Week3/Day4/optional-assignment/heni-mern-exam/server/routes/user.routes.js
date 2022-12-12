const UserController = require('../controllers/user.controllers');
const MovieController = require("../controllers/movie.controllers");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/register', UserController.register)
    app.post('/api/login', UserController.login)
    app.post('/api/logout', UserController.logout)


    app.get("/api/movie/",authenticate, MovieController.findAllMovies);
    app.get("/api/movie/:id" ,authenticate, MovieController.findOneSingleMovies);
    app.put("/api/movie/update/:id",authenticate,MovieController.updateExistingMovies);
    app.post("/api/movie/new" ,authenticate,MovieController.createNewMovies);
    app.delete("/api/movie/delete/:id",authenticate, MovieController.deleteAnExistingMovies);
    app.put('/api/movies/review/:id',authenticate,MovieController.addReview);


}