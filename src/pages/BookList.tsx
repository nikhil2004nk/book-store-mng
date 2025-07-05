import { useState } from "react";
import { books } from "../data/books";
import { BookListHeader } from "../components/BookList/BookListHeader";
import { BookListTitle } from "../components/BookList/BookListTitle";
import { SearchAndFilter } from "../components/BookList/SearchAndFilter";
import { BookGrid } from "../components/BookList/BookGrid";
import { NoBooksFound } from "../components/BookList/NoBooksFound";

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Get all unique genres
  const allGenres = ["All", ...new Set(books.flatMap((book) => book.genres))];

  // Filter books based on search and genre
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || book.genres.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedGenre("All");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BookListHeader bookCount={filteredBooks.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BookListTitle />

        <SearchAndFilter
          searchTerm={searchTerm}
          selectedGenre={selectedGenre}
          genres={allGenres}
          onSearchChange={setSearchTerm}
          onGenreChange={setSelectedGenre}
        />

        {filteredBooks.length > 0 ? (
          <BookGrid books={filteredBooks} />
        ) : (
          <NoBooksFound onReset={handleResetFilters} />
        )}
      </main>
    </div>
  );
};

export default BookList;
