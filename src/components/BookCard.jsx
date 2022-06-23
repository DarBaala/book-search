import React from "react";
import { useSelector } from "react-redux";

const BookCard = () => {
  const books = useSelector((state) => state.book.books);

  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  };

  return books.map(({ id, volumeInfo }) => (
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
  ));
};

export default BookCard;
