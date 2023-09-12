import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookmarks={handleAddBookmarks}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
