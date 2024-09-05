'use client'

import { createContext, ReactNode, useContext, useState } from "react";


interface CartProviderProps {
  children: ReactNode;
}
interface CartContextType {
  cartItems: any[];
  addToCart: (product: any) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children } : CartProviderProps) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if(!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
