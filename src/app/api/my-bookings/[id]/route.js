import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const bookingDetails = await dbConnect(
      collectionsNameObj.bookingsCollection,
    ).findOne({ _id: new ObjectId(id) });
    return NextResponse.json({
      success: true,
      status: 200,
      data: bookingDetails,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 400,
      data: error,
    });
  }
}
