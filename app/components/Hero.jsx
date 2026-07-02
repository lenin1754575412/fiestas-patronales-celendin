import Image from "next/image";
import Link from "next/link";

const FACEBOOK = "https://www.facebook.com/municelendin";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroGlow heroGlowOne" />
      <div className="heroGlow heroGlowTwo" />

      <div className="heroContent">
        <div className="heroText">
          <div className="officialBadge">
            <span />
            Festividades 2026
          </div>

          <p className="location">
            Celendín · Cajamarca · Perú
          </p>

          <h1>
            Fiesta Patronal en honor a la
            <strong>Santísima Virgen del Carmen</strong>
          </h1>

          <p className="heroDescription">
            Fe, cultura, tradición y alegría se unen para rendir
            homenaje a la patrona y protectora del pueblo celendino.
          </p>

          <div className="eventInformation">
            <div>
              <span>Inicio oficial</span>
              <strong>01 de julio</strong>
            </div>

            <div>
              <span>Hora</span>
              <strong>03:00 p. m.</strong>
            </div>

            <div>
              <span>Lugar</span>
              <strong>Celendín</strong>
            </div>
          </div>

          <div className="heroButtons">
            <Link className="button buttonGold" href="/programa">
              Consultar programa
            </Link>

            <a
              className="button buttonOutline"
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook oficial
            </a>
          </div>

          <p className="source">
            Información basada en las publicaciones oficiales de la
            Municipalidad Provincial de Celendín.
          </p>
        </div>

        <div className="posterArea">
          <div className="posterFrame">
            <Image
              className="posterImage"
              src="/virgen-del-carmen-2026.png"
              alt="Fiestas Patronales de Celendín 2026"
              width={526}
              height={526}
              priority
            />

            <span className="posterBadge">
              Programa de apertura
            </span>
          </div>

          <div className="dateCard">
            <span>Miércoles</span>
            <strong>01</strong>
            <span>Julio 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
