interface CompletePaymentButtonProps {
  type: "buy" | "rent" | "COD";
  onClick: () => void;
}

export const CompletePaymentButton = ({
  type,
  onClick,
}: CompletePaymentButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
    >
      Complete {type === "buy" ? "Purchase" : "Rental"}
    </button>
  );
};
