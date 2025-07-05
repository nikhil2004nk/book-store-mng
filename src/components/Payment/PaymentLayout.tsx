interface PaymentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PaymentLayout = ({ title, children }: PaymentLayoutProps) => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
    </div>
  );
};
