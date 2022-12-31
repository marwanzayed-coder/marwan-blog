import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  // });
  return (
    <div className="transition font-cairo" data-theme="corporate">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
