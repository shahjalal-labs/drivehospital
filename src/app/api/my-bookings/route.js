import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  console.log(`router hitted`);
  const bookings = await dbConnect(collectionsNameObj.bookingsCollection)
    .find()
    .toArray();
  console.log(bookings, " route  route.js", 5);
  return NextResponse.json({
    success: true,
    status: 200,
    data: bookings,
  });
};
