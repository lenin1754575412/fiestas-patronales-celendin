import styles from './MatchDetail.module.css'
import TeamBadge from '../MatchRow/TeamBadge'
import { OddsCell } from '../Odds/OddsCell'
import LiveDot from '../LiveDot/LiveDot'
import { STATUS_LABELS, statusText } from '../../utils/format'

// Modal con TODAS las cuotas del partido: 1X2, doble oportunidad,
// más/menos goles y ambos equipos anotan.
export default function MatchDetail({ match, onClose }) {
  if (!match) return null
  const isLive = match.status === 'live' || match.status === 'half'
  const m = match.markets

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        {/* Cabecera del marcador */}
        <div className={styles.head}>
          <div className={styles.league}>
            <span>{match.league.flag}</span> {match.league.name}
          </div>

          <div className={styles.scoreboard}>
            <div className={styles.side}>
              <TeamBadge team={match.home} />
              <span className={styles.name}>{match.home.name}</span>
            </div>

            <div className={styles.center}>
              <div className={styles.result}>
                <span>{match.home.score ?? '-'}</span>
                <span className={styles.colon}>:</span>
                <span>{match.away.score ?? '-'}</span>
              </div>
              <div className={styles.state}>
                {isLive ? (
                  <LiveDot label={`${statusText(match)} · ${match.period ?? ''}`} />
                ) : (
                  <span className={styles.stateText}>
                    {STATUS_LABELS[match.status]} · {match.time}
                  </span>
                )}
              </div>
              {match.home.pens != null && (
                <div className={styles.pens}>
                  Penales {match.home.pens} - {match.away.pens}
                </div>
              )}
            </div>

            <div className={styles.side}>
              <TeamBadge team={match.away} />
              <span className={styles.name}>{match.away.name}</span>
            </div>
          </div>

          {match.televised && (
            <div className={styles.tv}>📺 Transmite: {match.channel}</div>
          )}
        </div>

        {/* Mercados de cuotas */}
        <div className={styles.markets}>
          <Market title="Resultado del partido (1X2)">
            <OddsCell label={`1 · ${match.home.short}`} value={match.odds.home} />
            <OddsCell label="X · Empate" value={match.odds.draw} />
            <OddsCell label={`2 · ${match.away.short}`} value={match.odds.away} />
          </Market>

          <Market title="Doble oportunidad">
            <OddsCell label="1X" value={m.doubleChance.homeDraw} />
            <OddsCell label="12" value={m.doubleChance.homeAway} />
            <OddsCell label="X2" value={m.doubleChance.drawAway} />
          </Market>

          <Market title={`Total de goles (${m.overUnder.line})`}>
            <OddsCell label={`Más de ${m.overUnder.line}`} value={m.overUnder.over} />
            <OddsCell label={`Menos de ${m.overUnder.line}`} value={m.overUnder.under} />
          </Market>

          <Market title="Ambos equipos anotan">
            <OddsCell label="Sí" value={m.btts.yes} />
            <OddsCell label="No" value={m.btts.no} />
          </Market>
        </div>

        <p className={styles.disclaimer}>
          Cuotas de ejemplo. Conecta tu propia API para mostrar valores reales en tiempo real.
        </p>
      </div>
    </div>
  )
}

function Market({ title, children }) {
  return (
    <div className={styles.market}>
      <h4 className={styles.marketTitle}>{title}</h4>
      <div className={styles.marketOdds}>{children}</div>
    </div>
  )
}
