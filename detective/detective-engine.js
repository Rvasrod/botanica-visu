/* ============================================================
   BotánicaVisu — Modo Detective — Motor de juego
   Selección inteligente, generación de opciones, puntuación, XP, niveles
   ============================================================ */

// ---- NIVELES Y XP ----
function detectiveUmbralNivel(n) {
  if (n <= 1) return 0;
  if (n === 2) return 100;
  if (n === 3) return 250;
  if (n === 4) return 500;
  let acum = 1000;
  for (let i = 5; i <= n; i++) {
    acum += 500 + (i - 4) * 250;
  }
  return acum;
}

function detectiveNivelDesdeXP(xp) {
  let nivel = 1;
  while (detectiveUmbralNivel(nivel + 1) <= xp) nivel++;
  return nivel;
}

function detectiveXPNecesaria(nivel) {
  return detectiveUmbralNivel(nivel + 1) - detectiveUmbralNivel(nivel);
}

function detectiveXPProgreso(xp, nivel) {
  const base = detectiveUmbralNivel(nivel);
  const techo = detectiveUmbralNivel(nivel + 1) || 1;
  return { actual: xp - base, necesario: techo - base, pct: Math.round(((xp - base) / (techo - base)) * 100) };
}

// ---- DIFICULTAD ----
function detectiveEtiquetaDificultad(dificultad) {
  if (dificultad === 1) return 'baja';
  if (dificultad === 2) return 'media';
  if (dificultad === 3) return 'alta';
  return 'baja';
}

// ---- SELECCIÓN INTELIGENTE ----
function detectiveSeleccionarEspecie(progreso, modo) {
  const completadas = Object.keys(progreso.especiesCompletadas);
  const pendientes = especies.filter(e => !completadas.includes(e.id));
  const dificultad = progreso.nivel <= 2 ? 'baja' : progreso.nivel <= 4 ? 'media' : 'alta';

  // Preferir especies no completadas, con dificultad acorde al nivel
  let candidatas = pendientes.length > 0 ? pendientes : [...especies];

  if (modo !== 'examen' && pendientes.length > 0) {
    // Filtrar por dificultad adecuada
    const porDificultad = candidatas.filter(e => e.detective && detectiveEtiquetaDificultad(e.detective.dificultad) === dificultad);
    if (porDificultad.length > 0) candidatas = porDificultad;
    // Priorizar familias menos completadas
    const familiaPct = {};
    especies.forEach(e => {
      if (!familiaPct[e.familia]) {
        familiaPct[e.familia] = { total: 0, completadas: 0 };
      }
      familiaPct[e.familia].total++;
      if (progreso.especiesCompletadas[e.id]) familiaPct[e.familia].completadas++;
    });
    candidatas.sort((a, b) => {
      const pctA = familiaPct[a.familia].completadas / familiaPct[a.familia].total;
      const pctB = familiaPct[b.familia].completadas / familiaPct[b.familia].total;
      return pctA - pctB;
    });
  }

  // Penalizar las vistas recientemente
  const recientes = progreso.ultimasEspecies || [];
  const noRecientes = candidatas.filter(e => !recientes.includes(e.id));
  if (noRecientes.length > 0) candidatas = noRecientes;

  const elegida = candidatas[Math.floor(Math.random() * Math.min(candidatas.length, 10))] || especies[Math.floor(Math.random() * especies.length)];

  // Actualizar lista reciente
  if (!progreso.ultimasEspecies) progreso.ultimasEspecies = [];
  progreso.ultimasEspecies.push(elegida.id);
  if (progreso.ultimasEspecies.length > 8) progreso.ultimasEspecies.shift();

  return elegida;
}

// ---- GENERACIÓN DE OPCIONES ----
function detectiveGenerarOpciones(fase, especie, modo) {
  const detective = especie.detective || {};

  if (fase === 1) {
    // Fase 1: tipo biológico
    const correcto = detective.tipoBiologico || '';
    const pool = ['Árbol', 'Arbusto', 'Hierba', 'Trepadora', 'Acuática', 'Suculenta', 'Helecho', 'Musgo'];
    const malos = pool.filter(t => t !== correcto);
    const opciones = [correcto, ...tomarAleatorios(malos, 3)];
    return barajar(opciones);
  }

  if (fase === 2) {
    // Fase 2: rasgoClave + distractores de otras especies
    const correcto = detective.rasgoClave || '';
    const otrosRasgos = especies
      .filter(e => e.id !== especie.id && e.detective && e.detective.rasgoClave && e.detective.rasgoClave !== correcto)
      .map(e => e.detective.rasgoClave);
    const malos = tomarAleatorios(otrosRasgos, 3);
    while (malos.length < 3) {
      malos.push('Rasgo no disponible');
    }
    return barajar([correcto, ...malos]);
  }

  if (fase === 3) {
    // Fase 3: nombre científico
    const correcto = especie.nombreCientifico;
    let malos = [];
    if (modo === 'experto') {
      // Expert: elige otras especies de la misma familia como distractores
      const mismaFamilia = especies.filter(e => e.familia === especie.familia && e.id !== especie.id);
      malos = mismaFamilia.length >= 3
        ? tomarAleatorios(mismaFamilia, 3).map(e => e.nombreCientifico)
        : tomarAleatorios(especies.filter(e => e.id !== especie.id), 3).map(e => e.nombreCientifico);
    } else {
      // Practice: mezcla de otras familias
      malos = tomarAleatorios(especies.filter(e => e.id !== especie.id), 3).map(e => e.nombreCientifico);
    }
    return barajar([correcto, ...malos]);
  }

  return [];
}

// ---- PUNTUACIÓN ----
function detectiveCalcularPuntuacion(fase, correcto, modo, tiempoMs) {
  let base = 0;
  if (fase === 1) base = 10;
  else if (fase === 2) base = 20;
  else base = 30;

  if (!correcto) {
    if (modo === 'practica') return 0; // Practice: sin penalización
    return Math.max(0, base - 15); // Expert/Exam: penalización parcial
  }

  // Bonificación por tiempo (máximo +50%)
  const tiempoMax = 15000;
  const bonusTiempo = Math.max(0, Math.min(1, 1 - (tiempoMs || 0) / tiempoMax));
  const conTiempo = Math.round(base * (1 + bonusTiempo * 0.5));

  return conTiempo;
}

function detectiveCalcularXP(especie, fase, aciertos, modo) {
  // XP based on difficulty and performance
  const dif = especie.detective && especie.detective.dificultad;
  const etiqueta = detectiveEtiquetaDificultad(dif);
  const multDif = etiqueta === 'alta' ? 1.5 : etiqueta === 'media' ? 1.2 : 1.0;
  const multModo = modo === 'examen' ? 1.3 : modo === 'practica' ? 0.7 : 1.0;
  const base = fase === 3 ? 15 : fase === 2 ? 10 : 5;
  const aciertosFase = aciertos != null ? aciertos : 3;
  const multAciertos = 0.5 + (aciertosFase / 6);
  return Math.round(base * multDif * multModo * multAciertos);
}

// ---- UTILIDADES ----
function barajar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function tomarAleatorios(arr, n) {
  return barajar(arr).slice(0, n);
}
