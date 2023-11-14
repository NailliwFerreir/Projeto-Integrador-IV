import React, { useEffect, useState } from "react";
import Layout from "../Partials/Layout";

import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewProducts, setViewProducts] = useState(6);

  const handleViewMore = () => {
    setViewProducts((previousViewProducts) => previousViewProducts + 6);
  };

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
  }, []);

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
      <SectionStyleThreeHomeTwo
        products={products}
        showProducts={viewProducts}
        sectionTitle="Produtos"
        className="new-products mb-[60px]"
      />
      <div className="w-full flex justify-center">
        <button className="bg-black w-32 p-2 hover:font-medium text-white">
          Ver mais
        </button>
      </div>
      {/*
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
      />*/}
    </Layout>
  );
}
