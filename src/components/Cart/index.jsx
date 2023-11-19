import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart({ className, type }) {
  const [totalValue, setTotalValue] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const id = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const styles = {
    productItems: {
      display: "flex",
      flexWrap: "wrap",
      overflowY: "scroll",
      "--space-between-items": "10px",
      display: "flex",
      flexWrap: "wrap",
      overflowY: "scroll",
      "--space-between-items": "10px",
    },
  };
  const cartProductHandler = async () => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log("cart", cart);
      setCartProduct(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalValue = () => {
    let total = 0;
    cartProduct.forEach((cart) => {
      total += (Number(cart.value) * Number(cart.quantity)).toFixed(2);
    });
    setTotalValue(total);
  };

  const deleteHandle = (index) => {
    const array = JSON.parse(localStorage.getItem("cart") || "[]");
    array.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(array));
  };

  useEffect(() => {
    cartProductHandler();
    calculateTotalValue();
  }, []);

  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`w-[300px] bg-white border-  t-[3px] ${
          type === 3 ? "border-qh3-blue" : "cart-wrappwer"
        }  ${className || ""}`}
      >
        <div className="w-full h-full">
          <ul className="product-items overflow-y-scroll">
            {cartProduct?.length > 0 &&
              cartProduct.map((carts, index) => (
                <li
                  className="w-full h-full flex"
                  key={carts.id}
                  style={styles.productItemsLi}
                >
                  <li className="w-full h-full flex">
                    <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                      <div className="w-[65px] h-full">
                        <img
                          src={carts.productImage}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center ">
                        <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                          {carts.name}
                        </p>

                        <p className="price">
                          <span className="offer-price text-qred font-600 text-[15px] ml-2">
                            R$ {carts.value}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button onClick={() => deleteHandle(index)} type="button">
                      <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          className="inline fill-current text-[#AAAAAA] hover:text-qred"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
                        </svg>
                      </span>
                    </button>
                  </li>
                </li>
              ))}
          </ul>
          <div className="w-full px-4 mt-[20px] mb-[12px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions px-4 mb-[30px]">
            <div className="total-equation flex justify-between items-center mb-[28px]">
              <span className="text-[15px] font-500 text-qblack">Subtotal</span>
              <span className="text-[15px] font-500 text-qred ">
                R$ {totalValue}
              </span>
              <span className="text-[15px] font-500 text-qred ">
                R$ {totalValue}
              </span>
            </div>
            <div className="product-action-btn">
              <a href="#">
                <div className="gray-btn w-full h-[50px] mb-[10px] ">
                  <span>Ver carrinho</span>
                </div>
              </a>
              <a href="">
                <div className="w-full h-[50px]">
                  <div
                    className={
                      "black-btn h-full flex justify-center items-center font-bold "
                    }
                  >
                    <div>
                      {id ? (
                        <Link to="/checkout">
                          <span className="text-sm">Fazer checkout</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => {
                            // Redireciona o usuário para a página de login
                            navigate("/login");
                          }}
                        >
                          <span className="text-sm">Fazer checkout</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
