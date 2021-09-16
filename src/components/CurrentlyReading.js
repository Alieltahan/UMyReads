import React, { Component } from "react";
import BookRender from "./BookRender";

class CurrentlyReading extends Component {
  //**
  //  * @param {book} book : Getting the book object
  //  * @param {book.shelf} shelf getting the current book's shelf
  //  */
  handleClickShelf = (book, shelf) => {
    this.props.onChangeShelf(book, shelf);
  };
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <BookRender
          books={this.props.listCurrReading}
          onChangeShelf={this.handleClickShelf}
        />
      </div>
    );
  }
}

export default CurrentlyReading;
