const BookingUpdate = async ({ params }) => {
  const p = await params;
  console.log(p.bookingId, "dynamicId in params", 3);

  const res = await fetch(`http://localhost:3000/api/my-bookings/:id`);

  const bookingData = await res.json();

  const { data: booking } = bookingData;
  console.log(booking, "[1;31mbooking in page.jsx at line 10[0m");

  return (
    <div>
      <h2>BoongUpdate</h2>
    </div>
  );
};

export default BookingUpdate;
