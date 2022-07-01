import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const FullBook = () => {
  const [book, setBook] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/books/v1/volumes/" + id
        );
        setBook(data);
      } catch (error) {
        console.error("Не получена пицца(");
        alert("Пицца не найдена:(");
        navigate("/");
      }
    }
    fetchBook();
  }, []);
  console.log(book);

  if (!book) {
    return <h3 className="container">LOADING...</h3>;
  }

  return (
    <div className="container">
      <div className="fullbook">
        <div className="fullbook__wrapper">
          <img
            className="fullbook__img"
            src={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            alt="Мы не нашли изображения ("
          />
          <div className="fullbook__info">
            <p>
              Автор: <br />
              {book.volumeInfo.authors && book.volumeInfo.authors}
            </p>
            <p>
              Всего страниц: <br />
              {book.volumeInfo.pageCount && book.volumeInfo.pageCount}
            </p>
          </div>
        </div>
        <h3 className="fullbook__title">{book.volumeInfo.title}</h3>
        <Link to="/">
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
            Назад
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FullBook;
