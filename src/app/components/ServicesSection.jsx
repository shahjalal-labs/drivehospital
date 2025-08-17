import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import ServiceCard from "./ServiceCard";

const ServicesSection = async () => {
  const servicesCollection = dbConnect(collectionsNameObj.servicesCollection);
  const services = await servicesCollection.find().toArray();
  console.log(services, "ServicesSection.jsx", 6);
  return (
    <div>
      <h1>Services Section</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
