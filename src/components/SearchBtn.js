import React from "react";

const SearchBtn = () => {
  return (
    <div className="open-search">
      <button onClick={() => this.setState({ showSearchPage: true })}>
        Add a book
      </button>
    </div>
  );
};

export default SearchBtn;