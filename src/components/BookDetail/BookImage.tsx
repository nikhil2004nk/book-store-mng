interface BookImageProps {
  image: string;
  title: string;
}

export const BookImage = ({ image, title }: BookImageProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
      <img
        src={image}
        alt={title}
        className="w-full h-auto max-h-96 sm:max-h-[500px] object-contain"
        loading="lazy"
      />
    </div>
  );
};
