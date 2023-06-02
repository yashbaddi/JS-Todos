import { MongoClient } from "mongodb";

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1";

const client = new MongoClient(uri);

client.connect().then(() => {
  const db = client.db("todoDB");
  const collection = db.collection("todos");
});

export default client;
