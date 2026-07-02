import Link from "next/link";

export default function PageBanner({
  etiqueta,
  titulo,
  descripcion,
}) {
  return (
    <section className="pageBanner">
      <div className="pageBannerContent">
        <span>{etiqueta}</span>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>

        <Link className="backButton" href="/">
          ← Volver al inicio
        </Link>
      </div>
    </section>
  );
}
