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
      </section>
    </main>
  );
}
