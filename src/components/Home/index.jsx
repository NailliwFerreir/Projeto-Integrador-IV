import React, { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
("react-spinners");

import { BeatLoader } from "react-spinners";
import ads2 from "../../assets/images/product-img-13.jpg";
import api from "../../services/api";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";

export default function Home() {
  const [products, setProducts] = useState();
  const [viewProducts, setViewProducts] = useState(6);
  const [loading, setLoading] = useState(false);
  const handleViewMore = (add = 6) => {
    console.log(add);
    const newViewProducts = viewProducts + add;
    console.log(newViewProducts);
    setViewProducts(viewProducts + add);
  };

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]").length
  );

  const countCartItems = () => {
    console.log("countCartItems");
    setCart(JSON.parse(localStorage.getItem("cart") || "[]").length);
  };

  const handleAddProductToLocalStorage = (product) => {
    const cartData = localStorage.getItem("cart");
    const cart = cartData === null ? [] : JSON.parse(cartData);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  const [productTeste, setProducTest] = useState(null);

  const dataFake = [
    {
      name: "kingdom",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 9999fqjjjj9ew9",
    },
    {
      name: "kingdom2",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 9999fq9ew9",
    },
    {
      name: "kingdom3",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 9999fqiuoh9ew9",
    },
    {
      name: "kingdom4",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 13423dfqwef",
    },
    {
      name: "kingdom5",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " ud8h2183rh7148g",
    },
    {
      name: "kingdom6",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 9d83994h89fh834",
    },
    {
      name: "kingdom7",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 8329rh928r47",
    },
    {
      name: "kingdom8",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 3423",
    },
    {
      name: "kingdom9",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 3434432",
    },
    {
      name: "kingdom10",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 83292342rh93428r47",
    },
    {
      name: "kingdom11",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9we23rj9qwe9r9wq",
      id: " 8329rh92342328r47",
    },
    {
      name: "kingdom12",
      category: "Equino, Mangalarga Marchador",
      stock: "1",
      value: "40.45",
      race: "Mangalarga Marchador",
      description: "muito bom",
      productImage: ads2,
      fkUserId: "q9werj9qwe9r9wq",
      id: " 8329rh921238rgg47",
    },
  ];

  const handleGetProducts = async () => {
    try {
      const response = await api.get("/products");
      const { data } = response;
      console.log(data);
      setProducts(data);
      setProducTest(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setProducts(dataFake);
  }, []);

  /*   useEffect(() => {
    handleGetProducts();
  }, []); */

  return (
    <Layout cartItems={cart}>
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
            showProducts={viewProducts}
            sectionTitle="Produtos"
            className="new-products mb-[60px]"
          />
          <div className="w-full flex justify-center">
            <button
              onClick={() => handleViewMore(3)}
              className="bg-black w-32 p-2 hover:font-medium text-white"
            >
              Ver mais
            </button>
          </div>
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
