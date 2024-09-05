import Image from "next/image";
import { ReactEventHandler } from "react";
import { IoCartOutline } from "react-icons/io5";

export default function BtnAddToCart({ onclick }: { onclick: ReactEventHandler }) {
  return (
    <button className="flex items-center justify-center gap-3 bg-orange w-full  h-12 rounded-lg text-white text-sm font-semibold shadow-2xl shadow-orange hover:opacity-60" onClick={onclick}>
      {/* <Image
        src={'/images/icon-cart.svg'}
        alt="Icon cart"
        width={15}
        height={15}
        className=""
      ></Image> */}
      <IoCartOutline className="text-xl" />
      <p>Add to cart</p>
    </button>
  )
}