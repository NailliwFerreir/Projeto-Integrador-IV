import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
;
export default function CheakoutPage() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
        <div className="w-full mb-5">
          <PageTitle
            title="Checkout"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "checkout", path: "/checkout" },
            ]}
          />
        </div>
        <div className="checkout-main-content w-full">
          <div className="container-x mx-auto">
            <div className="w-full sm:mb-10 mb-5">
              <div className="sm:flex sm:space-x-[18px] s">
                <div className="sm:w-1/2 w-full mb-5 h-[70px]">
                  <a href="#">
                    <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                      <span className="text-[15px] font-medium">
                        Entre na sua conta
                      </span>
                    </div>
                  </a>
                </div>
                <div className="flex-1 h-[70px]">
                  <a href="#">
                    <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                      <span className="text-[15px] font-medium">
                        Digite um cupom de desconto
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-1/2 w-full">
                <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                  Informações de cobranças
                </h1>
                <div className="form-area">
                  <form>
                    <div className="sm:flex sm:space-x-5 items-center mb-6">
                      <div className="sm:w-1/2  mb-5 sm:mb-0">
                        <InputCom
                          label="First Name*"
                          placeholder="Digite seu nome..."
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                      <div className="flex-1">
                        <InputCom
                          label="Last Name*"
                          placeholder="Digite seu nome..."
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-5 items-center mb-6">
                      <div className="w-1/2">
                        <InputCom
                          label="Endereço de e-mail"
                          placeholder="inseminador123@gmail.com"
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                      <div className="flex-1">
                        <InputCom
                          label="Phone Number*"
                          placeholder="012 3  *******"
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <h1 className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                        País*
                      </h1>
                      <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                        <span className="text-[13px] text-qgraytwo">
                          Escolha o país
                        </span>
                        <span>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                              fill="#222222"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=" mb-6">
                      <div className="w-full">
                        <InputCom
                          label="Address*"
                          placeholder="your address here"
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-5 items-center mb-6">
                      <div className="w-1/2">
                        <h1 className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                          Cidade*
                        </h1>
                        <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center">
                          <span className="text-[13px] text-qgraytwo">
                            Campinas
                          </span>
                          <span>
                            <svg
                              width="11"
                              height="7"
                              viewBox="0 0 11 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                                fill="#222222"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <InputCom
                          label="CEP*"
                          placeholder=""
                          inputClasses="w-full h-[50px]"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-2 items-center mb-10">
                      <div>
                        <input type="checkbox" name="" id="create" />
                      </div>
                      <label
                        htmlFor="create"
                        className="text-qblack text-[15px] select-none"
                      >
                        Criar conta
                      </label>
                    </div>
                    <div>
                      <h1 className="text-2xl text-qblack font-medium mb-3">
                        Informações de cobrança
                      </h1>
                      <div className="flex space-x-2 items-center mb-10">
                        <div>
                          <input type="checkbox" name="" id="address" />
                        </div>
                        <label
                          htmlFor="address"
                          className="text-qblack text-[15px] select-none"
                        >
                          Enviar para um endereço diferente
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                  Resumo do pedido
                </h1>

                <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                  <div className="sub-total mb-6">
                    <div className=" flex justify-between mb-5">
                      <p className="text-[13px] font-medium text-qblack uppercase">
                        Produto
                      </p>
                      <p className="text-[13px] font-medium text-qblack uppercase">
                        total
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                  </div>
                  <div className="product-list w-full mb-[30px]">
                    <ul className="flex flex-col space-y-5">
                      {/* {loadItems()} */}
                    </ul>
                  </div>
                  <div className="w-full h-[1px] bg-[#EDEDED]"></div>

                  <div className="mt-[30px]">
                    <div className=" flex justify-between mb-5">
                      <p className="text-[13px] font-medium text-qblack uppercase">
                        SUBTOTAL
                      </p>
                      <p className="text-[15px] font-medium text-qblack uppercase">
                        {/* Aquii fica o valor do subtotal, tem que adicionar a função */}
                        {/* {loadSubtotal()} */}
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-[30px]">
                    <div className="sub-total mb-6">
                      <div className=" flex justify-between mb-5">
                        <div>
                          <span className="text-xs text-qgraytwo mb-3 block">
                            ENVIO
                          </span>
                          <p className="text-base font-medium text-qblack">
                            Frete grátis
                          </p>
                        </div>
                        <p className="text-[15px] font-medium text-qblack">
                          +$0
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                    </div>
                  </div>

                  <div className="mt-[30px]">
                    <div className=" flex justify-between mb-5">
                      <p className="text-2xl font-medium text-qblack">Total</p>
                      <p className="text-2xl font-medium text-qred">INSERIR VALOR DO TOTAL AQUI</p>
                    </div>
                  </div>
                  <div className="shipping mt-[30px]">
                    <ul className="flex flex-col space-y-1">
                      <li className=" mb-5">
                        <div className="flex space-x-2.5 items-center mb-4">
                          <div className="input-radio">
                            <input
                              type="radio"
                              name="price"
                              className="accent-pink-500"
                              id="transfer"
                            />
                          </div>
                          <label
                            htmlFor="transfer"
                            className="text-[18px] text-normal text-qblack"
                          >
                            Transferência bancária
                          </label>
                        </div>
                        <p className="text-qgraytwo text-[15px] ml-6">
                          Pagamento debitado direto na sua conta bancária
                        </p>
                      </li>
                      <li>
                        <div className="flex space-x-2.5 items-center mb-5">
                          <div className="input-radio">
                            <input
                              type="radio"
                              name="price"
                              className="accent-pink-500"
                              id="delivery"
                            />
                          </div>
                          <label
                            htmlFor="delivery"
                            className="text-[18px] text-normal text-qblack"
                          >
                            APAGAR DEPOIS
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex space-x-2.5 items-center mb-5">
                          <div className="input-radio">
                            <input
                              type="radio"
                              name="price"
                              className="accent-pink-500"
                              id="bank"
                            />
                          </div>
                          <label
                            htmlFor="bank"
                            className="text-[18px] text-normal text-qblack"
                          >
                            Cartão de Crédito
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="#">
                    <div className="w-full h-[50px] black-btn flex justify-center items-center">
                      <button className="text-sm font-semibold">
                        Realizar pedido
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


// function makeOrder() {
//   const value = "TESTE TESTE"
//   const obj = { "date": data, "situation": "REALIZADO", "value": value }
//   axios.post("/clients/{clientId}/orders", obj)
//     .then(resp => console.log(resp.data))
//     .catch(err => console.log(err.data))
// }

//function loadItems() {
// const items = await items em cache do pedido
// let res = []
// items.map((element) => {
//  res.push(
// <li>
//   <div className="flex justify-between items-center">
//   <div>
//     <h4 className="text-[15px] text-qblack mb-2.5">
//       {element.name}
//       <sup className="text-[13px] text-qgray ml-2 mt-2">
//         {element.qtd}
//       </sup>
//     </h4>
//   </div>
//   <div>
//     <span className="text-[15px] text-qblack font-medium">
//       R${element.value}
//     </span>
//   </div>
// </div>
// </li>
//)
// })
// return res
// }

//function loadSubtotal(){
//  const subtotal += items.valor e retornar esse valor para aparecer lá na tela depois
//  return subtotal
//}  