const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
        type : String,
        required : [true,'Setup is required'],
        minlength : [10, 'Setup must be at least 10 charachters long'] 
    },
	punchline: {
        type : String,
        required : [true,'punchline is required'],
        minlength : [3, 'punchline must be at least 3 charachters long'] 
    },
},
    {timestamps:true}
);

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;