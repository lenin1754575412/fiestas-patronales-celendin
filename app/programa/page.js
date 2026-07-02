import Link from "next/link";
import PageBanner from "../components/PageBanner";
import styles from "./programa.module.css";

export const metadata = {
  title: "Programa | Fiestas Patronales de Celendín 2026",
};

const actividades = [
  {
    numero: "01",
    icono: "⛪",
    hora: "03:00 p. m.",
    titulo: "Reseña y bajada de la Virgen",
    descripcion:
      "Bajada de la Santísima Virgen del Carmen desde su trono hacia el altar festivo.",
  },
  {
    numero: "02",
    icono: "🙏",
    hora: "03:00 p. m.",
    titulo: "Celebración eucarística",
    descripcion:
      "Celebración ofrecida por sus mayordomos, las familias Ayala Alva y Ravello Quiroz.",
  },
  {
    numero: "03",
    icono: "🎉",
    hora: "03:00 p. m.",
    titulo: "Pregón por inicio de fiestas",
    descripcion:
      "Recorrido por las principales calles de Celendín con música, tradición y participación ciudadana.",
  },
];

const recorrido = [
  "Frontis de la Iglesia Virgen del Carmen",
  "Jirón Dos de Mayo",
  "Avenida Amazonas",
  "Jirón Cáceres",
  "Jirón Marcelino Gonzales",
  "Jirón José Gálvez",
  "Frontis de la Municipalidad Provincial",
];

export default function ProgramaPage() {
  return (
    <main className="internalPage">
      <PageBanner
        etiqueta="Miércoles 01 de julio"
        titulo="Programa de apertura"
        descripcion="Conoce las primeras actividades anunciadas para el inicio de las Fiestas Patronales de Celendín 2026."
      />

      <section className={styles.wrapper}>
        <div className={styles.topStats}>
          <article>
            <span>Fecha</span>
            <strong>01 de julio</strong>
          </article>

          <article>
            <span>Hora</span>
            <strong>03:00 p. m.</strong>
          </article>

          <article>
            <span>Lugar</span>
            <strong>Celendín</strong>
          </article>

          <article>
            <span>Evento</span>
            <strong>Inicio de fiestas</strong>
          </article>
        </div>

        <div className={styles.headerBlock}>
          <div>
            <span className={styles.sectionLabel}>
              Programación oficial
            </span>

            <h2>Actividades confirmadas</h2>

            <p>
              Estas son las actividades oficiales anunciadas para la
              apertura de las Fiestas Patronales de Celendín 2026 en
              honor a la Santísima Virgen del Carmen.
            </p>
          </div>

          <a
            className={styles.facebookButton}
            href="https://www.facebook.com/municelendin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook oficial
          </a>
        </div>

        <div className={styles.programGrid}>
          {actividades.map((actividad) => (
            <article className={styles.programCard} key={actividad.numero}>
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {actividad.numero}
                </span>

                <span className={styles.icon}>
                  {actividad.icono}
                </span>
              </div>

              <span className={styles.time}>
                {actividad.hora}
              </span>

              <h3>{actividad.titulo}</h3>
              <p>{actividad.descripcion}</p>
            </article>
          ))}
        </div>

        <div className={styles.informationGrid}>
          <article className={styles.noticeCard}>
            <span className={styles.noticeLabel}>
              Información importante
            </span>

            <h3>Programa en actualización</h3>

            <p>
              Las siguientes actividades se agregarán conforme sean
              confirmadas y publicadas por la Municipalidad Provincial
              de Celendín.
            </p>

            <div className={styles.noticeBox}>
              <strong>Mayordomos:</strong>
              <span>Familias Ayala Alva y Ravello Quiroz</span>
            </div>

            <a
              className={styles.primaryButton}
              href="https://www.facebook.com/municelendin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar Facebook oficial
            </a>
          </article>

          <article className={styles.routeCard}>
            <span className={styles.noticeLabel}>
              Ruta del pregón
            </span>

            <h3>Recorrido principal</h3>

            <div className={styles.routeList}>
              {recorrido.map((item, index) => (
                <div className={styles.routeItem} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <Link className={styles.secondaryButton} href="/recorrido">
              Ver página de recorrido
            </Link>
          </article>
        </div>

        <div className={styles.quotePanel}>
          <span>Mensaje de fe</span>
          <blockquote>
            “Bajo tu santo manto, Virgen del Carmen, encontramos
            consuelo, fortaleza y la paz que solo Dios puede dar”.
          </blockquote>
        </div>
      </section>
    </main>
  );
}
