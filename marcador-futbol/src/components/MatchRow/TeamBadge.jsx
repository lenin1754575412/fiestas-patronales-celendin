import styles from './MatchRow.module.css'

// Escudo simulado con las iniciales del equipo y su color.
export default function TeamBadge({ team }) {
  return (
    <span className={styles.badge} style={{ background: team.color }}>
      {team.short}
    </span>
  )
}
