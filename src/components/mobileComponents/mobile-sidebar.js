import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const logoSrc =
  "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

const Button = ({ children, className, onClick }) => (
  <button
    className={`flex items-center self-stretch py-2 font-montserrat text-[12px] font-medium ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const SidebarButton = ({ label, icon }) => (
  <button className="flex justify-center items-center">
    <div className="flex justify-between items-center gap-8 p-[10px_17px]">
      <p className="text-white text-center font-montserrat text-[14px] font-medium">
        {label}
      </p>
      {icon}
    </div>
  </button>
);

const Sidebar = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState();
  const [activeButton, setActiveButton] = useState("current");

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[60vw] overflow-y-scroll p-[14px_19px] flex flex-col gap-6 border-l border-gray-300 bg-white transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <img src={logoSrc} alt="Logo" width="90vw" height="auto" />
        <button className="flex" onClick={onClose}>
          <ChevronIcon />
          <ChevronIcon />
        </button>
      </div>
      <div className="flex flex-col pb-5">
        <p className="text-black font-montserrat text-[15px] font-bold">
          Hello Sri Vardhan
        </p>
        <p className="text-black font-montserrat text-[12px] font-normal">
          Happy to see you here!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <a
          href="#"
          className="border border-[#650010] text-[#650010] text-center w-full p-[10px] text-[12px] flex justify-center items-center"
        >
          VITAp Home Page
        </a>
        <div className="text-white text-center bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)]">
          <SidebarButton label="Post a Job" icon={<DashboardIcon />} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {["Home", "Apply Jobs", "Contact Us"].map((label) => (
          <Link href="#" key={label}>
            {label}
          </Link>
        ))}
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
              href="/currentJobs"
              className={`p-2 text-[12px] rounded transition-all ${
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
              href="/pastJobs"
              className={`p-2 text-[14px] rounded transition-all ${
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
      <div className="text-white bg-[#650010] shadow-[0px_10px_30px_0px_rgba(101,0,16,0.2)] text-center flex justify-center items-center">
        <Link href="/sign-in" className="p-2">
          Logout
        </Link>
      </div>
    </div>
  );
};

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

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
  >
    <path
      d="M6.21745 9.08594V2.06771L3.71094 4.57422L2.95898 3.82227L6.71875 0.0625L10.4785 3.82227L9.72656 4.57422L7.22005 2.06771V9.08594H6.21745ZM2.20703 12.0937C1.79346 12.0937 1.43954 11.9466 1.14527 11.6524C0.851009 11.3581 0.703626 11.0039 0.703125 10.5898V8.33398H1.70573V11.0911H6.71875H11.7318V8.33398L12.7344 8.33398V10.5898C12.7344 11.0034 12.5872 11.3576 12.293 11.6524C11.9987 11.9471 11.6445 12.0942 11.2305 12.0937H2.20703Z"
      fill="white"
    />
  </svg>
);

export default Sidebar;
