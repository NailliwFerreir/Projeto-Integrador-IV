import axios from "axios";
import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";

export default function Signup() {
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const cepMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value = value.slice(0, 5) + "-" + value.slice(5);
    return value;
  };

  const phoneMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value =
      "(" +
      value.slice(0, 2) +
      ")" +
      " " +
      value.slice(2, 7) +
      "-" +
      value.slice(7);
    return value;
  };

  const checkCep = async (cep) => {
    console.log(cep);
    cep = cep.replace(/\D/g, "");
    if (cep.length === 8) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data);
      const { data } = response;
      if (data.cep) {
        setStreet(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
        setCountry("Brasil");
      }
    }
  };

  const handleSubmit = () => {};

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Criar Conta
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#2D6F6D"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      placeholder="Digite seu nome"
                      label="Primeiro nome*"
                      name="fname"
                      type="text"
                      inputClasses="h-[50px]"
                      value={firstName}
                      inputHandler={(e) => setFirstName(e.target.value)}
                    />

                    <InputCom
                      placeholder="Digite seu sobrenome"
                      label="Sobrenome*"
                      name="lname"
                      type="text"
                      inputClasses="h-[50px]"
                      value={lastName}
                      inputHandler={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      placeholder="seuEmail@gmail.com"
                      label="Seu endereço de email*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px]"
                      value={email}
                      inputHandler={(e) => setEmail(e.target.value)}
                    />

                    <InputCom
                      placeholder="(21) 99887 65544"
                      label="Número de Celular*"
                      name="phone"
                      type="text"
                      inputClasses="h-[50px]"
                      value={number}
                      inputHandler={(e) => {
                        if (e.target.value.length < 16) {
                          setNumber(phoneMask(e.target.value));
                        }
                      }}
                    />
                  </div>

                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-10">
                    <div className="w-1/2">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Código Postal / CEP*"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="12345-123"
                          value={cep}
                          inputHandler={(e) => {
                            if (e.target.value.length < 10) {
                              setCep(cepMask(e.target.value));
                              checkCep(e.target.value);
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Cidade"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="Nome da cidade"
                          value={city}
                          inputHandler={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-item mb-10">
                    <div className="w-full h-[50px] mb-5 sm:mb-0">
                      <InputCom
                        label="Rua"
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="Rua Exemplo, 123"
                        value={street}
                        inputHandler={(e) => setStreet(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-10">
                    <div className="w-1/5">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Estado"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="Uf"
                          value={state}
                          inputHandler={(e) => setState(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Bairro"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="Nome do bairro"
                          value={neighborhood}
                          inputHandler={(e) => setNeighborhood(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="forgot-password-area mb-7">
                    <div className="remember-checkbox flex items-center space-x-2.5">
                      <button
                        onClick={rememberMe}
                        type="button"
                        className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                      >
                        {checked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={rememberMe}
                        className="text-base text-black"
                      >
                        I agree all
                        <span className="text-qblack">tarm and condition</span>
                        in BigShop.
                      </span>
                    </div>
                  </div> */}
                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Criar Conta</span>
                      </button>
                    </div>
                  </div>

                  <div className="signup-area flex justify-center">
                    <p className="text-base text-qgraytwo font-normal">
                      Já possui uma conta?
                      <a href="/login" className="ml-2 text-qblack">
                        Entrar
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
