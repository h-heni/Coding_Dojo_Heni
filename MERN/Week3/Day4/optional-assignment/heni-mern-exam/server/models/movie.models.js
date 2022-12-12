const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
	title: {
        type : String,
        required : [true,'Title is required'],
        minlength : [2, 'Title must be at least 2 charachters long'] 
    },
	interaction: [
        {
        name:{
        type : String,
        required : [true,'Name is required'],
        minlength : [3, 'Name must be at least 3 charachters long']
    },
    rating: {
        type : Number,
        required : [true,'Rating is required'],
    },
    review: {
        type : String,
        required : [true,'Your review is required'],
        minlength : [3, 'The review must be at least 3 charachters long'] 
    }

}
    ]
    
},
    {timestamps:true}
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;