import React from "react";
import DataIteration from "../../../Helpers/DataIteration";
import Star from "../../../Helpers/icons/Star";

export default function ReviewTab({ className, products }) {
  return (
    <>
      <div className="review-tab-wrapper w-full">
        <div className="grid grid-cols-2 gap-8">
          <DataIteration datas={products} startLength={0} endLength={6}>
            {({ datas }) => (
              <div key={datas.id} className="item">
                <div
                  style={{ boxShadow: "0px 15px 64px rgba(0, 0, 0, 0.05)" }}
                  className={`product-row-card-style-one w-full h-[170px] bg-white group relative overflow-hidden ${
                    className || ""
                  }`}
                >
                  <div className="flex space-x-2 items-center w-full h-full p-2">
                    <div className="w-1/3 h-full">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/${datas.image}`}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center h-full">
                      <div>
                        <span className="text-qgray text-sm mb-1.5 block">
                          July 22, 2022
                        </span>
                        {/* reviews */}
                        <div className="flex mb-1.5">
                          {Array.from(Array(datas.review), () => (
                            <span key={datas.review + Math.random()}>
                              <Star />
                            </span>
                          ))}
                        </div>
                        <a href="/single-product">
                          <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">
                            {datas.title}
                          </p>
                        </a>
                        <p className="price mb-[26px] text-sm text-qgray line-clamp-2">
                          Didn't I tell you not put your phone on charge because
                          weekend?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </>
  );
}
