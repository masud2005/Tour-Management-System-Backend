
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



// Termination Signal
process.on("SIGTERM", (err) => {
    console.log("SIGTERM signal received... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})

// Interrupt Signal
process.on("SIGINT", (err) => {
    console.log("SIGINT signal received... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})

// Unhandled Rejection Handle
process.on("unhandledRejection", (err) => {
    console.log("Unhandled rejection detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }

    process.exit(1);
})
// Promise.reject(new Error("I forgot to catch this promise"));

// Uncaught Exception Handle
process.on("uncaughtException", (err) => {
    console.log("Uncaught exception detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})
// throw new Error("I forgot to handle this local error");