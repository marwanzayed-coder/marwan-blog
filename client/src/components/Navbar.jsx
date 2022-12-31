/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("/api/getposts").then((response) => {
      setCategory(response.data.posts);
    });
  }, []);
  const categorys = [];
  category.map((post) => {
    const object = {
      href: post.category,
      text: post.category,
    };
    categorys.push(object);
  });
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="container flex-col gap-3 sm:flex-row items-center">
        <div>
          <Link to="/" className="normal-case">
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
          </Link>
        </div>
        <div className="flex-1 text-left">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li>
              <NavLink to="/blog">المقالات</NavLink>
            </li>
            <li tabIndex={0} className="z-20">
              <span>
                الاقسام
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </span>
              <ul className="p-2 bg-base-100 shadow-md">
                {categorys.map((category, key) => (
                  <li key={key}>
                    <NavLink to={`/category/${category.href}`}>
                      {category.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        {/* <label className="swap swap-rotate">
          {/* sun icon */}
        {/* <svg
            className={`${
              theme === "light" ? "swap-on" : "swap-off"
            } fill-current w-10 h-10`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setTheme("dark")}
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg> */}
        {/* moon icon */}
        {/* <svg
            className={`${
              theme === "dark" ? "swap-on" : "swap-off"
            } fill-current w-10 h-10`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setTheme("light")}
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}
      </div>
    </div>
  );
};
export default Navbar;
