import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Posts = () => {
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

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      {!error ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentItems.map((items, key) => (
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
                <div className="card-actions justify-end">
                  <Link
                    to={"/category/" + items.category}
                    className="badge badge-outline"
                  >
                    {items.category}
                  </Link>
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

      {posts.length > itemsPerPage ? (
        <ReactPaginate
          className="btn-group flex justify-center mt-5"
          pageClassName="btn"
          activeClassName="btn-active"
          previousLabel="«"
          nextLabel="»"
          previousClassName="btn rounded-none"
          nextClassName="btn rounded-none"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          renderOnZeroPageCount={undefined}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
