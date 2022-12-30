import React from "react";
import { lazy, Suspense } from "react";
import Hero from "../components/blog/Hero";
import fallback from "../components/fallback";

const Posts = lazy(() => import("../components/blog/Posts"));
const Blog = () => {
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
