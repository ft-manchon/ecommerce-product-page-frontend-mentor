import { ReactEventHandler } from "react";

export default function CheckoutBtn({ onclick }: { onclick: ReactEventHandler }) {
  return (
    <button
      className="flex items-center justify-center gap-3 bg-orange w-full h-12 rounded-lg text-white text-sm font-semibold hover:opacity-60 mb-2"
      onClick={onclick}
    >
      <p>Checkout</p>
    </button>
  )
}