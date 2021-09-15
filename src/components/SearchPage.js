import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookRender from "./BookRender";

const SearchPage = ({ onSearch, searchedBooks, onChangeShelf }) => {
  const [userInput, setUserInput] = useState();
  const [value, setValue] = useState();

  // Using useEffect to get executed once the dependencies changed.
  // using timers to reduce the executes on each key entered, also the clean up function to remove the timer on each change
  // (so the first function never executed as long there is typing speed > 0.6 sec.)
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (userInput) onSearch(userInput);
      else return;
    }, 600);

    return () => {
      clearTimeout(inputTimer);
    };
  }, [userInput, onSearch, value]);

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  const handleClickShelf = (shelf, book) => {
    setValue(shelf);
    onChangeShelf(shelf, book);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={`/`}>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={userInput}
            onChange={handleChange}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
      {searchedBooks && (
        <BookRender books={searchedBooks} onChangeShelf={handleClickShelf} />
      )}
    </div>
  );
};

export default SearchPage;
