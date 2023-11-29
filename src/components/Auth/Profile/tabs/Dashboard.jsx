import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../../../services/api";
import apiauth from "../../../../services/apiauth";

export default function Dashboard() {
  const [cep, setCep] = useState("13086-900");
  const [name, setName] = useState("Inseminador+");
  const [email, setEmail] = useState("inseminador+@puccampinas.edu.br");
  const [birthDate, setBirthDate] = useState("08/11/2023");
  const [certificateCode, setCertificateCode] = useState("12345678910");
  const [street, setStreet] = useState(
    "Rua Professor Dr. Euryclides de Jesus Zerbini"
  );
  const [city, setCity] = useState("Campinas");
  const [state, setState] = useState("SP");
  const [country, setCountry] = useState("Brasil");
  const [houseNumber, setHouseNumber] = useState("1516");
  const [neighborhood, setNeighborhood] = useState(
    "Parque Rural Fazenda Santa Cândida"
  );
  const [visibility, setVisibiity] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [contL, setContL] = useState(0);
  const [contN, setContN] = useState(0);

  const countOrdersHandler = async () => {
    let id = JSON.parse(localStorage.getItem("user"));
    id = id.id;
    console.log(id);
    const response = await api.get(`/orders/buyerId/${id}/fkUserId/${id}`);
    const { data } = response;
    setContL(filter(data, (obj) => obj.situation === "Liberado").length)
    setContN(filter(data, (obj) => obj.situation === "Não Liberado").length)
    console.log(contL);
    console.log(contN);
    console.log(data);
  };
  console.log(contL);
  console.log(contN);


  function filter(data, condition) {
    const filteredData = [];
    for (const item of data) {
      if (condition(item)) {
        filteredData.push(item);
      }
    }
    return filteredData;
  }


  const dashboardHandler = async () => {
    try {
      let id = JSON.parse(localStorage.getItem("user"));
      id = id.id;
      console.log(id);
      const response = await api.get(`auth/user/${id}`);
      const { data } = response;
      setName(data.username);
      setEmail(data.email);
      setBirthDate(data.birthDate);
      setCertificateCode(data.certificateCode);
      setCep(data.cep);
      checkCep(data.cep);
      setCurrentImg(data.image);
    } catch (error) {
      console.log(error)
    }

  };

  const visibilityHandler = async () => {
    try {
      const response = await apiauth.get(`/vendedor`);
      const { data } = response;
      setVisibiity(data)
      console.log("productsantes", visibility)

    } catch (error) {
      console.log(error)
      setVisibiity(false)
      console.log("productdps", visibility)
    }
  }

  useEffect(() => {
    dashboardHandler();
    visibilityHandler();
    countOrdersHandler();
  }, []);

  const cepMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value = value.slice(0, 5) + "-" + value.slice(5);
    return value;
  };

  const numberMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    return value;
  };
  const checkCep = async (cep) => {
    try {
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
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="welcome-msg w-full">
        <div>
          <p className="text-qblack text-lg">Olá, {name}</p>
          <h1 className="font-bold text-[24px] text-qblack">
            Bem-vindo(a) ao seu perfil!
          </h1>
        </div>
      </div>
      <div className="quick-view-grid w-full flex justify-between items-center mt-3 ">
        <img
          src={
            currentImg
              ? currentImg
              : `${process.env.PUBLIC_URL}/assets/images/placeholder.png`
          }
          alt=""
          className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
        />
        <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qh2-green transition-all duration-300 ease-in-out p-6">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <span>
              <svg
                width="33"
                height="27"
                viewBox="0 0 33 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.2253 12.8816H29.4827L28.6701 9.36514C28.376 8.10431 27.2552 7.22168 25.9662 7.22168H21.8474V3.84528C21.8474 2.03804 20.3764 0.581055 18.5831 0.581055H3.17237C1.46313 0.581055 0.0761719 1.96801 0.0761719 3.67717V20.0967C0.0761719 21.8058 1.46313 23.1928 3.17237 23.1928H4.29313C4.89555 25.1962 6.74485 26.6533 8.93037 26.6533C11.1159 26.6533 12.9792 25.1962 13.5816 23.1928C13.8455 23.1928 20.3459 23.1928 20.1942 23.1928C20.7966 25.1962 22.6459 26.6533 24.8315 26.6533C27.031 26.6533 28.8803 25.1962 29.4827 23.1928H30.2253C31.7663 23.1928 32.9992 21.9599 32.9992 20.4189V15.6555C32.9992 14.1145 31.7663 12.8816 30.2253 12.8816ZM8.93037 23.8513C7.78968 23.8513 6.88491 22.8969 6.88491 21.7918C6.88491 20.657 7.79558 19.7324 8.93037 19.7324C10.0652 19.7324 10.9898 20.657 10.9898 21.7918C10.9898 22.9151 10.0692 23.8513 8.93037 23.8513ZM13.9739 8.06224L9.79897 11.3125C9.20227 11.7767 8.30347 11.6903 7.82363 11.0604L6.21247 8.94486C5.7361 8.32843 5.86222 7.4458 6.47866 6.98346C7.08107 6.50717 7.96369 6.63321 8.44006 7.24965L9.19656 8.23035L12.2507 5.84867C12.8531 5.3864 13.7357 5.48448 14.2121 6.10092C14.6884 6.71727 14.5763 7.58595 13.9739 8.06224ZM24.8315 23.8513C23.6906 23.8513 22.7861 22.8969 22.7861 21.7918C22.7861 20.657 23.7107 19.7324 24.8315 19.7324C25.9662 19.7324 26.8909 20.657 26.8909 21.7918C26.8909 22.9166 25.9683 23.8513 24.8315 23.8513ZM22.618 10.0236H25.2798C25.6021 10.0236 25.8962 10.2337 26.0083 10.542L26.8629 13.0497C27.031 13.5541 26.6667 14.0724 26.1344 14.0724H22.618C22.1976 14.0724 21.8474 13.7222 21.8474 13.3019V10.7942C21.8474 10.3739 22.1976 10.0236 22.618 10.0236Z"
                  fill="#2D6F6D"
                />
              </svg>
            </span>
          </div>
          <p className="text-xl text-white group-hover:text-qblacktext mt-5">
            Pedidos Enviados
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            {contL}
          </span>
        </div>
        <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qh2-green transition-all duration-300 ease-in-out p-6">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <span>
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79749 18.4331C6.71621 20.0289 5.95627 20.8019 4.64859 23.6816C3.76653 22.8387 2.90107 22.0123 2.00953 21.1599C2.5288 20.3146 3.03267 19.4942 3.53535 18.6726C3.88035 18.1071 3.46066 17.0579 2.82282 16.899C1.88623 16.6666 0.94845 16.4426 0 16.2114C0 14.4034 0 12.6274 0 10.7827C0.921182 10.561 1.85422 10.3405 2.78489 10.1117C3.46777 9.94331 3.8922 8.90476 3.52705 8.30605C3.03385 7.49868 2.5371 6.6925 2.06051 5.91596C3.35514 4.62014 4.62251 3.35396 5.92426 2.05339C6.70673 2.53355 7.52832 3.03978 8.35347 3.54246C8.88698 3.8673 9.94331 3.44524 10.0927 2.84416C10.3262 1.90638 10.5491 0.965048 10.7839 0C12.5883 0 14.3785 0 16.2197 0C16.4366 0.906955 16.6548 1.8234 16.8777 2.73865C17.0555 3.46777 18.0763 3.89694 18.7082 3.50926C19.5144 3.01489 20.3182 2.52051 21.0829 2.05102C22.3763 3.34447 23.6318 4.59998 24.943 5.9124C24.4783 6.67235 23.9756 7.49038 23.4753 8.31079C23.1114 8.90713 23.5405 9.93976 24.2258 10.1081C25.1434 10.3334 26.0646 10.5503 27 10.7756C27 12.5954 27 14.3892 27 16.2197C26.1298 16.426 25.2667 16.6287 24.4048 16.8338C23.4658 17.0579 23.0651 18.0122 23.5654 18.8267C24.029 19.5819 24.4914 20.3383 24.9727 21.122C24.1487 22.004 23.3473 22.8612 22.4901 23.7776C21.5393 21.1741 19.8297 19.4243 17.3163 18.4592C20.5565 15.5332 19.8558 11.4668 17.659 9.41099C15.2973 7.19992 11.5995 7.26157 9.31378 9.56393C7.15368 11.7406 6.71858 15.6885 9.79749 18.4331Z"
                  fill="#2D6F6D"
                />
                <path
                  d="M21.0695 30.3147C16.0415 30.3147 11.0847 30.3147 6.03891 30.3147C6.03891 29.9768 6.03416 29.6496 6.04009 29.3224C6.06262 28.0396 5.97963 26.7426 6.13612 25.4752C6.53566 22.2576 9.12611 19.9244 12.3722 19.8213C13.5886 19.7821 14.8417 19.7762 16.0249 20.0169C18.8643 20.5954 20.8916 23.0258 21.0552 25.9364C21.1359 27.3709 21.0695 28.8138 21.0695 30.3147Z"
                  fill="#2D6F6D"
                />
                <path
                  d="M13.5375 17.9235C11.2244 17.9093 9.35005 16.0112 9.38325 13.7195C9.41763 11.4124 11.3169 9.55701 13.6157 9.58428C15.8849 9.61036 17.7486 11.5013 17.7403 13.7693C17.7332 16.0752 15.8481 17.9378 13.5375 17.9235Z"
                  fill="#2D6F6D"
                />
              </svg>
            </span>
          </div>
          <p className="text-xl text-white group-hover:text-qblacktext mt-5">
            Pedidos em análise
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            {contN}
          </span>
        </div>
      </div>
      <div className="dashboard-info mt-8 flex justify-between items-center bg-primarygray px-7 py-7">
        <div className="">
          <p className="title text-[35px] font-semibold ">
            Informações Pessoais
          </p>
          <div className="mt-5">
            <table>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block">
                  <div>Nome:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {name}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {email}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block">
                  <div className="w-44">Data de Nascimento:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium ml-24">
                  {birthDate}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>Afe:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {certificateCode}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>CEP:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {cep}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>País:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {country}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>Estado:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {state}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>Cidade:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {city}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>Bairro:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {neighborhood}
                </td>
              </tr>
              <tr className="flex mb-3">
                <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                  <div>Rua:</div>
                </td>
                <td className="text-base text-qblack line-clamp-1 font-medium">
                  {street}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
