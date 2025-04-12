import { fetchBookDetails } from "../../utils/api";
import { useRouter } from "next/router";

const BookDetail = ({ book }) => {
  return (
    <div className="details">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
        alt={book.title}
      />
      <div>
        <h2>{book.title}</h2>
        <p>{book.description?.value || "No description available"}</p>
        <p>Author: {book.authors?.[0]?.name}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const book = await fetchBookDetails(context.params.id);
  return { props: { book } };
}

export default BookDetail;
