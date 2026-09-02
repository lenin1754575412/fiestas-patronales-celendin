import { useMemo, useState } from 'react'
import styles from './App.module.css'

import Header from './components/Header/Header'
import DateBar from './components/DateBar/DateBar'
import FilterTabs from './components/FilterTabs/FilterTabs'
import Sidebar from './components/Sidebar/Sidebar'
import Scoreboard from './components/Scoreboard/Scoreboard'
import MatchDetail from './components/MatchDetail/MatchDetail'

import { useLiveMatches } from './hooks/useLiveMatches'
import { countByFilter } from './utils/format'

export default function App() {
  const { matches, flash } = useLiveMatches({ intervalMs: 5000 })

  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [dateKey, setDateKey] = useState('0')
  const [leagueKey, setLeagueKey] = useState(null)
  const [selected, setSelected] = useState(null) // partido abierto en el modal

  // Ligas para el panel lateral, con conteo de partidos.
  const leagues = useMemo(() => {
    const map = new Map()
    for (const m of matches) {
      const key = `${m.league.country}·${m.league.name}`
      if (!map.has(key)) {
        map.set(key, { key, name: m.league.name, flag: m.league.flag, count: 0 })
      }
      map.get(key).count += 1
    }
    return Array.from(map.values())
  }, [matches])

  // Aplica todos los filtros (pestaña, liga, búsqueda).
  const filtered = useMemo(() => {
    let list = matches

    if (filter === 'live') list = list.filter((m) => m.status === 'live' || m.status === 'half')
    else if (filter === 'finished') list = list.filter((m) => m.status === 'finished')
    else if (filter === 'scheduled') list = list.filter((m) => m.status === 'scheduled')
    else if (filter === 'televised') list = list.filter((m) => m.televised)

    if (leagueKey) {
      list = list.filter((m) => `${m.league.country}·${m.league.name}` === leagueKey)
    }

    const q = search.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (m) =>
          m.home.name.toLowerCase().includes(q) ||
          m.away.name.toLowerCase().includes(q) ||
          m.league.name.toLowerCase().includes(q),
      )
    }
    return list
  }, [matches, filter, leagueKey, search])

  const counts = useMemo(() => countByFilter(matches), [matches])
  const liveNow = counts.live

  return (
    <div className={styles.app}>
      <Header search={search} onSearch={setSearch} />

      <main className={styles.container}>
        <div className={styles.pageHead}>
          <div>
            <h1 className={styles.h1}>Resultados de fútbol</h1>
            <p className={styles.sub}>
              Todos los partidos, marcador minuto a minuto y cuotas de cuánto pagan.
            </p>
          </div>
          {liveNow > 0 && (
            <div className={styles.liveCounter}>
              <span className={styles.liveCounterDot} />
              {liveNow} {liveNow === 1 ? 'partido en vivo' : 'partidos en vivo'}
            </div>
          )}
        </div>

        <DateBar selected={dateKey} onSelect={setDateKey} />
        <FilterTabs active={filter} onChange={setFilter} counts={counts} />

        <div className={styles.layout}>
          <Sidebar
            leagues={leagues}
            selectedLeague={leagueKey}
            onSelectLeague={setLeagueKey}
          />
          <Scoreboard matches={filtered} flashId={flash} onOpen={setSelected} />
        </div>
      </main>

      <footer className={styles.footer}>
        GolMarcador · demo hecha con Vite + React · datos de ejemplo
      </footer>

      <MatchDetail match={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
