import React from "react";
import { lazy, Suspense } from "react";
import Hero from "../components/blog/Hero";
// import fallback from "../components/fallback";

const Posts = lazy(() => import("../components/blog/Posts"));
const Blog = () => {
  const fallback = (
    <div className="alert shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">جاري التحميل</h3>
        </div>
      </div>
    </div>
  );
  return (
    <section className="py-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <Hero />
      <Suspense fallback={fallback}>
        <Posts />
      </Suspense>
    </section>
  );
};

export default Blog;
