import { Link } from "react-router-dom";
export default function Banner({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="grid w-full sm:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 xl:h-[600px] mb-[60px]">
              <div className="item bg-[#AEE6EC] h-full relative">
                <img src="/assets/images/banner-4.png" alt="thumb" />
                <div className="absolute bottom-[32px] left-0 xl:w-[306px] sm:w-full w-[306px] bg-white py-6 px-[26px] bg-opacity-[0.92]">
                  <div className="mb-[15px]">
                    <span className="px-2.5 py-[3px] bg-qblack text-white text-xs font-semibold leading-5 uppercase rounded-full">
                      bOYS STUYLE
                    </span>
                  </div>
                  <p className="xl:text-[30px] sm:text-xl text-[30px] font-semibold xl:leading-10 sm:leading-normal leading-10 mb-[15px]">
                    Best Styles for all <br />
                    Boys
                  </p>
                  <Link to="#">
                    <div className="w-[100px] h-[36px] rounded bg-qh4-pink flex justify-center items-center">
                      <span>Shop Now</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="item bg-[#C2D7F0] h-full relative">
                <img src="/assets/images/banner-4.1.png" alt="thumb" />
                <div className="absolute bottom-[32px] left-0 xl:w-[306px] sm:w-full w-[306px] bg-white py-6 px-[26px] bg-opacity-[0.92]">
                  <div className="mb-[15px]">
                    <span className="px-2.5 py-[3px] bg-qblack text-white text-xs font-semibold leading-5 uppercase rounded-full">
                      bOYS STUYLE
                    </span>
                  </div>
                  <p className="xl:text-[30px] sm:text-xl text-[30px] font-semibold xl:leading-10 sm:leading-normal leading-10 mb-[15px]">
                    Best Styles for all <br />
                    Boys
                  </p>
                  <Link to="#">
                    <div className="w-[100px] h-[36px] rounded bg-qh4-pink flex justify-center items-center">
                      <span>Shop Now</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="item bg-[#FEE7C4] h-full relative">
                <img src="/assets/images/banner-4.2.png" alt="thumb" />
                <div className="absolute bottom-[32px] left-0 xl:w-[306px] sm:w-full w-[306px] bg-white py-6 px-[26px] bg-opacity-[0.92]">
                  <div className="mb-[15px]">
                    <span className="px-2.5 py-[3px] bg-qblack text-white text-xs font-semibold leading-5 uppercase rounded-full">
                      bOYS STUYLE
                    </span>
                  </div>
                  <p className="xl:text-[30px] sm:text-xl text-[30px] font-semibold xl:leading-10 sm:leading-normal leading-10 mb-[15px]">
                    Best Styles for all <br />
                    Boys
                  </p>
                  <Link to="#">
                    <div className="w-[100px] h-[36px] rounded bg-qh4-pink flex justify-center items-center">
                      <span>Shop Now</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/service-bg.png)`,
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
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M34.9982 1H11.8164V18H34.9982V1Z"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M11.8164 7.18164H34.9982"
                          stroke="#FDB2BB"
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
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M30.7 2L29.5 10.85L20.5 9.65"
                          stroke="#FDB2BB"
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
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                          stroke="#FDB2BB"
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
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M16 28V22"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                          stroke="#FDB2BB"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                          stroke="#FDB2BB"
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
        </div>
      </div>
    </>
  );
}
