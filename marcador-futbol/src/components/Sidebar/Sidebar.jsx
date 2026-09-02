import styles from './Sidebar.module.css'

// Panel lateral con ligas destacadas para filtrar rápido.
export default function Sidebar({ leagues, selectedLeague, onSelectLeague }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <h3 className={styles.title}>Competiciones</h3>
        <ul>
          <li>
            <button
              className={`${styles.item} ${!selectedLeague ? styles.active : ''}`}
              onClick={() => onSelectLeague(null)}
            >
              <span>🌍</span> Todas las ligas
            </button>
          </li>
          {leagues.map((lg) => (
            <li key={lg.key}>
              <button
                className={`${styles.item} ${selectedLeague === lg.key ? styles.active : ''}`}
                onClick={() => onSelectLeague(lg.key)}
              >
                <span className={styles.flag}>{lg.flag}</span>
                <span className={styles.itemName}>{lg.name}</span>
                <span className={styles.badge}>{lg.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <h3 className={styles.title}>Leyenda de cuotas</h3>
        <ul className={styles.legend}>
          <li><b>1</b> Gana local</li>
          <li><b>X</b> Empate</li>
          <li><b>2</b> Gana visitante</li>
          <li><span className={styles.legendBest} /> Favorito (paga menos)</li>
        </ul>
      </div>
    </aside>
  )
}
