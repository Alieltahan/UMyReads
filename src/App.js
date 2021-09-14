import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { Route, Switch } from "react-router";
import { produce } from "immer";

class BooksApp extends Component {
  state = {
    allBooks: [],

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
      this.setState({
        allBooks: books,
      });
    });
  }

  //**
  // * @param {The Selected Book via options} bookSelected
  //  * @param {The Selected new Shelf to move the Book To} shelf
  // * @description: Handling changing the shelf
  // **//
  handleChangeShelf = (shelf, bookSelected) => {
    const booksClone = this.state.allBooks.filter(
      (book) => book.id !== bookSelected.id
    );
    bookSelected.shelf = shelf;
    this.setState({
      ...booksClone.push(bookSelected),
    });
  };

  render() {
    const { allBooks } = this.state;
    // Filtering the books based on the shelves category
    const listCurrReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const listWantToRead = allBooks.filter(
      (book) => book.shelf === "wantToRead"
    );
    const listRead = allBooks.filter((book) => book.shelf === "read");

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
                allBooks={allBooks}
                onChangeShelf={this.handleChangeShelf}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
