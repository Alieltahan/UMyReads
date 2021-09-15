import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = ({ onSearch }) => {
  const [userInput, setUserInput] = useState();

  // Using useEffect to get executed once the dependencies changed.
  // using timers to reduce the executes on each key entered, also the clean up function to remove the timer on each change
  // (so the first function never executed as long there is typing speed > 0.6 sec.)
  useEffect(
    () => {
      const inputTimer = setTimeout(() => {
        console.log(userInput);
        if (userInput) onSearch(userInput);
        else return;
      }, 600);

      return () => {
        clearTimeout(inputTimer);
      };
    },
    [userInput, onSearch]
  );
  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={`/`}>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
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
      {/* <SearchResult /> */}
    </div>
  );
};

export default SearchPage;
