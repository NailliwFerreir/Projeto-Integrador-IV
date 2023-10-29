export default function BrandSection({ className, sectionTitle,type }) {
  return (
    <div data-aos="fade-up" className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        {type!==3&&(
            <div className=" section-title flex justify-between items-center mb-5">
              <div>
                <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
                  {sectionTitle}
                </h1>
              </div>
            </div>
        )}

        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-1.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-2.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-3.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-4.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-5.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-6.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-7.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-8.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-9.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-10.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-11.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/brand-12.png`}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
