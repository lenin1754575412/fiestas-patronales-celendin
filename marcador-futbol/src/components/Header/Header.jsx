import styles from './Header.module.css'

// Barra superior: logo, navegación y buscador.
export default function Header({ search, onSearch }) {
  const nav = ['Partidos', 'Competiciones', 'Equipos', 'Jugadores', 'Noticias']
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#">
          <span className={styles.logo}>⚽</span>
          <span className={styles.brandName}>
            Gol<span className={styles.brandAccent}>Marcador</span>
          </span>
        </a>

        <nav className={styles.nav}>
          {nav.map((item, i) => (
            <a key={item} href="#" className={i === 0 ? styles.navActive : ''}>
              {item}
            </a>
          ))}
        </nav>

        <div className={styles.search}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="search"
            placeholder="Buscar equipo, liga o jugador…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}
