import { useEffect } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Books from "../components/Books";
import Sort from "../components/Sort";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Sort />
      <Books />
    </div>
  );
};

export default Home;
