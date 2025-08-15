import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";

const ServicesSection = () => {
  const servicesCollection = dbConnect(collectionsNameObj.servicesCollection);
  const services = servicesCollection.find().toArray();
  console.log(services, "ServicesSection.jsx", 6);
  return (
    <div>
      <h1>Services Section</h1>
    </div>
  );
};

export default ServicesSection;
