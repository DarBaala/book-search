import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("book/fetchNews", async (params) => {
  const { categoryUrl, sortUrl, searchField } = params;
  const apiKey = "AIzaSyDCYdGas97LB1afNBZ3zlYaUlvjpaCerNc";
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchField}${categoryUrl}&${sortUrl}&key=${apiKey}`
  );
  return data.items;
});

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    searchField: "",
    category: "",
    sort: "",
  },
  reducers: {
    setSearch(state, action) {
      state.searchField = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "success";
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const { setSearch, setCategory, setSort } = bookSlice.actions;

export default bookSlice.reducer;
