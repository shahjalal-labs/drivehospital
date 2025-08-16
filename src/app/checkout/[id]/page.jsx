import CheckoutForm from "@/app/components/CheckoutForm";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  console.log(p.id, "dynamicId in params", 3);
  const res = await fetch(`http://localhost:3000/api/services/${p?.id}`);

  const service = await res.json();
  console.log(service, "page.jsx", 7);

  return (
    <div>
      <h2>CheckoutDetails</h2>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
