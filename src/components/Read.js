import React, { Component } from "react";
import BookRender from "./BookRender";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleClickShelf = (book, shelf) => {
    this.setState({ value: shelf });
    this.props.onChangeShelf( book, shelf);
  };
  render() {
    const { listRead } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <BookRender books={listRead} onChangeShelf={this.handleClickShelf} />
      </div>
    );
  }
}
export default Read;
