import styles from './FilterTabs.module.css'

// Pestañas de filtro: Todos / En vivo / Finalizados / Programados / TV.
export default function FilterTabs({ active, onChange, counts }) {
  const tabs = [
    { key: 'all', label: 'Todos', count: counts.all },
    { key: 'live', label: 'En vivo', count: counts.live, live: true },
    { key: 'finished', label: 'Finalizados', count: counts.finished },
    { key: 'scheduled', label: 'Por jugar', count: counts.scheduled },
    { key: 'televised', label: 'Por TV', count: counts.televised },
  ]

  return (
    <div className={styles.tabs}>
      {tabs.map((t) => (
        <button
          key={t.key}
          className={`${styles.tab} ${active === t.key ? styles.active : ''}`}
          onClick={() => onChange(t.key)}
        >
          {t.live && <span className={styles.dot} />}
          {t.label}
          <span className={styles.count}>{t.count}</span>
        </button>
      ))}
    </div>
  )
}
