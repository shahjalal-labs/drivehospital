"use client";

export default function OrderReview({ service }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-gray-200">
      <h3 className="text-xl font-semibold text-white mb-4">
        Review Your Order
      </h3>

      <img
        src={service.img}
        alt={service.title}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />

      <h4 className="text-2xl font-bold text-purple-400 mb-2">
        {service.title}
      </h4>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {service.description}
      </p>

      <p className="text-lg font-semibold text-white mb-4">
        Price: <span className="text-green-400">${service.price || 300}</span>
      </p>

      <div className="space-y-2 mb-6">
        <h5 className="font-semibold text-white">Facilities:</h5>
        {service.facility?.map((f, idx) => (
          <div
            key={idx}
            className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <p className="font-medium text-purple-300">{f.name}</p>
            <p className="text-sm text-gray-400">{f.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
