import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookCard = () => {
  const { items } = useSelector((state) => state.book.books);

  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  };

  console.log(items);
  return (
    items &&
    items.map(({ id, volumeInfo }) => (
      <Link key={id} to={`/book/${id}`}>
        <div className="books__items">
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
      </Link>
    ))
  );
};

export default BookCard;
