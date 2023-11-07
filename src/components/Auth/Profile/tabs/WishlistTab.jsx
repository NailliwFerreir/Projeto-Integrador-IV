import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

export default function WishlistTab({ className }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [stock, setStock] = useState("");
  const [race, setRace] = useState("");
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const [productsList, setProductsList] = useState([]);

  const productHandler = async () => {
    let id = JSON.parse(localStorage.getItem("user"));
    id = id.id;
    console.log(id)
    const response = await api.get(`/products/userId/${id}`);
    const { data } = response;
    console.log(data);

    setProductsList(data);
  }
  const deleteHandle = async (id) => {
    const response = await api.delete(`/products/${id}`);
    setDeletedIds([...deletedIds, id]);
  }



  const [deletedIds, setDeletedIds] = useState([])

  useEffect(() => {
    const seila = [];
    setProductsList(productsList.filter((product) => !deletedIds.includes(product.id)))
  }, [deletedIds])



  useEffect(() => { productHandler() }, [])

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {/* table heading */}
              <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase gap-3">
                <td className="py-4 pl-10 block whitespace-nowrap  w-[100px]">
                  Produto
                </td>
                <td className="py-4 whitespace-nowrap text-center">
                  Raça
                </td>
                <td className="py-4 whitespace-nowrap text-center">
                  Estoque
                </td>
                <td className="py-4 whitespace-nowrap text-center">Preço</td>
                <td className="py-4 whitespace-nowrap  text-center ">Categoria</td>
                <td className="py-4 whitespace-nowrap  text-center">Description</td>
                <td className="py-4 whitespace-nowrap  text-center">Deletar produto</td>
              </tr>
              {/* table heading end */}
              {productsList?.length > 0 && productsList.map((product) => (

                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="pl-10  py-4 ">
                    <div className="flex space-x-6 items-center">
                      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                        <img
                          src={product.productImage}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="font-medium text-[15px] text-qblack">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-[15px] font-normal">{product.race}</span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-[15px] font-normal">{product.stock}</span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">RS$ {product.value}</span>
                    </div>
                  </td>
                  <td className=" py-4">
                    <div className="flex justify-center items-center">
                      <span className="text-[15px] font-normal">{product.category}</span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">{product.description}</span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">

                      <button onClick={() => deleteHandle(product.id)} type="button">
                        <span>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                              fill="#AAAAAA"
                            />
                          </svg>
                        </span>

                      </button>


                    </div>
                  </td>
                </tr>
              ))}



            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full mt-[30px] flex sm:justify-end justify-start">
        <div className="sm:flex sm:space-x-[30px] items-center">

          <div className="w-[200px] h-[70px]">
            <button onClick={() => navigate("/seller-product")} type="button" className="black-btn h-full p-3">
              <div className="w-full text-sm font-semibold">
                Adicionar novo produto
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
