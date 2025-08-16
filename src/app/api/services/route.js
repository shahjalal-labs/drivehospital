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
