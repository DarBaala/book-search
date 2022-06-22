import React from "react";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { setSearch, fetchBooks } from "../redux/slices/bookSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.book.searchField);
  const categoryId = useSelector((state) => state.book.categoryId);
  const ffd = useSelector((state) => state.book.searchField);

  const getBooks = async (event) => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    if (searchField.length > 0) {
      event.preventDefault();
      dispatch(fetchBooks(searchField));
    } else {
      alert("Заполните поле ввода!");
    }
  };

  const handleSearch = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className="search">
      <form onSubmit={getBooks} action="" className="search__form">
        <input onChange={handleSearch} className="search__input" type="text" />
        <Button
          sx={{
            color: "white",
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
            },
          }}
          variant="contained"
          className="search__button"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
