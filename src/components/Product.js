import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function Product({ id, title, price, category, image, description }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute right-2 top-2 italic text-gray-400">{category}</p>

      <Image src={image} width="200" height="200" objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-4 text-yellow-400" />
          ))}
      </div>

      <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="-mt-5 flex items-center">
          <img className="w-14" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Next day free delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
