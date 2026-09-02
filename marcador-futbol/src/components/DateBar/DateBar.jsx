import styles from './DateBar.module.css'
import { dateTabs } from '../../data/matches'

// Barra de fechas horizontal (días alrededor de hoy), estilo BeSoccer.
export default function DateBar({ selected, onSelect }) {
  return (
    <div className={styles.bar}>
      <button className={styles.arrow} aria-label="Días anteriores">‹</button>
      <div className={styles.days}>
        {dateTabs.map((d) => (
          <button
            key={d.key}
            className={`${styles.day} ${selected === d.key ? styles.active : ''} ${d.today ? styles.today : ''}`}
            onClick={() => onSelect(d.key)}
          >
            <span className={styles.dow}>{d.today ? 'HOY' : d.label}</span>
            <span className={styles.num}>{d.day}</span>
            <span className={styles.month}>{d.month}</span>
          </button>
        ))}
      </div>
      <button className={styles.arrow} aria-label="Días siguientes">›</button>
    </div>
  )
}
