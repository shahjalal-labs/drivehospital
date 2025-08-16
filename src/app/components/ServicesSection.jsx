import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import ServiceCard from "./ServiceCard";

const ServicesSection = async () => {
  // const servicesCollection = dbConnect(collectionsNameObj.servicesCollection);
  const res = await fetch("http://localhost:3000/api/services");

  const services = await res.json();
  console.log(services, "ServicesSection.jsx", 6);
  return (
    <div>
      <h1>Services Section</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
