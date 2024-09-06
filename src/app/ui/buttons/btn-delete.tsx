import { ReactEventHandler } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function RemoveFromCart({ onclick }: { onclick: ReactEventHandler }) {
  return (
    <>
      <button onClick={onclick}>
        <FaTrashAlt className="text-grayish-blue" />
      </button>
    </>
  )
}