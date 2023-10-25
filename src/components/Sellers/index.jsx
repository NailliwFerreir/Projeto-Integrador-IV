import { Link } from "react-router-dom";
import Star from "../Helpers/icons/Star";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Sallers() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="sallers-page-wrapper w-full mb-[60px]">
        <PageTitle
          title="All Seller "
          breadcrumb={[
            { name: "home", path: "/" },
            { name: "Sallers", path: "/sallers" },
          ]}
        />
      </div>

      <div className="content-wrapper w-full mb-[60px]">
        <div className="container-x mx-auto w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-1.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        Fusion x
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-8.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      Fusion x
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-6.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        Rahayanhan
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-7.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      Rahayanhan
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-2.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        Rikayi Rox
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-9.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      Rikayi Rox
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-3.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        Habbryi
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-6.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      Habbryi
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-4.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        Shopno BD
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-1.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      Shopno BD
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="item w-full">
              <div
                className="w-full sm:h-[328px] sm:p-[30px] p-5"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/sallers-cover-5.png) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="">
                      <h1 className="text-[30px] font-semibold  text-qblack">
                        E-coms BD
                      </h1>
                      <div className="flex space-x-2 items-center mb-[30px]">
                        <div className="flex">
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                          <Star w="24" h="24" />
                        </div>
                        <span className="text-[15px] font-bold text-qblack ">
                          (4.7)
                        </span>
                      </div>
                      <div className="saller-text-details">
                        <ul>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                  fill="black"
                                />
                                <path
                                  d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Demoemail@gmail.com</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>023 434 54354</span>
                          </li>
                          <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
                            <span>
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>Haydarabad, Rord 3,Dhaka</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link to="/saller-page">
                        <div className="w-[116px] h-[40px]">
                          <div className="yellow-btn flex justify-center">
                            <div className="flex space-x-2 items-center">
                              <span>Shop Now</span>
                              <span>
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="1.0918"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 1.0918 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="6.00195"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 6.00195 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex sm:justify-center justify-start">
                      <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/saller-2.png`}
                          alt=""
                        />
                      </div>
                    </div>

                    <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                      E-coms BD
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
