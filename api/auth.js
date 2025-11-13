import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  await client.connect();
  const db = client.db("expenseTrackerDB");
  const users = db.collection("users");

  if (req.method === "POST") {
    const { email, password, action } = req.body;

    if (action === "register") {
      const hashed = await bcrypt.hash(password, 10);
      await users.insertOne({ email, password: hashed });
      return res.status(201).json({ message: "User created" });
    }

    if (action === "login") {
      const user = await users.findOne({ email });
      if (!user) return res.status(401).json({ message: "User not found" });
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ message: "Invalid password" });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      return res.json({ token });
    }
  }
  res.status(400).json({ message: "Bad request" });
}
