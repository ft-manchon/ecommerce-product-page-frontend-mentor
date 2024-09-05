import { useCart } from "../cart/cart-context";

export default function Cart() {
  const { cartItems, cartCount } = useCart();

  return (
    <div className="absolute w-72 h-fit top-14 -right-4 bg-white rounded-lg shadow-2xl shadow-grayish-blue">
      <p className="text-sm border-b border-grayish-blue p-4 font-bold">Cart ({cartCount})</p>
      <div className="flex items-center justify-center h-36 align-middle">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-bold text-sm text-dark-grayish-blue m-auto">Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}