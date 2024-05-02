import { MongoClient } from "mongodb";
export async function connectDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://zoekangdeveloper:ix3MHhPLXuDXcjaT@schedules.hbxstud.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Schedules"
  );

  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: {}
) {
  const db = client.db();
  const result = await db.collection(collection).insertOne({ document });
  return result;
}

export async function getAllDocument(
  client: MongoClient,
  collection: string,
  sort: {},
  filter = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}
