import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import MobileHeader from "./mobile/MobileHeader";
import MobileNavigationBar from "../navigation-bar/mobile/MobileNavigationBar";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-1/4 h-full container mx-auto bg-white">
      <MobileHeader />
      {children}
      <MobileNavigationBar />
    </main>
  );
};

export default Layout;
