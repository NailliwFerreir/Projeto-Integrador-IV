import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../services/api";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
export default function BecomeSaller() {
  const [currentImg, setCurrentImg] = useState(null);
  const [logoImg, setLogoImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [birth, setBirth] = useState("00/00/0000");
  const [afe, setAfe] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const navigate = useNavigate();

  const ProfileImageData = async () => {
    var id = JSON.parse(localStorage.getItem("user"))
    id = id.id
    console.log(id)
    const response = await api.get(`auth/user/${id}`);
    const { data } = response;
    setCurrentImg(data.image)

  };
  useEffect(() => { ProfileImageData() }, [])

  // // logo img
  // const logoImgInput = useRef(null);
  // const browseLogoImg = () => {
  //   logoImgInput.current.click();
  // };
  // const logoImgChangHandler = (e) => {
  //   if (e.target.value !== "") {
  //     const imgReader = new FileReader();
  //     imgReader.onload = (event) => {
  //       setLogoImg(event.target.result);
  //     };
  //     imgReader.readAsDataURL(e.target.files[0]);
  //   }
  // };
  const profileImgInput = useRef(null);
  let profileImgData = null;
  const browseProfileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      var id = JSON.parse(localStorage.getItem("user"))
      id = id.id
      imgReader.onload = (event) => {
        profileImgData = event.target.result;
        setCurrentImg(event.target.result);
        const obj = {
          image: profileImgData
        }
        api.put(`auth/imageUser/${id}`, obj);
      };

      imgReader.readAsDataURL(e.target.files[0]);
    }

  };
  // // cover img
  // const coverImgInput = useRef(null);
  // const browseCoverImg = () => {
  //   coverImgInput.current.click();
  // };
  // const coverImgChangHandler = (e) => {
  //   if (e.target.value !== "") {
  //     const imgReader = new FileReader();
  //     console.log("working")
  //     console.log(imgReader)
  //     imgReader.onload = (event) => {
  //       setCoverImg(event.target.result);
  //     };
  //     imgReader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  const cepMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
    value = value.slice(0, 5) + "-" + value.slice(5);
    return value;
  };

  const dateMask = (birth) => {
    //fazer depois
  };

  const numberMask = (value) => {
    value = value.replace(/[^0-9]/g, "");
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

  const becomeSallerHandler = (e) => {
    var id = JSON.parse(localStorage.getItem("user"))
    id = id.id
    console.log(id)
    const obj = {
      birthDate: birth,
      cep,
      address: `${street}, ${houseNumber}, ${neighborhood}, ${city}, ${state}, ${country}`,
      certificateCode: afe,
    };
    console.log(obj);
    api
      .put(`auth/seller/${id}`, obj)
      .then((resp) => {
        console.log(resp.data);
        Swal.fire({
          title: "Conta registrada com sucesso!",
          text: "Contamos com você para um mundo com animais mais bonitos, fortes e saudáveis!",
          icon: "success",
          confirmButtonText: "Ok",
          showCancelButton: false,
          buttonsStyling: false,
          reverseButtons: true,
          timer: 3000,
          customClass: {
            confirmButton:
              "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
            title: "text-2xl text-qblack",
            text: "text-xs text-qblack",
            cancelButton:
              "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
          },
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Não foi possível criar a conta!",
          text: "Infelizmente estamos passando por problemas técnicos! Tente novamente mais tarde!",
          icon: "error",
          confirmButtonText: "Ok",
          showCancelButton: false,
          buttonsStyling: false,
          reverseButtons: true,
          timer: 3000,
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
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="become-saller-wrapper w-full">
        <div className="title mb-10">
          <PageTitle
            title="Seja um vendedor!"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Become Saller", path: "/become-saller" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-10">
          <div className="container-x mx-auto">
            <div className="w-full bg-white sm:p-[30px] p-3">
              <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
                <div className="xl:w-[824px]">
                  <div className="title w-full mb-4">
                    <h1 className="text-[22px] font-semibold text-qblack mb-1">
                      Informações do vendedor
                    </h1>
                    <p className="text-[15px] text-qgraytwo">
                      Fill the form below or write us .We will help you as soon
                      as possible.
                    </p>
                  </div>
                  <div className="input-area">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="01/01/2023"
                        label="Data de nascimento*"
                        name="Data de nascimento"
                        type="text"
                        inputClasses="h-[50px]"
                        value={birth}
                        inputHandler={(e) => setBirth(e.target.value)}
                      />
                    </div>
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

                  {/* ============================================================== */}
                  <div className="title w-full mb-4">
                    <h1 className="text-[22px] font-semibold text-qblack mb-1">
                      Informações da loja
                    </h1>
                    <p className="text-[15px] text-qgraytwo">
                      Insira a sua autorização de venda.
                    </p>
                  </div>
                  <div className="input-area">
                    <div className="mb-5">
                      <InputCom
                        placeholder="Digite o número da sua autorização de venda..."
                        label="AFE*"
                        name="afe"
                        type="text"
                        inputClasses="h-[50px]"
                        value={afe}
                        inputHandler={(e) => setAfe(e.target.value)}
                      />
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button onClick={becomeSallerHandler}
                          type="button"
                          className="black-btn text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span>Criar Conta Vendedor</span>
                        </button>
                      </div>
                    </div>

                    <div className="signup-area flex justify-center">
                      <p className="text-sm text-qgraytwo font-normal">
                        Já tem uma conta?
                        <a href="/login" className="ml-2 text-qblack">
                          Log In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 mb-10 xl:mb-0">
                  <div className="update-profile w-full mb-9">
                    <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                      Atualizar perfil
                      <span className="ml-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                            fill="#374557"
                            fillOpacity="0.6"
                          />
                        </svg>
                      </span>
                    </h1>
                    <p className="text-sm text-qgraytwo mb-5">
                      Tamanho
                      <span className="ml-1 text-qblack">300x300</span>. Gifs
                      Também funcionam.
                      <span className="ml-1 text-qblack">Max 5mb</span>.
                    </p>
                    <div className="flex xl:justify-center justify-start">
                      <div className="relative">
                        <img
                          src={currentImg ? currentImg : `${process.env.PUBLIC_URL}/assets/images/placeholder.png`}
                          alt=""
                          className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                        />
                        <input
                          ref={profileImgInput}
                          onChange={(e) => profileImgChangHandler(e)}
                          type="file"
                          className="hidden"
                        />
                        <div
                          onClick={browseProfileImg}
                          className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#87D6D1] bg-[#87D6D1] rounded-full cursor-pointer"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                              fill="white"
                            />
                            <path
                              d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="update-logo w-full mb-9">
                    <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                      Atualizar Logo
                      <span className="ml-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                            fill="#374557"
                            fillOpacity="0.6"
                          />
                        </svg>
                      </span>
                    </h1>
                    <p className="text-sm text-qgraytwo mb-5">
                      Tamanho
                      <span className="ml-1 text-qblack">300x300</span>. Gifs
                      Também funcionam.
                      <span className="ml-1 text-qblack">Max 5mb</span>.
                    </p> */}
                  {/* <div className="flex xl:justify-center justify-start">
                      <div className="relative">
                        <img
                          src={
                            logoImg ||
                            `${process.env.PUBLIC_URL}/assets/images/edit-logoimg.jpg`
                          }
                          alt=""
                          className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                        />
                        <input
                          ref={logoImgInput}
                          onChange={(e) => logoImgChangHandler(e)}
                          type="file"
                          className="hidden"
                        />
                        <div
                          onClick={browseLogoImg}
                          className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#87D6D1] bg-[#87D6D1] rounded-full cursor-pointer"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                              fill="white"
                            />
                            <path
                              d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                  {/* <div className="update-cover w-full">
                    <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                      Atualizar capa
                      <span className="ml-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                            fill="#374557"
                            fillOpacity="0.6"
                          />
                        </svg>
                      </span>
                    </h1>
                    <p className="text-sm text-qgraytwo mb-5">
                      Tamanho
                      <span className="ml-1 text-qblack">1170x920</span>.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-full relative">
                        <img
                          src={
                            coverImg ||
                            `${process.env.PUBLIC_URL}/assets/images/edit-coverimg.jpg`
                          }
                          alt=""
                          className="w-full h-[120px] rounded-lg overflow-hidden object-cover"
                        />
                        <input
                          ref={coverImgInput}
                          onChange={(e) => coverImgChangHandler(e)}
                          type="file"
                          className="hidden"
                        />
                        <div
                          onClick={browseCoverImg}
                          className="w-[32px] h-[32px] absolute -bottom-4 right-4 bg-[#87D6D1] hover:bg-[#87D6D1] rounded-full cursor-pointer"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                              fill="white"
                            />
                            <path
                              d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
