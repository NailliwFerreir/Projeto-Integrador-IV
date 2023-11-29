import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../../services/api";
export default function OrderTab() {
  const [date, setDate] = useState("");
  const [situation, setSituation] = useState("Não Liberado");
  const [value, setValue] = useState("");
  const [orders, setOrders] = useState([]);
  const [apiData, setApiData] = useState({});
  const [idB, setIdB] = useState("");


  const orderHandler = async () => {
    let id = JSON.parse(localStorage.getItem("user"));
    id = id.id;
    setIdB(id)
    let idProduct = id.productId
    console.log(id)
    const response = await api.get(`/orders/buyerId/${id}/fkUserId/${id}`);
    console.log(response)
    const { data } = response;
    console.log("pedido", data);
    setApiData(data)
    console.log(apiData)

    setOrders(data);
  }
  const updateOrderSituation = async (order, index) => {
    Swal.fire({
      title: "Deseja atualizar o status do pedido para Liberado?",
      text: "Confirme para atualizar!",
      icon: "question",
      confirmButtonText: "Ok",
      showCancelButton: true,
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        confirmButton:
          "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
        title: "text-2xl text-qblack",
        text: "text-xs text-qblack",
        cancelButton:
          "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
      },
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          console.log(apiData[index].productId)
          const response = await api.put(`/orders/situation/${apiData[index].productId}`, {
            situation: "Liberado"
          });
          const filteredOrder = orders.filter((ord) => {
            return ord.productId !== apiData[index].productId
          })
          console.log(filteredOrder)
          setOrders([{
            ...order,
            situation: "Liberado"
          }, ...filteredOrder])
        } catch (error) {
          console.log(error)
        }
      }
    });

  }
  const deleteOrderHandler = async (order) => {
    const response = await api.delete(`/orders/delete/${order.productId}`);
    console.log("deletando")
    console.log(response)
  }
  const updateOrderSituationEntregue = async (order, index) => {
    Swal.fire({
      title: "Deseja atualizar o status do pedido para Entregue?",
      text: "Confirme para atualizar!",
      icon: "question",
      confirmButtonText: "Ok",
      showCancelButton: true,
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        confirmButton:
          "mx-10 w-20 h-10 p-1 bg-black text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
        title: "text-2xl text-qblack",
        text: "text-xs text-qblack",
        cancelButton:
          "mx-10 w-20 h-10 p-1 bg-slate-400 text-white w-16 hover:font-bold flex justify-center items-center ease-out duration-200",
      },
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          console.log(apiData[index].productId)
          const response = await api.put(`/orders/situation/${apiData[index].productId}`, {
            situation: "Entregue"
          });
          const filteredOrder = orders.filter((ord) => {
            return ord.productId !== apiData[index].productId
          })
          console.log(filteredOrder)
          setOrders([{
            ...order,
            situation: "Entregue"
          }, ...filteredOrder])
        } catch (error) {
          console.log(error)
        }
      }
    });



  }
  const [updatedOrder, setUpdatedOrder] = useState([])
  const resetSituation = async (order, index) => {

    try {
      console.log(apiData[index].productId)
      let proId = apiData[index].productId
      console.log("idproduto", proId)
      const response = await api.put(`/orders/situation/${proId}`, {
        situation: "Não Liberado"
      });
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => { orderHandler() }, [])

  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <p className="text-sm text-qgray mt-6">
          <span className="text-blue-500">Azul</span> indica pedidos do vendedor.
          <span className="text-yellow-500"> Amarelo</span> indica pedidos do comprador.
          <span className="text-blue-500"> Vendedores</span> podem alterar situação do pedido selecionando com o cursor do mouse o texto do status

        </p>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-4 block whitespace-nowrap text-center">
                Pedidos
              </td>
              <td className="py-4 whitespace-nowrap text-center">Data</td>
              <td className="py-4 whitespace-nowrap text-center">Status</td>
              <td className="py-4 whitespace-nowrap text-center">Preço</td>
              <td className="py-4 whitespace-nowrap text-center">quantidade</td>
            </tr>
            {/* table heading end */}
            {orders?.length > 0 && orders.map((order, index) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                <td className="text-center py-4">
                  <span className={`text-lg text-qgray font-medium ${order.fkUserId == idB ? "text-blue-500" : "text-yellow-500"} p-2`}>#{order.productId} </span>
                  {/* "text-lg text-qgray font-medium" */}
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qgray  whitespace-nowrap">
                    {order.date}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <button
                    onClick={() => {
                      if (order.situation === "Liberado") {
                        updateOrderSituationEntregue(order, index);
                        setTimeout(deleteOrderHandler, 60000, order);
                      } else {
                        if (order.fkUserId == idB) {
                          updateOrderSituation(order, index);
                        }
                      }
                    }}
                    type="button"
                  >
                    <span className={`text-sm rounded text ${order.situation === "Liberado"
                      ? "text-green-500"
                      : order.situation === "Não Liberado"
                        ? "text-red-500"
                        : "text-blue-500"
                      } p-2`}>
                      {order.situation}
                    </span>
                  </button>
                </td>
                <td className="text-center py-4 px-2">
                  {/* remover botao depois, apenas para testar situação */}
                  <button onClick={() => resetSituation(order, index)} type="button">
                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                      R$ {order.value}
                    </span>
                  </button>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qgray  whitespace-nowrap">
                    {order.quantity}
                  </span>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
