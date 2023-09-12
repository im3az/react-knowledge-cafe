import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-[#F3F3F3] ml-8 mt-8 pt-4 rounded">
      <div className="bg-white p-3 m-4 rounded">
        <h3 className="text-3xl font-bold text-center">
          Reading time: {readingTime} min
        </h3>
      </div>
      <h2 className="text-2xl mt-10 text-center font-bold">
        Bookmarked Blogs: {bookmarks.length}
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </h2>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
