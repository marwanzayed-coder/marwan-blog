/* eslint-disable jsx-a11y/alt-text */
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsWindow } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer shadow-md items-center p-4 px-10 bg-base-100 justify-items-center sm:justify-items-start">
      <div className="items-center grid-flow-col">
        <img src="/logo.png" className="w-12" />
        <p>حقوق الطبع والنشر © 2022 - جميع الحقوق محفوظة</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.facebook.com/marwanzayed13"
          target="_blank"
          className="tooltip tooltip-primary"
          data-tip="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className="text-3xl" />
        </a>
        <a
          href="https://github.com/marwanzayed-coder"
          target="_blank"
          className="tooltip tooltip-primary"
          data-tip="Github"
          rel="noreferrer"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://marwan.gq/"
          target="_blank"
          className="tooltip tooltip-primary"
          data-tip="My Website"
          rel="noreferrer"
        >
          <BsWindow className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
