const { MongoClient, ObjectId } = require('mongodb');
process.env.MONGODB_URI = 'mongodb://23455810comp7270-lab3:YAJbyqxGbk2cOJiNr8UzoZGGsBr27g40TdeeYPoD9Gsx3Xf8p5O8B3Iy8UOJhjAvoXioHg0w3pVFACDbKEJukQ%3D%3D@23455810comp7270-lab3.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@23455810comp7270-lab3@';
if (!process.env.MONGODB_URI) {
// throw new Error('Please define the MONGODB_URI environment variable inside.env.local');
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
}
// Connect to MongoDB
async function connectToDB() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('bookingsDB');
    db.client = client;
    return db;
}
module.exports = { connectToDB, ObjectId };