import React from "react";

const BookRender = ({ books, onChangeShelf }) => {
  const handleClickShelf = (book, e) => {
    const shelf = e.target.value;
    onChangeShelf(book, shelf );
  };

  // Handling Conditional rendering if no resultt found for searching.
  let renderBooks = <p>No books/author found for the search criteria</p>;

  if (books.length > 0) {
      
    renderBooks = books.map((book) => (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks?.smallThumbnail || `no image`
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select value={book.hasOwnProperty('shelf') ? book.shelf : `none`} onChange={(e) => handleClickShelf(book, e)}>
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
          {book.authors?.map((author) => (
            <div key={author}>
              <div className="book-authors">{author}</div>
            </div>
          )) || <div>no name</div>}
        </div>
      </li>
    ));
  }
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">{renderBooks}</ol>
    </div>
  );
};

export default BookRender;
