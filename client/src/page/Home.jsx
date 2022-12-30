import React from "react";
import Hero from "../components/Home/Hero";
import { lazy, Suspense } from "react";
import fallback from "../components/fallback";
const LatestArticles = lazy(() => import("../components/Home/LatestArticles"));

const Home = () => {
  return (
    <section className="py-24 mx-auto px-4 max-w-screen-xl lg:px-8">
      <Hero />
      <Suspense fallback={fallback}>
        <LatestArticles />
      </Suspense>
    </section>
  );
};

export default Home;
