import React, { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
("react-spinners");

import { BeatLoader } from "react-spinners";
import api from "../../services/api";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";

export default function Home() {
  const [products, setProducts] = useState();
  const [productsCopy, setProductsCopy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAllProductsAgain, setShowAllProductsAgain] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]").length
  );

  const countCartItems = () => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]").length);
  };

  const [productTeste, setProducTest] = useState(null);

  const handleGetProducts = async () => {
    try {
      setLoading(true);
      let id = JSON.parse(localStorage.getItem("user"));
      id = id.id;
      console.log(id);
      const response = await api.get("/products");
      const { data } = response;
      console.log(data);
      const filterId = data.filter((product) => product.fkUserId !== id);
      console.log(filterId);
      setProducts(filterId);
      setProductsCopy(filterId);
      setProducTest(filterId);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  /*   useEffect(() => {
    setProducts(dataFake);
  }, []); */

  useEffect(() => {
    handleGetProducts();
  }, []);

  const filterProducts = (value) => {
    const filteredProducts = productsCopy.filter(
      (product) => product.race === value
    );
    setProducts(filteredProducts);
    setShowAllProductsAgain(true);
  };

  return (
    <Layout cartItems={cart} filterProducts={filterProducts}>
      {/* <Banner className="banner-wrapper mb-[46px]" />
      <ViewMoreTitle
        className="my-categories mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="Minhas Categorias"
      >
        <CategoriesSection /> 
      </ViewMoreTitle>*/}

      {loading && (
        <div className="w-full flex justify-center">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <>
          <SectionStyleThreeHomeTwo
            countCart={countCartItems}
            products={products}
            showProducts={productsCopy}
            sectionTitle="Produtos"
            className="new-products mb-[60px]"
          />
          {showAllProductsAgain && (
            <div className="w-full flex justify-center">
              <button
                onClick={() => {
                  setProducts(productsCopy);
                  setShowAllProductsAgain(false);
                }}
                className="bg-black w-32 p-2 hover:font-medium text-white"
              >
                voltar
              </button>
            </div>
          )}
        </>
      )}
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
