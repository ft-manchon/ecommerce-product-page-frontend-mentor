import Image from "next/image";
import RemoveFromCart from "../buttons/btn-delete";
import { useCart } from "../cart/cart-context";
import CheckoutBtn from "../buttons/btn-checkout";

export default function Cart() {
  const { cartItems, cartCount, removeFromCart } = useCart();

  return (
    <div className="absolute min-w-[21rem] w-fit h-max top-11 -right-4 bg-white rounded-lg shadow-2xl shadow-grayish-blue z-50">
      <p className="text-sm border-b border-grayish-blue p-4 font-bold">Cart ({cartCount})</p>
      <div className="flex items-center justify-center min-h-36 h-fit align-middle p-4">
        {cartItems.length > 0 ? (
          <ul className="flex flex-col gap-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-2 text-[0.95rem]"
              >
                <Image
                  src={item.imageSrc}
                  key={index}
                  alt={"Product thumbnail " + (index + 1)}
                  width={54}
                  height={54}
                  className="rounded-lg hover:opacity-30 hover:cursor-pointer border-2 border-transparent "
                ></Image>
                <div className="flex flex-col justify-between h-full gap-1">
                  <p className="text-dark-grayish-blue">{item.title}</p>
                  <div className="flex gap-2">
                    <p className=" text-dark-grayish-blue">${item.price}.00 x {3}</p>
                    <p className="font-bold">${item.price*3}.00</p>
                  </div>
                </div>
                <RemoveFromCart onclick={() => removeFromCart(item.id)} />
              </li>
            ))}
            <CheckoutBtn />
          </ul>
        ) : (
          <p className="font-bold text-sm text-dark-grayish-blue m-auto">Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}