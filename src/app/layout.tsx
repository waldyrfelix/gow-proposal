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
      <body className="bg-black h-screen overflow-hidden">
        {children}

        {/* <footer className="text-sm text-center text-stone-300 m-5">
          &copy; 2023 Gow Solutions, todos os direitos reservados.
        </footer> */}
      </body>
    </html>
  );
}
