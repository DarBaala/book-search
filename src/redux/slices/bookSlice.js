import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "book/fetchNews",
  async (searchField) => {
    try {
      const apiKey = "AIzaSyDCYdGas97LB1afNBZ3zlYaUlvjpaCerNc";
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchField}&key=${apiKey}`
      );
      console.log(data.items);
      return data.items;
    } catch (error) {
      console.log("Error");
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    searchField: "",
    categoryId: 0,
  },
  reducers: {
    setSearch(state, action) {
      state.searchField = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
      state.status = null;
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

export const { setSearch } = bookSlice.actions;

export default bookSlice.reducer;
