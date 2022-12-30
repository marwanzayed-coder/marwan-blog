import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">مدونتي</h1>
          <p className="py-6">
            هنا هكتب كل المقالات بتاعتي و هتبقي بشكل منظم و هتلاقي عامل اقسام
            لكل حاجه انا بكتب عنها
          </p>
          <Link to="/blog" className="btn btn-primary">
            أبدا القراءة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
