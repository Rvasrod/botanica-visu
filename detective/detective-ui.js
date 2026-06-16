/* ============================================================
   BotánicaVisu — Modo Detective — Interfaz de usuario
   Renderiza fases, revelación, estadísticas, informes
   ============================================================ */

function detectiveUIMostrarFase(fase, especie, opciones, modo, progreso, info) {
  const cont = document.getElementById('detectiveGameContent');
  const imagen = document.getElementById('detectiveImage');
  const placeholder = document.getElementById('detectivePlaceholder');

  // Cargar foto aleatoria
  loadFoto(especie, imagen, placeholder);

  const badgeOp = { 1: '1', 2: '2', 3: '3' };
  const faseLabels = {
    1: 'Reconoce el tipo biológico',
    2: 'Identifica el rasgo clave',
    3: 'Determina el nombre científico'
  };
  const preguntas = {
    1: '¿Qué tipo biológico tiene esta especie?',
    2: '¿Cuál es el rasgo clave para identificar esta especie?',
    3: '¿Cuál es su nombre científico?'
  };

  let html = '';

  // Phase header
  html += '<div class="detective-phase-header">';
  html += '<div class="detective-phase-badge">' + badgeOp[fase] + '</div>';
  html += '<div class="detective-phase-label">' + faseLabels[fase] + '</div>';
  if (info && info.puntos !== undefined) {
    html += '<div class="detective-phase-score">+' + info.puntos + ' pts</div>';
  }
  html += '</div>';

  // Timer (if active)
  if (progreso.temporizadorActivo && modo !== 'practica') {
    html += '<div class="detective-timer" id="detectiveTimer">';
    html += '<span>⏱</span>';
    html += '<div class="detective-timer-bar"><div class="detective-timer-fill" id="detectiveTimerFill" style="width:100%"></div></div>';
    html += '<span id="detectiveTimerText">15s</span>';
    html += '</div>';
  }

  // Question
  html += '<p style="font-weight:600;margin-bottom:12px;">' + preguntas[fase] + '</p>';

  // Options
  html += '<div class="options-grid" id="detectiveOptions">';
  opciones.forEach((o, i) => {
    const clean = escaparHTML(o);
    html += '<button class="option-btn" data-idx="' + i + '" onclick="detectiveResponder(this, ' + fase + ', \'' + clean.replace(/'/g, "\\'") + '\')">' + clean + '</button>';
  });
  html += '</div>';

  // Hint button (practice mode)
  if (modo === 'practica') {
    html += '<button class="detective-hint-btn" onclick="detectivePista()">💡 Mostrar pista</button>';
  }

  // Feedback area
  html += '<div id="detectiveFeedback" style="display:none;margin-top:12px;"></div>';

  // Next button
  html += '<button class="btn btn-block" id="detectiveNextBtn" onclick="detectiveSiguiente()" style="display:none;margin-top:12px;">';
  html += fase < 3 ? 'Siguiente fase →' : 'Ver resultado';
  html += '</button>';

  cont.innerHTML = html;

  // Start timer
  if (progreso.temporizadorActivo && modo !== 'practica') {
    detectiveUIIniciarTimer();
  }
}

function detectiveUIRevelacion(especie, resultados, progreso) {
  const cont = document.getElementById('detectiveGameContent');
  const faseAcertadas = resultados.filter(r => r.correcto).length;
  const aciertosTexto = faseAcertadas + '/3 fases';

  let html = '';

  html += '<div class="detective-reveal">';

  // Scientific name
  html += '<div class="cientifico"><i>' + escaparHTML(especie.nombreCientifico) + '</i></div>';

  // Common name
  if (especie.nombreComun) {
    html += '<p style="font-size:1rem;color:var(--text-secondary);margin-bottom:var(--space-2);">' + escaparHTML(especie.nombreComun) + '</p>';
  }

  // Tags
  html += '<div class="tags">';
  html += '<span class="tag">' + escaparHTML(especie.grupo) + '</span>';
  html += '<span class="tag" style="background:#e8e0d8;color:#5a4a3a;">' + escaparHTML(especie.familia) + '</span>';
  if (especie.detective && especie.detective.tipoBiologico) {
    html += '<span class="tag tag-gimno">' + escaparHTML(especie.detective.tipoBiologico) + '</span>';
  }
  html += '</div>';

  // Result summary
  html += '<div style="text-align:center;margin:var(--space-4) 0;">';
  html += '<div class="big-score">' + aciertosTexto + '</div>';
  if (resultados.every(r => r.correcto)) {
    html += '<p style="color:var(--green);font-weight:600;">🎉 ¡Identificación perfecta!</p>';
  } else {
    const fallos = resultados.filter(r => !r.correcto).map(r => 'Fase ' + r.fase);
    html += '<p style="color:var(--text-secondary);">Fallos en: ' + fallos.join(', ') + '</p>';
  }
  html += '</div>';

  // Key feature
  if (especie.detective && especie.detective.rasgoClave) {
    html += '<div class="rasgo-clave">' + escaparHTML(especie.detective.rasgoClave) + '</div>';
  }

  // Characteristics
  if (especie.caracteristicasClave) {
    html += '<div class="caract">' + escaparHTML(especie.caracteristicasClave) + '</div>';
  }

  // Photos
  if (especie.fotos && especie.fotos.length > 0) {
    html += '<div class="fotos-grid">';
    const fotos = barajarArray(especie.fotos).slice(0, 4);
    fotos.forEach(f => {
      html += '<img src="' + f + '" alt="' + escaparHTML(especie.nombreCientifico) + '" onerror="this.style.display=\'none\'">';
    });
    html += '</div>';
  }

  html += '</div>';

  // Next / Exit button
  html += '<div class="detective-actions" style="margin-top:var(--space-5);display:flex;gap:var(--space-3);">';
  html += '<button class="btn btn-green" onclick="detectiveContinuar()" style="flex:1">Siguiente especie →</button>';
  html += '<button class="btn btn-outline btn-sm" onclick="detectiveVolverHome()">Salir</button>';
  html += '</div>';

  cont.innerHTML = html;
}

function detectiveUIEstadisticas(progreso) {
  const stats = detectiveStatsCalcular(progreso);
  const logros = detectiveAchievementsDefinir();

  document.getElementById('detectiveHome').style.display = 'none';
  document.getElementById('detectiveStats').style.display = 'block';
  document.getElementById('detectiveGame').style.display = 'none';

  const cont = document.getElementById('detectiveStatsContent');
  let html = '';

  // Nivel y XP ring
  const prog = detectiveXPProgreso(progreso.xp, progreso.nivel);
  html += '<div class="detective-ring" style="--pct:' + prog.pct + '%;">';
  html += '<div class="detective-ring-inner">';
  html += '<div class="num">Nv.' + progreso.nivel + '</div>';
  html += '<div class="lbl">' + progreso.xp + ' XP</div>';
  html += '</div></div>';

  // XP progress
  html += '<div class="detective-progress">';
  html += '<div class="bar"><div class="fill" style="width:' + prog.pct + '%"></div></div>';
  html += '<div class="lbl">' + prog.actual + ' / ' + prog.necesario + ' XP para nivel ' + (progreso.nivel + 1) + '</div>';
  html += '</div>';

  // Stats rows
  html += '<div class="detective-stats">';
  html += '<div class="stat-row"><span class="stat-label">Especies completadas</span><span class="stat-value">' + stats.completadas + ' / ' + stats.totalEspecies + ' (' + stats.pctGlobal + '%)</span></div>';
  html += '<div class="stat-row"><span class="stat-label">Familias dominadas</span><span class="stat-value">' + stats.familiasDominadas + ' / ' + stats.totalFamilias + '</span></div>';
  html += '<div class="stat-row"><span class="stat-label">Precisión global</span><span class="stat-value">' + stats.pctAciertos + '%</span></div>';
  html += '<div class="stat-row"><span class="stat-label">Racha máxima</span><span class="stat-value">🔥 ' + stats.rachaMaxima + '</span></div>';
  html += '<div class="stat-row"><span class="stat-label">Exámenes completados</span><span class="stat-value">' + stats.examenesCompletados + '</span></div>';
  html += '</div>';

  // Families
  html += '<h3 style="margin-top:var(--space-5);margin-bottom:var(--space-2);">Familias</h3>';
  html += '<div class="detective-family-grid">';
  stats.familias.forEach(f => {
    html += '<div class="detective-family-item' + (f.dominada ? ' mastered' : '') + '">';
    html += '<span class="name">' + f.nombre + '</span>';
    html += '<span class="pct">' + f.completadas + '/' + f.total + '</span>';
    html += '</div>';
  });
  html += '</div>';

  // Achievements
  html += '<h3 style="margin-top:var(--space-5);margin-bottom:var(--space-2);">Logros</h3>';
  html += '<div class="detective-achievements">';
  logros.forEach(l => {
    const unlocked = progreso.logros[l.id];
    html += '<div class="detective-achievement' + (unlocked ? ' unlocked' : '') + '">';
    html += '<span class="ach-icon">' + l.icono + '</span>';
    html += '<div class="ach-name">' + l.nombre + '</div>';
    html += '<div class="ach-desc">' + l.descripcion + '</div>';
    html += '</div>';
  });
  html += '</div>';

  html += '<button class="btn btn-block btn-green" style="margin-top:var(--space-5);" onclick="detectiveVolverHome()">Volver</button>';

  cont.innerHTML = html;
}

function detectiveUIInformeExamen(resultados, progreso) {
  document.getElementById('detectiveHome').style.display = 'none';
  document.getElementById('detectiveStats').style.display = 'none';
  document.getElementById('detectiveGame').style.display = 'block';

  const cont = document.getElementById('detectiveGameContent');
  const aciertos = resultados.filter(r => r.acertadas === 3).length;
  const total = resultados.length;
  const pct = total > 0 ? Math.round((aciertos / total) * 100) : 0;

  let html = '<div class="detective-exam-report">';

  html += '<div class="summary">';
  html += '<div class="big-num">' + aciertos + ' / ' + total + '</div>';
  html += '<div class="sub">' + pct + '% de especies identificadas correctamente</div>';
  html += '</div>';

  // XP earned
  const xpGanada = resultados.reduce((s, r) => s + (r.xp || 0), 0);
  html += '<div class="detective-stats">';
  html += '<div class="stat-row"><span class="stat-label">XP ganada</span><span class="stat-value" style="color:var(--gold);">+' + xpGanada + ' XP</span></div>';
  html += '<div class="stat-row"><span class="stat-label">Tiempo total</span><span class="stat-value">' + Math.round((progreso.tiempoExamen || 0) / 1000) + 's</span></div>';
  html += '</div>';

  // Families breakdown
  const famStats = {};
  resultados.forEach(r => {
    if (!famStats[r.especie.familia]) famStats[r.especie.familia] = { total: 0, correctas: 0 };
    famStats[r.especie.familia].total++;
    if (r.acertadas === 3) famStats[r.especie.familia].correctas++;
  });

  html += '<div class="families">';
  html += '<h4>Rendimiento por familia</h4>';
  Object.entries(famStats).sort((a, b) => a[0].localeCompare(b[0])).forEach(([familia, data]) => {
    const pctFam = Math.round((data.correctas / data.total) * 100);
    html += '<span class="fam-chip ' + (pctFam >= 70 ? 'good' : 'bad') + '">' + familia + ' ' + data.correctas + '/' + data.total + '</span>';
  });
  html += '</div>';

  // List of results
  html += '<h4 style="margin-top:var(--space-4);">Desglose</h4>';
  resultados.forEach((r, i) => {
    const todasCorrectas = r.acertadas === 3;
    html += '<div class="card" style="margin-bottom:var(--space-3);padding:var(--space-4);">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;">';
    html += '<strong>' + (i + 1) + '. <i>' + r.especie.nombreCientifico + '</i></strong>';
    html += '<span style="color:' + (todasCorrectas ? 'var(--green)' : 'var(--red)') + ';font-weight:700;">' + r.acertadas + '/3</span>';
    html += '</div>';
    if (!todasCorrectas) {
      html += '<div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px;">Fallos: ';
      const fases = ['Tipo biológico', 'Rasgo clave', 'Nombre científico'];
      r.acertadasFase.forEach((ac, fi) => {
        if (!ac) html += '<span style="color:var(--red);">❌ ' + fases[fi] + ' </span>';
      });
      html += '</div>';
    }
    html += '</div>';
  });

  html += '<div class="detective-actions" style="margin-top:var(--space-5);display:flex;gap:var(--space-3);">';
  html += '<button class="btn btn-green" onclick="detectiveIniciarExamen(0)" style="flex:1">Repetir examen</button>';
  html += '<button class="btn btn-outline" onclick="detectiveVolverHome()">Volver al inicio</button>';
  html += '</div>';

  html += '</div>';
  cont.innerHTML = html;
}

function detectiveUIMostrarLogro(logro) {
  const overlay = document.createElement('div');
  overlay.className = 'score-overlay active';
  overlay.id = 'detectiveLogroOverlay';
  overlay.innerHTML = '<div class="score-modal" style="text-align:center;">' +
    '<div style="font-size:3rem;margin-bottom:var(--space-3);">' + logro.icono + '</div>' +
    '<h2>¡Logro desbloqueado!</h2>' +
    '<p style="font-weight:600;">' + logro.nombre + '</p>' +
    '<p style="color:var(--text-secondary);margin-bottom:var(--space-4);">' + logro.descripcion + '</p>' +
    '<button class="btn btn-green btn-block" onclick="detectiveCerrarLogro()">¡Genial!</button>' +
    '</div>';
  document.body.appendChild(overlay);
}

function detectiveCerrarLogro() {
  const el = document.getElementById('detectiveLogroOverlay');
  if (el) el.remove();
}

// ---- TIMER ----
let detectiveTimerInterval = null;
let detectiveTiempoRestante = 0;
let detectiveTimerCallback = null;

function detectiveUIIniciarTimer() {
  detectiveUIlimpiarTimer();
  const fill = document.getElementById('detectiveTimerFill');
  const text = document.getElementById('detectiveTimerText');
  if (!fill || !text) return;

  detectiveTiempoRestante = 15;
  fill.style.width = '100%';
  fill.className = 'detective-timer-fill';
  text.textContent = '15s';

  detectiveTimerInterval = setInterval(() => {
    detectiveTiempoRestante -= 0.1;
    if (detectiveTiempoRestante <= 0) {
      detectiveTiempoRestante = 0;
      detectiveUIlimpiarTimer();
      if (detectiveTimerCallback) detectiveTimerCallback();
      return;
    }
    const pct = (detectiveTiempoRestante / 15) * 100;
    fill.style.width = pct + '%';
    if (pct < 50) fill.className = 'detective-timer-fill warning';
    if (pct < 25) fill.className = 'detective-timer-fill danger';
    text.textContent = Math.ceil(detectiveTiempoRestante) + 's';
  }, 100);
}

function detectiveUIlimpiarTimer() {
  if (detectiveTimerInterval) {
    clearInterval(detectiveTimerInterval);
    detectiveTimerInterval = null;
  }
}

// ---- HELPERS ----
function escaparHTML(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function barajarArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
