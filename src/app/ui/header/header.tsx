'use client'

import Image from "next/image";
import NavBar from "./nav-bar";
import Cart from "../cart/cart";
import { IoCartOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <section className="flex items-center justify-between border-0 border-grayish-blue sm:border sm:border-t-0 sm:border-x-0 px-4 py-5 sm:py-0">
      <div className="flex items-center gap-4 py-0 md:gap-12">
      <RiMenuFill className="w-fit h-5 sm:hidden" />
        <Image
          src={"/images/logo.svg"}
          alt="Logo Sneakers"
          width={130}
          height={130}
          className="md:py-6 md:border-b-2 md:border-transparent"
        ></Image>
        <NavBar />
      </div>
      <div className="flex items-center justify-between gap-4 md:gap-12 relative">
        <IoCartOutline className="text-[1.5rem] sm:text-[1.75rem] text-dark-grayish-blue hover:font-bold cursor-pointer" onClick={openCart} />
        {cartOpen && (
          <Cart />
        )}
        <div>
          <Image
            src={"/images/image-avatar.png"}
            alt="Avatar image"
            width={30}
            height={30}
            className="sm:w-12 cursor-pointer rounded-full border-2 border-transparent hover:border-orange"
          ></Image>
        </div>
      </div>
    </section>
  )
}