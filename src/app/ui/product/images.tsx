'use client'

import { useState } from "react";

import Image from "next/image";

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
    <section className="max-w-[27rem]">
      <Image
        src={productImages[image] + '.jpg'}
        alt="Product image"
        width={500}
        height={500}
        className="rounded-xl"
        id="img-big"
        priority
      ></Image>
      <div className="flex items-center justify-between pt-7">
        {productImages.map((image) => {
          let src = image + '-thumbnail.jpg';
          return (
            <Image
              src={src}
              alt="Product image"
              width={90}
              height={90}
              className="rounded-xl hover:opacity-30 hover:cursor-pointer border-2 border-transparent "
              id={image}
              onClick={handleClick}
            ></Image>
          )
        })}
      </div>
    </section>
  )
}