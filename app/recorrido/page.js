import Image from "next/image";
import PageBanner from "../components/PageBanner";

export const metadata = {
  title: "Recorrido | Fiestas Patronales de Celendín 2026",
};

const recorrido = [
  "Frontis de la Iglesia Virgen del Carmen",
  "Jirón Dos de Mayo",
  "Avenida Amazonas",
  "Jirón Cáceres",
  "Jirón Marcelino Gonzales",
  "Jirón José Gálvez",
  "Frontis de la Municipalidad Provincial",
];

export default function RecorridoPage() {
  return (
    <main className="internalPage">
      <PageBanner
        etiqueta="Ruta del pregón"
        titulo="Recorrido por las calles de Celendín"
        descripcion="El tradicional pregón recorrerá las principales calles de la ciudad hasta llegar a la Municipalidad Provincial."
      />

      <section className="pageContent routePage">
        <div className="routeSteps">
          {recorrido.map((lugar, indice) => (
            <article key={lugar}>
              <span>
                {String(indice + 1).padStart(2, "0")}
              </span>

              <div>
                <small>
                  {indice === 0
                    ? "Punto de partida"
                    : indice === recorrido.length - 1
                    ? "Punto de llegada"
                    : "Parte del recorrido"}
                </small>

                <h2>{lugar}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="routePoster">
          <Image
            src="/virgen-del-carmen-2026.png"
            alt="Mapa del recorrido del pregón"
            width={526}
            height={526}
          />

          <div>
            <strong>Pregón por inicio de fiestas</strong>
            <p>Miércoles 01 de julio · 03:00 p. m.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
