import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./hooks/useProduct";
import "./index.css";

AOS.init();

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ProductProvider>

);
