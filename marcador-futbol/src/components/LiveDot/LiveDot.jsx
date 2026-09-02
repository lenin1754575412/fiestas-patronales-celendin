import styles from './LiveDot.module.css'

// Punto rojo pulsante que indica "en vivo".
export default function LiveDot({ label }) {
  return (
    <span className={styles.wrap}>
      <span className={styles.dot} />
      {label && <span className={styles.label}>{label}</span>}
    </span>
  )
}
