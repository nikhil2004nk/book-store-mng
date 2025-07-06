import { FiTag } from "react-icons/fi";

interface BookGenresProps {
  genres: string[];
}

export const BookGenres = ({ genres }: BookGenresProps) => {
  return (
    <div className="space-y-6">
      <h2 className="flex items-center text-xl font-semibold text-gray-900">
        <FiTag className="mr-3 text-gray-400" />
        Genres
      </h2>
      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <span
            key={genre}
            className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full font-medium border border-blue-200"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};
