import Compair from "./Helpers/icons/Compair";
import QuickViewIco from "./Helpers/icons/QuickViewIco";
import ThinLove from "./Helpers/icons/ThinLove";

export default function TestCom() {
  return (
    <>
      <div className="container-x mx-auto mt-20">
        <div className="grid grid-cols-3 gap-10">
          <div className="item">
            <div
              className="product-card-style-one-two w-full h-full bg-white relative group overflow-hidden"
              style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div
                className="product-card-img w-full h-[322px] mt-4"
                style={{
                  background: `url(${process.env.PUBLIC_URL}/assets/images/product-img-2.1.jpg) no-repeat center`,
                }}
              ></div>
              <div className="product-card-details flex justify-center h-[102px] items-center  relative">
                {/* add to card button */}
                <div className="absolute w-[204px] h-[54px] left-[80px] -bottom-20 group-hover:bottom-[65px] transition-all duration-300 ease-in-out">
                  <button type="button" className="yellow-btn">
                    <div>
                      <span>Add To Cart</span>
                    </div>
                  </button>
                </div>
                <div>
                  <a href="/single-product">
                    <p className="title mb-2.5 text-[20px] font-600 text-center text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                      Table and Chair Set
                    </p>
                  </a>
                  <div className="price">
                    <span className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block">
                      32,499BDT
                    </span>
                    <span className="main-price text-qgray line-through font-600 text-center text-[18px]">
                      48,600BDT
                    </span>
                  </div>
                </div>
              </div>
              {/* quick-access-btns */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
