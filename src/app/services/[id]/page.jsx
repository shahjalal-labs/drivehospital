const ServicesDetails = async ({ params }) => {
  const p = await params;
  console.log(p.id, "dynamicId in params", 3);

  return (
    <div>
      <h2>ServicesDetails</h2>
    </div>
  );
};

export default ServicesDetails;
