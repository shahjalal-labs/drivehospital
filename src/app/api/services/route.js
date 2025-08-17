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
  console.log(request, " request route.js", 18);
  const body = await request.json();
  console.log(body, "body route.js", 20);
};
