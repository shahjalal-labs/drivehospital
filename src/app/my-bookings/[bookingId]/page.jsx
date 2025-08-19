import BookingUpdateForm from "../components/BookingUpdateForm";

const BookingUpdate = async ({ params }) => {
  const p = await params;

  const res = await fetch(
    `http://localhost:3000/api/my-bookings/${p.bookingId}`,
  );

  const bookingData = await res.json();

  const { data: booking } = bookingData;
  console.log(booking, "[1;31mbooking in page.jsx at line 10[0m");

  return (
    <div>
      <h2>BoongUpdate</h2>
      <BookingUpdateForm />
    </div>
  );
};

export default BookingUpdate;
