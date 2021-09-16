import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { Route, Switch } from "react-router";

class BooksApp extends Component {
  state = {
    allBooks: [],
    searchResult: [],
  };

  UNSAFE_componentWillMount() {
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
  // * updating the API
  // **//
  handleChangeShelf = ( bookSelected, shelf) => {
    const booksClone = this.state.allBooks.filter(
      (book) => book.id !== bookSelected.id
    );
    bookSelected.shelf = shelf;
    this.setState({
      ...booksClone.push(bookSelected),
    });
    BooksAPI.update(bookSelected, shelf);
  };

  // Handling the Search for Books
  handleSearchInput = (searchText) => {
    let booksWithShelf = []
    BooksAPI.search(searchText).then((data) => {

      const uniqueBooks = data.filter(bookSearched => !this.state.allBooks.some(currBooks => bookSearched.id === currBooks.id) )
      const commonBooks = data.filter(o1 => this.state.allBooks.some(o2 => o1.id === o2.id))
      // Guard case if nothing in Common
      if(commonBooks.length >0){
      commonBooks.map(book => BooksAPI.get((book.id)).then(data => booksWithShelf.push(data)).then(()=>{
      this.setState({
        searchResult: [ ...uniqueBooks, ...booksWithShelf]
      });
      }))}
      else {
         this.setState({
        searchResult: uniqueBooks
      })}
      // Handling Rejection Error by updating the state to Empty Array.
    }).catch(err=> { this.setState({ searchResult: [] } ) })
  };

  // Handling the Searched Books to add to Shelves
  handleSearchShelf = ( bookSelected, shelf) => {
    const booksClone = this.state.allBooks;
    bookSelected.shelf = `${shelf}`;
    booksClone.push(bookSelected);
    this.setState({
      allBooks: booksClone,
    });
    BooksAPI.update(bookSelected, shelf);
    console.log(BooksAPI.update(bookSelected, shelf))
  };

  render() {
    const { allBooks, searchResult } = this.state;

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
          <Route
            path="/search"
            render={() => (
              <SearchPage
                onSearch={this.handleSearchInput}
                searchedBooks={searchResult}
                onChangeShelf={this.handleSearchShelf}
              />
            )}
          />
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
