import React, { Component } from "react";

class Read extends Component {
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
    const { listRead } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listRead.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={this.state.value}
                        onChange={(e) =>
                          this.handleClickShelf(e.target.value, book)
                        }
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors.map((author) => (
                    <div key={author}>
                      <div className="book-authors">{author} </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Read;
