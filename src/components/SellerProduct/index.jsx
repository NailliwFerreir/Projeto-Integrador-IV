import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { currencyMaskBR, removeCurrencyMaskBR } from "../../masks";
import api from "../../services/api";
import InputCom from "../Helpers/InputCom";
import InputTextareaCom from "../Helpers/InputTextareaCom";
import PageTitle from "../Helpers/PageTitle";
import SelectCustom from "../Helpers/SelectCustom";
import Layout from "../Partials/Layout";
export default function SellerProduct() {
  const [productImages, setProductImages] = useState([]);
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
    console.log(e.target.value);
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
      value: removeCurrencyMaskBR(productPrice),
      race: productSubCategory,
      description: productDescription,
      productImage: productImg,
      fkUserId: id,
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
      });
  };

  // product values
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("R$ 0,00");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState(null);
  const [productSubCategory, setProductSubCategory] = useState(null);
  const [productType, setProductType] = useState(null);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    console.log(removeCurrencyMaskBR(productPrice));
  }, [productPrice]);

  const cattles = {
    bovine: [
      {
        value: "Nelore",
        label: "Nelore",
      },
      {
        value: "Angus",
        label: "Angus",
      },
      {
        value: "Guzerá",
        label: "Guzerá",
      },
      {
        value: "Simental",
        label: "Simental",
      },
      {
        value: "Charolais",
        label: "Charolais",
      },
      {
        value: "Hereford",
        label: "Hereford",
      },
      {
        value: "Brahman",
        label: "Brahman",
      },
      {
        value: "Mangalarga Marchador",
        label: "Mangalarga Marchador",
      },
      {
        value: "Crioulo",
        label: "Crioulo",
      },
      {
        value: "Indolês",
        label: "Indolês",
      },
      {
        value: "Jersey",
        label: "Jersey",
      },
      {
        value: "Limousin",
        label: "Limousin",
      },
      {
        value: "Shorthorn",
        label: "Shorthorn",
      },
      {
        value: "Senepol",
        label: "Senepol",
      },
      {
        value: "Tabapuã",
        label: "Tabapuã",
      },
      {
        value: "Xiquexique",
        label: "Xiquexique",
      },
    ],
    equine: [
      {
        value: "Crioulo",
        label: "Crioulo",
      },
      {
        value: "Mangalarga Marchador",
        label: "Mangalarga Marchador",
      },
      {
        value: "Pônei Brasileiro",
        label: "Pônei Brasileiro",
      },
      {
        value: "Appaloosa",
        label: "Appaloosa",
      },
      {
        value: "Paint Horse",
        label: "Paint Horse",
      },
      {
        value: "Árabe",
        label: "Árabe",
      },
      {
        value: "Quarter Horse",
        label: "Quarter Horse",
      },
      {
        value: "Pursange",
        label: "Pursange",
      },
      {
        value: "Thoroughbred",
        label: "Thoroughbred",
      },
      {
        value: "Pedigree",
        label: "Pedigree",
      },
      {
        value: "Andalusiano",
        label: "Andalusiano",
      },
      {
        value: "Lipizzano",
        label: "Lipizzano",
      },
      {
        value: "Morgan",
        label: "Morgan",
      },
      {
        value: "Shetland",
        label: "Shetland",
      },
      {
        value: "Appaloosa Brasileiro",
        label: "Appaloosa Brasileiro",
      },
      {
        value: "Pônei Quarto de Milha",
        label: "Pônei Quarto de Milha",
      },
      {
        value: "Pônei Shetland Brasileiro",
        label: "Pônei Shetland Brasileiro",
      },
    ],
  };

  const group = [
    { value: "bovine", label: "Bovino" },
    { value: "equine", label: "Equino" },
  ];

  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log(files);
  }, [files]);

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
                  <div className="flex justify-center max-w-6xl">
                    <div class="">
                      <img
                        src={
                          productImg ||
                          `${process.env.PUBLIC_URL}/assets/images/edit-coverimg.jpg`
                        }
                        alt=""
                        class="rounded-lg overflow-hidden object-cover"
                        style={{ width: `100%`, height: `300px` }}
                      />
                      <input
                        ref={productImgInput}
                        onChange={(e) => {
                          console.log(e.target.value);
                          productImgChangHandler(e);
                        }}
                        type="file"
                        class="hidden"
                      />
                      <div
                        onClick={browseProductImg}
                        class=" mt-4 right-0 p-4 mb-4 mr-4 bg-black hover:bg-gray-900 rounded-lg cursor-pointer"
                        style={{ width: `100%` }}
                      >
                        <div class="flex items-center justify-center h-full">
                          <span class="text-white text-center font-semibold">
                            Adicionar imagem do produto
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="update-cover w-full">
                    <h1 className="text-sm tracking-wide text-qblack flex items-center mb-2">
                      Por favor insira as imagens do anúncio (limite de 5
                      imagens)
                    </h1>
                    <Dropzone
                      limitFiles={10}
                      acceptType={"image/*"}
                      filesInserted={(files) => setProductImages(files)}
                    />
                  </div> */}
                  <div className="flex justify-center gap-4 flex-wrap">
                    {files.length > 0 &&
                      files.map((file) => (
                        <ImageIcon
                          key={file.name}
                          file={file}
                          onClick={() => hadleRemoveFile(file)}
                        />
                      ))}
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
                        type="text"
                        inputClasses="h-[50px]"
                        value={productPrice}
                        inputHandler={(e) =>
                          setProductPrice(currencyMaskBR(e.target.value))
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
                        inputHandler={(e) =>
                          setProductDescription(e.target.value)
                        }
                      />
                    </div>

                    <div className="mb-5">
                      <SelectCustom
                        label="Selecione a categoria"
                        datas={group}
                        getValue={(value) => {
                          setProductCategory(value.label);
                          setProductType(value.value);
                        }}
                      />
                    </div>

                    {productType && (
                      <div className="mb-5">
                        <SelectCustom
                          label="Selecione a subcategoria*"
                          datas={cattles[productType]}
                          getValue={(value) => {
                            setProductSubCategory(value.value);
                          }}
                        />
                      </div>
                    )}

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
