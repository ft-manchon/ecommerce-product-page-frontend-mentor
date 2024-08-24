import Header from "./ui/header/header";
import ProductCard from "./ui/product/product-card";

export default function Home() {
  return (
    <main className="bg-white h-screen pl-32 pr-32">
      <Header></Header>
      <ProductCard />
    </main>
  );
}
