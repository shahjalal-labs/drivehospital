import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const bookingDetails = await dbConnect(
      collectionsNameObj.bookingsCollection,
    ).findOne({ _id: new ObjectId(id) });
    console.log(
      bookingDetails,
      "[1;31mbookingDetails in route.js at line 8[0m",
    );
  } catch (error) {
    console.log(error, "[1;31merror in route.js at line 10[0m");
    return NextResponse.json({
      success: false,
      status: 400,
      data: error,
    });
  }
}
