import mongoose from 'mongoose';

export const dbConnection = async () => {
    const mongoConnection: string = process.env.MONGODB_CNN || 'mongodb://localhost:27017';
    try {
        await mongoose.connect(mongoConnection);
        console.log('DB is online');

    } catch (error) {
        console.log(error);
        throw new Error('Error while starting connection');
    }
}