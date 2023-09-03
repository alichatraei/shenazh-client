import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
const Header = () => {
  return (
    <div className="flex flex-1 items-center justify-around py-5 ">
      <div className="flex items-center">
        <Image src={Logo} alt="shenazh-logo" />
        <hr className="rotate-90 border-gray-400 w-12" />
        <span className="text-gray-300">پلتفرم خرید و فروش صنعت ساختمان</span>
      </div>
      <div className="border flex items-center px-3 py-2 rounded-3xl">
        <RiSearch2Line size={18} />
        <input
          type="text"
          placeholder="جستجو در شناژ"
          className="border-none outline-none mr-2 w-full max-w-xs"
        />
        <MdOutlineLocationOn size={18} />
      </div>
    </div>
  );
};

export default Header;
