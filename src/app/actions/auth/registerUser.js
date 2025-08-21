"use server";
import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionsNameObj.usersCollection);

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
  return null;
};
