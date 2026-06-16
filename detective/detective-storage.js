/* ============================================================
   BotánicaVisu — Modo Detective — Almacenamiento localStorage
   Clave única: "botanicaVisu_detective_progreso"
   ============================================================ */

const DETECTIVE_STORAGE_KEY = 'botanicaVisu_detective_progreso';

function detectiveStorageGetDefault() {
  return {
    xp: 0,
    nivel: 1,
    modo: 'experto',
    especiesCompletadas: {},
    rachaActual: 0,
    rachaMaxima: 0,
    totalAcertadas: 0,
    totalOportunidades: 0,
    examenesCompletados: 0,
    familiasCompletadas: {},
    logros: {},
    primeraVez: true,
    practicaActiva: false,
    temporizadorActivo: true,
    ultimaSesion: null
  };
}

function detectiveStorageCargar() {
  try {
    const raw = localStorage.getItem(DETECTIVE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const def = detectiveStorageGetDefault();
      return { ...def, ...parsed };
    }
  } catch (e) {
    console.warn('Error loading detective progress:', e);
  }
  return detectiveStorageGetDefault();
}

function detectiveStorageGuardar(progreso) {
  try {
    progreso.ultimaSesion = Date.now();
    localStorage.setItem(DETECTIVE_STORAGE_KEY, JSON.stringify(progreso));
  } catch (e) {
    console.warn('Error saving detective progress:', e);
  }
}

function detectiveStorageResetear() {
  try {
    localStorage.removeItem(DETECTIVE_STORAGE_KEY);
  } catch (e) {}
}
