/* ============================================================
   BotánicaVisu — Modo Detective — Punto de entrada
   Orquestación: flujo de juego, modos, navegación
   ============================================================ */

// ---- Estado local ----
let dProgreso = null;
let dEspecieActual = null;
let dFaseActual = 1;
let dOpcionesActuales = [];
let dResultados = [];
let dModoActual = 'experto';
let dExamenPreguntas = [];
let dExamenIdx = 0;
let dExamenResultados = [];
let dTiempoInicioFase = 0;
let dPistaUsada = false;
let dTiempoExamenInicio = 0;

// ---- Inicio ----
function detectiveIniciar() {
  dProgreso = detectiveStorageCargar();
  dModoActual = dProgreso.modo || 'experto';
  dPistaUsada = false;

  // Si primera vez, mostrar tutorial rápido
  if (dProgreso.primeraVez) {
    dProgreso.primeraVez = false;
    detectiveStorageGuardar(dProgreso);
  }

  document.getElementById('screenDetective').classList.add('active');
  document.querySelectorAll('.screen').forEach(s => {
    if (s.id !== 'screenDetective') s.classList.remove('active');
  });

  // Resetear vistas
  document.getElementById('detectiveHome').style.display = 'block';
  document.getElementById('detectiveStats').style.display = 'none';
  document.getElementById('detectiveGame').style.display = 'none';

  detectiveUIActualizarHome();
}

function detectiveVolverHome() {
  detectiveUIlimpiarTimer();
  document.getElementById('detectiveHome').style.display = 'block';
  document.getElementById('detectiveStats').style.display = 'none';
  document.getElementById('detectiveGame').style.display = 'none';
  dExamenPreguntas = [];
  dExamenIdx = 0;
  dExamenResultados = [];
  dResultados = [];
  dTiempoExamenInicio = 0;
  detectiveUIActualizarHome();
}

function detectiveUIActualizarHome() {
  const stats = detectiveStatsCalcular(dProgreso);
  document.getElementById('detectiveModeIndicator').textContent =
    dModoActual.charAt(0).toUpperCase() + dModoActual.slice(1);

  const prog = detectiveXPProgreso(dProgreso.xp, dProgreso.nivel);
  document.getElementById('detectiveHomeLevel').textContent = 'Nv. ' + dProgreso.nivel;
  document.getElementById('detectiveHomeXP').textContent = dProgreso.xp + ' XP';
  document.getElementById('detectiveHomeEspecies').textContent = stats.completadas + ' / ' + stats.totalEspecies;

  // Mode cards active highlight
  document.querySelectorAll('.detective-mode-card').forEach(card => {
    const modo = card.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
    card.classList.toggle('active-mode', modo === dModoActual);
  });

  // Toggles
  document.getElementById('detectiveToggleTemporizador').classList.toggle('active', dProgreso.temporizadorActivo);
}

// ---- Modos ----
function detectiveSeleccionarModo(modo) {
  dModoActual = modo;
  dProgreso.modo = modo;
  detectiveStorageGuardar(dProgreso);
  detectiveUIActualizarHome();

  if (modo === 'examen') {
    detectiveMostrarSelectorExamen();
  } else {
    detectiveIniciarPartida();
  }
}

function detectiveMostrarSelectorExamen() {
  document.getElementById('detectiveHome').style.display = 'none';
  const cont = document.getElementById('detectiveGameContent');
  cont.innerHTML = '<h2>Examen Detective</h2>' +
    '<p style="color:var(--text-secondary);margin-bottom:var(--space-4);">Elige cuántas especies incluir en el examen. Debes identificar las 3 fases correctamente.</p>' +
    '<div class="detective-exam-select" id="detectiveExamSelect">' +
    '<button onclick="detectiveSeleccionarCantidadExamen(this, 5)" class="selected">5</button>' +
    '<button onclick="detectiveSeleccionarCantidadExamen(this, 10)">10</button>' +
    '<button onclick="detectiveSeleccionarCantidadExamen(this, 15)">15</button>' +
    '<button onclick="detectiveSeleccionarCantidadExamen(this, 20)">20</button>' +
    '</div>' +
    '<div style="margin-top:var(--space-4);display:flex;gap:var(--space-3);" id="detectiveExamActions">' +
    '<button class="btn btn-green btn-block" onclick="detectiveIniciarExamen(0)">Comenzar examen</button>' +
    '<button class="btn btn-outline btn-sm" onclick="detectiveVolverHome()">Cancelar</button>' +
    '</div>';
  document.getElementById('detectiveGame').style.display = 'block';
}

function detectiveSeleccionarCantidadExamen(btn, cantidad) {
  document.querySelectorAll('#detectiveExamSelect button').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function detectiveIniciarExamen(cantidad) {
  if (cantidad === 0) cantidad = parseInt(document.querySelector('#detectiveExamSelect .selected')?.textContent || 5);
  dExamenPreguntas = barajarArray([...especies]).slice(0, cantidad || 5);
  dExamenIdx = 0;
  dExamenResultados = [];
  dResultados = [];
  dModoActual = 'examen';
  dTiempoExamenInicio = Date.now();
  detectiveSiguientePreguntaExamen();
}

function detectiveSiguientePreguntaExamen() {
  if (dExamenIdx >= dExamenPreguntas.length) {
    detectiveFinalizarExamen();
    return;
  }
  dPistaUsada = false;
  const especie = dExamenPreguntas[dExamenIdx];
  detectiveIniciarFases(especie, 'examen');
}

// ---- Partida normal ----
function detectiveIniciarPartida() {
  const especie = detectiveSeleccionarEspecie(dProgreso, dModoActual);
  detectiveIniciarFases(especie, dModoActual);
}

function detectiveIniciarFases(especie, modo) {
  dEspecieActual = especie;
  dFaseActual = 1;
  dResultados = [];
  dPistaUsada = false;

  document.getElementById('detectiveHome').style.display = 'none';
  document.getElementById('detectiveStats').style.display = 'none';
  document.getElementById('detectiveGame').style.display = 'block';

  detectiveMostrarFase(1);
}

function detectiveMostrarFase(fase) {
  dFaseActual = fase;
  dOpcionesActuales = detectiveGenerarOpciones(fase, dEspecieActual, dModoActual);
  dTiempoInicioFase = Date.now();

  detectiveUIMostrarFase(fase, dEspecieActual, dOpcionesActuales, dModoActual, dProgreso, null);
}

// ---- Respuesta ----
function detectiveResponder(btn, fase, respuesta) {
  const btns = document.querySelectorAll('#detectiveOptions .option-btn');
  if (btns[0] && btns[0].disabled) return;

  const detective = dEspecieActual.detective || {};
  let correcta = '';
  if (fase === 1) correcta = detective.tipoBiologico || '';
  else if (fase === 2) correcta = detective.rasgoClave || '';
  else correcta = dEspecieActual.nombreCientifico;

  const esCorrecto = respuesta === correcta;
  const tiempo = Date.now() - dTiempoInicioFase;
  const puntos = detectiveCalcularPuntuacion(fase, esCorrecto, dModoActual, tiempo);

  dResultados.push({ fase, correcto: esCorrecto, respuesta, correcta, puntos, tiempo });

  // Deshabilitar y marcar botones
  btns.forEach(b => {
    b.disabled = true;
    const txt = b.textContent;
    if (txt === correcta) b.classList.add('correct');
    if (b === btn && !esCorrecto) b.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('detectiveFeedback');
  fb.style.display = 'block';
  if (esCorrecto) {
    fb.innerHTML = '<p style="color:var(--green);font-weight:600;">✅ ¡Correcto! +' + puntos + ' pts</p>';
  } else {
    fb.innerHTML = '<p style="color:var(--red);font-weight:600;">❌ Incorrecto</p>' +
      '<p style="font-size:0.9rem;color:var(--text-light);margin-top:4px;"><i>' + correcta + '</i></p>';
  }

  // Si es modo práctica y fase 3 incorrecta, mostrar la respuesta
  if (dModoActual === 'practica' && fase === 3 && !esCorrecto) {
    fb.innerHTML += '<p style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">' +
      escaparHTML(dEspecieActual.caracteristicasClave) + '</p>';
  }

  // Next button
  const nextBtn = document.getElementById('detectiveNextBtn');
  nextBtn.style.display = 'block';
  if (fase < 3) {
    nextBtn.textContent = 'Siguiente fase →';
  } else {
    nextBtn.textContent = 'Ver resultado';
  }

  detectiveUIlimpiarTimer();
}

function detectiveSiguiente() {
  if (dFaseActual < 3) {
    detectiveMostrarFase(dFaseActual + 1);
  } else {
    detectiveFinalizarEspecie();
  }
}

// ---- Pista (modo práctica) ----
function detectivePista() {
  if (!dEspecieActual.detective) return;
  const fb = document.getElementById('detectiveFeedback');
  fb.style.display = 'block';
  const pasoKey = 'paso' + dFaseActual;
  let textoPista = '';
  if (dFaseActual <= 2) {
    textoPista = dEspecieActual.detective[pasoKey] || 'No disponible';
  } else {
    textoPista = 'El rasgo clave de esta especie es: <strong>' + escaparHTML(dEspecieActual.detective.rasgoClave || 'No disponible') + '</strong>';
  }
  fb.innerHTML = '<p style="color:var(--gold);font-weight:600;">💡 Pista activada</p>' +
    '<p style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">' + textoPista + '</p>';
  dPistaUsada = true;
}

// ---- Finalización de especie ----
function detectiveFinalizarEspecie() {
  const acertadas = dResultados.filter(r => r.correcto).length;
  const puntos = dResultados.reduce((s, r) => s + (r.puntos || 0), 0);
  const xp = detectiveCalcularXP(dEspecieActual, 3, acertadas, dModoActual);

  // Actualizar progreso
  const id = dEspecieActual.id;
  if (!dProgreso.especiesCompletadas[id] || dProgreso.especiesCompletadas[id] < acertadas) {
    dProgreso.especiesCompletadas[id] = acertadas;
  }

  dProgreso.xp += xp;
  dProgreso.nivel = detectiveNivelDesdeXP(dProgreso.xp);
  dProgreso.totalAcertadas += acertadas;
  dProgreso.totalOportunidades += 3;

  if (acertadas === 3) {
    dProgreso.rachaActual++;
    if (dProgreso.rachaActual > dProgreso.rachaMaxima) {
      dProgreso.rachaMaxima = dProgreso.rachaActual;
    }
  } else {
    dProgreso.rachaActual = 0;
  }

  // Familia completada
  if (acertadas === 3) {
    const familia = dEspecieActual.familia;
    if (!dProgreso.familiasCompletadas[familia]) dProgreso.familiasCompletadas[familia] = 0;
    dProgreso.familiasCompletadas[familia]++;
  }

  // Acumular resultado para examen
  if (dModoActual === 'examen') {
    const acertadasFase = dResultados.map(r => r.correcto);
    dExamenResultados.push({ especie: dEspecieActual, acertadas, acertadasFase, xp });
  }

  // Comprobar logros
  const nuevosLogros = detectiveAchievementsComprobar(dProgreso);

  detectiveStorageGuardar(dProgreso);

  // Mostrar revelación
  detectiveUIRevelacion(dEspecieActual, dResultados, dProgreso);

  // Mostrar logros nuevos con retardo
  if (nuevosLogros.length > 0) {
    setTimeout(() => {
      nuevosLogros.forEach(l => detectiveUIMostrarLogro(l));
    }, 500);
  }
}

// ---- Continuar ----
function detectiveContinuar() {
  if (dModoActual === 'examen') {
    dExamenIdx++;
    detectiveSiguientePreguntaExamen();
  } else {
    detectiveIniciarPartida();
  }
}

// ---- Finalizar examen ----
function detectiveFinalizarExamen() {
  dProgreso.examenesCompletados = (dProgreso.examenesCompletados || 0) + 1;

  // Comprobar examen perfecto
  const todoCorrecto = dExamenResultados.every(r => r.acertadas === 3);
  if (todoCorrecto) dProgreso.examenPerfecto = true;

  detectiveStorageGuardar(dProgreso);

  const nuevosLogros = detectiveAchievementsComprobar(dProgreso);

  dProgreso.tiempoExamen = Date.now() - dTiempoExamenInicio;

  detectiveUIInformeExamen(dExamenResultados, dProgreso);

  if (nuevosLogros.length > 0) {
    setTimeout(() => {
      nuevosLogros.forEach(l => detectiveUIMostrarLogro(l));
    }, 500);
  }
}

// ---- Toggles ----
function detectiveToggleTemporizador() {
  dProgreso.temporizadorActivo = !dProgreso.temporizadorActivo;
  detectiveStorageGuardar(dProgreso);
  detectiveUIActualizarHome();
}

// ---- Navegación ----
function detectiveIrAEstadisticas() {
  detectiveUIEstadisticas(dProgreso);
}

// ---- Salir ----
function detectiveSalir() {
  detectiveUIlimpiarTimer();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screenHome').classList.add('active');
  goHome();
}

// ---- Evento personalizado para timer expirado ----
document.addEventListener('detective:timerEnd', function () {
  // Si el timer expira, marcar como incorrecta la fase actual
  const btns = document.querySelectorAll('#detectiveOptions .option-btn');
  if (btns.length > 0 && !btns[0].disabled) {
    // Elegir la primera opción no deshabilitada (simular respuesta incorrecta)
    const correcta = dFaseActual === 1
      ? (dEspecieActual.detective?.tipoBiologico || '')
      : dFaseActual === 2
        ? (dEspecieActual.detective?.rasgoClave || '')
        : dEspecieActual.nombreCientifico;
    // Simular click en una respuesta incorrecta
    let respondido = false;
    btns.forEach(b => {
      if (!respondido && b.textContent !== correcta && !b.disabled) {
        detectiveResponder(b, dFaseActual, b.textContent);
        respondido = true;
      }
    });
    if (!respondido) {
      // Todas son correctas o todas deshabilitadas, responder con la primera
      detectiveResponder(btns[0], dFaseActual, btns[0].textContent);
    }
  }
});

// Inicializar detectiveTimerCallback
detectiveTimerCallback = function detectiveTimerEnd() {
  const evt = new CustomEvent('detective:timerEnd');
  document.dispatchEvent(evt);
};
