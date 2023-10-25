export default function Banner({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
              <div data-aos="fade-right" className="xl:w-1/2 w-full h-full">
                <a href="/single-product">
                  <picture>
                    <source
                      media="(min-width:1025px)"
                      srcSet={`${process.env.PUBLIC_URL}/assets/images/banner-1.1.png`}
                    />
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/banner-2.1.png`}
                      alt=""
                      className="w-full max-w-full h-auto object-cover"
                    />
                  </picture>
                </a>
              </div>
              <div
                data-aos="fade-left"
                className="w-1/2 flex xl:flex-col flex-row  xl:space-y-[30px] h-full"
              >
                <div className="w-full ">
                  <a href="/single-product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/banner-2.2.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
