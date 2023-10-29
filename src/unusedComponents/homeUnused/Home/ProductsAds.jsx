export default function ProductsAds({
  className,
  ads = ["", ""],
  sectionHeight,
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          className={`${sectionHeight} ${
            ads.length > 1 && ads.length <= 2
              ? "sm:flex xl:space-x-[30px] sm:space-x-5"
              : ""
          } items-center w-full  overflow-hidden`}
        >
          <div
            data-aos="fade-right"
            className={`h-full sm:mb-0 mb-5 ${
              ads.length > 1 && ads.length <= 2 ? "sm:w-1/2 w-full" : "w-full"
            }  `}
          >
            <a href="/single-product">
              <img src={ads[0]} alt="" className="w-full sm:h-full h-auto" />
            </a>
          </div>
          {ads.length > 1 && ads.length <= 2 && (
            <div data-aos="fade-left" className="flex-1 h-full">
              <a href="/single-product">
                <img src={ads[1]} alt="" className="w-full h-full" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
