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
          const response = await api.put(`/orders/situ/${apiData[index].productId}`, {
            ...order,
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
  const [updatedOrder, setUpdatedOrder] = useState([])
  const resetSituation = async (order, index) => {

    try {
      console.log(apiData[index].productId)
      const response = await api.put(`/orders/situ/${apiData[index].productId}`, {
        ...order,
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
                  <button onClick={() => updateOrderSituation(order, index)} type="button">
                    <span className={`text-sm rounded text ${order.situation === "Liberado" ? "text-green-500" : "text-red-500"} p-2`}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
