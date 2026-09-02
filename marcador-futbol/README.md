# ⚽ GolMarcador — Marcador de fútbol en vivo (Vite + React)

Página de resultados de fútbol estilo **BeSoccer / Apuestatotal**: todos los
partidos agrupados por liga, marcador minuto a minuto **en vivo** y **cuotas**
(cuánto paga cada resultado). Todo **componentizado** y listo para usar.

## 🚀 Cómo ejecutarlo

```bash
cd marcador-futbol
npm install
npm run dev
```

Abre http://localhost:5173

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## ✨ Funcionalidades

- **Marcador en vivo simulado**: los partidos "EN VIVO" avanzan de minuto y a
  veces marcan gol (la fila destella en verde). Ver `src/hooks/useLiveMatches.js`.
- **Agrupación por liga** con bandera, país y contador de partidos en vivo.
- **Cuotas 1X2** en cada fila con el favorito resaltado.
- **Detalle del partido** (clic en cualquier partido): modal con **todas las
  cuotas** — 1X2, doble oportunidad, más/menos goles y ambos anotan.
- **Filtros**: Todos / En vivo / Finalizados / Por jugar / Por TV.
- **Barra de fechas** horizontal (días alrededor de hoy).
- **Buscador** por equipo, liga o jugador.
- **Panel lateral** para filtrar por competición.
- **Responsive** y con **modo oscuro** automático (según el sistema).

## 🧩 Estructura (componentizada)

```
src/
├── App.jsx                     # Orquesta el estado y el layout
├── data/matches.js             # Datos de ejemplo (partidos + cuotas)
├── hooks/useLiveMatches.js     # Simulación "en vivo" (reemplazable por una API)
├── utils/format.js             # Formato y agrupación
└── components/
    ├── Header/                 # Barra superior + buscador
    ├── DateBar/                # Selector de fechas
    ├── FilterTabs/             # Pestañas de filtro
    ├── Sidebar/                # Ligas + leyenda de cuotas
    ├── Scoreboard/             # Lista de partidos agrupados
    ├── LeagueGroup/            # Bloque de una liga (colapsable)
    ├── MatchRow/               # Fila de un partido (+ TeamBadge)
    ├── Odds/                   # Celdas de cuotas 1X2
    ├── LiveDot/                # Indicador pulsante "en vivo"
    └── MatchDetail/            # Modal con todas las cuotas
```

## 🔌 Conectar datos reales

Los datos son de ejemplo. Para usar una API real (p. ej. API-Football,
LiveScore, etc.) reemplaza el contenido de `useLiveMatches.js` por un `fetch`
o WebSocket que devuelva el mismo *shape* que `src/data/matches.js` y llama a
`setMatches(datosNuevos)`. El resto de la interfaz no necesita cambios.
