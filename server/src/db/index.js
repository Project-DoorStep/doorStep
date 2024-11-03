import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO.URI}/${DB_NAME}`);
        console.log(`MONGO DB CONNECTED :: DB HOST :: ${connectionInstance.connection.host} :: PORT :: ${connectionInstance.connection.port} :: NAME :: ${connectionInstance.connection.name}`);
    } catch (error) {
        
    }

    //errors 
    // console.log(`MONGODB CONNECTION FAILED :: ${error}`);
    // process.exit(1);
}

export default connectDB;
