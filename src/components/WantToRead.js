import React, { Component } from "react";
import BookRender from "./BookRender";

class WantToRead extends Component {
  //**
  // Handling changing the shelf change.
  //  *
  //  * @param {book} book: getting the entire book object.
  //  * @param {book.shelf} shelf: getting the selected shelf.
  //  */
  handleClickShelf = (book, shelf) => {
    this.props.onChangeShelf(book, shelf);
  };
  render() {
    const { listWantToRead } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <BookRender
          books={listWantToRead}
          onChangeShelf={this.handleClickShelf}
        />
      </div>
    );
  }
}

export default WantToRead;
