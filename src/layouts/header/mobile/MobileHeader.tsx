import { MdOutlineLocationOn } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const MobileHeader = () => {
  return (
    <div className="flex flex-1 items-center justify-around py-5 border-b-2">
      <div className="bg-[#EDEDED] border flex w-full items-center justify-between px-3 py-4 rounded-xl mx-2">
        <RiSearch2Line size={24} className="text-secondary" />
        <input
          type="text"
          placeholder="جستجو در شناژ"
          className="border-none outline-none mr-2 max-w-xs  w-full bg-inherit"
        />
        <div className="flex items-center gap-x-2 cursor-pointer">
          <span>اصفهان</span>
          <MdOutlineLocationOn size={24} className="text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
