import PropTypes from "prop-types";
import { BsBookmarkCheck } from "react-icons/bs";

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mt-8 space-y-5">
      <img
        className="w-full rounded"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mt-6">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />

          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmarks(blog)}
            className="ml-2 text-lg"
          >
            <BsBookmarkCheck />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-7">{title}</h2>
      <p className="mt-2 mb-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark as read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
