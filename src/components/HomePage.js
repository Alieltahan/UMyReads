import React, { Fragment } from "react";
import CurrentlyReading from "./CurrentlyReading";
import Header from "./Header";
import Read from "./Read";
import SearchBtn from "./SearchBtn";
import WantToRead from "./WantToRead";

const HomePage = ({
  listCurrReading,
  listWantToRead,
  listRead,
  onChangeShelf,
}) => {
  const onChange = (shelf, book) => {
    onChangeShelf(shelf, book);
  };
  return (
    <Fragment>
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <CurrentlyReading
            listCurrReading={listCurrReading}
            onChangeShelf={onChange}
          />
          <WantToRead
            listWantToRead={listWantToRead}
            onChangeShelf={onChange}
          />
          <Read listRead={listRead} onChangeShelf={onChange} />
        </div>
        <SearchBtn />
      </div>
    </Fragment>
  );
};

export default HomePage;
