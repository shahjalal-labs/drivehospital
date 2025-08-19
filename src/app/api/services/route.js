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
    body,
  );
  console.log(res, "[1;31mres in route.js at line 23[0m");
  return NextResponse.json(res);
};
