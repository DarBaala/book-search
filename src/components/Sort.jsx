import React from "react";
import { useDispatch } from "react-redux";
import { setCategory, setSort } from "../redux/slices/bookSlice";

const Sort = () => {
  const dispatch = useDispatch();

  const onChangeCategories = (event) => {
    dispatch(setCategory(event.target.value));
  };
  const onChangeSorting = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className="container">
      <div className="sort">
        <div className="sort__categories">
          <span className="sort__title">Categories</span>
          <select
            className="sort__select"
            defaultValue="Relevance"
            onChange={onChangeCategories}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="sort__sorting">
          <span className="sort__title">Sorting by</span>
          <select
            className="sort__select"
            defaultValue="All"
            onChange={onChangeSorting}
          >
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
