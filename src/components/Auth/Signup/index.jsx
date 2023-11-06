import axios from "axios";
import { useState } from "react";
import api from "../../../services/api";
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
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");

  const cepMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value = value.slice(0, 5) + "-" + value.slice(5);
    return value;
  };

  const cpfMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value =
      value.slice(0, 3) +
      "." +
      value.slice(3, 6) +
      "." +
      value.slice(6, 9) +
      "-" +
      value.slice(9, 11);
    return value;
  };

  const numberMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
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

  const handleSubmit = () => { };

  const createAccount = () => {
    const data = {
      username: `${firstName}${lastName}`,
      email,
      password,
      role: ["comprador"]
    };
    console.log(data);
    api
      .post("/api/auth/signup", data)
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
  };

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
                      <div className="w-full h-[25px] mb-5 sm:mb-0">
                        <InputCom
                          placeholder="123.456.789-10"
                          label="CPF*"
                          name="cpf"
                          type="text"
                          inputClasses="h-[50px]"
                          value={cpf}
                          inputHandler={(e) => {
                            if (e.target.value.length < 15) {
                              setCpf(cpfMask(e.target.value));
                            }
                          }}
                        />
                      </div>
                    </div>
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
                    <div className="flex-1">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Número"
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="Número da casa"
                          value={houseNumber}
                          inputHandler={(e) => {
                            if (e.target.value.length < 10) {
                              setHouseNumber(numberMask(e.target.value));
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-10">
                    <div className="flex-1">
                      <div className="w-full h-[50px] mb-5 sm:mb-0">
                        <InputCom
                          label="Senha"
                          inputClasses="w-full h-full"
                          type="password"
                          placeholder="Senha"
                          value={password}
                          inputHandler={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        onClick={createAccount}
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
