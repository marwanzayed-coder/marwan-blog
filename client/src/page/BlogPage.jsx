import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Prism from "prismjs";

// Prism.manual = true;
// Prism.highlightAll();
const BlogPage = () => {
  const { href } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("/api/getpost/" + href).then((response) => {
      setPost(response.data.post[0]);
    });
  }, [href]);
  return (
    <div>
      <div className="container">
        <div className="hero mt-6 bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{post.title}</h1>
              <p className="py-6">{post.desc}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div
          className="bg-base-200 p-5 blog-body"
          dir="auto"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></div>
        <div className="bg-base-200 p-5 blog-body" id="hhmm"></div>
        <div className="divider"></div>
        <div className="bg-base-200 p-5">
          <div className="bg-base-100 p-3">
            <h3 className="text-lg">
              المشاهدات: <span className="text-primary">{post.views}</span>
            </h3>
          </div>
          <div className="divider"></div>
          <div className="bg-base-100 p-3">
            <h3 className="text-lg">
              القسم:{" "}
              <Link to={`/category/${post.category}`} className="text-primary">
                {post.category}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
