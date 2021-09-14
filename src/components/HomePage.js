import React, { Component, Fragment } from "react";
import CurrentlyReading from "./CurrentlyReading";
import Header from "./Header";
import Read from "./Read";
import SearchBtn from "./SearchBtn";
import WantToRead from "./WantToRead";
import { produce } from "immer";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { listCurrReading, listWantToRead, listRead } = this.props;
    return (
      <Fragment>
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <CurrentlyReading listCurrReading={listCurrReading} />
            <WantToRead listWantToRead={listWantToRead} />
            <Read listRead={listRead} />
          </div>
          <SearchBtn />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
