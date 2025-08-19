import dbConnect from "@/lib/dbConnect";

const GET = async () => {
  const bookings = await dbConnect(collectionsNameObj.bookingsCollection)
    .find()
    .toArray();
  console.log(bookings, "route.js", 5);
  return NextResponse.json({
    success: true,
    status: 200,
    data: bookings,
  });
};

export default GET;
