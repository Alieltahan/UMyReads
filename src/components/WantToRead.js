import React, { Component } from "react";
import BookRender from "./BookRender";

class WantToRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleClickShelf = ( book, shelf) => {
    this.setState({ value: shelf });
    this.props.onChangeShelf( book, shelf);
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
