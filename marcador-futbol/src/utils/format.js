// Utilidades de formato y agrupación de partidos.

export const STATUS_LABELS = {
  live: 'EN VIVO',
  half: 'DESCANSO',
  finished: 'FINAL',
  scheduled: 'PROGRAMADO',
}

// Agrupa una lista de partidos por liga, respetando el orden de aparición.
export function groupByLeague(matches) {
  const map = new Map()
  for (const m of matches) {
    const key = `${m.league.country}·${m.league.name}`
    if (!map.has(key)) {
      map.set(key, { league: m.league, matches: [] })
    }
    map.get(key).matches.push(m)
  }
  return Array.from(map.values())
}

// Devuelve el texto de estado que se muestra en la fila (minuto, HT, FT o la hora).
export function statusText(match) {
  switch (match.status) {
    case 'live':
      return `${match.minute}'`
    case 'half':
      return 'DESC'
    case 'finished':
      return 'FIN'
    case 'scheduled':
    default:
      return match.time
  }
}

// Formatea una cuota con 2 decimales.
export function formatOdd(value) {
  if (value == null) return '-'
  return Number(value).toFixed(2)
}

// Cuenta rápida para las pestañas de filtro.
export function countByFilter(matches) {
  return {
    all: matches.length,
    live: matches.filter((m) => m.status === 'live' || m.status === 'half').length,
    finished: matches.filter((m) => m.status === 'finished').length,
    scheduled: matches.filter((m) => m.status === 'scheduled').length,
    televised: matches.filter((m) => m.televised).length,
  }
}
