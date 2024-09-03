import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export default function BtnAddToCart() {
  return (
    <button className="flex items-center justify-center gap-3 bg-orange w-56 h-12 rounded-lg text-white text-sm font-semibold shadow-2xl shadow-orange hover:opacity-60">
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