import styles from './Scoreboard.module.css'
import LeagueGroup from '../LeagueGroup/LeagueGroup'
import { groupByLeague } from '../../utils/format'

// Lista de partidos agrupados por liga. Muestra estado vacío si no hay resultados.
export default function Scoreboard({ matches, flashId, onOpen }) {
  if (matches.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>🔍</span>
        <p>No hay partidos que coincidan con el filtro.</p>
      </div>
    )
  }

  const groups = groupByLeague(matches)

  return (
    <div className={styles.list}>
      {groups.map((g) => (
        <LeagueGroup
          key={`${g.league.country}-${g.league.name}`}
          group={g}
          flashId={flashId}
          onOpen={onOpen}
        />
      ))}
    </div>
  )
}
