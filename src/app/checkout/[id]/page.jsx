import CheckoutForm from "@/app/components/CheckoutForm";
import OrderReview from "@/app/components/OrderReview";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  console.log(p.id, "dynamicId in params", 3);
  const res = await fetch(`http://localhost:3000/api/services/${p?.id}`);

  const service = await res.json();
  console.log(service, "page.jsx", 7);

  return (
    <div>
      <h2>Checkout</h2>
      <div className="md:flex divide-x divide-gray-500 h-screen">
        <div className="w-full h-full">
          <h2>Shipping Address</h2>
          <CheckoutForm />
        </div>
        <div className="w-full h-full">
          <OrderReview service={service} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
