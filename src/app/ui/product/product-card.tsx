import Images from "./images";
import ProductInfo from "./product-info";

export default function ProductCard() {
  return (
    <div className="flex items-center justify-center gap-32 m-auto h-5/6">
      <Images />
      <ProductInfo />
    </div>
  )
}