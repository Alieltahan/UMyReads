import React from "react";

const BookRender = ({ books, onChangeShelf }) => {
  const handleClickShelf = (e, book) => {
    const shelf = e.target.value;
    onChangeShelf(shelf, book);
  };
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                  }}
                />
                <div className="book-shelf-changer">
                  <select
                    value="move"
                    onChange={(e) => this.handleClickShelf(e, book)}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map((author) => (
                <div key={author}>
                  <div className="book-authors">{author}</div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookRender;