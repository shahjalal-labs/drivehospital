import Link from "next/link";

const ServicesDetails = async ({ params }) => {
  const p = await params;

  // const res = await fetch(`http://localhost:3000/api/services/${p?.id}`);
  const res = await fetch(
    `https://drivehospital.vercel.app/api/services/${p?.id}`,
  );
  const servicedata = await res.json();

  const { data: service } = servicedata;
  console.log(service, "service page.jsx", 6);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-300">
        <p className="text-lg">Service not found ❌</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 shadow-2xl rounded-lg overflow-hidden">
        {/* Image */}
        <div className="w-full">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-primary">{service.title}</h1>
          <p className="mt-3 text-gray-300">{service.description}</p>

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
                  className="p-4 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <span className="font-bold text-primary">{f.name}</span>
                  <span className="block text-gray-300 text-sm">
                    {f.details}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-end">
            <Link
              href={`/checkout/${p.id}`}
              className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Book Now 🚗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
