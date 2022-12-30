import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY >= 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleDoubleUp
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}
    </div>
  );
};
export default ScrollToTop;
