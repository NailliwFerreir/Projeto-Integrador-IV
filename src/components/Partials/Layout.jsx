import { useState } from "react";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";

export default function Layout({
  children,
  childrenClasses,
  cartItems,
  filterProducts,
}) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      {/*  <Drawer open={drawer} action={() => setDrawer(!drawer)} /> */}
      <div className="w-full overflow-x-hidden">
        <Header
          drawerAction={() => setDrawer(!drawer)}
          cartItems={cartItems}
          filterProducts={filterProducts}
        />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        {/* <DiscountBanner /> */}
        <Footer />
      </div>
    </>
  );
}
