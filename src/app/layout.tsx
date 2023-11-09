export const metadata = {
  title: "Proposta comercial - Gow Solutions",
  description: "Proposta dinâmica Gow Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="bg-stone-100">{children}</body>
    </html>
  );
}
