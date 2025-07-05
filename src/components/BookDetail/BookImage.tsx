interface BookImageProps {
  image: string;
  title: string;
}

export const BookImage = ({ image, title }: BookImageProps) => {
  return (
    <div className="lg:w-2/5">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-96 object-contain p-6"
          loading="lazy"
        />
      </div>
    </div>
  );
};
