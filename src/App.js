import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { Route, Switch } from "react-router";

class BooksApp extends Component {
  state = {
    allBooks: [],
    listCurrReading: [],
    listWantToRead: [],
    listRead: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  componentWillMount() {
    // Calling the API to get the books Object & updating the state with it.
    const data = BooksAPI.getAll();
    data.then((books) => {
      const currReading = books.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const wantToRead = books.filter((book) => book.shelf === "wantToRead");
      const read = books.filter((book) => book.shelf === "read");
      this.setState({
        allBooks: books,
        listCurrReading: currReading,
        listWantToRead: wantToRead,
        listRead: read,
      });
    });
  }

  render() {
    const { listCurrReading, listWantToRead, listRead } = this.state;
    return (
      <div className="app">
        {/* Using switch = must put the most generic path descending */}
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route
            path="/"
            render={() => (
              <HomePage
                listCurrReading={listCurrReading}
                listWantToRead={listWantToRead}
                listRead={listRead}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
