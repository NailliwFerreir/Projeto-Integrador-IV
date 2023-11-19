import { useEffect, useState } from "react";

export default function InputQuantityCom({
  calculateAgain = () => {},
  productQuantity,
  productId,
}) {
  const [quantity, setQuantity] = useState(productQuantity);
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateQuantity = () => {
    console.log("updateQuantity", quantity);
    const cartData = localStorage.getItem("cart");
    const cart = cartData === null ? [] : JSON.parse(cartData);
    const existentProduct = cart.find((item) => item.id === productId);
    const cartFilter = cart.filter((item) => item.id !== productId);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cartFilter, { ...existentProduct, quantity }])
    );
    calculateAgain();
  };

  useEffect(() => {
    updateQuantity();
  }, [quantity]);

  return (
    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={decrement}
          type="button"
          className="text-base text-qgray"
        >
          -
        </button>
        <span className="text-qblack">{quantity}</span>
        <button
          onClick={increment}
          type="button"
          className="text-base text-qgray"
        >
          +
        </button>
      </div>
    </div>
  );
}
