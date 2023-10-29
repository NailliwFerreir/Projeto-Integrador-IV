import { useRef, useState } from "react";
import Dropzone from "../Helpers/Dropzone";
import InputCom from "../Helpers/InputCom";
import InputTextareaCom from "../Helpers/InputTextareaCom";
import PageTitle from "../Helpers/PageTitle";
import SelectCustom from "../Helpers/SelectCustom";
import Layout from "../Partials/Layout";

export default function SellerProduct() {
  const [profileImg, setProfileImg] = useState(null);
  const [logoImg, setLogoImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  // logo img
  const logoImgInput = useRef(null);
  const browseLogoImg = () => {
    logoImgInput.current.click();
  };
  const logoImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setLogoImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  // profile img
  const profileImgInput = useRef(null);
  const browseProfileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  // cover img
  const coverImgInput = useRef(null);
  const browseCoverImg = () => {
    coverImgInput.current.click();
  };
  const coverImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setCoverImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };

  // product values
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("R$ 0,00");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");

  const cattles = {
    bovine: [
      {
        Nelore: "Nelore",
      },
      {
        Angus: "Angus",
      },
      {
        Guzerá: "Guzerá",
      },
      {
        Simental: "Simental",
      },
      {
        Charolais: "Charolais",
      },
      {
        Hereford: "Hereford",
      },
      {
        Brahman: "Brahman",
      },
      {
        "Mangalarga Marchador": "Mangalarga Marchador",
      },
      {
        Crioulo: "Crioulo",
      },
      {
        Indolês: "Indolês",
      },
      {
        Jersey: "Jersey",
      },
      {
        Limousin: "Limousin",
      },
      {
        Shorthorn: "Shorthorn",
      },
      {
        Senepol: "Senepol",
      },
      {
        Tabapuã: "Tabapuã",
      },
      {
        Xiquexique: "Xiquexique",
      },
    ],
    equine: [
      {
        Crioulo: "Crioulo",
      },
      {
        "Mangalarga Marchador": "Mangalarga Marchador",
      },
      {
        "Pônei Brasileiro": "Pônei Brasileiro",
      },
      {
        Appaloosa: "Appaloosa",
      },
      {
        "Paint Horse": "Paint Horse",
      },
      {
        Árabe: "Árabe",
      },
      {
        "Quarter Horse": "Quarter Horse",
      },
      {
        Pursange: "Pursange",
      },
      {
        Thoroughbred: "Thoroughbred",
      },
      {
        Pedigree: "Pedigree",
      },
      {
        Andalusiano: "Andalusiano",
      },
      {
        Lipizzano: "Lipizzano",
      },
      {
        Morgan: "Morgan",
      },
      {
        Shetland: "Shetland",
      },
      {
        "Appaloosa Brasileiro": "Appaloosa Brasileiro",
      },
      {
        "Pônei Quarto de Milha": "Pônei Quarto de Milha",
      },
      {
        "Pônei Shetland Brasileiro": "Pônei Shetland Brasileiro",
      },
    ],
  };

  const group = [{ bovine: "Bovino" }, { equine: "Equino" }];

  function moneyMaskBR(inputStr) {
    if (typeof inputStr === "number")
      inputStr = inputStr.toString().replace(".", "");
    var numericStr = inputStr.replace(/[^0-9]/g, "");
    numericStr = numericStr.replace(/^0+/, "");
    if (numericStr.length < 2) {
      numericStr = numericStr.padStart(2, "0");
    }
    if (numericStr.length <= 2) {
      numericStr = numericStr.padStart(3, "0");
    }
    var integerPart = numericStr.slice(0, -2);
    var decimalPart = numericStr.slice(-2);
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var formattedValue = "R$ " + integerPart + "," + decimalPart;
    return formattedValue;
  }

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="become-saller-wrapper w-full">
        <div className="title mb-10">
          <PageTitle
            title="Informações do anúncio"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Informações do anúncio", path: "/seller-product" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-10">
          <div className="container-x mx-auto">
            <div className="w-full bg-white sm:p-[30px] p-3">
              <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
                <div className="w-full">
                  <div className="title w-full mb-4">
                    <h1 className="text-[22px] font-semibold text-qblack mb-1">
                      Informações do anúncio
                    </h1>
                    <p className="text-[15px] text-qgraytwo">
                      Preencha todos os campos do anúncio.
                    </p>
                  </div>
                  <div className="update-cover w-full">
                    <h1 className="text-sm tracking-wide text-qblack flex items-center mb-2">
                      Por favor insira as imagens do anúncio (limite de 5
                      imagens)
                    </h1>
                    <Dropzone
                      limitFiles={10}
                      className={
                        "input-item h-[100px] border border-[#EDEDED] text-sm text-qgraytwo px-5  text-center flex items-center justify-center mb-5"
                      }
                      acceptType={"image/*"}
                      filesInserted={(files) => console.log(files)}
                    />
                  </div>
                  <div className="input-area pt-2">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Nome do Produto "
                        label="Nome do produto (Isso vai ser o título do anúncio)*"
                        name="productName"
                        type="text"
                        inputClasses="h-[50px]"
                        value={productName}
                        inputHandler={(e) => setProductName(e.target.value)}
                      />

                      <InputCom
                        label="Preço*"
                        name="productPrice"
                        placeholder="R$ 100,00"
                        type="text"
                        inputClasses="h-[50px]"
                        value={productPrice}
                        inputHandler={(e) =>
                          setProductPrice(moneyMaskBR(e.target.value))
                        }
                      />
                    </div>

                    <div className="mb-5 align-top ">
                      <InputTextareaCom
                        label="Descrição do produto*"
                        placeholder="Por favor insira uma descrição do produto"
                        name="phone"
                        type="text"
                        inputClasses="h-[150px] whitespace-pre-line word-brake text-black"
                      />
                    </div>

                    <div className="mb-5">
                      <SelectCustom
                        label="Categoria do sêmen*"
                        datas={[
                          { value: "row", label: "Linha1" },
                          { value: "ro2", label: "Linha2" },
                        ]}
                        getValue={(value) => console.log(value.label)}
                      />
                    </div>

                    <div className="input-item mb-5">
                      <button type="button" className="p-3 black-btn">
                        <div>
                          <span>Postar anúncio</span>
                        </div>
                      </button>
                    </div>
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
