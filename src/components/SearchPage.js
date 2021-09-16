import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookRender from "./BookRender";

const SearchPage = ({ onSearch, searchedBooks, onChangeShelf }) => {
  // Managing the userInput
  const [userInput, setUserInput] = useState();
  // Managing the Shelves Change
  const [value, setValue] = useState();

  // Using useEffect to get executed once the dependencies changed.
  // using timers to reduce the executes on each key entered, also the clean up function to remove the timer on each change
  // (so the first function never executed as long there is typing speed > 0.6 sec.)
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (userInput) onSearch(userInput);
    }, 400);

    return () => {
      clearTimeout(inputTimer);
    };
  }, [userInput, onSearch, value]);

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  const handleClickShelf = (book, shelf) => {
    onChangeShelf(book, shelf);
    setValue(shelf);
  };

  let renderSearch = (
    <p className="books-grid">Start typing to find your matched books/author</p>
  );
  if (userInput !== "") {
    renderSearch = (
      <BookRender books={searchedBooks} onChangeShelf={handleClickShelf} />
    );
  }

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
        {renderSearch}
        <ol className="books-grid" />
      </div>
    </div>
  );
};

export default SearchPage;
