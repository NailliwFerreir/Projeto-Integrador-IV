import Accodion from "../Helpers/Accodion";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Faq() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="faq-page-wrapper w-full mb-10">
        <div className="page-title w-full">
          <PageTitle
            title="Dúvidas Frequentes"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]}
          />
        </div>
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-qblack font-bold text-[22px] mb-4">
                Dúvidas frequentes
              </h1>
              <div className="flex flex-col space-y-7 justify-between">
                <Accodion
                  title="01. How does information technology work?"
                  des="There are many variations of passages of Lorem Ipsum available into the 
but the majority have suffered alteration in some form, by injecte find to a
humour, or randomised words"
                />
                <Accodion
                  init
                  title="02. How can I become IT manager?"
                  des="There are many variations of passages of Lorem Ipsum available into the 
but the majority have suffered alteration in some form, by injecte find to a
humour, or randomised words"
                />
                <Accodion
                  title="03. What are the latest trends in IT?"
                  des="There are many variations of passages of Lorem Ipsum available into the 
but the majority have suffered alteration in some form, by injecte find to a
humour, or randomised words"
                />
                <Accodion
                  title="04. How long should a business plan be?"
                  des="There are many variations of passages of Lorem Ipsum available into the 
but the majority have suffered alteration in some form, by injecte find to a
humour, or randomised words"
                />
                <Accodion
                  title="05. How work the support policy?"
                  des="There are many variations of passages of Lorem Ipsum available into the 
but the majority have suffered alteration in some form, by injecte find to a
humour, or randomised words"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white sm:p-10 p-5">
                <div className="title flex flex-col items-center">
                  <h1 className="lg:text-[34px] text-xl font-bold text-qblack">
                    Tem alguma dúvida?
                  </h1>
                  <span className="-mt-5 block">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="inputs mt-5">
                  <div className="mb-4">
                    <InputCom
                      label="Primeiro Nome*"
                      placeholder="Digite seu nome..."
                      name="first_name"
                      inputClasses="h-[50px]"
                    />
                  </div>
                  <div className="mb-4">
                    <InputCom
                      label="Endereço de e-mail"
                      placeholder="Digite seu e-mail..."
                      name="email"
                      inputClasses="h-[50px]"
                    />
                  </div>
                  <div className="mb-5">
                    <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                      Mensagem*
                    </h6>
                    <textarea
                      placeholder="Digite sua mensagem..."
                      className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                    ></textarea>
                  </div>
                  <div>
                    <a href="#">
                      <div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                        <span>Mande Agora</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
