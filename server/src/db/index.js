import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO.URI}/${DB_NAME}`);
        console.log(`MONGO DB CONNECTED :: DB HOST :: ${connectionInstance.connection.host} :: PORT :: ${connectionInstance.connection.port} :: NAME :: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log(error)
    }
    
}

const {Schema} = mongoose;

const userSchema = new Schema({
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
        default: 'user'
    },
    address:{
        type: String,
        required:true,
    }
})

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

})

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        
    },
    description:String,
    price:{
        type:Number,
        required:true,
        min:1
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller",
        required:true,
    }
})

const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Seller',
        required:true
,    },
products:[{
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    quatity:{type:Number, required:true,min:1}
}]
})


const User = mongoose.model("User", userSchema);
const Seller = mongoose.model("Seller", sellerSchema)
const Product = mongoose.model("Product",productSchema);
const Order = mongoose.model("Order",orderSchema);

export default connectDB;
export { User, Seller, Product, Order}
