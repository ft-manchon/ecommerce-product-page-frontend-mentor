import Header from "./ui/header/header";
import ProductCard from "./ui/product/product-card";

export default function Home() {
  return (
    <main className="bg-white h-screen px-36">
      <Header />
      <ProductCard />
    </main>
  );
}
