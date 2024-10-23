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
  addToCart: (product: CartItem, qtt: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem, qtt: number) => {
    const itemInCart = cartItems.find(item => item.id === product.id);

    if (itemInCart) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, qtt: item.qtt + qtt } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, {...product, qtt}]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id != id));
  }

  const cartCount = cartItems.reduce((count, item) => count + item.qtt, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
