import PageBanner from "../components/PageBanner";

export const metadata = {
  title: "Noticias | Fiestas Patronales de Celendín 2026",
};

const FACEBOOK = "https://www.facebook.com/municelendin";

const noticias = [
  {
    fecha: "01 de julio de 2026",
    categoria: "Inicio oficial",
    titulo: "Celendín inicia sus Fiestas Patronales 2026",
    descripcion:
      "La población celendina comienza con júbilo las celebraciones en honor a la Virgen del Carmen.",
    icono: "🎊",
  },
  {
    fecha: "01 de julio de 2026",
    categoria: "Actividad religiosa",
    titulo: "Bajada de la Santísima Virgen del Carmen",
    descripcion:
      "La imagen de la Virgen será trasladada desde su trono hacia el altar festivo.",
    icono: "🙏",
  },
  {
    fecha: "01 de julio de 2026",
    categoria: "Tradición",
    titulo: "Pregón por las principales calles",
    descripcion:
      "Música, alegría e identidad acompañarán el recorrido de apertura de las festividades.",
    icono: "🎺",
  },
];

const historia = [
  {
    fecha: "1796",
    titulo: "Origen del poblado",
    descripcion:
      "Celendín nace por iniciativa del obispo de Trujillo, Baltasar Jaime Martínez Compañón, con colonos españoles, portugueses y de origen judío que se asentaron en el valle.",
    icono: "🏘️",
  },
  {
    fecha: "19 de diciembre de 1802",
    titulo: "Fundación política como Villa",
    descripcion:
      "Se aprueba la creación del poblado con el nombre de \"Amalia de Zelendín\" y se le concede el título de Villa.",
    icono: "📜",
  },
  {
    fecha: "12 de octubre de 1849",
    titulo: "Título de Ciudad",
    descripcion:
      "El Congreso de la República del Perú aprueba otorgar a Celendín el título de Ciudad.",
    icono: "🏛️",
  },
  {
    fecha: "2 de enero de 1857",
    titulo: "Elevación a Distrito",
    descripcion:
      "Celendín es elevado a la categoría de Distrito dentro del departamento de Cajamarca.",
    icono: "🎖️",
  },
  {
    fecha: "30 de septiembre de 1862",
    titulo: "Creación de la Provincia de Celendín",
    descripcion:
      "Por ley, durante el gobierno del presidente Ramón Castilla, se crea oficialmente la Provincia de Celendín.",
    icono: "⚖️",
  },
];

export default function NoticiasPage() {
  return (
    <main className="internalPage">
      <PageBanner
        etiqueta="Información oficial"
        titulo="Últimas noticias"
        descripcion="Conoce las novedades y comunicados relacionados con las Fiestas Patronales de Celendín."
      />

      <section className="pageContent">
        <div className="newsGrid">
          {noticias.map((noticia) => (
            <article className="newsCard" key={noticia.titulo}>
              <div className="newsIcon">
                {noticia.icono}
              </div>

              <div className="newsBody">
                <span className="newsCategory">
                  {noticia.categoria}
                </span>

                <time>{noticia.fecha}</time>
                <h2>{noticia.titulo}</h2>
                <p>{noticia.descripcion}</p>

                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver publicación oficial →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sectionHeading">
          <span className="sectionLabel">Nuestras raíces</span>
          <h2>Historia de Celendín</h2>
          <p>
            Desde su origen como poblado hasta su creación como provincia,
            este es el camino que dio nacimiento a Celendín.
          </p>
        </div>

        <div className="historyTimeline">
          {historia.map((hito) => (
            <article key={hito.titulo}>
              <span className="historyIcon">{hito.icono}</span>

              <div>
                <small>{hito.fecha}</small>
                <h3>{hito.titulo}</h3>
                <p>{hito.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
