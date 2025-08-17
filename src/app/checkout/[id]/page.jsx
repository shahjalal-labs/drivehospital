import CheckoutForm from "@/app/components/CheckoutForm";
import OrderReview from "@/app/components/OrderReview";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  console.log(p.id, "dynamicId in params", 3);
  // const res = await fetch(`http://localhost:3000/api/services/${p?.id}`);
  const res = await fetch(
    `https://drivehospital.vercel.app/api/services/${p?.id}`,
  );

  const serviceData = await res.json();
  const { data: service } = serviceData;

  return (
    <div>
      <div className="md:flex divide-x divide-gray-500 ">
        <div className="w-full ">
          <CheckoutForm service={service} />
        </div>
        <div className="w-full ">
          <OrderReview service={service} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
