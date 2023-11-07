import React, { useEffect, useState } from "react";
import api from "../../../../services/api";
export default function OrderTab() {
  const [date, setDate] = useState("");
  const [situation, setSituation] = useState("");
  const [value, setValue] = useState("");

  const [orders, setOrders] = useState([]);


  const orderHandler = async () => {
    let id = JSON.parse(localStorage.getItem("user"));
    id = id.id;
    console.log(id)
    const response = await api.get(`/orders/userId/${id}`);
    const { data } = response;
    console.log(data);

    setOrders(data);
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
                  <span className="text-lg text-qgray font-medium">#{index + 1}</span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qgray  whitespace-nowrap">
                    {order.date}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className={`text-sm rounded text-${order.situation == "Liberado" ? "green" : "red"}-500 bg-${order.situation == "Liberado" ? "green" : "red"}-100 p-2`}>
                    {order.situation}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qblack whitespace-nowrap px-2 ">
                    R$ {order.value}
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
