import { MongoClient, ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  await client.connect();
  const db = client.db("expenseTrackerDB");
  const collection = db.collection("transactions");

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  let userId;
  try { userId = jwt.verify(token, process.env.JWT_SECRET).id; } 
  catch { return res.status(401).json({ message: "Invalid token" }); }

  if (req.method === "GET") {
    const transactions = await collection.find({ userId }).toArray();
    return res.json(transactions);
  }

  if (req.method === "POST") {
    const { amount, type, category, date } = req.body;
    await collection.insertOne({ userId, amount, type, category, date });
    return res.status(201).json({ message: "Transaction added" });
  }

  res.status(400).json({ message: "Bad request" });
      }
