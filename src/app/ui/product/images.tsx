'use client'

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


const productImages = [
  '/images/image-product-1',
  '/images/image-product-2',
  '/images/image-product-3',
  '/images/image-product-4'
]
export default function Images() {
  const [image, setImage] = useState(0);

  const handleClick = () => {
    if (image <= productImages.length) {
      setImage(image + 1);
    } else {
      setImage(0)
    }
    console.log(productImages[image]);
  }

  return (
    <section className="sm:max-w-[27rem] lg:min-w-[27rem] sm:py-8">
      <div className="relative w-full h-1/4">
        <div className="absolute top-1/2 left-4 bg-white rounded-full w-9 h-9 flex items-center justify-center sm:hidden">
          <IoIosArrowForward className="text-xl rotate-180 pl-[0.1rem]" />
        </div>
        <Image
          src={productImages[image] + '.jpg'}
          alt="Product image"
          width={500}
          height={500}
          className="w-full sm:rounded-xl"
          id="img-big"
          priority
        ></Image>
        <div className="absolute top-1/2 right-4 bg-white rounded-full w-9 h-9 flex items-center justify-center sm:hidden">
          <IoIosArrowForward className="text-xl pl-[0.1rem]" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-7">
        {productImages.map((image) => {
          let src = image + '-thumbnail.jpg';
          return (
            <Image
              src={src}
              alt="Product image"
              width={90}
              height={90}
              className="hidden sm:block rounded-xl hover:opacity-30 hover:cursor-pointer border-2 border-transparent "
              id={image}
              onClick={handleClick}
            ></Image>
          )
        })}
      </div>
    </section>
  )
}