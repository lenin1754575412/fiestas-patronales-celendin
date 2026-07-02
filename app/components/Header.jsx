"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FACEBOOK = "https://www.facebook.com/municelendin";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/presentacion", texto: "Presentación" },
  { href: "/programa", texto: "Programa" },
  { href: "/noticias", texto: "Noticias" },
  { href: "/recorrido", texto: "Recorrido" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Link className="brand" href="/">
        <Image
          className="brandLogo"
          src="/logo-celendin.png"
          alt="Escudo de Celendín"
          width={70}
          height={82}
          priority
        />

        <span className="brandText">
          <strong>Fiestas Patronales</strong>
          <small>Celendín 2026</small>
        </span>
      </Link>

      <nav className="desktopNav">
        {enlaces.map((enlace) => (
          <Link
            key={enlace.href}
            href={enlace.href}
            className={pathname === enlace.href ? "active" : ""}
          >
            {enlace.texto}
          </Link>
        ))}

        <a
          className="facebookNav"
          href={FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </nav>

      <details className="mobileMenu">
        <summary aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </summary>

        <nav>
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={pathname === enlace.href ? "active" : ""}
            >
              {enlace.texto}
            </Link>
          ))}

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook oficial
          </a>
        </nav>
      </details>
    </header>
  );
}
