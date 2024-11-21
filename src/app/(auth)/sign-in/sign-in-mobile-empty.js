import { useState } from "react";
import Header from "../../../components/mobileComponents/sign-in-header";
import Navbar from "../../../components/mobileComponents/sign-in-navbar";
import Link from "next/link";

const OTPInput = ({ count }) => {
  return (
    <div className="flex justify-between gap-4">
      {[...Array(count)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className="w-[26px] h-[26px] border border-[rgba(140,35,46,0.25)] bg-[#FAFAFA] text-center font-montserrat text-[20px] font-bold focus:outline-none focus:border-[#650010]"
          placeholder="0"
        />
      ))}
    </div>
  );
};

const SignInMobile = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  const handleSendMail = () => {
    setIsMailSent(true);
  };

  const handleClose = () => {
    setIsMailSent(false);
  };

  const logo =
    "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

  return (
    <div className="w-full h-screen flex flex-col gap-1">
      <Header />
      <Navbar />
      {isMailSent ? (
        <main className="flex flex-col justify-center items-center w-full h-screen">
          <div className="flex flex-col items-center w-[273px] h-[246px]">
            <div className="flex flex-col w-[247px] h-[50px] gap-6">
              <div className="flex flex-col gap-2">
                <button className="ml-auto" onClick={handleClose}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="x">
                      <path
                        id="Vector"
                        d="M6 6L18 18M6 18L18 6L6 18Z"
                        stroke="#A0AEC0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
                <label className="font-montserrat font-bold text-[14px] text-[#000000]">
                  Enter verification code
                </label>
                <label className="font-montserrat text-[10px] text-[#718096]">
                  We have just sent a verification code to saichar*****@mail.com
                </label>
              </div>
              <OTPInput count={6} />
              <div className="flex w-full h-auto">
                <button className="font-montserrat text-[10px] font-bold text-[#741D26]">
                  Send the code again
                </button>
              </div>
              <Link
                href="/currentJobs"
                className="font-montserrat text-[12px] text-center text-[#FFFFFF] w-full font-bold h-[28px] p-2 bg-[#650010]"
                onClick={handleSendMail}
              >
                Verify
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col justify-center items-center w-full h-screen">
          <div className="flex flex-col items-center w-[273px] h-[246px] gap-4">
            <div className="flex flex-col items-center pb-4">
              <img
                src={logo}
                alt="Login Logo"
                width="118px"
                height="37px"
                className="pb-2"
              />
              <p className="font-montserrat w-full h-[16px] text-[12px] font-semibold text-center text-[#000000]">
                Login to apply for a Job
              </p>
            </div>
            <div className="flex flex-col w-[247px] h-[50px] gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[14px] text-[#000000]">
                  Email Address<span className="text-[#E03137]">*</span>
                </label>
                <input
                  className="border border-[#BBBBBB] w-full h-[28.71px] p-[16px_20px] placeholder:text-[#A0AEC0] placeholder:font-montserrat placeholder:text-[14px] placeholder:font-normal"
                  type="email"
                  placeholder="Input your registered email"
                  required
                />
              </div>
              <button
                className="font-montserrat text-[12px] text-center text-[#FFFFFF] w-full h-[28px] p-2 bg-[#650010]"
                onClick={handleSendMail}
              >
                Generate OTP
              </button>
              <div className="flex items-center gap-2">
                <button className="opacity-50" aria-label="Back to Careers">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#000000]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="12" x2="6" y2="12"></line>
                    <polyline points="12 6 6 12 12 18"></polyline>
                  </svg>
                </button>
                <p className="font-manrope text-[10px] text-[#00000080]">
                  Back to careers homepage
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default SignInMobile;
