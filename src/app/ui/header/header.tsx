'use client'

import Image from "next/image";
import NavBar from "./nav-bar";
import Cart from "../cart/cart";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <section className="flex items-center justify-between border border-grayish-blue border-t-0 border-x-0">
      <div className="flex gap-12">
        <Image
          src={"/images/logo.svg"}
          alt="Logo Sneakers"
          width={130}
          height={130}
          className="pt-9 pb-10 border-b-8 border-transparent"
        ></Image>
        <NavBar />
      </div>
      <div className="flex items-center justify-between gap-12 relative">
        {/* <Image
          src={"/images/icon-cart.svg"}
          alt="Icon cart"
          width={20}
          height={20}
          className="cursor-pointer hover:font-bold"
          onClick={openCart}
        ></Image> */}
        <IoCartOutline className="text-[1.75rem] text-dark-grayish-blue hover:font-bold cursor-pointer" onClick={openCart} />
        {cartOpen && (
          <Cart />
        )}
        <div>
          <Image
            src={"/images/image-avatar.png"}
            alt="Avatar image"
            width={50}
            height={50}
            className="cursor-pointer rounded-full border-2 border-transparent hover:border-orange"
          ></Image>
        </div>
      </div>
    </section>
  )
}