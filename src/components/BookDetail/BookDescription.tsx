interface BookDescriptionProps {
  description: string;
}

export const BookDescription = ({ description }: BookDescriptionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        About This Book
      </h2>
      <p className="text-gray-700 leading-relaxed text-base">{description}</p>
    </div>
  );
};
