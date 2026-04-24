const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'studentDB';

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        const students = db.collection('students');

        const insertResult = await students.insertOne({name: "John Doe", age: 20, grade: "A"});
        console.log("Inserted document:", insertResult.insertedId);

        const data = await students.find().toArray();
        console.log("All students:", data);

        const updateResult = await students.updateOne({name: "John Doe"}, {$set: {grade: "A+"}});
        console.log("Updated document count:", updateResult.modifiedCount);

        const deleteResult = await students.deleteOne({name: "John Doe"});
        console.log("Deleted document count:", deleteResult.deletedCount);



    } catch (err) {
        console.error(err);
    }

    finally {
        await client.close();
        console.log("Connection closed");
    }

}

run();


