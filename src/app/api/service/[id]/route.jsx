import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log(request?.nextUrl, "route.jsx", 6);
  const { id } = await params;
  console.log(id, "route.jsx", 3);

  const service = await dbConnect(
    collectionsNameObj.servicesCollection,
  ).findOne({ _id: ObjectId(id) });

  console.log(service, "route.jsx", 9);
  NextResponse.json({
    success: true,
    status: 200,
    data: service,
  });
}
