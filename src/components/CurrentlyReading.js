import React, { Component } from "react";
import BookRender from "./BookRender";

class CurrentlyReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleClickShelf = ( book, shelf) => {
    this.setState({ value: shelf });
    this.props.onChangeShelf(book,shelf);
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
