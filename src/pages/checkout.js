import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { session } from "next-auth/client";
import Currency from "react-currency-formatter";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="md:flex max-w-screen-xl mx-auto ">
        {/**left */}
        <div className="flex-grow m-5 shadow-sm bg-white p-10">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col space-y-10 ">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0
                ? "Your Amazone Basket is empty."
                : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                rating={item.rating}
                title={item.title}
                price={item.price}
                category={item.category}
                image={item.image}
                description={item.description}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/**Right */}
        <div className="p-10 flex flex-col bg-white shadow-md">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items)
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button
                className={`button  mt-2 ${
                  session &&
                  "from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed"
                } `}
              >
                {session ? "Signin to Checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
