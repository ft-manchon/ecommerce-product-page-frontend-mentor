export default function Cart() {
  return (
    <div className="absolute w-72 h-fit top-14 -right-4 bg-white rounded-lg shadow-2xl shadow-grayish-blue">
      <p className="text-sm border-b border-grayish-blue p-4 font-bold">Cart</p>
      <div className="flex items-center justify-center h-36 align-middle">
        <p className="font-bold text-sm text-dark-grayish-blue m-auto">Your cart is empty.</p>
      </div>
    </div>
  )
}