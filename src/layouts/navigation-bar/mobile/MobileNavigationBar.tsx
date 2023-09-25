import {
  RiEarthLine,
  RiHome5Fill,
  RiMapPinUserLine,
  RiQuestionAnswerLine,
  RiShoppingBasket2Line,
} from "react-icons/ri";

const MobileNavigationBar = () => {
  return (
    <div className="absolute min-w-full h-16 bottom-0 flex flex-1 items-center bg-white shadow-2xl justify-between px-8 border-t-2">
      <div className="flex flex-col justify-center text-primary items-center">
        <RiHome5Fill size={26} />
        <span>شناژ</span>
      </div>
      <div className="flex flex-col justify-center items-center text-secondary cursor-pointer">
        <RiEarthLine size={26} />
        <span>نقشه</span>
      </div>
      <div className="flex flex-col justify-center items-center text-secondary cursor-pointer">
        <RiShoppingBasket2Line size={26} />
        <span>سبدخرید</span>
      </div>
      <div className="flex flex-col justify-center items-center text-secondary cursor-pointer">
        <RiQuestionAnswerLine size={26} />
        <span>پیام ها</span>
      </div>
      <div className="flex flex-col justify-center items-center text-secondary cursor-pointer">
        <RiMapPinUserLine size={26} />
        <span>شناژ من</span>
      </div>
    </div>
  );
};

export default MobileNavigationBar;
