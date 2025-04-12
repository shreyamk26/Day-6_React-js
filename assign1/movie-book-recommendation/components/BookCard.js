const BookCard = ({ book }) => {
    return (
      <div className="card">
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author_name?.join(", ")}</p>
      </div>
    );
  };
  
  export default BookCard;
  