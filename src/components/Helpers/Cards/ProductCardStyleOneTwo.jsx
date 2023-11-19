import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { currencyMaskBR } from "../../../masks";

export default function ProductCardStyleOneTwo({
  datas,
  countCart = () => {},
}) {
  const navigate = useNavigate();
  const handleAddProductToLocalStorage = (product) => {
    const cartData = localStorage.getItem("cart");
    const cart = cartData === null ? [] : JSON.parse(cartData);
    const existentProduct = cart.find((item) => item.id === product.id);
    const cartFilter = cart.filter((item) => item.id !== product.id);
    if (existentProduct) {
      product = { ...product, quantity: existentProduct.quantity + 1 };
      localStorage.setItem("cart", JSON.stringify([...cartFilter, product]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
  };

  return (
    <div
      className="product-card-style-one-two w-full h-full bg-white relative group overflow-hidden"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <Link to={`/single-product/${datas.id}`}>
        <div
          className="product-card-img w-full h-[322px] mt-4"
          /*   style={{
          background: `no-repeat center`,
        }} */
        >
          <img
            className="no-repeat center object-cover"
            src={datas.productImage}
            alt="Product"
          />
        </div>
      </Link>
      <div className="product-card-details flex justify-center h-[102px] items-center  relative">
        <div className="absolute w-[204px] h-[54px] left-[80px] -bottom-20 group-hover:bottom-[65px] transition-all duration-300 ease-in-out">
          <button
            type="button"
            className="black-btn h-full p-3"
            onClick={() => {
              handleAddProductToLocalStorage(datas);
              countCart();
            }}
          >
            <div>
              <span>Adicionar ao Carrinho</span>
            </div>
          </button>
        </div>
        <div>
          <Link to={`/single-product/${datas.id}`}>
            <p className="title mb-2.5 text-[20px] font-600 text-center text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
              {datas.name}
            </p>
          </Link>
          <div className="flex justify-center ">
            <div className="price">
              {/* <span className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block">
                {datas.offer_price}line-through 
              </span> */}
              <span className="main-price text-qgray font-600 text-center text-[18px]">
                {currencyMaskBR(datas.value)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* quick-access-btns 
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-[50px] -right-[50px] top-20  transition-all duration-300 ease-in-out">
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
            <QuickViewIco />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
            <ThinLove />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
            <Compair />
          </span>
        </a>
      </div>*/}
    </div>
  );
}
