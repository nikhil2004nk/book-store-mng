interface OrderTypeBadgeProps {
  type: "buy" | "rent" | "COD";
}

export const OrderTypeBadge = ({ type }: OrderTypeBadgeProps) => {
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        type === "buy"
          ? "bg-blue-100 text-blue-800"
          : "bg-green-100 text-green-800"
      }`}
    >
      {type}
    </span>
  );
};
