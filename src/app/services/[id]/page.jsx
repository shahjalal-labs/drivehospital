import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";

const ServicesDetails = async ({ params }) => {
  const p = await params;

  const serviceCollection = dbConnect(collectionsNameObj.servicesCollection);
  console.log(p.id, "dynamicId in params", 3);

  const datas = serviceCollection.findOne({ _id: p.id });

  return (
    <div>
      <h2>ServicesDetails</h2>
      {JSON.stringify(datas)}
    </div>
  );
};

export default ServicesDetails;
