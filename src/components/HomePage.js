import React, { Fragment } from "react";
import CurrentlyReading from "./CurrentlyReading";
import Header from "./Header";
import Read from "./Read";
import SearchBtn from "./SearchBtn";
import WantToRead from "./WantToRead";

const HomePage = () => {
  return (
    <Fragment>
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <CurrentlyReading />
          <WantToRead />
          <Read />
        </div>
        <SearchBtn />
      </div>
    </Fragment>
  );
};

export default HomePage;
