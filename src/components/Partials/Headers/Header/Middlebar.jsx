import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../../Cart";
import SearchBox from "../../../Helpers/SearchBox";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinPeople from "../../../Helpers/icons/ThinPeople";

export default function Middlebar({ className, cartItems }) {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("user")));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]").length
  );
  const navigate = useNavigate();

  const idHandler = () => {
    if (id == null) return false;
    return true;
  };
  // const [toggleCart, setToggle] = useState(false);
  // const cartHandler = () => {
  //   setToggle(!toggleCart);
  // };

  const countCartItems = () => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]").length);
  };

  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <a href="/">
                <img
                  width="152"
                  height="36"
                  src={`${process.env.PUBLIC_URL}/assets/images/INSEMINA +.svg`}
                  alt="logo"
                />
              </a>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <a href="/cart">
                    <span>
                      <ThinBag />
                    </span>
                  </a>
                  <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-white">
                    {cart}
                  </span>
                </div>
                {/* <div className="fixed left-0 top-0 w-full h-full z-40"></div> */}
                {/* hidden group-hover:block" */}
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                {idHandler() ? (
                  <Link to="/profile">
                    <span>
                      <ThinPeople />
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      // Redireciona o usuário para a página de login
                      navigate("/login");
                    }}
                  >
                    <span>
                      <ThinPeople />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
