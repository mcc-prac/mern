const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        
        const db = client.db(dbName);
        console.log(`Database "${dbName}" created/selected`);
        
        const collectionName = 'myCollection';
        const collection = db.collection(collectionName);
        console.log(`Collection "${collectionName}" created/selected`);
        
        const data = [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Doe', age: 40 }
        ];
        
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents inserted successfully`);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

main().catch(console.error);
