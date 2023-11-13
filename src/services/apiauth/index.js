import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("user"))
if (accessToken== null)
{
  accessToken = "sem token"
}
accessToken = accessToken.accessToken
console.log(accessToken)
export default axios.create({
  baseURL: "http://localhost:8080/api/test",
  headers: {
    "Authorization": `Bearer ${accessToken}`,
  },
});
