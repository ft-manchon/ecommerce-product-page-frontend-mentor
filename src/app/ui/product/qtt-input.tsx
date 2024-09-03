'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function QttInput() {
  const [qtt, setQtt] = useState(0);

  const incrementQtt = () => {
    setQtt(qtt + 1);
  }

  const decrementQtt = () => {
    if (qtt > 0) {
      setQtt(qtt - 1);
    }
  }
  return (
    <div className="flex items-center relative">
      <FaMinus className="absolute left-3 text-orange cursor-pointer" onClick={decrementQtt} />
      <input type="number" name="qtt" id="qtt" placeholder="0" className="text-center w-36 h-12 font-bold placeholder-black bg-light-grayish-blue rounded-lg" itemID="qtt-input" value={qtt} />
      <FaPlus className="absolute right-3 text-orange cursor-pointer" id="increment" onClick={incrementQtt} />
    </div>
  )
}