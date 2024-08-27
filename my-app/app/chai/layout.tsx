export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Nav item inner layout</h2>
      {children}
    </>
  );
}
