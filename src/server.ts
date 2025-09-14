
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
const port = 5000;

let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://todoApp:todoApp@cluster0.cckud.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Connected to DB!");

        server = app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
