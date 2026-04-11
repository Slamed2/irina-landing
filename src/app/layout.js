import "./globals.css";

export const metadata = {
  title: "Registro de Marca en USA | Roth Private Advising Law",
  description: "Protege tu marca en Estados Unidos con estrategia legal desde el inicio. Registro ante USPTO con acompañamiento completo en español.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
