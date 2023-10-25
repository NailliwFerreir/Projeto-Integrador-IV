import { useState } from "react";
import DiscountBanner from "../HomeFive/DiscountBanner";
import Drawer from "../Mobile/Drawer";
import FooterFive from "./Footers/FooterFive";
import HeaderFive from "./Headers/HeaderFive";

export default function LayoutHomeFive({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderFive drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        <DiscountBanner />
        <FooterFive />
      </div>
    </>
  );
}
