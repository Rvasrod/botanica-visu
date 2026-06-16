/* ============================================================
   BotánicaVisu — Modo Detective — Estadísticas
   Calcula métricas a partir del progreso guardado y especies
   ============================================================ */

function detectiveStatsCalcular(progreso) {
  const totalEspecies = especies.length;
  const completadas = Object.keys(progreso.especiesCompletadas).length;
  const pctGlobal = totalEspecies > 0 ? Math.round((completadas / totalEspecies) * 100) : 0;

  const familias = {};
  especies.forEach(e => {
    if (!familias[e.familia]) {
      familias[e.familia] = { total: 0, completadas: 0, especies: [] };
    }
    familias[e.familia].total++;
    familias[e.familia].especies.push(e);
    if (progreso.especiesCompletadas[e.id]) {
      familias[e.familia].completadas++;
    }
  });

  const familiasArray = Object.entries(familias).map(([nombre, data]) => ({
    nombre,
    total: data.total,
    completadas: data.completadas,
    pct: Math.round((data.completadas / data.total) * 100),
    dominada: data.completadas === data.total
  })).sort((a, b) => a.nombre.localeCompare(b.nombre));

  const grupos = {};
  especies.forEach(e => {
    if (!grupos[e.grupo]) grupos[e.grupo] = { total: 0, completadas: 0 };
    grupos[e.grupo].total++;
    if (progreso.especiesCompletadas[e.id]) grupos[e.grupo].completadas++;
  });

  const gruposArray = Object.entries(grupos).map(([nombre, data]) => ({
    nombre,
    total: data.total,
    completadas: data.completadas,
    pct: Math.round((data.completadas / data.total) * 100)
  }));

  const pctAciertos = progreso.totalOportunidades > 0
    ? Math.round((progreso.totalAcertadas / progreso.totalOportunidades) * 100)
    : 0;

  const ultimas5 = [];
  const sesiones = progreso.ultimasSesiones || [];
  const ultimas = sesiones.slice(-5).reverse();
  ultimas.forEach(s => {
    ultimas5.push({
      fecha: new Date(s.fecha).toLocaleDateString('es-ES'),
      aciertos: s.aciertos,
      total: s.total,
      modo: s.modo
    });
  });

  return {
    totalEspecies,
    completadas,
    pctGlobal,
    familias: familiasArray,
    grupos: gruposArray,
    familiasDominadas: familiasArray.filter(f => f.dominada).length,
    totalFamilias: familiasArray.length,
    pctAciertos,
    rachaActual: progreso.rachaActual,
    rachaMaxima: progreso.rachaMaxima,
    nivel: progreso.nivel,
    xp: progreso.xp,
    examenesCompletados: progreso.examenesCompletados || 0,
    ultimas5
  };
}
