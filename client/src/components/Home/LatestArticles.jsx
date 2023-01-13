import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const LatestArticles = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("/api/getposts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((err) => setError(true));
  }, []);
  const html = (
    <>
      {!error ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts
            .slice(-3)
            .reverse()
            .map((items, key) => (
              <div
                className="card card-compact bg-base-100 shadow-xl mt-6"
                key={key}
              >
                <figure>
                  <img src={items.img} alt="Album" />
                </figure>
                <div className="card-body relative">
                  <Link
                    className="card-title relative before:content before:w-10 hover:before:w-full before:h-10 before:bg-primary before:opacity-10 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-tl-[50px] before:rounded-br-[50px] before:rounded-tr-[10px] before:rounded-bl-[10px] before:transition-all"
                    to={`/blog/${items.href}`}
                  >
                    {items.title}
                  </Link>
                  <p>{items.desc}</p>
                  <div className="card-actions justify-between items-center">
                    <Link
                      to={"/category/" + items.category}
                      className="btn btn-primary p-1 py-1 min-h-fit h-fit"
                    >
                      {items.category}
                    </Link>
                    <span className="flex items-center gap-2 text-lg">
                      <AiOutlineEye />
                      {items.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              للاسف توجد مشكله الان و سيتم حلها باسرع وقت و اذا لم يتم حلها
              يمكنك التواصل معي{" "}
              <a
                href="https://www.marwan.gq/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                و هنا توجد كل الطرق للتواصل معي
              </a>
            </span>
          </div>
        </div>
      )}
    </>
  );
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">اخر المقالات</h2>
          </div>
        </div>
      </div>
      {html}
    </div>
  );
};

export default LatestArticles;
