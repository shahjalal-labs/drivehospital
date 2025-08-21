"use server";
import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionsNameObj.usersCollection);

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
};
