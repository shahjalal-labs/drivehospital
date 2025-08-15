// src/lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

export const collectionsNameObj = {
  usersCollection: "users",
  servicesCollection: "services",
  bookingsCollection: "bookings",
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default function dbConnect(collectionName) {
  return client.db(process.env.DB_NAME).collection(collectionName);
}
