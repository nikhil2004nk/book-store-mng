interface OrderStatusProps {
  status: string;
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "✓";
      case "processing":
        return "🔄";
      case "cancelled":
        return "✕";
      case "shipped":
        return "🚚";
      default:
        return "⏳";
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{getStatusIcon(status)}</span>
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
          status
        )}`}
      >
        {status}
      </span>
    </div>
  );
};
