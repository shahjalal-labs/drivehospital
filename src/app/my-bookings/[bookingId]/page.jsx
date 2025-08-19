const BookingUpdate = async ({ params }) => {
  const p = await params;
  console.log(p.bookingId, "dynamicId in params", 3);

  return (
    <div>
      <h2>BoongUpdate</h2>
    </div>
  );
};

export default BookingUpdate;
