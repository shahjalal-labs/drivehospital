//src/app/api/services/route.js
import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const services = await dbConnect(collectionsNameObj.servicesCollection)
    .find()
    .toArray();
  console.log(services, "route.js", 5);
  return NextResponse.json({
    success: true,
    status: 200,
    data: services,
  });
};

export const POST = async (request) => {
  const body = await request.json();
  console.log(body, "body route.js", 20);

  //w: add document to bookings collection
  const res = await dbConnect(collectionsNameObj.bookingsCollection).insertOne(
console.log(res, '/home/sj/Downloads/drivehospital/src/app/api/services/route.js', 23);
    body,
  );
  return NextResponse.json(body);
};
