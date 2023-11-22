import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiauth from "../../../../services/apiauth";
import Arrow from "../../../Helpers/icons/Arrow";
import { cattles } from "../../../SellerProduct";

export default function Navbar({ className }) {
  const [productSubCategory, setProductSubCategory] = useState(null);
  const [productType, setProductType] = useState()
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
      const response = await apiauth.get(`/vendedor`);
      const { data } = response;
      if (data == true) {
        setVisibiity(false);
      }
      console.log(visibility);
    } catch (error) {
      console.log(error);
      setVisibiity(true);
      console.log(visibility);
    }
  };
  useEffect(() => {
    if (productType) {
      setProductSubCategory(cattles[productType])
    }

  }, [productType])
  console.log(productSubCategory)
  useEffect(() => {
    visibilityHandler();
    console.log(visibility);

    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
      setProductType('')
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
                  className={`category-dropdown w-full absolute left-0 top-[53px] ${productType === '' && 'overflow-hidden'} `}
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    <li className="category-item">
                      <a href="#" onClick={() => setProductType('bovine')}>
                        <div className=" flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                width="30"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.9442 12.8496C20.6675 14.4935 20.3175 15.7305 19.8943 16.5605C19.8455 16.7721 19.6583 17.2075 19.3328 17.8667C19.0073 18.5259 18.7143 19.2461 18.4539 20.0273C18.1935 20.8086 18.0633 21.5736 18.0633 22.3223C18.0633 23.4128 17.7174 24.2062 17.0257 24.7026C16.334 25.1991 15.1173 25.4473 13.3758 25.4473C11.6343 25.4473 10.4176 25.1991 9.72589 24.7026C9.03416 24.2062 8.68829 23.4128 8.68829 22.3223C8.68829 21.5736 8.55809 20.8086 8.29767 20.0273C8.03725 19.2461 7.74428 18.5259 7.41876 17.8667C7.09324 17.2075 6.90607 16.7721 6.85724 16.5605C6.43406 15.7305 6.08413 14.4935 5.80743 12.8496C5.61212 12.8984 5.40867 12.9269 5.19708 12.9351C4.98549 12.9432 4.74542 12.9391 4.47687 12.9229C4.20831 12.9066 3.98045 12.8903 3.79327 12.874C3.6061 12.8577 3.34975 12.8171 3.02423 12.752C2.69871 12.6868 2.46678 12.6421 2.32843 12.6177C2.19008 12.5933 1.93374 12.5404 1.55939 12.459C1.18504 12.3776 0.957174 12.3288 0.875793 12.3125C1.23387 11.8242 1.50649 11.4702 1.69366 11.2505C1.88084 11.0308 2.14532 10.7866 2.48712 10.5181C2.82892 10.2495 3.20734 10.0664 3.62238 9.96875C4.03741 9.87109 4.52976 9.82227 5.09943 9.82227C5.18081 9.82227 5.34357 9.84668 5.58771 9.89551C5.60398 9.40723 5.67723 8.97591 5.80743 8.60156C5.6284 7.99935 5.54702 7.41341 5.56329 6.84375C5.56329 6.42057 5.56736 6.09098 5.5755 5.85498C5.58364 5.61898 5.61619 5.26497 5.67316 4.79297C5.73012 4.32096 5.82371 3.91406 5.95392 3.57227C6.08413 3.23047 6.25909 2.85205 6.47882 2.43701C6.69855 2.02197 6.99559 1.64762 7.36993 1.31396C7.74428 0.980306 8.18374 0.691406 8.68829 0.447266C8.08608 1.63542 7.78497 2.7015 7.78497 3.64551C7.78497 4.45931 7.92332 5.2487 8.20001 6.01367C9.46954 5.42773 11.1948 5.13477 13.3758 5.13477C15.5568 5.13477 17.282 5.42773 18.5516 6.01367C18.8283 5.2487 18.9666 4.45931 18.9666 3.64551C18.9666 2.7015 18.6655 1.63542 18.0633 0.447266C18.5679 0.691406 19.0073 0.980306 19.3817 1.31396C19.756 1.64762 20.053 2.02197 20.2728 2.43701C20.4925 2.85205 20.6675 3.23047 20.7977 3.57227C20.9279 3.91406 21.0215 4.32096 21.0784 4.79297C21.1354 5.26497 21.1679 5.61898 21.1761 5.85498C21.1842 6.09098 21.1883 6.42057 21.1883 6.84375C21.2046 7.39714 21.1232 7.98307 20.9442 8.60156C21.0744 8.97591 21.1476 9.40723 21.1639 9.89551C21.408 9.84668 21.5708 9.82227 21.6522 9.82227C22.2218 9.82227 22.7142 9.87109 23.1292 9.96875C23.5443 10.0664 23.9227 10.2495 24.2645 10.5181C24.6063 10.7866 24.8707 11.0308 25.0579 11.2505C25.2451 11.4702 25.5177 11.8242 25.8758 12.3125C25.7944 12.3288 25.5665 12.3776 25.1922 12.459C24.8179 12.5404 24.5615 12.5933 24.4232 12.6177C24.2848 12.6421 24.0529 12.6868 23.7274 12.752C23.4018 12.8171 23.1455 12.8577 22.9583 12.874C22.7711 12.8903 22.5433 12.9066 22.2747 12.9229C22.0062 12.9391 21.7661 12.9432 21.5545 12.9351C21.3429 12.9269 21.1395 12.8984 20.9442 12.8496ZM13.3758 8.25977C12.09 8.25977 10.9873 8.49984 10.0677 8.97998C9.14809 9.46012 8.68829 10.042 8.68829 10.7256C8.68829 11.2627 8.83885 11.8405 9.13995 12.459C9.44106 13.0775 9.87644 13.5332 10.4461 13.8262C10.6414 13.9238 10.792 14.0215 10.8978 14.1191C11.0036 14.2168 11.1419 14.3918 11.3128 14.644C11.4837 14.8963 11.6098 15.2747 11.6912 15.7793C11.7726 16.2839 11.8133 16.9023 11.8133 17.6348C11.8133 18.3346 11.7319 18.945 11.5692 19.4658C11.4064 19.9867 11.2274 20.3691 11.032 20.6133C10.8367 20.8574 10.6577 21.1545 10.4949 21.5044C10.3322 21.8543 10.2508 22.2327 10.2508 22.6396C10.2508 23.014 10.6007 23.3151 11.3006 23.543C12.0005 23.7708 12.6922 23.8848 13.3758 23.8848C14.0594 23.8848 14.7511 23.7708 15.451 23.543C16.1509 23.3151 16.5008 23.014 16.5008 22.6396C16.5008 22.2327 16.4194 21.8543 16.2567 21.5044C16.0939 21.1545 15.9149 20.8574 15.7195 20.6133C15.5242 20.3691 15.3452 19.9867 15.1824 19.4658C15.0197 18.945 14.9383 18.3346 14.9383 17.6348C14.9383 16.9023 14.9831 16.2839 15.0726 15.7793C15.1621 15.2747 15.2923 14.8923 15.4632 14.6318C15.6341 14.3714 15.7724 14.1965 15.8782 14.1069C15.984 14.0174 16.1264 13.9238 16.3055 13.8262C16.8589 13.5332 17.2902 13.0734 17.5994 12.4468C17.9087 11.8201 18.0633 11.2464 18.0633 10.7256C18.0633 10.042 17.6035 9.46012 16.6839 8.97998C15.7643 8.49984 14.6616 8.25977 13.3758 8.25977Z"
                                  fill="black"
                                />
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
                      <a href="#" onClick={() => setProductType('equine')}>
                        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                fill="#000000"
                                width="30"
                                height="25"
                                viewBox="0 0 256 256"
                                id="Flat"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M199.2041,57.78613A99.28144,99.28144,0,0,0,128,28h-8a4.0002,4.0002,0,0,0-4,4V61.76465L13.90332,124.59326a3.99946,3.99946,0,0,0-1.14746,5.74658L26.543,149.45605a27.85078,27.85078,0,0,0,27.42676,11.21924c14.98242-2.53662,43.13769-4.603,68.1875,8.62256L91.36133,212.4126A91.88509,91.88509,0,0,1,66.668,196.57471a4.00015,4.00015,0,1,0-5.33594,5.96093A99.67467,99.67467,0,0,0,128.01367,228q1.00342,0,2.00781-.02A100.0001,100.0001,0,0,0,199.2041,57.78613Zm20.78613,71.52539A92.05084,92.05084,0,0,1,99.08691,215.35938l31.00928-43.4126A52.05612,52.05612,0,0,0,180,120a4,4,0,0,0-8,0,44.04263,44.04263,0,0,1-42.97607,43.97412c-27.90686-16.22558-59.76221-14.00146-76.39014-11.18652a19.911,19.911,0,0,1-19.60254-8.01123L21.76172,129.15088l100.335-61.74414A4.00064,4.00064,0,0,0,124,64V36h4a91.99841,91.99841,0,0,1,91.99023,93.31152ZM132,100a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,132,100Z" />
                              </svg>
                            </span>

                            {/* 
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9442 12.8496C20.6675 14.4935 20.3175 15.7305 19.8943 16.5605C19.8455 16.7721 19.6583 17.2075 19.3328 17.8667C19.0073 18.5259 18.7143 19.2461 18.4539 20.0273C18.1935 20.8086 18.0633 21.5736 18.0633 22.3223C18.0633 23.4128 17.7174 24.2062 17.0257 24.7026C16.334 25.1991 15.1173 25.4473 13.3758 25.4473C11.6343 25.4473 10.4176 25.1991 9.72589 24.7026C9.03416 24.2062 8.68829 23.4128 8.68829 22.3223C8.68829 21.5736 8.55809 20.8086 8.29767 20.0273C8.03725 19.2461 7.74428 18.5259 7.41876 17.8667C7.09324 17.2075 6.90607 16.7721 6.85724 16.5605C6.43406 15.7305 6.08413 14.4935 5.80743 12.8496C5.61212 12.8984 5.40867 12.9269 5.19708 12.9351C4.98549 12.9432 4.74542 12.9391 4.47687 12.9229C4.20831 12.9066 3.98045 12.8903 3.79327 12.874C3.6061 12.8577 3.34975 12.8171 3.02423 12.752C2.69871 12.6868 2.46678 12.6421 2.32843 12.6177C2.19008 12.5933 1.93374 12.5404 1.55939 12.459C1.18504 12.3776 0.957174 12.3288 0.875793 12.3125C1.23387 11.8242 1.50649 11.4702 1.69366 11.2505C1.88084 11.0308 2.14532 10.7866 2.48712 10.5181C2.82892 10.2495 3.20734 10.0664 3.62238 9.96875C4.03741 9.87109 4.52976 9.82227 5.09943 9.82227C5.18081 9.82227 5.34357 9.84668 5.58771 9.89551C5.60398 9.40723 5.67723 8.97591 5.80743 8.60156C5.6284 7.99935 5.54702 7.41341 5.56329 6.84375C5.56329 6.42057 5.56736 6.09098 5.5755 5.85498C5.58364 5.61898 5.61619 5.26497 5.67316 4.79297C5.73012 4.32096 5.82371 3.91406 5.95392 3.57227C6.08413 3.23047 6.25909 2.85205 6.47882 2.43701C6.69855 2.02197 6.99559 1.64762 7.36993 1.31396C7.74428 0.980306 8.18374 0.691406 8.68829 0.447266C8.08608 1.63542 7.78497 2.7015 7.78497 3.64551C7.78497 4.45931 7.92332 5.2487 8.20001 6.01367C9.46954 5.42773 11.1948 5.13477 13.3758 5.13477C15.5568 5.13477 17.282 5.42773 18.5516 6.01367C18.8283 5.2487 18.9666 4.45931 18.9666 3.64551C18.9666 2.7015 18.6655 1.63542 18.0633 0.447266C18.5679 0.691406 19.0073 0.980306 19.3817 1.31396C19.756 1.64762 20.053 2.02197 20.2728 2.43701C20.4925 2.85205 20.6675 3.23047 20.7977 3.57227C20.9279 3.91406 21.0215 4.32096 21.0784 4.79297C21.1354 5.26497 21.1679 5.61898 21.1761 5.85498C21.1842 6.09098 21.1883 6.42057 21.1883 6.84375C21.2046 7.39714 21.1232 7.98307 20.9442 8.60156C21.0744 8.97591 21.1476 9.40723 21.1639 9.89551C21.408 9.84668 21.5708 9.82227 21.6522 9.82227C22.2218 9.82227 22.7142 9.87109 23.1292 9.96875C23.5443 10.0664 23.9227 10.2495 24.2645 10.5181C24.6063 10.7866 24.8707 11.0308 25.0579 11.2505C25.2451 11.4702 25.5177 11.8242 25.8758 12.3125C25.7944 12.3288 25.5665 12.3776 25.1922 12.459C24.8179 12.5404 24.5615 12.5933 24.4232 12.6177C24.2848 12.6421 24.0529 12.6868 23.7274 12.752C23.4018 12.8171 23.1455 12.8577 22.9583 12.874C22.7711 12.8903 22.5433 12.9066 22.2747 12.9229C22.0062 12.9391 21.7661 12.9432 21.5545 12.9351C21.3429 12.9269 21.1395 12.8984 20.9442 12.8496ZM13.3758 8.25977C12.09 8.25977 10.9873 8.49984 10.0677 8.97998C9.14809 9.46012 8.68829 10.042 8.68829 10.7256C8.68829 11.2627 8.83885 11.8405 9.13995 12.459C9.44106 13.0775 9.87644 13.5332 10.4461 13.8262C10.6414 13.9238 10.792 14.0215 10.8978 14.1191C11.0036 14.2168 11.1419 14.3918 11.3128 14.644C11.4837 14.8963 11.6098 15.2747 11.6912 15.7793C11.7726 16.2839 11.8133 16.9023 11.8133 17.6348C11.8133 18.3346 11.7319 18.945 11.5692 19.4658C11.4064 19.9867 11.2274 20.3691 11.032 20.6133C10.8367 20.8574 10.6577 21.1545 10.4949 21.5044C10.3322 21.8543 10.2508 22.2327 10.2508 22.6396C10.2508 23.014 10.6007 23.3151 11.3006 23.543C12.0005 23.7708 12.6922 23.8848 13.3758 23.8848C14.0594 23.8848 14.7511 23.7708 15.451 23.543C16.1509 23.3151 16.5008 23.014 16.5008 22.6396C16.5008 22.2327 16.4194 21.8543 16.2567 21.5044C16.0939 21.1545 15.9149 20.8574 15.7195 20.6133C15.5242 20.3691 15.3452 19.9867 15.1824 19.4658C15.0197 18.945 14.9383 18.3346 14.9383 17.6348C14.9383 16.9023 14.9831 16.2839 15.0726 15.7793C15.1621 15.2747 15.2923 14.8923 15.4632 14.6318C15.6341 14.3714 15.7724 14.1965 15.8782 14.1069C15.984 14.0174 16.1264 13.9238 16.3055 13.8262C16.8589 13.5332 17.2902 13.0734 17.5994 12.4468C17.9087 11.8201 18.0633 11.2464 18.0633 10.7256C18.0633 10.042 17.6035 9.46012 16.6839 8.97998C15.7643 8.49984 14.6616 8.25977 13.3758 8.25977Z" fill="#000000"/>
</svg> */}
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
                      <div style={{
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        left: 270,
                        top: productType === 'equine' ? '40px' : 0,
                        width: '100%'
                      }}>
                        {
                          productSubCategory?.map((item) => {
                            return (
                              <div style={{
                                borderBottom: '1px solid #f8f8f8'
                              }} className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                                {
                                  item.label
                                }
                              </div>
                            )
                          })
                        }
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  {/* <li>
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
                  </li> */}
                  {/* <li className="relative">
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
                  </li> */}
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
              <Link
                to="/become-saller"
                style={{ visibility: visibility ? "visible" : "hidden" }}
              >
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
