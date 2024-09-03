import Images from "./images";
import ProductInfo from "./product-info";

export default function ProductCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center m-auto h-full pb-16 lg:pb-0 lg:gap-24">
      <Images />
      <ProductInfo />
    </div>
  )
}