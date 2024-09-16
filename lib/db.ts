import mongoose, { Connection } from "mongoose";

let isConnected: Connection | null = null;

const connectDB = async (): Promise<Connection | null> => {
    if (isConnected) {
        console.log("Mongodb already connected");
        return isConnected;
    }

    if (mongoose.connection.readyState === 1) {  // 1 means connected
        console.log("Mongodb already connected");
        isConnected = mongoose.connection;
        return isConnected;
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI environment variable is not defined");
    }

    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        isConnected = res.connection;
        console.log("Mongodb connected.");
        return isConnected;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        return null;
    }
}

export default connectDB;
