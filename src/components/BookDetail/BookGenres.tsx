import { FiTag } from "react-icons/fi";

interface BookGenresProps {
  genres: string[];
}

export const BookGenres = ({ genres }: BookGenresProps) => {
  return (
    <div>
      <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
        <FiTag className="mr-2 text-gray-400" />
        Genres
      </h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};
