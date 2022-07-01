import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BooksSkeleton from "./BookSkeleton";
import BookCard from "./BookCard";

const Books = () => {
  const { totalItems } = useSelector((state) => state.book.books);
  const searchField = useSelector((state) => state.book.searchField);
  const status = useSelector((state) => state.book.status);
  const skeletons = [...new Array(8)].map((_, index) => (
    <BooksSkeleton key={index} />
  ));
  return (
    <div className="books">
      {totalItems && (
        <h1 className="books__text">
          Всего по запросу "{searchField}" найдено книг: {totalItems}
        </h1>
      )}
      <div className="container">
        <div className="books__wrapper">
          {status === "loading" ? skeletons : <BookCard />}
        </div>
      </div>
    </div>
  );
};

export default Books;
