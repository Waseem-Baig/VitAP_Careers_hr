import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const logoSrc =
    "https://s3-alpha-sig.figma.com/img/0de7/cd9d/bd08b05603698e0c38c8eb4b41bf2b7d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph4xZYg-8aitj87saeNyVxotpblTwAoRHxs8SgFs6CE-VQsuwuP5RpY3lBC9FVZnr~Iq4HumIDWXs9-kHqH5wOR6tpkBIMVLu~CDgedN6zvt8c0QlRheiBgbSSd2zDuyJLHtc~k06yYq4v9lC6B-jLgixCUxVoAiZrchQvegc6auFrp~Vq3T-eSaQnYGTlY1seCoqUTxhHDDjP3kfI-Hk69P1pqNQ41AWLrwgKveYWTO6lI2tD5v19TDf2xGEdP6NW6E-J-PsOUObyelEaiEsc~uIiN61OoY~JCfeOrlLiMmBUGSpgPHgH--f9DMacn~RTsLAS33ivxbTBKuWTRaoA__";

  return (
    <>
      <div className="w-full h-auto bg-[#FDFEFF] flex flex-col justify-center items-center gap-4">
        <img src={logoSrc} alt="logo" className="w-[40%] h-auto" />
        <div className="flex gap-2">
          <a
            className="bg-gray-300 w-5 h-5 flex justify-center items-center"
            href="#"
          >
            <FaInstagramSquare />
          </a>
          <a
            className="bg-gray-300 w-5 h-5 flex justify-center items-center"
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className="bg-gray-300 w-5 h-5 flex justify-center items-center"
            href="#"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-gray-300 w-5 h-5 flex justify-center items-center"
            href="#"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="bg-gray-300 w-5 h-5 flex justify-center items-center"
            href="#"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <footer className="w-screen bg-[#650010] text-center p-4 text-white font-[Emilio-Test] text-[12px] font-semibold h-auto">
        Crafted With Passion At VIT-AP University
      </footer>
    </>
  );
};

export default Footer;
