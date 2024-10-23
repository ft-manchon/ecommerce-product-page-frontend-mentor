'use client'

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Images() {
  const [image, setImage] = useState("./images/image-product-1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const productImages = [
    './images/image-product-1',
    './images/image-product-2',
    './images/image-product-3',
    './images/image-product-4'
  ]

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1));
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <section className="sm:max-w-[27rem] lg:min-w-[27rem] sm:py-8">
      <div className="relative w-full h-1/4">
        <button className="absolute top-1/2 left-4 bg-white rounded-full w-9 h-9 flex items-center justify-center sm:hidden" onClick={previousImage}>
          <IoIosArrowForward className="text-xl rotate-180 pl-[0.1rem]" />
        </button>
        <Image
          src={productImages[currentIndex] + '.jpg'}
          alt="Product image"
          width={500}
          height={250}
          className="w-full sm:rounded-xl sm:hidden"
          id="img-big"
          priority
        ></Image>
        <Image
          src={image + '.jpg'}
          alt="Product image"
          width={500}
          height={500}
          className="hidden sm:block w-full sm:rounded-xl"
          id="img-big"
          priority
        ></Image>
        <button className="absolute top-1/2 right-4 bg-white rounded-full w-9 h-9 flex items-center justify-center sm:hidden" onClick={nextImage}>
          <IoIosArrowForward className="text-xl pl-[0.1rem]" />
        </button>
      </div>
      <div className="flex items-center justify-between pt-7">

        {productImages.map((image, index) => {
          let src = image + '-thumbnail.jpg';
          return (
            <Image
              src={src}
              key={index}
              alt={"Product thumbnail " + (index + 1)}
              width={90}
              height={90}
              className="hidden sm:block rounded-xl hover:opacity-30 hover:cursor-pointer border-2 border-transparent "
              id={image}
              onClick={() => setImage(image)}
            ></Image>
          )
        })}

      </div>
    </section>
  )
}