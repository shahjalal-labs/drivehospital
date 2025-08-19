import BookingUpdateForm from "../components/BookingUpdateForm";

const BookingUpdate = async ({ params }) => {
  const { bookingId } = await params;

  // Fetch booking details
  const res = await fetch(`http://localhost:3000/api/my-bookings/${bookingId}`);
  const bookingData = await res.json();
  const { data: booking } = bookingData;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-2xl font-bold">Booking Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">
        Update Booking
      </h1>

      <BookingUpdateForm booking={booking} />
    </div>
  );
};

export default BookingUpdate;
