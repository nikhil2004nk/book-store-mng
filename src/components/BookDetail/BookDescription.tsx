interface BookDescriptionProps {
  description: string;
}

export const BookDescription = ({ description }: BookDescriptionProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        About This Book
      </h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};
