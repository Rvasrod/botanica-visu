/* ============================================================
   BotánicaVisu — Modo Detective — Logros
   11 logros definidos con condiciones de desbloqueo
   ============================================================ */

function detectiveAchievementsDefinir() {
  return [
    { id: 'primer_detective',  nombre: 'Primer Detective',    descripcion: 'Completa tu primera especie en Modo Detective',              icono: '🔎', condicion: p => p.totalAcertadas >= 1 },
    { id: 'diez_especies',     nombre: 'Naturalista Novato',  descripcion: 'Completa 10 especies diferentes',                             icono: '🌿', condicion: p => Object.keys(p.especiesCompletadas).length >= 10 },
    { id: 'cincuenta_especies',nombre: 'Botánico Curioso',    descripcion: 'Completa 50 especies diferentes',                             icono: '🌳', condicion: p => Object.keys(p.especiesCompletadas).length >= 50 },
    { id: 'cien_especies',     nombre: 'Experto en Flora',    descripcion: 'Completa 100 especies diferentes',                            icono: '🌲', condicion: p => Object.keys(p.especiesCompletadas).length >= 100 },
    { id: 'coniferas',         nombre: 'Coniferólogo',        descripcion: 'Completa todas las especies del grupo Gimnosperma',           icono: '🎄', condicion: p => {
      const coniferas = especies.filter(e => e.grupo === 'Gimnosperma');
      return coniferas.length > 0 && coniferas.every(e => p.especiesCompletadas[e.id]);
    }},
    { id: 'aromaticas',        nombre: 'Aromático',           descripcion: 'Completa todas las especies aromáticas (Lamiaceae, Apiaceae, etc.)', icono: '🌿', condicion: p => {
      const aromaticaFam = ['Lamiaceae', 'Apiaceae', 'Lauraceae', 'Myrtaceae', 'Pinaceae'];
      return aromaticaFam.some(f => {
        const spp = especies.filter(e => e.familia === f);
        return spp.length > 0 && spp.every(e => p.especiesCompletadas[e.id]);
      });
    }},
    { id: 'gramineas',         nombre: 'Graminólogo',         descripcion: 'Completa todas las especies de la familia Poaceae',            icono: '🌾', condicion: p => {
      const gramineas = especies.filter(e => e.familia === 'Poaceae');
      return gramineas.length > 0 && gramineas.every(e => p.especiesCompletadas[e.id]);
    }},
    { id: 'racha_diez',        nombre: 'Imparable',           descripcion: 'Alcanza una racha de 10 aciertos consecutivos',                icono: '🔥', condicion: p => p.rachaMaxima >= 10 },
    { id: 'racha_veinticinco', nombre: 'Leyenda Viva',        descripcion: 'Alcanza una racha de 25 aciertos consecutivos',                icono: '⚡', condicion: p => p.rachaMaxima >= 25 },
    { id: 'maestro_botanico',  nombre: 'Maestro Botánico',    descripcion: 'Alcanza el nivel máximo de detective',                        icono: '👑', condicion: p => p.nivel >= 5 },
    { id: 'examen_perfecto',   nombre: 'Examen Perfecto',     descripcion: 'Completa un examen sin fallos ni ayudas',                      icono: '💯', condicion: p => p.examenPerfecto === true }
  ];
}

function detectiveAchievementsComprobar(progreso) {
  const definiciones = detectiveAchievementsDefinir();
  const recienDesbloqueados = [];
  definiciones.forEach(def => {
    if (!progreso.logros[def.id] && def.condicion(progreso)) {
      progreso.logros[def.id] = { desbloqueado: true, fecha: Date.now() };
      recienDesbloqueados.push(def);
    }
  });
  return recienDesbloqueados;
}
