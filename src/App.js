import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { Route, Switch } from "react-router";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  componentDidMount() {
    // Calling the API to get the books Object & updating the state with it.
    const data = BooksAPI.getAll();
    data.then((books) =>
      this.setState({
        allBooks: books,
      })
    );
  }

  render() {
    console.log(this.state.allBooks);
    const { allBooks } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" render={() => <HomePage allBooks={allBooks} />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
