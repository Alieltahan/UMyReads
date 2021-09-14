import React from "react";

const WantToRead = ({ listWantToRead }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {listWantToRead.map((book) => (
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
                    <select>
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
};

export default WantToRead;
