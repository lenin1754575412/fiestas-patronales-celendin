import styles from './MatchRow.module.css'
import TeamBadge from './TeamBadge'
import { Odds1x2 } from '../Odds/OddsCell'
import LiveDot from '../LiveDot/LiveDot'
import { statusText } from '../../utils/format'

// Una fila de partido: estado/minuto, equipos, marcador, cuotas y acceso al detalle.
export default function MatchRow({ match, flash, onOpen }) {
  const isLive = match.status === 'live' || match.status === 'half'
  const isFinished = match.status === 'finished'
  const homeWins = isFinished && match.home.score > match.away.score
  const awayWins = isFinished && match.away.score > match.home.score

  return (
    <div className={`${styles.row} ${flash ? styles.flash : ''}`}>
      {/* Estado / minuto */}
      <div className={styles.status}>
        {isLive ? (
          <span className={styles.liveTime}>
            <LiveDot />
            <span className={styles.minute}>{statusText(match)}</span>
          </span>
        ) : (
          <span className={`${styles.time} ${isFinished ? styles.timeFinished : ''}`}>
            {statusText(match)}
          </span>
        )}
      </div>

      {/* Equipos + marcador (clic abre el detalle) */}
      <button type="button" className={styles.teams} onClick={() => onOpen(match)}>
        <div className={`${styles.team} ${homeWins ? styles.winner : ''}`}>
          <TeamBadge team={match.home} />
          <span className={styles.teamName}>{match.home.name}</span>
        </div>
        <div className={`${styles.team} ${awayWins ? styles.winner : ''}`}>
          <TeamBadge team={match.away} />
          <span className={styles.teamName}>{match.away.name}</span>
        </div>

        <div className={styles.score}>
          <span className={isLive ? styles.scoreLive : ''}>
            {match.home.score ?? '-'}
          </span>
          <span className={isLive ? styles.scoreLive : ''}>
            {match.away.score ?? '-'}
          </span>
          {match.home.pens != null && (
            <span className={styles.pens}>
              ({match.home.pens})<br />({match.away.pens})
            </span>
          )}
        </div>
      </button>

      {/* TV */}
      <div className={styles.tv}>
        {match.televised && (
          <span className={styles.tvBadge} title={`Transmite: ${match.channel}`}>
            📺 {match.channel}
          </span>
        )}
      </div>

      {/* Cuotas 1X2 */}
      <div className={styles.odds}>
        <Odds1x2 odds={match.odds} />
      </div>

      <button type="button" className={styles.expand} onClick={() => onOpen(match)} title="Ver todas las cuotas">
        ⌄
      </button>
    </div>
  )
}
