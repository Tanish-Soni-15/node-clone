import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title:{type:String,required:true},
    description: {type:String,required:[true,'description is important for health']},
    price: {type:Number,min:[0,'Price of an product is not negative']},
    category:String,
    discountPercentage: Number,
    rating: Number,
    image: {type:String,required:true},
    rating:{
        rate:Number,
        count:Number
    }
});
const Product=mongoose.model('Product',productSchema)
export {Product};