const CheckoutForm = async () => {
  const res = await fetch(
    `http://localhost:3000/api/services/689f11742d5a28fe72a39ec5`,
  );
  const serviceData = await res.json();

  const { data: service } = serviceData;
  console.log(service, "CheckoutForm.jsx", 7);

  return (
    <div>
      <h2>{service.title}</h2>
    </div>
  );
};

export default CheckoutForm;
