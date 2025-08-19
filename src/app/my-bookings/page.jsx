import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

const MyBookings = async () => {
  const bookingCollection = dbConnect(collectionsNameObj.bookingsCollection);
  const bookings = await bookingCollection.find().toArray();
  // console.log(bookings, "page.jsx", 8);

  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      {/* Deep Ocean Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max--6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-cyan-300 mb-8">My Bookings</h1>

        <div className="overflow-x-auto rounded-2xl shadow-lg shadow-cyan-900/40">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gradient-to-r from-cyan-900 to-slate-900 text-cyan-200">
              <tr>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-800">
              {bookings.map((b) => (
                <tr
                  key={b._id.toString()}
                  className="hover:bg-cyan-900/30 transition"
                >
                  {/* Service Image + Name */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={b.serviceImg}
                      alt={b.serviceName}
                      className="w-12 h-12 object-cover rounded-lg border border-cyan-700"
                    />
                    <span>{b.serviceName}</span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-cyan-300 font-semibold">
                    ${b.servicePrice}
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div>
                      <p>{b.name}</p>
                      <p className="text-xs text-cyan-400">{b.email}</p>
                    </div>
                  </td>

                  {/* City */}
                  <td className="px-6 py-4">{b.city}</td>

                  {/* Actions */}
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <Link
                      href={`my-bookings/${b._id}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 transition text-white shadow-md shadow-cyan-900/50"
                    >
                      Update
                    </Link>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 transition text-white shadow-md shadow-red-900/50">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
