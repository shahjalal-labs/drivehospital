import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-300 overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-indigo-400 mb-2">
          {service.title}
        </h2>
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-indigo-300 font-semibold text-lg badge badge-primary badge-outline">
            ${service.price}
          </span>
          <button className="px-4 py-2 text-white text-sm transition btn btn-info btn-outline rounded-full">
            <Link href={`/services/${service._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
