import { useRef } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../Helpers/Cards/BlogCard";
import Star from "../Helpers/icons/Star";
import PageTitle from "../Helpers/PageTitle";
import SimpleSlider from "../Helpers/SliderCom";
import Layout from "../Partials/Layout";

import blog from "../../data/blogs.json";
import DataIteration from "../Helpers/DataIteration";

export default function About() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="about-page-wrapper w-full">
        <div className="title-area w-full">
          <PageTitle
            title="About Us"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "About us", path: "/about" },
            ]}
          />
        </div>

        <div className="aboutus-wrapper w-full">
          <div className="container-x mx-auto">
            <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
              <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
                  alt="about"
                  className="w-full h"
                />
              </div>
              <div className="content flex-1">
                <h1 className="text-[18px] font-medium text-qblack mb-2.5">
                  What is e-commerce business?
                </h1>
                <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries but
                  also the on leap into electronic typesetting.
                </p>
                <ul className="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                  <li>slim body with metal cover</li>
                  <li>
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                  <li>
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard
                  </li>
                </ul>

                <Link to="/contact">
                  <div className="w-[121px] h-10">
                    <span className="yellow-btn">Contact Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-feedback w-full bg-white py-[60px]">
          <div className="title flex justify-center mb-5">
            <h1 className="text-[30px] font-semibold text-qblack">
              Customers Feedback
            </h1>
          </div>
          <div className="feedback-slider-wrapper w-vw relative overflow-hidden">
            <SimpleSlider selector={slider} settings={settings}>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleSlider>

            <div className="slider-btns flex justify-center mt-[40px]">
              <div className="flex space-x-5 item-center">
                <button
                  onClick={prev}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-x mx-auto my-[60px]">
          <div
            data-aos="fade-down"
            className="best-services w-full bg-qyellow flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
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
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M34.9982 1H11.8164V18H34.9982V1Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M11.8164 7.18164H34.9982"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                    Free Shipping
                  </p>
                  <p className="text-sm text-qblack">When ordering over $100</p>
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
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M30.7 2L29.5 10.85L20.5 9.65"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                    Free Return
                  </p>
                  <p className="text-sm text-qblack">
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
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                    Secure Payment
                  </p>
                  <p className="text-sm text-qblack">
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
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 28V22"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                    Best Quality
                  </p>
                  <p className="text-sm text-qblack">
                    Original Product Guarenteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-post-wrapper w-full mb-[30px]">
          <div className="container-x mx-auto">
            <div className="blog-post-title flex justify-center items-cente mb-[30px]">
              <h1 className="text-3xl font-semibold text-qblack">
                My Latest News
              </h1>
            </div>

            <div className="blogs-wrapper w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                <DataIteration datas={blog.blogs} startLength={0} endLength={2}>
                  {({ datas }) => (
                    <div
                      data-aos="fade-up"
                      key={datas.id}
                      className="item w-full"
                    >
                      <BlogCard datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
