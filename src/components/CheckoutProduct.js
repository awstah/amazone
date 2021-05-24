import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  category,
  image,
  description,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      image,
      description,
      hasPrime,
      rating,
    };

    //sending the products as an action to the Redux store ... the basket slice
    dispatch(addToBasket(product));
  };

  const removeItemToBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      <div className="col-span-3">
        <h2 className="font-medium">{title}</h2>
        <span className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="text-yellow-500 h-5" />
            ))}
        </span>
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price} currency="GBP" />

        <span>
          {hasPrime && (
            <div className="flex items-center">
              <img
                className="w-14"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">Next day free delivery</p>
            </div>
          )}
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className="button" onClick={removeItemToBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
