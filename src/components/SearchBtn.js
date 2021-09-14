import React from "react";
import { Link } from "react-router-dom";
import BooksApp from "./../App";

const SearchBtn = () => {
  return (
    <div className="open-search">
      <Link to={`/search`}>
        <button>Add a BooksApp</button>
      </Link>
    </div>
  );
};

export default SearchBtn;
