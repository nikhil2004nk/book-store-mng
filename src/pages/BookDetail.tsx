import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { useAuth } from "../context/AuthContext";
import { BookNotFound } from "../components/BookDetail/BookNotFound";
import { BookDetailHeader } from "../components/BookDetail/BookDetailHeader";
import { BookImage } from "../components/BookDetail/BookImage";
import { BookInfo } from "../components/BookDetail/BookInfo";
import { BookActions } from "../components/BookDetail/BookActions";
import { BookGenres } from "../components/BookDetail/BookGenres";
import { BookDescription } from "../components/BookDetail/BookDescription";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useAuth();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <BookNotFound />;
  }

  const handleAddToCart = (type: "buy" | "rent") => {
    addToCart(book, type);
    navigate("/dashboard/cart");
  };

  const handleAddToCartWithoutNavigation = (type: "buy" | "rent") => {
    addToCart(book, type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BookDetailHeader />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
          <div className="lg:w-2/5">
            <BookImage image={book.image} title={book.title} />
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
              <div className="space-y-10">
                <BookInfo
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  type=""
                />

                <BookActions
                  onBuy={() => handleAddToCart("buy")}
                  onRent={() => handleAddToCart("rent")}
                  onQuickBuy={() => handleAddToCartWithoutNavigation("buy")}
                  onQuickRent={() => handleAddToCartWithoutNavigation("rent")}
                />

                <BookGenres genres={book.genres} />
                <BookDescription description={book.description} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
