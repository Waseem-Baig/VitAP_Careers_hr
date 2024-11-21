import Link from "next/link";
import { useState } from "react";

const logoSrc =
  "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeButton, setActiveButton] = useState("current");

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-[20vw] h-[80vh] p-[24px_32px] flex flex-col gap-8 border-r-[1px] border-gray-300 bg-white sm:p-[16px_20px] md:w-[20vw] md:p-[12px_18px] lg:p-[24px_32px] xl:w-[20vw] xl:h-[85vh] xl:p-[28px_36px]">
      <div className="flex justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="logo" className="w-[80%]" />
        <div className="flex">
          <ChevronIcon />
          <ChevronIcon />
        </div>
      </div>
      <div className="flex flex-col pb-3">
        <p className="text-black font-montserrat font-bold text-[20px] sm:text-[12px] md:text-[14px] lg:text-[20px]">
          Hello Sri Vardhan
        </p>
        <p className="text-black font-montserrat text-[13px] md:text-[10px] font-normal">
          Happy to see you here!
        </p>
      </div>
      <div className="text-white bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] flex justify-center items-center">
        <SidebarButton label="Post a Job" icon={<DashboardIcon />} />
      </div>
      <div className="flex flex-col">
        <button
          className={`text-[20px] sm:text-[12px] md:text-[16px] font-bold flex justify-center items-center gap-4 transition duration-300 
          ${isActive ? "bg-gray-100 text-black" : ""} p-2 rounded`}
          onClick={toggleActive}
        >
          Jobs Posted{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
            >
              <path d="M0 0L5.5 6L11 0H0Z" fill="black" />
            </svg>
          </span>
        </button>
        {isActive && (
          <div className="flex flex-col gap-2 p-2 rounded mt-2">
            {/* Current Jobs Button */}
            <Link
              className={`p-2 md:text-[14px] sm:text-[12px] rounded transition-all ${
                activeButton === "current"
                  ? "bg-[#FFDCDF] text-black" // Active styling
                  : "bg-[#FCE3E580] hover:bg-[#FFDCDF]" // Inactive styling
              }`}
              onClick={() => setActiveButton("current")} // Set active button
            >
              Current Jobs
            </Link>

            {/* Past Jobs Button */}
            <Link
              className={`p-2 md:text-[14px] sm:text-[12px] rounded transition-all ${
                activeButton === "past"
                  ? "bg-[#FFDCDF] text-black" // Active styling
                  : "bg-[#FCE3E580] hover:bg-[#FFDCDF]" // Inactive styling
              }`}
              onClick={() => setActiveButton("past")} // Set active button
            >
              Past Jobs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.16667 15V3.33333L5 7.5L3.75 6.25L10 0L16.25 6.25L15 7.5L10.8333 3.33333V15H9.16667ZM2.5 20C1.8125 20 1.22417 19.7554 0.735 19.2662C0.245833 18.7771 0.000833333 18.1883 0 17.5V13.75H1.66667V18.3333H10H18.3333V13.75L20 13.75V17.5C20 18.1875 19.7554 18.7762 19.2662 19.2662C18.7771 19.7562 18.1883 20.0008 17.5 20H2.5Z"
        fill="white"
      />
    </svg>
  );
};

const SidebarButton = ({ label, icon }) => (
  <button className="flex justify-center items-center">
    <div className="flex justify-between gap-8 md:gap-5 sm:gap-4 p-[12px_15px] md:p-[8px_12px] sm:p-[5px_8px]">
      <p className="text-white font-montserrat font-medium text-[14px] sm:text-[10px] md:text-[12px] lg:text-[16px]">
        {label}
      </p>
      {icon}
    </div>
  </button>
);

const ChevronIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chevron-left">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3373 3.52851C11.5976 3.78886 11.5976 4.21097 11.3373 4.47132L7.80869 7.99992L11.3373 11.5285C11.5976 11.7889 11.5976 12.211 11.3373 12.4713C11.0769 12.7317 10.6548 12.7317 10.3945 12.4713L6.39448 8.47132C6.13413 8.21097 6.13413 7.78886 6.39448 7.52851L10.3945 3.52851C10.6548 3.26816 11.0769 3.26816 11.3373 3.52851Z"
        fill="#111827"
      />
    </g>
  </svg>
);

export default Sidebar;
