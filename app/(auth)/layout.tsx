export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-2 p-2 text-center">
        20% off for the next few days
      </div>
      {children}
    </div>
  );
}
