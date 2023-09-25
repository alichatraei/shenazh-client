import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import MobileHeader from "./mobile/MobileHeader";
import MobileNavigationBar from "../navigation-bar/mobile/MobileNavigationBar";
const Header = () => {
  return (
    <div className="md:hidden">
      <MobileHeader />
      <MobileNavigationBar />
    </div>
  );
};

export default Header;
