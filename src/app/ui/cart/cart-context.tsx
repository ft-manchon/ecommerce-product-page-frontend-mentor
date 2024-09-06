'use client'

import { createContext, ReactNode, useContext, useState } from "react";


interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  qtt: number;
  totalPrice: number;
  imageSrc: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children } : CartProviderProps) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id != id));
  }

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
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
