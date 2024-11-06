import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
    type: String,
    required: true,
    },
    description: {
    type: String,
    required: true,
    },
    price: {
    type: Number,
    required: true,
    min: 1
},
    stock: {
    type: Number,
    required: true,
    min: 0
},
    seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
} 
}, {
    timestamps: true
})

export const Product = model("Product", productSchema)