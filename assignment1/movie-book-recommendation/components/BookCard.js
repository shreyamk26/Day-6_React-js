import Link from "next/link";

const BookCard = ({ book }) => {
  const coverID = book.cover_i ? book.cover_i : 10909258;
  return (
    <div className="card">
      <Link href={`/book/${book.key.replace("/works/", "")}`}>
        <img
          src={`https://covers.openlibrary.org/b/id/${coverID}-M.jpg`}
          alt={book.title}
        />
      </Link>
      <h3>{book.title}</h3>
      <p>{book.author_name?.[0]}</p>
    </div>
  );
};

export default BookCard;
