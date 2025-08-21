"use server";
import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const userCollection = dbConnect(collectionsNameObj.usersCollection);

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // const isPasswordOK = await bcrypt.compare(user.password, password);
  const isPasswordOK = await bcrypt.compare(password, user.password);
  console.log(isPasswordOK, "loginUser.js", 16);

  if (!isPasswordOK) return null;

  return user;
};
