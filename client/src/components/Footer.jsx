import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsWindow } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer shadow-md items-center p-4 px-10 bg-base-100 justify-items-center sm:justify-items-start">
      <div className="items-center grid-flow-col">
        <svg
          width="45px"
          height="45px"
          viewBox="0 0 500 462"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Brand-v2"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M430.426015,144.770115 C404.965969,144.770115 381.522561,158.678161 369.296698,181.183908 L332.114948,249.586207 L300.857071,191.551724 C285.228132,160.701149 241.366272,156.655172 225.485253,187.37931 L192.714898,250.724138 L143.307285,158.931034 L84.0685657,158.551724 L154.902949,293.333333 C169.901689,321.908046 210.360474,322.413793 226.241492,294.344828 L261.532644,231.632184 L295.815478,294.218391 C311.192337,322.287356 351.525082,322.413793 366.901941,294.344828 L414.923116,207.356322 C423.619864,191.551724 447.441391,197.747126 447.441391,215.701149 L447.567431,331.390805 C447.567431,374.37931 412.654399,409.402299 369.800857,409.402299 L130.451223,409.402299 C87.5976809,409.402299 52.6846483,374.37931 52.6846483,331.390805 L52.6846483,130.862069 C52.6846483,87.8735632 87.5976809,52.8505747 130.451223,52.8505747 L451.600706,52.8505747 L451.600706,0 L130.451223,0 C58.4824805,0 0,58.6666667 0,130.862069 L0,331.137931 C0,403.45977 58.3564406,462 130.451223,462 L369.548777,462 C441.643559,462 500,403.45977 500,331.137931 L500,223.16092 L500,214.563218 C500,176 468.868162,144.770115 430.426015,144.770115 Z"
              id="Shape"
              className="fill-primary"
              fillRule="nonzero"
              transform="translate(250.000000, 231.000000) scale(1, -1) translate(-250.000000, -231.000000) "
            ></path>
          </g>
        </svg>
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
