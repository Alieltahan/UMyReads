import React, { Component } from "react";
import BookRender from "./BookRender";

class CurrentlyReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleClickShelf = (shelf, book) => {
    this.setState({ value: shelf });
    this.props.onChangeShelf(shelf, book);
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
