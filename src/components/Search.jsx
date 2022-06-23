import React from "react";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { setSearch, fetchBooks } from "../redux/slices/bookSlice";

const Search = () => {
  const dispatch = useDispatch();

  const searchField = useSelector((state) => state.book.searchField);
  const category = useSelector((state) => state.book.category);
  const sort = useSelector((state) => state.book.sort);

  const getBooks = async (event) => {
    event.preventDefault();
    const categoryUrl = category.length > 0 ? `&orderBy=${category}` : "";
    const sortUrl = sort.length < 1 && sort !== "all" ? "" : `subject:${sort}`;

    if (searchField.length > 0) {
      dispatch(fetchBooks({ searchField, sortUrl, categoryUrl }));
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
