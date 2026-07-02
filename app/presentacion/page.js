import PageBanner from "../components/PageBanner";

export const metadata = {
  title: "Presentación | Fiestas Patronales de Celendín 2026",
};

export default function PresentacionPage() {
  return (
    <main className="internalPage">
      <PageBanner
        etiqueta="Fe, cultura y tradición"
        titulo="Presentación de la festividad"
        descripcion="Una celebración que reúne a las familias, instituciones, autoridades y visitantes para rendir homenaje a la Santísima Virgen del Carmen."
      />

      <section className="pageContent">
        <div className="threeCards">
          <article className="informationCard">
            <span className="cardIcon">🙏</span>
            <h2>Fe y devoción</h2>
            <p>
              Las celebraciones religiosas son el centro de la festividad.
              La comunidad participa en misas, oraciones, homenajes y actos
              dedicados a la Santísima Virgen del Carmen.
            </p>
          </article>

          <article className="informationCard">
            <span className="cardIcon">🎺</span>
            <h2>Cultura y tradición</h2>
            <p>
              Los pregones, la música, los recorridos y las expresiones
              culturales permiten conservar las costumbres de Celendín.
            </p>
          </article>

          <article className="informationCard">
            <span className="cardIcon">🏛️</span>
            <h2>Identidad celendina</h2>
            <p>
              La fiesta fortalece la unión de la población y permite que
              nuevas generaciones conozcan las tradiciones de la provincia.
            </p>
          </article>
        </div>

        <div className="quoteBox">
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
