import Image from "next/image";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <section className="flex items-center justify-between py-6 border border-grayish-blue border-t-0 border-x-0">
      <div className="flex gap-12">
        <Image
          src={"/images/logo.svg"}
          alt="Logo Sneakers"
          width={130}
          height={130}
        ></Image>
        <NavBar />
      </div>
      <div className="flex items-center justify-between gap-12">
        <Image
          src={"/images/icon-cart.svg"}
          alt="Icon cart"
          width={20}
          height={20}
        ></Image>
        <div>
          <Image
            src={"/images/image-avatar.png"}
            alt="Avatar image"
            width={45}
            height={45}
          ></Image>
        </div>
      </div>
    </section>
  )
}