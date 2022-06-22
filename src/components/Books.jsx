import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Books = () => {
  const books = useSelector((state) => state.book.books);

  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  };

  return (
    <div className="books">
      <div className="container">
        <div className="books__wrapper">
          {books.map(({ id, volumeInfo }) => (
            <div key={id} className="books__items">
              <img
                className="books__img"
                src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
                alt="Мы не нашли изображения ("
              />
              <span className="books__categories">
                {volumeInfo.categories && volumeInfo.categories[0]}
              </span>
              <span className="books__title">{truncate(volumeInfo.title)}</span>
              <span className="books__authors">
                {volumeInfo.authors && volumeInfo.authors.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
