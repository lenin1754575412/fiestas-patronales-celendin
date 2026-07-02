import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: {
    default: "Fiestas Patronales de Celendín 2026",
    template: "%s | Fiestas Patronales de Celendín 2026",
  },

  applicationName: "Fiestas Patronales de Celendín 2026",

  description:
    "Página informativa de las Fiestas Patronales de Celendín 2026 en honor a la Santísima Virgen del Carmen. Consulta el programa, noticias y recorrido oficial.",

  keywords: [
    "Fiestas Patronales de Celendín",
    "Virgen del Carmen Celendín",
    "Celendín 2026",
    "Fiestas de Celendín",
    "Cajamarca",
    "Programa Virgen del Carmen",
  ],

  authors: [
    {
      name: "Fiestas Patronales de Celendín",
    },
  ],

  creator: "Fiestas Patronales de Celendín",

  openGraph: {
    title: "Fiestas Patronales de Celendín 2026",
    description:
      "Fe, cultura y tradición en honor a la Santísima Virgen del Carmen, patrona de Celendín.",
    type: "website",
    locale: "es_PE",
    siteName: "Fiestas Patronales de Celendín 2026",
    images: [
      {
        url: "/virgen-del-carmen-2026.png",
        width: 526,
        height: 526,
        alt: "Fiestas Patronales de Celendín 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fiestas Patronales de Celendín 2026",
    description:
      "Programa, noticias y recorrido de las fiestas en honor a la Virgen del Carmen.",
    images: ["/virgen-del-carmen-2026.png"],
  },

  icons: {
    icon: "/logo-celendin.png",
    shortcut: "/logo-celendin.png",
    apple: "/logo-celendin.png",
  },
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
