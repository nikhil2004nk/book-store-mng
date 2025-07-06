

interface PaymentSuccessLayoutProps {
  children: React.ReactNode;
}

export const PaymentSuccessLayout = ({
  children,
}: PaymentSuccessLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};
