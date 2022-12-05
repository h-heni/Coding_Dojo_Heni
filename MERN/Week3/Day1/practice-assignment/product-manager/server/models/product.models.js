const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
	title: {
        type : String,
        required : [true,'Setup is required'],
        minlength : [2, 'Setup must be at least 2 charachters long'] 
    },
	price: {
        type : Number,
        required : [true,'price is required'],
    },
	description: {
        type : String,
        required : [true,'punchline is required'],
        minlength : [3, 'punchline must be at least 3 charachters long'] 
    },
},
    {timestamps:true}
);

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;