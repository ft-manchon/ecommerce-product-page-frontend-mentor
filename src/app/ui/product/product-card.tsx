import Images from "./images";
import ProductInfo from "./product-info";

export default function ProductCard() {
  return (
    <div className="py-16 flex items-center justify-center gap-36 m-auto">
      <Images />
      <ProductInfo />
    </div>
  )
}