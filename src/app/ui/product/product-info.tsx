import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-8 w-2/5">
        <div className="flex flex-col gap-4">
          <p className="uppercase text-orange text-sm font-extrabold le tracking-widest">Sneaker Company</p>
          <p className="text-[2.75rem] leading-tight lin font-bold">Fall Limited Edition Sneakers</p>
        </div>
        <p className="text-md text-dark-grayish-blue font-medium">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-5">
            <p className="text-3xl font-bold">$125.00</p>
            <p className="bg-pale-orange w-fit h-fit py-0.5 px-2 text-orange font-extrabold text-md rounded-md">50%</p>
          </div>
          <p className="line-through text-grayish-blue font-bold text-md">$250.00</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center relative">
            <FaMinus className="absolute left-3 text-orange" />
            <input type="number" name="qtt" id="qtt" placeholder="0" className="text-center w-36 h-12 font-bold placeholder-black bg-light-grayish-blue rounded-lg" />
            <FaPlus className="absolute right-3 text-orange" />
          </div>
          <button className="flex items-center justify-center gap-3 bg-orange w-56 h-12 rounded-lg text-white text-sm font-semibold shadow-2xl shadow-orange">
            <Image
              src={'/images/icon-cart.svg'}
              alt="Icon cart"
              width={15}
              height={15}
              className=""
            ></Image>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
  )
}