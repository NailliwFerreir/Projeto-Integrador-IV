import { useRef, useState } from "react";
import Swal from "sweetalert2";
import api from "../../services/api";
import InputCom from "../Helpers/InputCom";
import InputTextareaCom from "../Helpers/InputTextareaCom";
import PageTitle from "../Helpers/PageTitle";
import SelectCustom from "../Helpers/SelectCustom";
import Layout from "../Partials/Layout";
export default function SellerProduct() {
  const [productImg, setProductImg] = useState(null);
  // const [logoImg, setLogoImg] = useState(null);
  // const [coverImg, setCoverImg] = useState(null);

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
  const productImgInput = useRef(null);
  const browseProductImg = () => {
    productImgInput.current.click();
  };
  const productImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProductImg(event.target.result);
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
  //     imgReader.onload = (event) => {
  //       setCoverImg(event.target.result);
  //     };
  //     imgReader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  const sallerProductHandler = (e) => {
    var id = JSON.parse(localStorage.getItem("user"));
    id = id.id;
    const obj = {
      name: productName,
      category: `${productCategory}, ${productSubCategory}`,
      stock,
      value: productPrice,
      race: productSubCategory,
      description: productDescription,
      productImage: productImg,
      fkUserId: id
    };
    console.log(obj);
    api
      .post("/products", obj)
      .then((resp) => {
        console.log(resp.data);
        Swal.fire({
          title: "Anúncio criado com sucesso!",
          text: "O anúncio foi criado com sucesso, você será redirecionado para a página do anúncio.",
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
        //definir o direcionamento para a página do anúncio caso o anúncio seja criado com sucesso
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Ocorreu uma falha ao publicar o anúncio!",
          text: "Tente novamente mais tarde!",
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
      })
  }

  // product values
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("Bovino");
  const [productSubCategory, setProductSubCategory] = useState("Nelore");
  const [stock, setStock] = useState(1);

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
                  <div class="flex justify-center">
                    <div class="relative">
                      <img
                        src={productImg || `${process.env.PUBLIC_URL}/assets/images/edit-coverimg.jpg`}
                        alt=""
                        class="rounded-lg overflow-hidden object-cover"
                      />
                      <input
                        ref={productImgInput}
                        onChange={(e) => productImgChangHandler(e)}
                        type="file"
                        class="hidden"
                      />
                      <div
                        onClick={browseProductImg}
                        class="absolute top-[-60px] right-0 mb-4 mr-4 bg-black hover:bg-gray-900 rounded-lg cursor-pointer"
                        style={{ width: `100%` }}
                      >
                        <div class="flex items-center justify-between h-full px-4">
                          <span class="text-white text-base font-semibold">Adicionar imagem do produto</span>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="input-area pt-2">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Nome do Produto"
                        label="Nome do produto*"
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
                        type="number"
                        inputClasses="h-[50px]"
                        value={productPrice}
                        inputHandler={(e) =>
                          setProductPrice((e.target.value)) //moneyMaskBR(e.target.value)
                        }
                      />

                      <InputCom
                        label="Estoque*"
                        name="productStock"
                        placeholder="R$ 100,00"
                        type="number"
                        inputClasses="h-[50px]"
                        value={stock}
                        inputHandler={(e) => setStock(e.target.value)}
                      />
                    </div>

                    <div className="mb-5 align-top ">
                      <InputTextareaCom
                        label="Descrição do produto*"
                        placeholder="Por favor insira uma descrição do produto"
                        name="phone"
                        type="text"
                        inputClasses="h-[150px] whitespace-pre-line word-brake text-black"
                        value={productDescription}
                        inputHandler={(e) => setProductDescription(e.target.value)}
                      />
                    </div>

                    <div className="mb-5">
                      <SelectCustom
                        label="Categoria do sêmen*"
                        datas={[
                          { value: "row", label: "Bovino" },
                          { value: "ro2", label: "Equino" },
                        ]}
                        getValue={(value) => setProductCategory(value.label)}
                      />
                    </div>

                    <div className="mb-5">
                      <SelectCustom
                        label="Subcategoria do sêmen*"
                        datas={[
                          { value: "row", label: "Nelore" },
                          { value: "row2", label: "Angus" },
                          { value: "row3", label: "Guzerá" },
                          { value: "row4", label: "Simental" },
                          { value: "row5", label: "Charolais" },
                          { value: "row6", label: "Hereford" },
                          { value: "row7", label: "Brahman" },
                          { value: "row8", label: "Mangalarga Marchador" },
                          { value: "row9", label: "Crioulo" },
                          { value: "row11", label: "Indolês" },
                          { value: "row12", label: "Jersey" },
                          { value: "row13", label: "Limousin" },
                          { value: "row14", label: "Shorthorn" },
                          { value: "row15", label: "Senepol" },
                          { value: "row16", label: "Tabapuã" },
                          { value: "row17", label: "Xiquexique" },
                          //Parte dos equinos
                          { value: "row18", label: "Crioulo" },
                          { value: "row19", label: "Mangalarga Marchador" },
                          { value: "row20", label: "Pônei Brasileiro" },
                          { value: "row41", label: "Appaloosa" },
                          { value: "row51", label: "Paint Horse" },
                          { value: "row61", label: "Árabe" },
                          { value: "row71", label: "Quarter Horse" },
                          { value: "row81", label: "Pursange" },
                          { value: "row91", label: "Thoroughbred" },
                          { value: "row111", label: "Pedigree" },
                          { value: "row121", label: "Andalusiano" },
                          { value: "row131", label: "Lipizzano" },
                          { value: "row141", label: "Morgan" },
                          { value: "row151", label: "Shetland" },
                          { value: "row161", label: "Appaloosa Brasileiro" },
                          { value: "row171", label: "Pônei Quarto de Milha" },
                          { value: "row181", label: "Pônei Shetland Brasileiro" },
                        ]}
                        getValue={(value) => setProductSubCategory(value.label)}
                      />
                    </div>

                    <div className="input-item mb-5">
                      <button
                        onClick={(e) => sallerProductHandler(e)}
                        type="button"
                        className="p-3 black-btn"
                      >

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
