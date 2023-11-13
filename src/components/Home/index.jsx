import React from "react";
import Layout from "../Partials/Layout";

import datas from "../../data/productsTwo.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";
import SectionStyleTwo from "../Helpers/SectionStyleTwoHomeTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";

export default function Home() {
  /* 
  const [products, setProducts] = useState([]);
  const handleGetProducts = async () => {
    try {
      const response = await api.get("/products");
      const { data } = response;
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []); */

  const { products } = datas;
  return (
    <Layout>
      {/* <Banner className="banner-wrapper mb-[46px]" />
      <ViewMoreTitle
        className="my-categories mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Minhas Categorias"
      >
        <CategoriesSection /> 
      </ViewMoreTitle>*/}
      {/* <SectionStyleThreeHomeTwo
        products={products}
        showProducts={6}
        sectionTitle="Produtos em Destaque!"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      /> */}
      <CampaignCountDown className="mb-[60px]" lastDate="2023-10-04 4:00:00" />
      <ProductsAds
        ads={[
          `${process.env.PUBLIC_URL}/assets/images/ads-2.2.png`,
          `${process.env.PUBLIC_URL}/assets/images/ads-2.1.png`,
        ]}
        sectionHeight="sm:h-[290px] h-full"
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.slice(3, 7)}
        showProducts={3}
        sectionTitle="Vendas Populares"
        seeMoreUrl="/all-products"
        className="feature-products mb-[60px]"
      />
      <ViewMoreTitle
        className="top-selling-product mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Produtos Mais Vendidos"
      >
        <SectionStyleTwo products={products.slice(5, products.length)} />
      </ViewMoreTitle>
      <ProductsAds
        ads={[`${process.env.PUBLIC_URL}/assets/images/ads-2.3.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.reverse().slice(0, 10)}
        showProducts={9}
        sectionTitle="Novidades"
        seeMoreUrl="/all-products"
        className="new-arrivals mb-[60px]"
      />
      <ProductsAds
        sectionHeight="164"
        ads={[`${process.env.PUBLIC_URL}/assets/images/ads-2.4.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleFour
        products={products}
        sectionTitle="Vendas Populares"
        seeMoreUrl="/all-products"
        className="category-products mb-[60px]"
      />
    </Layout>
  );
}
