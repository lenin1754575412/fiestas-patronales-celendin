import { useEffect, useRef, useState } from 'react'
import { matches as initialMatches } from '../data/matches'

// Hook que mantiene el estado de los partidos y simula la actualización
// "en vivo": cada cierto tiempo avanza el minuto de los partidos en juego y,
// de vez en cuando, cambia un marcador para que se sienta como un livescore real.
//
// Para conectar a una API real: reemplaza el setInterval por un polling
// (fetch) o un WebSocket que haga setMatches(datosNuevos).
export function useLiveMatches({ intervalMs = 5000 } = {}) {
  const [matches, setMatches] = useState(initialMatches)
  const [flash, setFlash] = useState(null) // id del partido que acaba de cambiar
  const tick = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      tick.current += 1
      setMatches((prev) =>
        prev.map((m) => {
          if (m.status !== 'live') return m

          let minute = m.minute + 1
          let status = m.status
          let period = m.period

          // Descanso al llegar a 45 en primera parte
          if (minute === 45 && m.period === '1ª Parte') {
            // sigue en vivo pero avanza
          }
          if (minute >= 90) {
            minute = 90
            status = 'finished'
            period = 'Final'
          }

          // ~1 de cada 12 ticks marca un gol en un partido en vivo
          const scored = Math.random() < 0.08
          let home = m.home
          let away = m.away
          if (scored && status === 'live') {
            if (Math.random() < 0.5) {
              home = { ...home, score: (home.score ?? 0) + 1 }
            } else {
              away = { ...away, score: (away.score ?? 0) + 1 }
            }
            // Destella la fila que cambió
            setFlash(m.id)
            setTimeout(() => setFlash((f) => (f === m.id ? null : f)), 2500)
          }

          return { ...m, minute, status, period, home, away }
        }),
      )
    }, intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs])

  return { matches, flash, setMatches }
}
