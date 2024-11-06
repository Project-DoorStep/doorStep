import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Seller',
        required:true,    
    },
    products:[
        {
            product: {   
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quatity:{
                type:Number, 
                required:true,
                min:1
            }
        }]
},{
    timestamps: true
})

export const Order = model("Order", orderSchema)