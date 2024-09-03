import QttInput from "./qtt-input";
import BtnAddToCart from "../buttons/btn-add-cart";

const ProductInfoData = {
  label: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  priceFull: 250.00,
  discount: 0.5,
}

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 px-5 sm:px-0 sm:max-w-[27rem]">
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="uppercase text-orange text-[0.765rem] font-extrabold tracking-widest">{ProductInfoData.label}</p>
        <p className="text-3xl sm:text-[2.45rem] leading-none font-bold">{ProductInfoData.title}</p>
      </div>
      <p className="text-[0.95rem] text-dark-grayish-blue font-medium sm:pt-4">{ProductInfoData.text}</p>
      <div className="flex sm:flex-col items-start justify-between gap-[0.08rem]">
        <div className="flex items-center gap-4">
          <p className="text-[1.75rem] font-bold">${ProductInfoData.priceFull - (ProductInfoData.priceFull * (ProductInfoData.discount))}.00</p>
          <p className="bg-pale-orange w-fit h-fit py-0.5 px-2 text-orange font-extrabold text-[0.95rem] rounded-md">{ProductInfoData.discount * 100}%</p>
        </div>
        <p className="line-through text-grayish-blue font-bold text-[0.9rem]">${ProductInfoData.priceFull}.00</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <QttInput />
        <BtnAddToCart />
      </div>
    </div>
  )
}