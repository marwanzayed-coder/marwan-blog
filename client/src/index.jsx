import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/App.jsx";
import "./index.css";
import Home from "./page/Home.jsx";
import Blog from "./page/Blog.jsx";
import BlogPage from "./page/BlogPage.jsx";
import Category from "./page/Category.jsx";
import Error from "./page/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:href",
        element: <BlogPage />,
      },
      {
        path: "/category/:text",
        element: <Category />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
