import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.log(`Error on Index.js :: ${error}`);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT :: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(`MONGO DB CONNECTION FAILED!!! :: ${error}`);
})