import CheckoutForm from "@/app/components/CheckoutForm";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  console.log(p.id, "dynamicId in params", 3);
  const res = await fetch(`http://localhost:3000/api/services/${p?.id}`);

  const service = await res.json();
  console.log(service, "page.jsx", 7);

  return (
    <div>
      <h2>Checkout</h2>
      <div className="flex ">
        <div className="w-full">
          <h2>Shipping Address</h2>
          <CheckoutForm />
        </div>
        <div className="w-full">
          <h2>Review your order</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
