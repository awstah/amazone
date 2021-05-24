import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      {/**top header */}
      <div className="bg-amazon_blue p-1  flex-grow flex items-center py-2">
        <div className="flex flex-grow items-center sm:flex-grow-0 mt-2">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width="150"
            height="40"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 h-10 flex-grow rounded-md hidden sm:flex items-center">
          <input
            type="text"
            className="p-2 h-full flex-grow focus:outline-none rounded-l-md flex-shrink"
          />
          <button>
            <SearchIcon className="h-12 p-4 cursor-pointer" />
          </button>
        </div>

        <div className="text-white flex space-x-6 items-center text-xs mx-6">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello ${session.user.name}` : "Signin"}</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 sm:right-7 md:right-10 bg-yellow-400 text-black h-4 w-4 rounded-full flex items-center justify-center">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden sm:flex font-bold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/**searchbar */}

      {/**Nav */}
      <nav className="bg-amazon_blue-light text-gray-50 p-2 text-sm flex items-center space-x-4">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazone Bussiness</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </nav>
    </header>
  );
}

export default Header;
