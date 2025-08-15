import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";

import { ObjectId } from "mongodb";

const ServicesDetails = async ({ params }) => {
  const p = await params;

  const serviceCollection = dbConnect(collectionsNameObj.servicesCollection);
  const query = { _id: new ObjectId(p.id) };
  const service = await serviceCollection.findOne(query);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-300">
        <p className="text-lg">Service not found ❌</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto card lg:card-side bg-base-100 shadow-2xl border border-gray-700 bg-gray-800">
        {/* Image Section */}
        <figure className="lg:w-1/2">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body lg:w-1/2 p-8">
          <h1 className="card-title text-4xl font-bold text-primary">
            {service.title}
          </h1>
          <p className="text-lg mt-2 text-gray-300">{service.description}</p>

          {/* Price */}
          <div className="mt-4">
            <span className="badge badge-primary text-lg px-4 py-3 shadow-md">
              💲 {parseFloat(service.price).toFixed(2)}
            </span>
          </div>

          {/* Facilities */}
          <div className="mt-6 space-y-3">
            <h2 className="text-2xl font-semibold text-secondary">
              Facilities
            </h2>
            <ul className="space-y-2">
              {service.facility?.map((f, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gray-700 rounded-lg flex flex-col shadow hover:shadow-lg transition duration-300"
                >
                  <span className="font-bold text-primary">{f.name}</span>
                  <span className="text-gray-300 text-sm">{f.details}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Book Now 🚗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
