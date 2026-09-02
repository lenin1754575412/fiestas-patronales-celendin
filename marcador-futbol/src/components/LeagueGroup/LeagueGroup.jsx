import { useState } from 'react'
import styles from './LeagueGroup.module.css'
import MatchRow from '../MatchRow/MatchRow'

// Bloque de una liga: cabecera (bandera + nombre + país) y sus partidos.
export default function LeagueGroup({ group, flashId, onOpen }) {
  const [open, setOpen] = useState(true)
  const { league, matches } = group
  const liveCount = matches.filter((m) => m.status === 'live' || m.status === 'half').length

  return (
    <section className={styles.group}>
      <header className={styles.header} onClick={() => setOpen((v) => !v)}>
        <span className={styles.flag}>{league.flag}</span>
        <div className={styles.titles}>
          <span className={styles.name}>{league.name}</span>
          <span className={styles.country}>{league.country}</span>
        </div>
        {liveCount > 0 && <span className={styles.liveBadge}>{liveCount} en vivo</span>}
        <span className={styles.headerOdds}>
          <span>1</span>
          <span>X</span>
          <span>2</span>
        </span>
        <button type="button" className={styles.toggle} aria-label="Contraer liga">
          {open ? '▾' : '▸'}
        </button>
      </header>

      {open && (
        <div className={styles.body}>
          {matches.map((m) => (
            <MatchRow
              key={m.id}
              match={m}
              flash={flashId === m.id}
              onOpen={onOpen}
            />
          ))}
        </div>
      )}
    </section>
  )
}
