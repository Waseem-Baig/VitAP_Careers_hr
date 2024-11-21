import Image from "next/image";
import { useState } from "react";

const OTPInput = ({ count }) => {
  return (
    <div className="flex justify-between items-center gap-4">
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

const SignIn = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  function handleSendMail() {
    setIsMailSent(true);
  }

  function handleClose() {
    setIsMailSent(false);
  }

  const backgroundImage =
    "https://s3-alpha-sig.figma.com/img/c072/0f52/82eba2fa300dfa0c35d5e9cb577c3242?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NzL7ofF9wal9j0WRanGYJ7rp4e7tIJTxwxkjKcXysM~1-iCsaXj1QaazK~Kl6Ritf9DxJl~rt8Zp3NKuZWIKMcd~S104~HlHrmf8dpYzF1sUC8UC31hI7qoLJJIBDMhdx6vabHwex6Ou6-wL-R2jHZXBSTABm7C5ZVvmRPi2v4rUgblH6E0Cya5NtjlU3Mjg1QNfGDJF-bpxCcWfYxvbdVfusYIVVPYwFXaUdaLULiUteWgq5WrWHcDT4FlqA3dWscSfWnbGMXkMGyOBcfVVxpY5vHFkFjQivLN8ImP6Zs1VMJDFdZ06RhXSj6uenvVTWU5OUbWUV7AuAtRN7Lqpjw__";
  const logoSrc =
    "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

  return (
    <div className="flex relative">
      {/* Background Section */}
      <div
        className="w-[50vw] h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute bottom-0 w-[50%] flex flex-col justify-end px-6 bg-gradient-to-t from-black to-transparent">
          <p className="font-[Emilio Test] text-[48px] font-bold text-[#FFFFFF] mb-4">
            Welcome to Careers of VIT-AP University
          </p>
          <p className="font-montserrat text-[18px] leading-[27px] text-[#FFFFFF] mb-16">
            Where talent meets endless possibilities
          </p>
        </div>
      </div>

      {/* Sign In Section */}
      {isMailSent ? (
        <main className="flex flex-col justify-center items-center w-[50vw] h-screen bg-[rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center w-[30vw] h-[auto] bg-white p-8 gap-8">
            <div className="flex flex-col gap-2 justify-start">
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
              <label className="font-montserrat font-bold text-[24px] text-[#000000]">
                Enter verification code
              </label>
              <label className="font-montserrat text-[10px] text-[#718096]">
                We have just sent a verification code to
              </label>
              <label className="font-montserrat text-[10px] text-[#718096]">
                saichar*****@mail.com
              </label>
            </div>
            <OTPInput count={6} />
            <div className="flex w-full h-auto">
              <button className="font-montserrat text-[14px] font-bold text-[#741D26] ">
                Send the code again
              </button>
            </div>
            <button
              className="font-montserrat text-[10px] text-[#FFFFFF] w-full font-bold h-[56px]] p-3 bg-[#650010]"
              onClick={handleSendMail}
            >
              Verify
            </button>
          </div>
        </main>
      ) : (
        <div className="flex flex-col justify-center items-center w-[50vw] h-screen">
          <div className="flex flex-col items-center w-[34vw] h-[349.48px] gap-4">
            <div className="flex flex-col items-center pb-4">
              <img
                src={logoSrc}
                alt="logo"
                width={148}
                height={46.48}
                className="pb-2"
              />
              <p className="font-montserrat text-[24px] font-semibold text-center text-[#000000]">
                Login to apply for a Job
              </p>
            </div>
            <div className="flex flex-col w-[34vw] h-[230px] gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[14px] text-[#000000]">
                  Email Address<span className="text-[#E03137]">*</span>
                </label>
                <input
                  className="border border-[#BBBBBB] w-full h-[56px] p-[16px_20px] placeholder:text-[#A0AEC0] placeholder:font-montserrat placeholder:text-[14px] placeholder:font-normal"
                  type="email"
                  placeholder="Input your registered email"
                />
              </div>
              <button
                className="font-montserrat text-[14px] text-[#FFFFFF] w-full h-[56px] bg-[#650010]"
                onClick={handleSendMail}
              >
                Generate OTP
              </button>
              <div className="flex items-center gap-2">
                <button className="opacity-50">
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
                <p className="font-manrope text-[14px] text-[#00000080]">
                  Back to careers homepage
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
