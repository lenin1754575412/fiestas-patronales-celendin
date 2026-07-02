import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Fiestas Patronales de Celendín 2026",
  description:
    "Fiestas Patronales de Celendín 2026 en honor a la Santísima Virgen del Carmen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
