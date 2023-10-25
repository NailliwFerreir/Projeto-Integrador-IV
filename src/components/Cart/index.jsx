export default function Cart({ className,type }) {
  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`w-[300px] bg-white border-t-[3px] ${type===3?'border-qh3-blue':'cart-wrappwer'}  ${
          className || ""
        }`}
      >
        <div className="w-full h-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
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
              </li>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
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
              </li>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
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
              </li>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
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
              </li>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
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
              </li>
              <li className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
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
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mt-[20px] mb-[12px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions px-4 mb-[30px]">
            <div className="total-equation flex justify-between items-center mb-[28px]">
              <span className="text-[15px] font-500 text-qblack">Subtotal</span>
              <span className="text-[15px] font-500 text-qred ">$365</span>
            </div>
            <div className="product-action-btn">
              <a href="#">
                <div className="gray-btn w-full h-[50px] mb-[10px] ">
                  <span>View Cart</span>
                </div>
              </a>
              <a href="#">
                <div className="w-full h-[50px]">
                  <div className={type===3?'blue-btn':'yellow-btn'}>
                    <span className="text-sm">Checkout Now</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full px-4 mt-[20px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="flex justify-center py-[15px]">
            <p className="text-[13px] font-500 text-qgray">
              Get Return within <span className="text-qblack">30 days</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
