import styles from './Odds.module.css'
import { formatOdd } from '../../utils/format'

// Una celda de cuota (cuánto paga). `label` es 1 / X / 2 u otro mercado.
export function OddsCell({ label, value, best = false, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.cell} ${best ? styles.best : ''}`}
      onClick={onClick}
      title={`${label}: paga ${formatOdd(value)}`}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{formatOdd(value)}</span>
    </button>
  )
}

// Grupo de cuotas 1X2 con la mejor (más baja = favorito) resaltada.
export function Odds1x2({ odds }) {
  if (!odds) return <div className={styles.group} />
  const min = Math.min(odds.home, odds.draw, odds.away)
  return (
    <div className={styles.group}>
      <OddsCell label="1" value={odds.home} best={odds.home === min} />
      <OddsCell label="X" value={odds.draw} best={odds.draw === min} />
      <OddsCell label="2" value={odds.away} best={odds.away === min} />
    </div>
  )
}
