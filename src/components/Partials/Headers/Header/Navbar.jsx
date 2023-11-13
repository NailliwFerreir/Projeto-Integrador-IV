import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiauth from "../../../../services/apiauth";
import Arrow from "../../../Helpers/icons/Arrow";

export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const [visibility, setVisibiity] = useState(false);
  // const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }
  const handler = () => {
    setToggle(!categoryToggle);
  };
  const visibilityHandler = async () => {
    try {
      const response = await apiauth.get(`/comprador`);
      const { data } = response;
      setVisibiity(data);
      console.log(visibility)

    } catch (error) {
      console.log(error)
      setVisibiity(false)
      console.log(visibility)
    }
  }

  useEffect(() => {

    visibilityHandler();
    console.log(visibility)

    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle, visibility]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh2-green h-[60px] relative z-30  ${className || ""
        }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span className="text-qblack">
                      <svg
                        className="fill-current"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" />
                        <rect y="8" width="14" height="1" />
                        <rect y="4" width="10" height="1" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      Todas categorias
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    <li className="category-item">
                      <a href="#">
                        <div className=" flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                fill="#000000"
                                width="30"
                                height="25"
                                viewBox="0 0 256 256"
                                id="Flat"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M168,100H88a36.04062,36.04062,0,0,0-36,36v8a36.04061,36.04061,0,0,0,36,36h80a36.04061,36.04061,0,0,0,36-36v-8A36.04062,36.04062,0,0,0,168,100Zm28,44a28.03146,28.03146,0,0,1-28,28H88a28.03146,28.03146,0,0,1-28-28v-8a28.03146,28.03146,0,0,1,28-28h80a28.03146,28.03146,0,0,1,28,28Zm-24-4a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,172,140Zm-72,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,100,140ZM208,36a28.04383,28.04383,0,0,0-27.71484,24H75.71484A28.00109,28.00109,0,0,0,20,64v80a68.07728,68.07728,0,0,0,68,68h80a68.07728,68.07728,0,0,0,68-68V64A28.03146,28.03146,0,0,0,208,36Zm20,108a60.06812,60.06812,0,0,1-60,60H88a60.06812,60.06812,0,0,1-60-60V64a20,20,0,0,1,40,0,4.0002,4.0002,0,0,0,4,4H184a4.0002,4.0002,0,0,0,4-4,20,20,0,0,1,40,0Z" />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Bovinos</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                fill="#000000"
                                width="30"
                                height="25"
                                viewBox="0 0 256 256"
                                id="Flat"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M199.2041,57.78613A99.28144,99.28144,0,0,0,128,28h-8a4.0002,4.0002,0,0,0-4,4V61.76465L13.90332,124.59326a3.99946,3.99946,0,0,0-1.14746,5.74658L26.543,149.45605a27.85078,27.85078,0,0,0,27.42676,11.21924c14.98242-2.53662,43.13769-4.603,68.1875,8.62256L91.36133,212.4126A91.88509,91.88509,0,0,1,66.668,196.57471a4.00015,4.00015,0,1,0-5.33594,5.96093A99.67467,99.67467,0,0,0,128.01367,228q1.00342,0,2.00781-.02A100.0001,100.0001,0,0,0,199.2041,57.78613Zm20.78613,71.52539A92.05084,92.05084,0,0,1,99.08691,215.35938l31.00928-43.4126A52.05612,52.05612,0,0,0,180,120a4,4,0,0,0-8,0,44.04263,44.04263,0,0,1-42.97607,43.97412c-27.90686-16.22558-59.76221-14.00146-76.39014-11.18652a19.911,19.911,0,0,1-19.60254-8.01123L21.76172,129.15088l100.335-61.74414A4.00064,4.00064,0,0,0,124,64V36h4a91.99841,91.99841,0,0,1,91.99023,93.31152ZM132,100a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,132,100Z" />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Equinos</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li>
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      <span>Comprar</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Lista de Compras
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Shop Sidebar
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Shop Fullwidth
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Comprar Lista de Desejos
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Product Layouts
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Horizonral Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Vertical Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Gallery Thumbnail
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Sticky Summary
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Polular Category
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Phone & Tablet
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Gaming & Sports
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Home Appliance
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Fashion Clothes
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnil w-[348px] h-full">
                          <div className="w-full h-[235px]">
                            <img
                              width=""
                              src={`${process.env.PUBLIC_URL}/assets/images/mega-menu-thumb.jpg`}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative">
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      <span>Notas</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="/privacy-policy">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Políticas de Privacidade
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/terms-condition">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Termos e Condições
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/faq">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      FAQ
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Shop Category Icon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qh2-green hover:text-qh2-green">
                                      Comprar Lista de Desejos
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/about">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Sobre</span>
                      </span>
                    </Link>
                  </li>
                  {/*  <li>
                    <Link to="/blogs">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Blog</span>
                      </span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/contact">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Contato</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="become-seller-btn  w-[161px] h-[40px]">
              <Link to="/become-saller" style={{ visibility: visibility ? "visible" : "hidden" }}>
                <div className="black-btn flex justify-center items-center cursor-pointer h-full">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">Seja um Vendedor!</span>
                    <span>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.08984"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(45 1.08984 0)"
                        />
                        <rect
                          x="6"
                          y="4.9082"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(135 6 4.9082)"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
