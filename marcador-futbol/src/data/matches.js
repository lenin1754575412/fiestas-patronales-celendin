// Datos de ejemplo (mock) de partidos, resultados y cuotas.
// Estructura pensada para conectarse fácilmente a una API real más adelante:
// basta con reemplazar este export por un fetch que devuelva el mismo shape.

// status: 'live' | 'half' | 'finished' | 'scheduled'
// odds: cuotas 1X2 (cuánto paga cada resultado)
// markets: mercados adicionales (más/menos goles, ambos anotan)

let _id = 0
const uid = () => `m${++_id}`

export const matches = [
  // ---------------- COPA ITALIA ----------------
  {
    id: uid(),
    league: { name: 'Coppa Italia', country: 'Italia', flag: '🇮🇹' },
    status: 'live',
    minute: 14,
    period: '1ª Parte',
    time: '20:45',
    televised: true,
    channel: 'ESPN',
    home: { name: 'Udinese', short: 'UDI', color: '#000000', score: 0 },
    away: { name: 'Venezia', short: 'VEN', color: '#f57c00', score: 1 },
    odds: { home: 1.73, draw: 3.59, away: 4.74 },
    markets: {
      overUnder: { line: 0.5, over: 1.03, under: 10.0 },
      btts: { yes: 2.1, no: 1.6 },
      doubleChance: { homeDraw: 1.18, homeAway: 1.28, drawAway: 2.05 },
    },
  },
  {
    id: uid(),
    league: { name: 'Coppa Italia', country: 'Italia', flag: '🇮🇹' },
    status: 'finished',
    minute: 90,
    period: 'Final',
    time: '18:00',
    televised: false,
    home: { name: 'Sassuolo', short: 'SAS', color: '#00913f', score: 1, pens: 4 },
    away: { name: 'Frosinone', short: 'FRO', color: '#1565c0', score: 1, pens: 3 },
    odds: { home: 1.9, draw: 3.3, away: 4.0 },
    markets: {
      overUnder: { line: 2.5, over: 2.4, under: 1.55 },
      btts: { yes: 1.7, no: 2.05 },
      doubleChance: { homeDraw: 1.25, homeAway: 1.3, drawAway: 1.8 },
    },
  },

  // ---------------- BRASILEIRÃO ----------------
  {
    id: uid(),
    league: { name: 'Brasileirão Serie A', country: 'Brasil', flag: '🇧🇷' },
    status: 'live',
    minute: 67,
    period: '2ª Parte',
    time: '17:30',
    televised: true,
    channel: 'GloboPlay',
    home: { name: 'Flamengo', short: 'FLA', color: '#c8102e', score: 2 },
    away: { name: 'Mirassol', short: 'MIR', color: '#f9d616', score: 1 },
    odds: { home: 1.19, draw: 7.0, away: 14.0 },
    markets: {
      overUnder: { line: 3.5, over: 2.6, under: 1.48 },
      btts: { yes: 1.55, no: 2.35 },
      doubleChance: { homeDraw: 1.05, homeAway: 1.12, drawAway: 4.6 },
    },
  },

  // ---------------- DFB POKAL ----------------
  {
    id: uid(),
    league: { name: 'DFB Pokal', country: 'Alemania', flag: '🇩🇪' },
    status: 'scheduled',
    minute: 0,
    period: null,
    time: '13:45',
    televised: true,
    channel: 'Sky DE',
    home: { name: 'VfL Osnabrück', short: 'OSN', color: '#5c2d91', score: null },
    away: { name: 'Bayern München', short: 'BAY', color: '#dc052d', score: null },
    odds: { home: 30.0, draw: 19.0, away: 1.02 },
    markets: {
      overUnder: { line: 3.5, over: 1.4, under: 2.85 },
      btts: { yes: 1.9, no: 1.85 },
      doubleChance: { homeDraw: 8.5, homeAway: 1.01, drawAway: 1.01 },
    },
  },

  // ---------------- LALIGA ----------------
  {
    id: uid(),
    league: { name: 'LaLiga', country: 'España', flag: '🇪🇸' },
    status: 'live',
    minute: 38,
    period: '1ª Parte',
    time: '21:00',
    televised: true,
    channel: 'DAZN',
    home: { name: 'Real Sociedad', short: 'RSO', color: '#0067b1', score: 0 },
    away: { name: 'Celta de Vigo', short: 'CEL', color: '#8ac3ee', score: 0 },
    odds: { home: 2.1, draw: 3.1, away: 3.6 },
    markets: {
      overUnder: { line: 2.5, over: 2.0, under: 1.8 },
      btts: { yes: 1.75, no: 2.0 },
      doubleChance: { homeDraw: 1.25, homeAway: 1.32, drawAway: 1.65 },
    },
  },
  {
    id: uid(),
    league: { name: 'LaLiga', country: 'España', flag: '🇪🇸' },
    status: 'scheduled',
    minute: 0,
    period: null,
    time: '21:30',
    televised: true,
    channel: 'M+ LaLiga',
    home: { name: 'Atlético Madrid', short: 'ATM', color: '#cb3524', score: null },
    away: { name: 'Villarreal', short: 'VIL', color: '#ffe667', score: null },
    odds: { home: 1.75, draw: 3.7, away: 4.5 },
    markets: {
      overUnder: { line: 2.5, over: 1.95, under: 1.85 },
      btts: { yes: 1.8, no: 1.95 },
      doubleChance: { homeDraw: 1.2, homeAway: 1.28, drawAway: 2.0 },
    },
  },

  // ---------------- PREMIER LEAGUE ----------------
  {
    id: uid(),
    league: { name: 'Premier League', country: 'Inglaterra', flag: '🏴' },
    status: 'live',
    minute: 82,
    period: '2ª Parte',
    time: '16:30',
    televised: true,
    channel: 'ESPN',
    home: { name: 'Arsenal', short: 'ARS', color: '#ef0107', score: 3 },
    away: { name: 'Nottingham Forest', short: 'NFO', color: '#dd0000', score: 1 },
    odds: { home: 1.05, draw: 12.0, away: 26.0 },
    markets: {
      overUnder: { line: 3.5, over: 1.7, under: 2.1 },
      btts: { yes: 1.5, no: 2.5 },
      doubleChance: { homeDraw: 1.01, homeAway: 1.03, drawAway: 8.0 },
    },
  },
  {
    id: uid(),
    league: { name: 'Premier League', country: 'Inglaterra', flag: '🏴' },
    status: 'finished',
    minute: 90,
    period: 'Final',
    time: '14:00',
    televised: false,
    home: { name: 'Brighton', short: 'BHA', color: '#0057b8', score: 2 },
    away: { name: 'Manchester City', short: 'MCI', color: '#6cabdd', score: 2 },
    odds: { home: 4.6, draw: 4.0, away: 1.7 },
    markets: {
      overUnder: { line: 2.5, over: 1.6, under: 2.3 },
      btts: { yes: 1.45, no: 2.6 },
      doubleChance: { homeDraw: 2.1, homeAway: 1.25, drawAway: 1.2 },
    },
  },

  // ---------------- CHAMPIONS LEAGUE ----------------
  {
    id: uid(),
    league: { name: 'UEFA Champions League', country: 'Europa', flag: '🏆' },
    status: 'scheduled',
    minute: 0,
    period: null,
    time: '20:00',
    televised: true,
    channel: 'HBO Max',
    home: { name: 'Real Madrid', short: 'RMA', color: '#febe10', score: null },
    away: { name: 'Manchester City', short: 'MCI', color: '#6cabdd', score: null },
    odds: { home: 2.35, draw: 3.6, away: 2.75 },
    markets: {
      overUnder: { line: 3.5, over: 1.9, under: 1.9 },
      btts: { yes: 1.5, no: 2.5 },
      doubleChance: { homeDraw: 1.4, homeAway: 1.25, drawAway: 1.55 },
    },
  },

  // ---------------- LIGA 1 PERÚ ----------------
  {
    id: uid(),
    league: { name: 'Liga 1', country: 'Perú', flag: '🇵🇪' },
    status: 'live',
    minute: 55,
    period: '2ª Parte',
    time: '19:00',
    televised: true,
    channel: 'L1 MAX',
    home: { name: 'Universitario', short: 'UNI', color: '#8b1a1a', score: 1 },
    away: { name: 'Alianza Lima', short: 'ALI', color: '#0a2472', score: 1 },
    odds: { home: 2.2, draw: 3.0, away: 3.4 },
    markets: {
      overUnder: { line: 2.5, over: 2.5, under: 1.5 },
      btts: { yes: 1.65, no: 2.1 },
      doubleChance: { homeDraw: 1.28, homeAway: 1.35, drawAway: 1.6 },
    },
  },
  {
    id: uid(),
    league: { name: 'Liga 1', country: 'Perú', flag: '🇵🇪' },
    status: 'scheduled',
    minute: 0,
    period: null,
    time: '20:25',
    televised: true,
    channel: 'L1 MAX',
    home: { name: 'Sporting Cristal', short: 'CRI', color: '#00a3e0', score: null },
    away: { name: 'Melgar', short: 'MEL', color: '#e30613', score: null },
    odds: { home: 1.85, draw: 3.3, away: 4.2 },
    markets: {
      overUnder: { line: 2.5, over: 2.0, under: 1.8 },
      btts: { yes: 1.85, no: 1.9 },
      doubleChance: { homeDraw: 1.2, homeAway: 1.3, drawAway: 1.9 },
    },
  },

  // ---------------- SERIE A ----------------
  {
    id: uid(),
    league: { name: 'Serie A', country: 'Italia', flag: '🇮🇹' },
    status: 'finished',
    minute: 90,
    period: 'Final',
    time: '12:30',
    televised: false,
    home: { name: 'Inter', short: 'INT', color: '#0068a8', score: 3 },
    away: { name: 'Torino', short: 'TOR', color: '#7b1113', score: 0 },
    odds: { home: 1.4, draw: 4.6, away: 7.5 },
    markets: {
      overUnder: { line: 2.5, over: 1.65, under: 2.25 },
      btts: { yes: 1.9, no: 1.85 },
      doubleChance: { homeDraw: 1.1, homeAway: 1.18, drawAway: 2.8 },
    },
  },
]

// Días para la barra de fechas (relativa a "hoy" = índice 3)
export const dateTabs = [
  { key: '-3', label: 'DOM', day: '30', month: 'AGO' },
  { key: '-2', label: 'LUN', day: '31', month: 'AGO' },
  { key: '-1', label: 'MAR', day: '01', month: 'SEP' },
  { key: '0', label: 'HOY', day: '02', month: 'SEP', today: true },
  { key: '1', label: 'JUE', day: '03', month: 'SEP' },
  { key: '2', label: 'VIE', day: '04', month: 'SEP' },
  { key: '3', label: 'SÁB', day: '05', month: 'SEP' },
]
