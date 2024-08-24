import Image from "next/image";

export default function Images() {
  const productImages = [
    'product-1',
    'product-2',
    'product-3',
    'product-4'
  ]
  return (
    <section className="max-w-md">
      <Image
        src={'/images/image-product-1.jpg'}
        alt="Product image"
        width={500}
        height={500}
        className="rounded-xl"
      ></Image>
      <div className="flex items-center justify-between pt-6">
        {productImages.map((image) => {
          let src = '/images/image-' + image + '-thumbnail.jpg'
          return (
            <Image
              src={src}
              alt="Product image"
              width={80}
              height={80}
              className="rounded-xl"
            ></Image>

          )
        })}
      </div>
    </section>
  )
}