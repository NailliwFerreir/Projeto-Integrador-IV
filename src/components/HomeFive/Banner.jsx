import { Link } from "react-router-dom";
import { useRef } from "react";
import SimpleSlider from "../Helpers/SliderCom";

export default function Banner({ className }) {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`hero-slider-wrapper w-full xl:h-[733px] h-[500px] hero-slider-wrapper ${
          className || ""
        }`}
      >
        <div className="main-wrapper w-full h-full">
          <div className=" xl:h-full mb-20 xl:mb-0  w-full relative">
            <SimpleSlider settings={settings} selector={sliderRef}>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/assets/images/banner-5.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>

                        <Link to="#" passhref>
                          <a rel="noopener noreferrer">
                            <div className="flex justify-center items-center bg-qh5-bwhite w-[160px] h-[52px] group rounded-lg hover:text-white relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer">
                              <div className="flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10">
                                <span className="text-sm font-600 tracking-wide leading-7 mr-2">
                                  Shop Now
                                </span>
                                <span>
                                  <svg
                                    width="7"
                                    height="11"
                                    viewBox="0 0 7 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                  >
                                    <rect
                                      x="2.08984"
                                      y="0.636719"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(45 2.08984 0.636719)"
                                    ></rect>
                                    <rect
                                      x="7"
                                      y="5.54492"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(135 7 5.54492)"
                                    ></rect>
                                  </svg>
                                </span>
                              </div>
                              <div
                                style={{
                                  transition: `transform 0.25s ease-in-out`,
                                }}
                                className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
                              ></div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/assets/images/banner-5.1.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>

                        <Link to="#" passhref>
                          <a rel="noopener noreferrer">
                            <div className="flex justify-center items-center bg-qh5-bwhite w-[160px] h-[52px] group rounded-lg hover:text-white relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer">
                              <div className="flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10">
                                <span className="text-sm font-600 tracking-wide leading-7 mr-2">
                                  Shop Now
                                </span>
                                <span>
                                  <svg
                                    width="7"
                                    height="11"
                                    viewBox="0 0 7 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                  >
                                    <rect
                                      x="2.08984"
                                      y="0.636719"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(45 2.08984 0.636719)"
                                    ></rect>
                                    <rect
                                      x="7"
                                      y="5.54492"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(135 7 5.54492)"
                                    ></rect>
                                  </svg>
                                </span>
                              </div>
                              <div
                                style={{
                                  transition: `transform 0.25s ease-in-out`,
                                }}
                                className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
                              ></div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item w-full xl:h-[733px] h-[500px]">
                <div
                  className="w-full h-full relative md:bg-center"
                  style={{
                    backgroundImage: `url('/assets/images/banner-5.2.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-x mx-auto flex items-center  h-full">
                    <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
                      <div className="md:w-[626px] w-full">
                        <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                          Fashion Hunt
                        </p>
                        <h1 className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">
                          Shop the Hottest Brands and Designs at Shop0
                        </h1>

                        <Link to="#" passhref>
                          <a rel="noopener noreferrer">
                            <div className="flex justify-center items-center bg-qh5-bwhite w-[160px] h-[52px] group rounded-lg hover:text-white relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer">
                              <div className="flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10">
                                <span className="text-sm font-600 tracking-wide leading-7 mr-2">
                                  Shop Now
                                </span>
                                <span>
                                  <svg
                                    width="7"
                                    height="11"
                                    viewBox="0 0 7 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                  >
                                    <rect
                                      x="2.08984"
                                      y="0.636719"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(45 2.08984 0.636719)"
                                    ></rect>
                                    <rect
                                      x="7"
                                      y="5.54492"
                                      width="6.94219"
                                      height="1.54271"
                                      transform="rotate(135 7 5.54492)"
                                    ></rect>
                                  </svg>
                                </span>
                              </div>
                              <div
                                style={{
                                  transition: `transform 0.25s ease-in-out`,
                                }}
                                className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
                              ></div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleSlider>
          </div>
        </div>
      </div>
      <div className="container-x mx-auto mb-[60px]">
        <div
          data-aos="fade-up"
          style={{
            backgroundImage: `url(/assets/images/service-bg.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="best-services w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
        >
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H5.63636V24.1818H35"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M34.9982 1H11.8164V18H34.9982V1Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M11.8164 7.18164H34.9982"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Free Shipping
                </p>
                <p className="text-sm text-qgray text-white">
                  When ordering over $100
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M30.7 2L29.5 10.85L20.5 9.65"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Free Return
                </p>
                <p className="text-sm text-qgray text-white">
                  Get Return within 30 days
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="38"
                    viewBox="0 0 32 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Secure Payment
                </p>
                <p className="text-sm text-qgray text-white">
                  100% Secure Online Payment
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16 28V22"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                      stroke="#95D7DE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                  Best Quality
                </p>
                <p className="text-sm text-qgray text-white">
                  Original Product Guarenteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
