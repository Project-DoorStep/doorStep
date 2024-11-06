import { Schema, model } from "mongoose";

const sellerSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength:30
    },
    role: {
        type: String,
        enum: ['user', 'seller','admin'],
        default: 'seller'
    },
    address:{
        type: String,
        required:true,
    },
}, {
    timestamps: true
})

export const Seller = model("Seller", sellerSchema)