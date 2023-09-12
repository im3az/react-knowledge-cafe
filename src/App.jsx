import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookmarks={handleAddBookmarks}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
