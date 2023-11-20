import ProductCardStyleOneTwo from "./Cards/ProductCardStyleOneTwo";
//import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";
export default function SectionStyleThreeHomeTwo({
  className,
  sectionTitle,
  seeMoreUrl,
  products = [],
  showProducts,
  countCart = () => {},
}) {
  return (
    <div className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} /* seeMoreUrl={seeMoreUrl} */>
        <div className="products-section w-full">
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
            {/* Remover esse DataIteration de merda e usar o map */}
            {/* <DataIteration
              datas={products}
              startLength={0}
              endLength={showProducts}
            >
              {({ datas }) => (
                <div data-aos="fade-up" key={datas.id} className="item">
                  <ProductCardStyleOneTwo countCart={countCart} datas={datas} />
                </div>
              )}
            </DataIteration> */}
            {products &&
              products.map((datas) => (
                <div data-aos="fade-up" key={datas.id} className="item">
                  <ProductCardStyleOneTwo countCart={countCart} datas={datas} />
                </div>
              ))}
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
