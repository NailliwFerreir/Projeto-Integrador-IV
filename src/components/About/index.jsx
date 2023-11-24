import { useRef } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";


export default function About() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="about-page-wrapper w-full">
        <div className="title-area w-full">
          <PageTitle
            title="Sobre Nós"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Sobre Nós", path: "/about" },
            ]}
          />
        </div>

        <div className="aboutus-wrapper w-full">
          <div className="container-x mx-auto">
            <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
              <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                <img
                  src={`https://outraspalavras.net/wp-content/uploads/2022/12/rebanho_bovino_GCOM-MT.jpg`}
                  alt="about"
                  className="w-full h"
                />
              </div>
              <div className="content flex-1">
                <h1 className="text-[18px] font-medium text-qblack mb-2.5">
                  O que é a Insemina+?
                </h1>
                <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                  A INSEMINA+ é uma plataforma online que conecta criadores de bovinos e equinos com compradores de sêmen. Nosso objetivo é facilitar a comercialização de material genético de qualidade, garantindo que criadores tenham acesso a um público amplo e qualificado.
                </p>
                <ul className="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                  <li>Marketplace rural</li>
                  <li>
                    Melhores genéticas
                  </li>
                  <li>Logistíca planejada</li>
                  <li>
                    Taxas baixas!
                  </li>
                </ul>

                <Link to="/contact">
                  <div className="w-[121px] h-10">
                    <span className="yellow-btn">Nos Contate</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Layout >
  );
}
