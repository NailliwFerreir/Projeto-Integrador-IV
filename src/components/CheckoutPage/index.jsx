import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { currencyMaskBR } from "../../masks";
import api from "../../services/api";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameC, setNameC] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [payOption, setPayOption] = useState("");
  const [value, setValue] = useState(0);
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [cpf, setCPF] = useState("");
  const [totalOrder, setTotalOrder] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  const styles = {
    productItems: {
      display: "flex",
      flexWrap: "wrap",
      overflowY: "scroll",
      "--space-between-items": "10px",
      display: "flex",
      flexWrap: "wrap",
      overflowY: "scroll",
      "--space-between-items": "10px",
    },
  };

  const getTotalOrder = () => {
    let total = 0;
    const orders = JSON.parse(localStorage.getItem("cart"));
    for (const order of orders) {
      total += order.value * order.quantity;
    }
    setTotalOrder(total);
  };

  const cartProductHandler = async () => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log("cart", cart);
      setCartProduct(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const orderCreateHandler = async () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let buyer = JSON.parse(localStorage.getItem("user"));
    let totalCartValue = 0;
    const orderId = v4();

    for (const item of cart) {
      try {

         await api.post("/orders", {
           date: new Date().toLocaleDateString(),
           situation: "Não Liberado.",
           value: item.value,
           quantity: String(item.quantity).toString(),
           fkUserId: item.fkUserId,
           productId: item.id,
           orderId,
           buyerId: buyer.id,
         })
        let newStock = parseInt(item.stock) - parseInt(item.quantity)
        newStock = String(newStock)
        console.log("novo stock", newStock)

        await api.put(`/products/stock/${item.id}`), {
          stock: newStock,
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getTotalOrder();
    cartProductHandler();
  }, []);

  const numberMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    return value;
  };

  const cpfMask = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return value;
  };

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
            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-1/2 w-full">
                <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                  Informações pessoais
                </h1>
                <div className="form-area">
                  <form>
                    <div className="sm:flex sm:space-x-5 items-center mb-6">
                      <div className="sm:w-1/2  mb-5 sm:mb-0">
                        <InputCom
                          label="First Name*"
                          placeholder="Digite seu nome..."
                          inputClasses="w-full h-[50px]"
                          inputHandler={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <InputCom
                          label="Last Name*"
                          placeholder="Digite seu sobrenome..."
                          inputClasses="w-full h-[50px]"
                          inputHandler={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex space-x-5 items-center mb-6">
                      <div className="w-1/2">
                        <InputCom
                          label="Endereço de e-mail"
                          placeholder="inseminador123@gmail.com"
                          inputClasses="w-full h-[50px]"
                          inputHandler={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <InputCom
                          label="Phone Number*"
                          placeholder="012 3  *******"
                          inputClasses="w-full h-[50px]"
                          inputHandler={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl text-qblack font-medium mb-3">
                        Informações de cobrança
                      </h1>
                    </div>
                    <div>
                      {/* onde vai ser jogador o conteudo dos pagamentos  */}
                      {loadPayOption(payOption)}
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
                  Resumo do pedido
                </h1>

                <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                  <div className="product-list w-full mb-[30px]">
                    <div className="flex flex-col space-y-5">
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
                    </div>
                  </div>
                  <div className="w-full  bg-[#EDEDED]">
                    <div>
                      {cartProduct?.length > 0 &&
                        cartProduct.map((carts, index) => (
                          <ul
                            className="w-full "
                            key={carts.id}
                            style={styles.productItemsLi}
                          >
                            <li className="w-full h-full flex ">
                              <div className="w-full flex justify-around items-center px-4 my-4">
                                <div className="w-[65px] h-full mr-3">
                                  <img
                                    src={carts.productImage}
                                    alt=""
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="flex-1 h-full flex flex-col justify-center ">
                                  <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                    {carts.name}
                                  </p>

                                  <p className="price">
                                    <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                      R$ {carts.value}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              {/* <button
                                onClick={() => deleteHandle(index)}
                                type="button"
                              >
                                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                                  <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
                                  </svg>
                                </span>
                              </button> */}
                            </li>
                          </ul>
                        ))}
                    </div>
                  </div>

                  <div className="mt-[30px]">
                    <div className=" flex justify-between mb-5">
                      <p className="text-[13px] font-medium text-qblack uppercase">
                        SUBTOTAL
                      </p>
                      <p className="text-[15px] font-medium text-qblack uppercase">
                        {currencyMaskBR(totalOrder)}
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
                      <p className="text-2xl font-medium text-qred">
                        {currencyMaskBR(totalOrder)}
                      </p>
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
                              onClick={(e) => setPayOption(e.target.id)}
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
                              id="pix"
                              onClick={(e) => setPayOption(e.target.id)}
                            />
                          </div>
                          <label
                            htmlFor="pix"
                            className="text-[18px] text-normal text-qblack"
                          >
                            PIX
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
                              id="creditcard"
                              onClick={(e) => setPayOption(e.target.id)}
                            />
                          </div>
                          <label
                            htmlFor="creditcard"
                            className="text-[18px] text-normal text-qblack"
                          >
                            Cartão de Crédito
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="text-sm font-semibold" onClick={makeOrder}>
                    <div className="w-[500px] h-[50px] black-btn flex justify-center items-center">
                      Realizar pedido
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

  function loadPayOption(payOption) {
    if (payOption == "transfer") {
      return (
        <div>
          <a>Favorecido: Insemina+ LTDA</a> <br></br>
          <a>Pessoa: Jurídica</a> <br></br>
          <a>CNPJ: 13.659.454/0001-10</a> <br></br>
          <a>Banco: Bradesco</a> <br></br>
          <a>Agência: 2832</a> <br></br>
          <a>Conta: 1109009-5</a> <br></br>
          <a>Cidade: São Paulo</a> <br></br>
          <a>Estado: SP</a> <br></br>
        </div>
      );
    }

    if (payOption == "creditcard") {
      return (
        <form>
          <div className="sm:flex sm:space-x-5 items-center mb-6">
            <div className="sm:w-1/2  mb-5 sm:mb-0">
              <InputCom
                label="Nome/Razão social*"
                placeholder="Insemina Plus..."
                inputClasses="w-full h-[50px]"
                inputHandler={(e) => setNameC(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <InputCom
                label="CPF/CNPJ*"
                placeholder="000.000.000-XX"
                inputClasses="w-full h-[50px]"
                inputHandler={(e) => setCPF(cpfMask(e.target.value))}
              />
            </div>
          </div>
          <div className="flex space-x-5 items-center mb-6">
            <div className="w-1/2">
              <InputCom
                label="Número do cartão*"
                placeholder="0000 0000 0000 0000"
                inputClasses="w-full h-[50px]"
                inputHandler={(e) =>
                  setNumeroCartao(numberMask(e.target.value))
                }
              />
            </div>
            <div className="flex-1">
              <InputCom
                label="Validade*"
                placeholder="10/30"
                inputClasses="w-full h-[50px]"
                inputHandler={(e) => setValidade(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <InputCom
                label="CVV*"
                placeholder="000"
                inputClasses="w-full h-[50px]"
                inputHandler={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        </form>
      );
    }

    if (payOption == "pix") {
      return (
        <img
          src="https://wiki.sj.ifsc.edu.br/images/e/e0/LigueEngtelecomQR.gif"
          alt="QRCODE"
        ></img>
      );
    }
  }
  function makeOrder() {
    if (cartProduct.length < 1) {
      Swal.fire({
        title: "Não é possível realizar a compra!",
        text: "Seu carrinho está vazio! ",
        icon: "question",
        confirmButtonText: "Ok",
        showCancelButton: false,
        buttonsStyling: false,
        reverseButtons: true,
        timer: 4000,
        customClass: {
          confirmButton:
            "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
          title: "text-2xl text-qblack",
          text: "text-xs text-qblack",
          cancelButton:
            "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
        },
      });
      return;
    }
    let obj;
    console.log("ENTROU");
    if (payOption == "tranfer") {
      obj = {
        nameC,
        email,
        phone,
        payOption,
        value: totalOrder,
      };
    }

    if (payOption == "creditcard") {
      obj = {
        nameC,
        email,
        phone,
        cpf,
        numeroCartao,
        validade,
        cvv,
        value: totalOrder,
      };
    }
    if (payOption == "pix") {
      obj = {
        nameC,
        email,
        phone,
        payOption,
        value: totalOrder,
      };
    }
    orderCreateHandler();

    const handleCHeckValues = (object) => {
      for (const key in object) {
        let value = object[key];
        console.log(`${key} ${value}`);
        if (typeof value === "string") {
          value = value.trim();
        }

        if (value === "" || value === 0) {
          return true;
        }
      }

      return false;
    };

    if (handleCHeckValues(obj)) {
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Preencha todos os campos por favor",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          confirmButton:
            "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
          title: "text-2xl text-qblack",
          text: "text-xs text-qblack",
          cancelButton:
            "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
        },
      });
      return;
    }

    api
      .post("http://localhost:3030/checkout", obj)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("cart", "[]");
        Swal.fire({
          title: "Pagamento realizado com sucesso!",
          text: "Muito obrigado pela compra!",
          icon: "success",
          confirmButtonText: "Ok",
          showCancelButton: false,
          buttonsStyling: false,
          reverseButtons: true,
          timer: 4000,
          customClass: {
            confirmButton:
              "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
            title: "text-2xl text-qblack",
            text: "text-xs text-qblack",
            cancelButton:
              "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        });
      })
      .catch((error) => {
        console.log(error.data);
        Swal.fire({
          title: "Não foi possível realizar o pagamento!",
          text: "Tente novamente mais tarde!",
          icon: "error",
          confirmButtonText: "Ok",
          showCancelButton: false,
          buttonsStyling: false,
          reverseButtons: true,
          timer: 4000,
          customClass: {
            confirmButton:
              "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
            title: "text-2xl text-qblack",
            text: "text-xs text-qblack",
            cancelButton:
              "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
          },
        });
      });
  }
}
