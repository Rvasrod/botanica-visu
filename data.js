const especies = [
  {
    id: "cupressus-sempervirens",
    nombreCientifico: "Cupressus sempervirens",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Árbol perenne de porte columnar, hojas escuamiformes opuestas, gálbulos esféricos de 2-3 cm, ramillas cubiertas de escamas",
    fotos: ["img/cupressaceae/cupressus-sempervirens-1.jpg", "img/cupressaceae/cupressus-sempervirens-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de porte columnar. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas escuamiformes opuestas, gálbulos esféricos de 2-3 cm. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: ramillas cubiertas de escamas. Recordando también que árbol perenne de porte columnar, hojas escuamiformes opuestas, gálbulos esféricos de 2-3 cm, ¿qué especie exacta es?",
      rasgoClave: "Hojas escuamiformes opuestas",
      distractores: ["Pinus halepensis", "Pinus pinaster", "Pinus pinea"],
      dificultad: 1
    }
  },
  {
    id: "juniperus-communis",
    nombreCientifico: "Juniperus communis",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Arbusto o pequeño árbol, hojas aciculares en verticilos de 3 con banda estomática blanca, gálbulos azulados carnosos (enebrinas)",
    fotos: ["img/cupressaceae/juniperus-communis-1.jpg", "img/cupressaceae/juniperus-communis-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Arbusto o pequeño árbol. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aciculares en verticilos de 3 con banda estomática blanca, gálbulos azulados carnosos (enebrinas). ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: gálbulos azulados carnosos (enebrinas). Recordando también que arbusto o pequeño árbol, hojas aciculares en verticilos de 3 con banda estomática blanca, ¿qué especie exacta es?",
      rasgoClave: "Hojas aciculares en verticilos de 3 con banda estomática blanca",
      distractores: ["Pinus halepensis", "Pinus pinaster", "Pinus pinea"],
      dificultad: 1
    }
  },
  {
    id: "juniperus-oxycedrus",
    nombreCientifico: "Juniperus oxycedrus",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Arbusto o arbolito, hojas aciculares punzantes con dos bandas estomáticas blancas, gálbulos rojizos al madurar",
    fotos: ["img/cupressaceae/juniperus-oxycedrus-1.jpg", "img/cupressaceae/juniperus-oxycedrus-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Arbusto o arbolito. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aciculares punzantes con dos bandas estomáticas blancas, gálbulos rojizos al madurar. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: gálbulos rojizos al madurar. Recordando también que arbusto o arbolito, hojas aciculares punzantes con dos bandas estomáticas blancas, ¿qué especie exacta es?",
      rasgoClave: "Hojas aciculares punzantes con dos bandas estomáticas blancas",
      distractores: ["Abies alba", "Abies pinsapo", "Cedrus atlantica"],
      dificultad: 1
    }
  },
  {
    id: "abies-alba",
    nombreCientifico: "Abies alba",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Gran árbol de hoja perenne, acículas planas con dos bandas estomáticas blancas en el envés, piñas erectas que se deshacen en la madurez",
    fotos: ["img/pinaceae/abies-alba-1.jpg", "img/pinaceae/abies-alba-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Gran árbol de hoja perenne. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas planas con dos bandas estomáticas blancas en el envés, piñas erectas que se deshacen en la madurez. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: piñas erectas que se deshacen en la madurez. Recordando también que gran árbol de hoja perenne, acículas planas con dos bandas estomáticas blancas en el envés, ¿qué especie exacta es?",
      rasgoClave: "Gran árbol de hoja perenne",
      distractores: ["Cedrus atlantica", "Pinus halepensis", "Pinus pinaster"],
      dificultad: 1
    }
  },
  {
    id: "abies-pinsapo",
    nombreCientifico: "Abies pinsapo",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Árbol endémico de Sierras de Málaga y Cádiz, acículas rígidas y punzantes dispuestas radialmente, piñas cilíndricas erectas",
    fotos: ["img/pinaceae/abies-pinsapo-1.jpg", "img/pinaceae/abies-pinsapo-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol endémico de Sierras de Málaga y Cádiz. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas rígidas y punzantes dispuestas radialmente, piñas cilíndricas erectas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: piñas cilíndricas erectas. Recordando también que árbol endémico de sierras de málaga y cádiz, acículas rígidas y punzantes dispuestas radialmente, ¿qué especie exacta es?",
      rasgoClave: "Acículas rígidas y punzantes dispuestas radialmente",
      distractores: ["Pinus pinaster", "Pinus pinea", "Abies alba"],
      dificultad: 1
    }
  },
  {
    id: "cedrus-atlantica",
    nombreCientifico: "Cedrus atlantica",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Gran árbol de porte cónico, acículas en fascículos sobre braquiblastos, piñas erectas que se deshacen, coloración verde-azulada",
    fotos: ["img/pinaceae/cedrus-atlantica-1.jpg", "img/pinaceae/cedrus-atlantica-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Gran árbol de porte cónico. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas en fascículos sobre braquiblastos, piñas erectas que se deshacen. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: coloración verde-azulada. Recordando también que gran árbol de porte cónico, acículas en fascículos sobre braquiblastos, piñas erectas que se deshacen, ¿qué especie exacta es?",
      rasgoClave: "Acículas en fascículos sobre braquiblastos",
      distractores: ["Abies pinsapo", "Pinus halepensis", "Pinus pinaster"],
      dificultad: 1
    }
  },
  {
    id: "pinus-halepensis",
    nombreCientifico: "Pinus halepensis",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino mediterráneo de porte irregular, acículas en pares de 6-15 cm, piñas ovoideas de 5-12 cm, corteza gris plateada",
    fotos: ["img/pinaceae/pinus-halepensis-1.jpg", "img/pinaceae/pinus-halepensis-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Pino mediterráneo de porte irregular. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas en pares de 6-15 cm, piñas ovoideas de 5-12 cm. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corteza gris plateada. Recordando también que pino mediterráneo de porte irregular, acículas en pares de 6-15 cm, piñas ovoideas de 5-12 cm, ¿qué especie exacta es?",
      rasgoClave: "Acículas en pares de 6-15 cm",
      distractores: ["Cedrus atlantica", "Pinus pinaster", "Pinus pinea"],
      dificultad: 1
    }
  },
  {
    id: "pinus-pinea",
    nombreCientifico: "Pinus pinea",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino piñonero de copa aparasolada, acículas en pares de 10-20 cm, piñas grandes y globosas con piñones comestibles",
    fotos: ["img/pinaceae/pinus-pinea-1.jpg", "img/pinaceae/pinus-pinea-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Pino piñonero de copa aparasolada. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas en pares de 10-20 cm, piñas grandes y globosas con piñones comestibles. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: piñas grandes y globosas con piñones comestibles. Recordando también que pino piñonero de copa aparasolada, acículas en pares de 10-20 cm, ¿qué especie exacta es?",
      rasgoClave: "Acículas en pares de 10-20 cm",
      distractores: ["Pinus pinaster", "Abies alba", "Abies pinsapo"],
      dificultad: 1
    }
  },
  {
    id: "pinus-pinaster",
    nombreCientifico: "Pinus pinaster",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino marítimo o resinero, acículas largas y rígidas en pares de 15-25 cm, piñas cónicas de 10-20 cm, corteza muy gruesa",
    fotos: ["img/pinaceae/pinus-pinaster-1.jpg", "img/pinaceae/pinus-pinaster-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Pino marítimo o resinero. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: acículas largas y rígidas en pares de 15-25 cm, piñas cónicas de 10-20 cm. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corteza muy gruesa. Recordando también que pino marítimo o resinero, acículas largas y rígidas en pares de 15-25 cm, piñas cónicas de 10-20 cm, ¿qué especie exacta es?",
      rasgoClave: "Acículas largas y rígidas en pares de 15-25 cm",
      distractores: ["Pinus pinea", "Abies alba", "Abies pinsapo"],
      dificultad: 1
    }
  },
  {
    id: "acanthus-mollis",
    nombreCientifico: "Acanthus mollis",
    familia: "Acanthaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de grandes hojas lobuladas y brillantes, espiga floral erguida con brácteas espinosas, flores blancas con cáliz púrpura",
    fotos: ["img/acanthaceae/acanthus-mollis-1.jpg", "img/acanthaceae/acanthus-mollis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de grandes hojas lobuladas y brillantes. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: espiga floral erguida con brácteas espinosas, flores blancas con cáliz púrpura. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas con cáliz púrpura. Recordando también que hierba perenne de grandes hojas lobuladas y brillantes, espiga floral erguida con brácteas espinosas, ¿qué especie exacta es?",
      rasgoClave: "Hierba perenne de grandes hojas lobuladas y brillantes",
      distractores: ["Bromus madritensis", "Carex divulsa", "Carlina corymbosa"],
      dificultad: 1
    }
  },
  {
    id: "pistacia-lentiscus",
    nombreCientifico: "Pistacia lentiscus",
    familia: "Anacardiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne, hojas compuestas paripinnadas, fruto en drupa rojiza que se vuelve negra, corteza resinosa aromática (almáciga)",
    fotos: ["img/anacardiaceae/pistacia-lentiscus-1.jpg", "img/anacardiaceae/pistacia-lentiscus-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas compuestas paripinnadas, fruto en drupa rojiza que se vuelve negra. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corteza resinosa aromática (almáciga). Recordando también que arbusto perenne, hojas compuestas paripinnadas, fruto en drupa rojiza que se vuelve negra, ¿qué especie exacta es?",
      rasgoClave: "Hojas compuestas paripinnadas",
      distractores: ["Helichrysum stoechas", "Hirschfeldia incana", "Hordeum leporinum"],
      dificultad: 1
    }
  },
  {
    id: "pistacia-terebinthus",
    nombreCientifico: "Pistacia terebinthus",
    familia: "Anacardiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito caducifolio, hojas compuestas imparipinnadas, fruto en drupa rojiza, agallas típicas en el envés de las hojas",
    fotos: ["img/anacardiaceae/pistacia-terebinthus-1.jpg", "img/anacardiaceae/pistacia-terebinthus-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Arbusto o arbolito caducifolio. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas compuestas imparipinnadas, fruto en drupa rojiza. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: agallas típicas en el envés de las hojas. Recordando también que arbusto o arbolito caducifolio, hojas compuestas imparipinnadas, fruto en drupa rojiza, ¿qué especie exacta es?",
      rasgoClave: "Hojas compuestas imparipinnadas",
      distractores: ["Teucrium fruticans", "Torilis arvensis", "Trifolium angustifolium"],
      dificultad: 1
    }
  },
  {
    id: "eryngium-campestre",
    nombreCientifico: "Eryngium campestre",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne espinosa de aspecto glauco, hojas espinosas coriáceas, inflorescencia en capítulo oviforme con brácteas rígidas y punzantes",
    fotos: ["img/apiaceae/eryngium-campestre-1.jpg", "img/apiaceae/eryngium-campestre-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne espinosa de aspecto glauco. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas espinosas coriáceas, inflorescencia en capítulo oviforme con brácteas rígidas y punzantes. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en capítulo oviforme con brácteas rígidas y punzantes. Recordando también que hierba perenne espinosa de aspecto glauco, hojas espinosas coriáceas, ¿qué especie exacta es?",
      rasgoClave: "Hierba perenne espinosa de aspecto glauco",
      distractores: ["Lonicera implexa", "Lupinus angustifolius", "Malva hispanica"],
      dificultad: 1
    }
  },
  {
    id: "smyrnium-olusatrum",
    nombreCientifico: "Smyrnium olusatrum",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal robusta de 50-150 cm, hojas superiores trifoliadas, umbelas verde-amarillentas, fruto negro ovoide",
    fotos: ["img/apiaceae/smyrnium-olusatrum-1.jpg", "img/apiaceae/smyrnium-olusatrum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba bienal robusta de 50-150 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas superiores trifoliadas, umbelas verde-amarillentas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto negro ovoide. Recordando también que hierba bienal robusta de 50-150 cm, hojas superiores trifoliadas, umbelas verde-amarillentas, ¿qué especie exacta es?",
      rasgoClave: "Hojas superiores trifoliadas",
      distractores: ["Torilis arvensis", "Trifolium angustifolium", "Trifolium campestre"],
      dificultad: 1
    }
  },
  {
    id: "torilis-arvensis",
    nombreCientifico: "Torilis arvensis",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual erecta de hasta 80 cm, hojas pinnatisectas, umbelas compuestas con brácteas lineares, fruto cubierto de pelos ganchudos",
    fotos: ["img/apiaceae/torilis-arvensis-1.jpg", "img/apiaceae/torilis-arvensis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual erecta de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas, umbelas compuestas con brácteas lineares. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto cubierto de pelos ganchudos. Recordando también que hierba anual erecta de hasta 80 cm, hojas pinnatisectas, umbelas compuestas con brácteas lineares, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas",
      distractores: ["Borago officinalis", "Brassica nigra", "Briza maxima"],
      dificultad: 1
    }
  },
  {
    id: "nerium-oleander",
    nombreCientifico: "Nerium oleander",
    familia: "Apocynaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 4 m, hojas lanceoladas coriáceas en verticilos, flores grandes rosadas de 5 pétalos, fruto en folículo, muy tóxica",
    fotos: ["img/apocynaceae/nerium-oleander-1.jpg", "img/apocynaceae/nerium-oleander-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne de hasta 4 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas coriáceas en verticilos, flores grandes rosadas de 5 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: muy tóxica. Recordando también que arbusto perenne de hasta 4 m, hojas lanceoladas coriáceas en verticilos, flores grandes rosadas de 5 pétalos, fruto en folículo, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas coriáceas en verticilos",
      distractores: ["Allium neapolitanum", "Anacyclus clavatus", "Anacyclus radiatus"],
      dificultad: 1
    }
  },
  {
    id: "vinca-difformis",
    nombreCientifico: "Vinca difformis",
    familia: "Apocynaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rastrera, hojas ovadas brillantes, flores grandes azul-lila con tubo corolino, fruto en 2 folículos",
    fotos: ["img/apocynaceae/vinca-difformis-1.jpg", "img/apocynaceae/vinca-difformis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne rastrera. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovadas brillantes, flores grandes azul-lila con tubo corolino. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en 2 folículos. Recordando también que hierba perenne rastrera, hojas ovadas brillantes, flores grandes azul-lila con tubo corolino, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovadas brillantes",
      distractores: ["Ulmus minor", "Verbascum sinuatum", "Viburnum tinus"],
      dificultad: 1
    }
  },
  {
    id: "chamaerops-humilis",
    nombreCientifico: "Chamaerops humilis",
    familia: "Arecaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Palmera baja y arbustiva, hojas palmeadas con pecíolo espinoso, inflorescencia amarilla, fruto en drupa pardo-rojiza",
    fotos: ["img/arecaceae/chamaerops-humilis-1.jpg", "img/arecaceae/chamaerops-humilis-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Palmera baja y arbustiva. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmeadas con pecíolo espinoso, inflorescencia amarilla. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en drupa pardo-rojiza. Recordando también que palmera baja y arbustiva, hojas palmeadas con pecíolo espinoso, inflorescencia amarilla, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmeadas con pecíolo espinoso",
      distractores: ["Ficus carica", "Fraxinus angustifolia", "Fumaria capreolata"],
      dificultad: 1
    }
  },
  {
    id: "aristolochia-baetica",
    nombreCientifico: "Aristolochia baetica",
    familia: "Aristolochiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne trepadora, hojas acorazonadas, flores con perianto tubular curvado de color púrpura-amarillento, fruto en cápsula",
    fotos: ["img/aristolochiaceae/aristolochia-baetica-1.jpg", "img/aristolochiaceae/aristolochia-baetica-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba perenne trepadora. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas acorazonadas, flores con perianto tubular curvado de color púrpura-amarillento. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en cápsula. Recordando también que hierba perenne trepadora, hojas acorazonadas, flores con perianto tubular curvado de color púrpura-amarillento, ¿qué especie exacta es?",
      rasgoClave: "Hojas acorazonadas",
      distractores: ["Paeonia broteri", "Papaver hybridum", "Papaver rhoeas"],
      dificultad: 1
    }
  },
  {
    id: "anacyclus-clavatus",
    nombreCientifico: "Anacyclus clavatus",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual con capítulos terminales, flores liguladas blancas con base purpúrea y flores del disco amarillas, brácteas involucrales con apéndice escarioso",
    fotos: ["img/asteraceae/anacyclus-clavatus-1.jpg", "img/asteraceae/anacyclus-clavatus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual con capítulos terminales. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: flores liguladas blancas con base purpúrea y flores del disco amarillas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas involucrales con apéndice escarioso. Recordando también que hierba anual con capítulos terminales, flores liguladas blancas con base purpúrea y flores del disco amarillas, ¿qué especie exacta es?",
      rasgoClave: "Flores liguladas blancas con base purpúrea y flores del disco amarillas",
      distractores: ["Chamaemelum fuscatum", "Chamaemelum mixtum", "Galactites tomentosa"],
      dificultad: 2
    }
  },
  {
    id: "anacyclus-radiatus",
    nombreCientifico: "Anacyclus radiatus",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, capítulos solitarios, flores liguladas amarillas con tubo purpúreo, brácteas involucrales con apéndice ancho",
    fotos: ["img/asteraceae/anacyclus-radiatus-1.jpg", "img/asteraceae/anacyclus-radiatus-2.jpg", "img/asteraceae/anacyclus-radiatus-3.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: capítulos solitarios, flores liguladas amarillas con tubo purpúreo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas involucrales con apéndice ancho. Recordando también que hierba anual, capítulos solitarios, flores liguladas amarillas con tubo purpúreo, ¿qué especie exacta es?",
      rasgoClave: "Flores liguladas amarillas con tubo purpúreo",
      distractores: ["Galactites tomentosa", "Helichrysum stoechas", "Phagnalon saxatile"],
      dificultad: 2
    }
  },
  {
    id: "carlina-corymbosa",
    nombreCientifico: "Carlina corymbosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con capítulos en corimbo, brácteas involucrales espinosas plateadas, flores del disco amarillas, hojas espinosas",
    fotos: ["img/asteraceae/carlina-corymbosa-1.jpg", "img/asteraceae/carlina-corymbosa-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne con capítulos en corimbo. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: flores del disco amarillas, hojas espinosas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: hojas espinosas. Recordando también que hierba perenne con capítulos en corimbo, brácteas involucrales espinosas plateadas, flores del disco amarillas, ¿qué especie exacta es?",
      rasgoClave: "Brácteas involucrales espinosas plateadas",
      distractores: ["Helichrysum stoechas", "Phagnalon saxatile", "Anacyclus clavatus"],
      dificultad: 2
    }
  },
  {
    id: "carlina-racemosa",
    nombreCientifico: "Carlina racemosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne monocárpica, capítulos agrupados en racimo, brácteas involucrales espinosas, hojas espinosas y tomentosas",
    fotos: ["img/asteraceae/carlina-racemosa-1.jpg", "img/asteraceae/carlina-racemosa-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne monocárpica. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: capítulos agrupados en racimo, hojas espinosas y tomentosas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: hojas espinosas y tomentosas. Recordando también que hierba perenne monocárpica, capítulos agrupados en racimo, brácteas involucrales espinosas, ¿qué especie exacta es?",
      rasgoClave: "Brácteas involucrales espinosas",
      distractores: ["Carlina corymbosa", "Chamaemelum fuscatum", "Chamaemelum mixtum"],
      dificultad: 2
    }
  },
  {
    id: "chamaemelum-fuscatum",
    nombreCientifico: "Chamaemelum fuscatum",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, hojas pinnatisectas con segmentos lineares, capítulos con flores liguladas blancas y disco amarillo cónico",
    fotos: ["img/asteraceae/chamaemelum-fuscatum-1.jpg", "img/asteraceae/chamaemelum-fuscatum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas con segmentos lineares, capítulos con flores liguladas blancas y disco amarillo cónico. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos con flores liguladas blancas y disco amarillo cónico. Recordando también que hierba anual, hojas pinnatisectas con segmentos lineares, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas con segmentos lineares",
      distractores: ["Chamaemelum mixtum", "Galactites tomentosa", "Helichrysum stoechas"],
      dificultad: 2
    }
  },
  {
    id: "chamaemelum-mixtum",
    nombreCientifico: "Chamaemelum mixtum",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, capítulos solitarios con flores liguladas blancas y disco amarillo, brácteas involucrales con borde escarioso",
    fotos: ["img/asteraceae/chamaemelum-mixtum-1.jpg", "img/asteraceae/chamaemelum-mixtum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: capítulos solitarios con flores liguladas blancas y disco amarillo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas involucrales con borde escarioso. Recordando también que hierba anual, capítulos solitarios con flores liguladas blancas y disco amarillo, ¿qué especie exacta es?",
      rasgoClave: "Capítulos solitarios con flores liguladas blancas y disco amarillo",
      distractores: ["Anacyclus clavatus", "Anacyclus radiatus", "Carlina corymbosa"],
      dificultad: 2
    }
  },
  {
    id: "galactites-tomentosa",
    nombreCientifico: "Galactites tomentosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual espinosa, hojas espinosas con manchas blancas, capítulos con flores liguladas púrpuras y disco púrpura, brácteas espinosas",
    fotos: ["img/asteraceae/galactites-tomentosa-1.jpg", "img/asteraceae/galactites-tomentosa-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual espinosa. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas espinosas con manchas blancas, capítulos con flores liguladas púrpuras y disco púrpura. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas espinosas. Recordando también que hierba anual espinosa, hojas espinosas con manchas blancas, capítulos con flores liguladas púrpuras y disco púrpura, ¿qué especie exacta es?",
      rasgoClave: "Hierba anual espinosa",
      distractores: ["Anacyclus clavatus", "Anacyclus radiatus", "Carlina corymbosa"],
      dificultad: 2
    }
  },
  {
    id: "helichrysum-stoechas",
    nombreCientifico: "Helichrysum stoechas",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático, hojas lineares tomentosas, capítulos en corimbo denso de color amarillo-dorado persistente, brácteas escariosas",
    fotos: ["img/asteraceae/helichrysum-stoechas-1.jpg", "img/asteraceae/helichrysum-stoechas-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbustillo aromático. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares tomentosas, capítulos en corimbo denso de color amarillo-dorado persistente. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas escariosas. Recordando también que arbustillo aromático, hojas lineares tomentosas, capítulos en corimbo denso de color amarillo-dorado persistente, ¿qué especie exacta es?",
      rasgoClave: "Arbustillo aromático",
      distractores: ["Chamaemelum fuscatum", "Chamaemelum mixtum", "Galactites tomentosa"],
      dificultad: 2
    }
  },
  {
    id: "phagnalon-saxatile",
    nombreCientifico: "Phagnalon saxatile",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo de 10-30 cm, hojas linear-oblongas con borde ondulado, capítulos solitarios con flores liguladas blanquecinas y disco amarillo",
    fotos: ["img/asteraceae/phagnalon-saxatile-1.jpg", "img/asteraceae/phagnalon-saxatile-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbustillo de 10-30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas linear-oblongas con borde ondulado, capítulos solitarios con flores liguladas blanquecinas y disco amarillo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos solitarios con flores liguladas blanquecinas y disco amarillo. Recordando también que arbustillo de 10-30 cm, hojas linear-oblongas con borde ondulado, ¿qué especie exacta es?",
      rasgoClave: "Hojas linear-oblongas con borde ondulado",
      distractores: ["Anacyclus clavatus", "Anacyclus radiatus", "Carlina corymbosa"],
      dificultad: 2
    }
  },
  {
    id: "anchusa-azurea",
    nombreCientifico: "Anchusa azurea",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, hojas lanceoladas setosas, inflorescencia en cima escorpioide con flores azules de tubo recto",
    fotos: ["img/boraginaceae/anchusa-azurea-1.jpg", "img/boraginaceae/anchusa-azurea-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas setosas, inflorescencia en cima escorpioide con flores azules de tubo recto. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en cima escorpioide con flores azules de tubo recto. Recordando también que hierba perenne de hasta 1 m, hojas lanceoladas setosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas setosas",
      distractores: ["Cleonia lusitanica", "Coronopus didymus", "Crassula tillaea"],
      dificultad: 1
    }
  },
  {
    id: "cynoglossum-creticum",
    nombreCientifico: "Cynoglossum creticum",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal de hasta 80 cm, hojas basales grandes oblongo-lanceoladas, inflorescencia cimosa con flores azules reticuladas",
    fotos: ["img/boraginaceae/cynoglossum-creticum-1.jpg", "img/boraginaceae/cynoglossum-creticum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba bienal de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales grandes oblongo-lanceoladas, inflorescencia cimosa con flores azules reticuladas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia cimosa con flores azules reticuladas. Recordando también que hierba bienal de hasta 80 cm, hojas basales grandes oblongo-lanceoladas, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales grandes oblongo-lanceoladas",
      distractores: ["Chamaemelum fuscatum", "Chamaemelum mixtum", "Chamaerops humilis"],
      dificultad: 1
    }
  },
  {
    id: "borago-officinalis",
    nombreCientifico: "Borago officinalis",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas cubiertas de pelos rígidos, flores azules colgantes con estambres salientes en espiga",
    fotos: ["img/boraginaceae/borago-officinalis-1.jpg", "img/boraginaceae/borago-officinalis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas cubiertas de pelos rígidos, flores azules colgantes con estambres salientes en espiga. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores azules colgantes con estambres salientes en espiga. Recordando también que hierba anual de hasta 60 cm, hojas cubiertas de pelos rígidos, ¿qué especie exacta es?",
      rasgoClave: "Hojas cubiertas de pelos rígidos",
      distractores: ["Carlina corymbosa", "Carlina racemosa", "Castanea sativa"],
      dificultad: 1
    }
  },
  {
    id: "brassica-nigra",
    nombreCientifico: "Brassica nigra",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 2 m, hojas inferiores lirado-pinnatífidas, inflorescencia en racimo con flores amarillas, fruto en silícua aplicada al tallo",
    fotos: ["img/brassicaceae/brassica-nigra-1.jpg", "img/brassicaceae/brassica-nigra-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas inferiores lirado-pinnatífidas, inflorescencia en racimo con flores amarillas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua aplicada al tallo. Recordando también que hierba anual de hasta 2 m, hojas inferiores lirado-pinnatífidas, inflorescencia en racimo con flores amarillas, ¿qué especie exacta es?",
      rasgoClave: "Hojas inferiores lirado-pinnatífidas",
      distractores: ["Sinapis alba", "Coronopus didymus", "Diplotaxis catholica"],
      dificultad: 1
    }
  },
  {
    id: "coronopus-didymus",
    nombreCientifico: "Coronopus didymus",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual postrada, hojas pinnatisectas con segmentos lineares, flores muy pequeñas blancas, fruto en silícua reniforme",
    fotos: ["img/brassicaceae/coronopus-didymus-1.jpg", "img/brassicaceae/coronopus-didymus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual postrada. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas con segmentos lineares, flores muy pequeñas blancas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua reniforme. Recordando también que hierba anual postrada, hojas pinnatisectas con segmentos lineares, flores muy pequeñas blancas, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas con segmentos lineares",
      distractores: ["Hirschfeldia incana", "Rapistrum rugosum", "Sinapis alba"],
      dificultad: 1
    }
  },
  {
    id: "diplotaxis-catholica",
    nombreCientifico: "Diplotaxis catholica",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas lirado-pinnatífidas carnosas, flores amarillas de 4 pétalos, fruto en silícua erecta",
    fotos: ["img/brassicaceae/diplotaxis-catholica-1.jpg", "img/brassicaceae/diplotaxis-catholica-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lirado-pinnatífidas carnosas, flores amarillas de 4 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua erecta. Recordando también que hierba perenne de hasta 60 cm, hojas lirado-pinnatífidas carnosas, flores amarillas de 4 pétalos, ¿qué especie exacta es?",
      rasgoClave: "Hojas lirado-pinnatífidas carnosas",
      distractores: ["Brassica nigra", "Coronopus didymus", "Hirschfeldia incana"],
      dificultad: 1
    }
  },
  {
    id: "hirschfeldia-incana",
    nombreCientifico: "Hirschfeldia incana",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal o perenne de hasta 1 m, hojas basales lirado-pinnatífidas, flores amarillas pequeñas, fruto en silícua linear con rostro",
    fotos: ["img/brassicaceae/hirschfeldia-incana-1.jpg", "img/brassicaceae/hirschfeldia-incana-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba bienal o perenne de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales lirado-pinnatífidas, flores amarillas pequeñas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua linear con rostro. Recordando también que hierba bienal o perenne de hasta 1 m, hojas basales lirado-pinnatífidas, flores amarillas pequeñas, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales lirado-pinnatífidas",
      distractores: ["Diplotaxis catholica", "Rapistrum rugosum", "Sinapis alba"],
      dificultad: 1
    }
  },
  {
    id: "rapistrum-rugosum",
    nombreCientifico: "Rapistrum rugosum",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, fruto en silícua con dos segmentos: inferior estéril y superior globoso",
    fotos: ["img/brassicaceae/rapistrum-rugosum-1.jpg", "img/brassicaceae/rapistrum-rugosum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lirado-pinnatífidas, flores amarillas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua con dos segmentos: inferior estéril y superior globoso. Recordando también que hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lirado-pinnatífidas",
      distractores: ["Brassica nigra", "Coronopus didymus", "Diplotaxis catholica"],
      dificultad: 1
    }
  },
  {
    id: "sinapis-alba",
    nombreCientifico: "Sinapis alba",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, fruto en silícua con rostro largo y pelos rígidos",
    fotos: ["img/brassicaceae/sinapis-alba-1.jpg", "img/brassicaceae/sinapis-alba-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lirado-pinnatífidas, flores amarillas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en silícua con rostro largo y pelos rígidos. Recordando también que hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lirado-pinnatífidas",
      distractores: ["Rapistrum rugosum", "Brassica nigra", "Coronopus didymus"],
      dificultad: 1
    }
  },
  {
    id: "lonicera-implexa",
    nombreCientifico: "Lonicera implexa",
    familia: "Caprifoliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador perenne, hojas ovales opuestas con las últimas soldadas en disco, flores amarillo-rosadas, fruto en baya roja",
    fotos: ["img/caprifoliaceae/lonicera-implexa-1.jpg", "img/caprifoliaceae/lonicera-implexa-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Arbusto trepador perenne. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales opuestas con las últimas soldadas en disco, flores amarillo-rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya roja. Recordando también que arbusto trepador perenne, hojas ovales opuestas con las últimas soldadas en disco, flores amarillo-rosadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales opuestas con las últimas soldadas en disco",
      distractores: ["Ranunculus muricatus", "Ranunculus peltatus", "Rapistrum rugosum"],
      dificultad: 1
    }
  },
  {
    id: "viburnum-tinus",
    nombreCientifico: "Viburnum tinus",
    familia: "Caprifoliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 3 m, hojas ovadas coriáceas, inflorescencia en corimbo de flores blancas o rosadas, fruto en drupa azul-negra",
    fotos: ["img/caprifoliaceae/viburnum-tinus-1.jpg", "img/caprifoliaceae/viburnum-tinus-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne de hasta 3 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovadas coriáceas, inflorescencia en corimbo de flores blancas o rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en drupa azul-negra. Recordando también que arbusto perenne de hasta 3 m, hojas ovadas coriáceas, inflorescencia en corimbo de flores blancas o rosadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovadas coriáceas",
      distractores: ["Populus alba", "Quercus coccifera", "Quercus faginea"],
      dificultad: 1
    }
  },
  {
    id: "paronychia-argentea",
    nombreCientifico: "Paronychia argentea",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne postrada, hojas ovales con estípulas plateadas, flores sésiles agrupadas en glomérulos con brácteas escariosas plateadas",
    fotos: ["img/caryophyllaceae/paronychia-argentea-1.jpg", "img/caryophyllaceae/paronychia-argentea-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne postrada. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales con estípulas plateadas, flores sésiles agrupadas en glomérulos con brácteas escariosas plateadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores sésiles agrupadas en glomérulos con brácteas escariosas plateadas. Recordando también que hierba perenne postrada, hojas ovales con estípulas plateadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales con estípulas plateadas",
      distractores: ["Silene colorata", "Silene inaperta", "Petrorhagia nanteuilii"],
      dificultad: 1
    }
  },
  {
    id: "petrorhagia-nanteuilii",
    nombreCientifico: "Petrorhagia nanteuilii",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas lineares agudas, inflorescencia laxa con flores rosadas, cáliz tubular con 5 dientes",
    fotos: ["img/caryophyllaceae/petrorhagia-nanteuilii-1.jpg", "img/caryophyllaceae/petrorhagia-nanteuilii-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares agudas, inflorescencia laxa con flores rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: cáliz tubular con 5 dientes. Recordando también que hierba anual de hasta 40 cm, hojas lineares agudas, inflorescencia laxa con flores rosadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lineares agudas",
      distractores: ["Polycarpon tetraphyllum", "Silene colorata", "Silene inaperta"],
      dificultad: 1
    }
  },
  {
    id: "polycarpon-tetraphyllum",
    nombreCientifico: "Polycarpon tetraphyllum",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 15 cm, hojas ovales en verticilos aparentes, inflorescencia cimosa con flores blanquecinas muy pequeñas",
    fotos: ["img/caryophyllaceae/polycarpon-tetraphyllum-1.jpg", "img/caryophyllaceae/polycarpon-tetraphyllum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual pequeña de hasta 15 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales en verticilos aparentes, inflorescencia cimosa con flores blanquecinas muy pequeñas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia cimosa con flores blanquecinas muy pequeñas. Recordando también que hierba anual pequeña de hasta 15 cm, hojas ovales en verticilos aparentes, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales en verticilos aparentes",
      distractores: ["Silene inaperta", "Paronychia argentea", "Petrorhagia nanteuilii"],
      dificultad: 1
    }
  },
  {
    id: "silene-colorata",
    nombreCientifico: "Silene colorata",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas espatuladas, flores rosadas con cáliz inflado y vistoso, pétalos escotados",
    fotos: ["img/caryophyllaceae/silene-colorata-1.jpg", "img/caryophyllaceae/silene-colorata-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas espatuladas, flores rosadas con cáliz inflado y vistoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: pétalos escotados. Recordando también que hierba anual de hasta 30 cm, hojas espatuladas, flores rosadas con cáliz inflado y vistoso, ¿qué especie exacta es?",
      rasgoClave: "Hojas espatuladas",
      distractores: ["Polycarpon tetraphyllum", "Silene inaperta", "Paronychia argentea"],
      dificultad: 1
    }
  },
  {
    id: "silene-inaperta",
    nombreCientifico: "Silene inaperta",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas lanceoladas, flores hermafroditas con cáliz tubular algo inflado, pétalos blancos incluidos",
    fotos: ["img/caryophyllaceae/silene-inaperta-1.jpg", "img/caryophyllaceae/silene-inaperta-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas, flores hermafroditas con cáliz tubular algo inflado. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: pétalos blancos incluidos. Recordando también que hierba anual de hasta 40 cm, hojas lanceoladas, flores hermafroditas con cáliz tubular algo inflado, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas",
      distractores: ["Petrorhagia nanteuilii", "Polycarpon tetraphyllum", "Silene colorata"],
      dificultad: 1
    }
  },
  {
    id: "cistus-albidus",
    nombreCientifico: "Cistus albidus",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas ovales tomentosas blanquecinas, flores grandes rosado-púrpuras de 5 pétalos",
    fotos: ["img/cistaceae/cistus-albidus-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales tomentosas blanquecinas, flores grandes rosado-púrpuras de 5 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores grandes rosado-púrpuras de 5 pétalos. Recordando también que arbusto de hasta 1, 5 m, hojas ovales tomentosas blanquecinas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales tomentosas blanquecinas",
      distractores: ["Cistus populifolius", "Cistus salviifolius", "Halimium atriplicifolium"],
      dificultad: 3
    }
  },
  {
    id: "cistus-ladanifer",
    nombreCientifico: "Cistus ladanifer",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2,5 m, hojas lanceoladas viscosas aromáticas, flores blancas grandes con mancha rojiza en la base de cada pétalo",
    fotos: ["img/cistaceae/cistus-ladanifer-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 2. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas viscosas aromáticas, flores blancas grandes con mancha rojiza en la base de cada pétalo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas grandes con mancha rojiza en la base de cada pétalo. Recordando también que arbusto de hasta 2, 5 m, hojas lanceoladas viscosas aromáticas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas viscosas aromáticas",
      distractores: ["Cistus crispus", "Cistus monspeliensis", "Cistus populifolius"],
      dificultad: 3
    }
  },
  {
    id: "cistus-populifolius",
    nombreCientifico: "Cistus populifolius",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas anchas ovales con peciolo largo, flores blancas de 5 pétalos con mancha amarilla en la base",
    fotos: ["img/cistaceae/cistus-populifolius-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas anchas ovales con peciolo largo, flores blancas de 5 pétalos con mancha amarilla en la base. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas de 5 pétalos con mancha amarilla en la base. Recordando también que arbusto de hasta 2 m, hojas anchas ovales con peciolo largo, ¿qué especie exacta es?",
      rasgoClave: "Hojas anchas ovales con peciolo largo",
      distractores: ["Halimium atriplicifolium", "Halimium umbellatum", "Cistus albidus"],
      dificultad: 3
    }
  },
  {
    id: "cistus-crispus",
    nombreCientifico: "Cistus crispus",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1 m, hojas ovales onduladas tomentosas, flores rosado-púrpuras de 5 pétalos arrugados",
    fotos: ["img/cistaceae/cistus-crispus-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales onduladas tomentosas, flores rosado-púrpuras de 5 pétalos arrugados. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores rosado-púrpuras de 5 pétalos arrugados. Recordando también que arbusto de hasta 1 m, hojas ovales onduladas tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales onduladas tomentosas",
      distractores: ["Halimium atriplicifolium", "Halimium umbellatum", "Cistus albidus"],
      dificultad: 3
    }
  },
  {
    id: "cistus-monspeliensis",
    nombreCientifico: "Cistus monspeliensis",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas lineares estrechas de 3-6 cm, flores blancas pequeñas de 3 cm, agrupadas en racimos",
    fotos: ["img/cistaceae/cistus-monspeliensis-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares estrechas de 3-6 cm, flores blancas pequeñas de 3 cm. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: agrupadas en racimos. Recordando también que arbusto de hasta 1, 5 m, hojas lineares estrechas de 3-6 cm, flores blancas pequeñas de 3 cm, ¿qué especie exacta es?",
      rasgoClave: "Hojas lineares estrechas de 3-6 cm",
      distractores: ["Cistus crispus", "Cistus ladanifer", "Cistus populifolius"],
      dificultad: 3
    }
  },
  {
    id: "cistus-salviifolius",
    nombreCientifico: "Cistus salviifolius",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1 m, hojas ovales rugosas con nervios marcados, flores blancas solitarias de 5 pétalos con mancha amarilla",
    fotos: ["img/cistaceae/cistus-salviifolius-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales rugosas con nervios marcados, flores blancas solitarias de 5 pétalos con mancha amarilla. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas solitarias de 5 pétalos con mancha amarilla. Recordando también que arbusto de hasta 1 m, hojas ovales rugosas con nervios marcados, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales rugosas con nervios marcados",
      distractores: ["Cistus ladanifer", "Cistus monspeliensis", "Cistus populifolius"],
      dificultad: 3
    }
  },
  {
    id: "halimium-atriplicifolium",
    nombreCientifico: "Halimium atriplicifolium",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas opuestas blanco-tomentosas, flores amarillas con mancha basal más oscura en cada pétalo",
    fotos: ["img/cistaceae/halimium-atriplicifolium-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas opuestas blanco-tomentosas, flores amarillas con mancha basal más oscura en cada pétalo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores amarillas con mancha basal más oscura en cada pétalo. Recordando también que arbusto de hasta 1, 5 m, hojas opuestas blanco-tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas opuestas blanco-tomentosas",
      distractores: ["Halimium umbellatum", "Cistus albidus", "Cistus crispus"],
      dificultad: 3
    }
  },
  {
    id: "halimium-umbellatum",
    nombreCientifico: "Halimium umbellatum",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 60 cm, hojas lineares tomentosas, flores blancas en umbela terminal con mancha amarilla en la base de los pétalos",
    fotos: ["img/cistaceae/halimium-umbellatum-1.jpg", "img/cistaceae/halimium-umbellatum-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares tomentosas, flores blancas en umbela terminal con mancha amarilla en la base de los pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas en umbela terminal con mancha amarilla en la base de los pétalos. Recordando también que arbusto de hasta 60 cm, hojas lineares tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lineares tomentosas",
      distractores: ["Cistus salviifolius", "Halimium atriplicifolium", "Cistus albidus"],
      dificultad: 2
    }
  },
  {
    id: "crassula-tillaea",
    nombreCientifico: "Crassula tillaea",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual diminuta de hasta 5 cm, hojas opuestas carnosas ovales, flores rosadas axilares solitarias muy pequeñas",
    fotos: ["img/crassulaceae/crassula-tillaea-1.jpg", "img/crassulaceae/crassula-tillaea-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual diminuta de hasta 5 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas opuestas carnosas ovales, flores rosadas axilares solitarias muy pequeñas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores rosadas axilares solitarias muy pequeñas. Recordando también que hierba anual diminuta de hasta 5 cm, hojas opuestas carnosas ovales, ¿qué especie exacta es?",
      rasgoClave: "Hojas opuestas carnosas ovales",
      distractores: ["Quercus rotundifolia", "Quercus suber", "Ranunculus ficaria"],
      dificultad: 1
    }
  },
  {
    id: "sedum-album",
    nombreCientifico: "Sedum album",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne suculenta, hojas cilíndricas carnosas rojizas, inflorescencia en panícula con flores blancas estrelladas de 5 pétalos",
    fotos: ["img/crassulaceae/sedum-album-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne suculenta. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas cilíndricas carnosas rojizas, inflorescencia en panícula con flores blancas estrelladas de 5 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en panícula con flores blancas estrelladas de 5 pétalos. Recordando también que hierba perenne suculenta, hojas cilíndricas carnosas rojizas, ¿qué especie exacta es?",
      rasgoClave: "Hojas cilíndricas carnosas rojizas",
      distractores: ["Ulmus minor", "Verbascum sinuatum", "Viburnum tinus"],
      dificultad: 2
    }
  },
  {
    id: "sedum-sediforme",
    nombreCientifico: "Sedum sediforme",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne suculenta de hasta 30 cm, hojas glaucas carnosas cilíndricas, inflorescencia con flores blancas o amarillo pálido",
    fotos: ["img/crassulaceae/sedum-sediforme-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne suculenta de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas glaucas carnosas cilíndricas, inflorescencia con flores blancas o amarillo pálido. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia con flores blancas o amarillo pálido. Recordando también que hierba perenne suculenta de hasta 30 cm, hojas glaucas carnosas cilíndricas, ¿qué especie exacta es?",
      rasgoClave: "Hojas glaucas carnosas cilíndricas",
      distractores: ["Anacyclus radiatus", "Anchusa azurea", "Antirrhinum majus"],
      dificultad: 2
    }
  },
  {
    id: "carex-divulsa",
    nombreCientifico: "Carex divulsa",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne cespitosa de hasta 70 cm, tallos trígonos, hojas ásperas, inflorescencia en espiga compuesta laxa",
    fotos: ["img/cyperaceae/carex-divulsa-1.jpg", "img/cyperaceae/carex-divulsa-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne cespitosa de hasta 70 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ásperas, inflorescencia en espiga compuesta laxa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga compuesta laxa. Recordando también que hierba perenne cespitosa de hasta 70 cm, tallos trígonos, hojas ásperas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ásperas",
      distractores: ["Myrtus communis", "Nerium oleander", "Olea europaea"],
      dificultad: 1
    }
  },
  {
    id: "cyperus-rotundus",
    nombreCientifico: "Cyperus rotundus",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con tubérculos subterráneos, tallos trígonos, hojas basales, inflorescencia umbeliforme con 3-5 brácteas, espigas rojizas",
    fotos: ["img/cyperaceae/cyperus-rotundus-1.jpg", "img/cyperaceae/cyperus-rotundus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne con tubérculos subterráneos. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales, inflorescencia umbeliforme con 3-5 brácteas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espigas rojizas. Recordando también que hierba perenne con tubérculos subterráneos, tallos trígonos, hojas basales, inflorescencia umbeliforme con 3-5 brácteas, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales",
      distractores: ["Eucalyptus camaldulensis", "Euphorbia helioscopia", "Euphorbia peplus"],
      dificultad: 1
    }
  },
  {
    id: "scirpoides-holoschoenus",
    nombreCientifico: "Scirpoides holoschoenus",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1,5 m, tallos cilíndricos, hojas reducidas a vainas, inflorescencia en glomérulos esféricos terminales",
    fotos: ["img/cyperaceae/scirpoides-holoschoenus-1.jpg", "img/cyperaceae/scirpoides-holoschoenus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas reducidas a vainas, inflorescencia en glomérulos esféricos terminales. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en glomérulos esféricos terminales. Recordando también que hierba perenne de hasta 1, 5 m, tallos cilíndricos, hojas reducidas a vainas, ¿qué especie exacta es?",
      rasgoClave: "Hojas reducidas a vainas",
      distractores: ["Ficus carica", "Fraxinus angustifolia", "Fumaria capreolata"],
      dificultad: 1
    }
  },
  {
    id: "tamus-communis",
    nombreCientifico: "Tamus communis",
    familia: "Dioscoreaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Enredadera perenne con tubérculo radical, hojas acorazonadas brillantes, bayas rojas brillantes tóxicas, tallos volubles",
    fotos: ["img/dioscoreaceae/tamus-communis-1.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Enredadera perenne con tubérculo radical. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas acorazonadas brillantes. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: tallos volubles. Recordando también que enredadera perenne con tubérculo radical, hojas acorazonadas brillantes, bayas rojas brillantes tóxicas, ¿qué especie exacta es?",
      rasgoClave: "Hojas acorazonadas brillantes",
      distractores: ["Malva parviflora", "Malva sylvestris", "Mentha pulegium"],
      dificultad: 2
    }
  },
  {
    id: "arbutus-unedo",
    nombreCientifico: "Arbutus unedo",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito perenne de hasta 8 m, hojas aserradas brillantes, flores blancas campanuladas en panículas colgantes, fruto en baya roja comestible",
    fotos: ["img/ericaceae/arbutus-unedo-1.jpg", "img/ericaceae/arbutus-unedo-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Arbusto o arbolito perenne de hasta 8 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aserradas brillantes, flores blancas campanuladas en panículas colgantes. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya roja comestible. Recordando también que arbusto o arbolito perenne de hasta 8 m, hojas aserradas brillantes, flores blancas campanuladas en panículas colgantes, ¿qué especie exacta es?",
      rasgoClave: "Hojas aserradas brillantes",
      distractores: ["Quercus pyrenaica", "Quercus rotundifolia", "Quercus suber"],
      dificultad: 1
    }
  },
  {
    id: "erica-arborea",
    nombreCientifico: "Erica arborea",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito de hasta 4 m, hojas aciculares en verticilos, flores blancas campanuladas en panículas densas olorosas",
    fotos: ["img/ericaceae/erica-arborea-1.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Arbusto o arbolito de hasta 4 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aciculares en verticilos, flores blancas campanuladas en panículas densas olorosas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas campanuladas en panículas densas olorosas. Recordando también que arbusto o arbolito de hasta 4 m, hojas aciculares en verticilos, ¿qué especie exacta es?",
      rasgoClave: "Hojas aciculares en verticilos",
      distractores: ["Cleonia lusitanica", "Coronopus didymus", "Crassula tillaea"],
      dificultad: 2
    }
  },
  {
    id: "erica-australis",
    nombreCientifico: "Erica australis",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas aciculares en verticilos de 4, flores rosadas en racimos densos, corola acampanada",
    fotos: ["img/ericaceae/erica-australis-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aciculares en verticilos de 4, flores rosadas en racimos densos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corola acampanada. Recordando también que arbusto de hasta 2 m, hojas aciculares en verticilos de 4, flores rosadas en racimos densos, ¿qué especie exacta es?",
      rasgoClave: "Hojas aciculares en verticilos de 4",
      distractores: ["Anacyclus radiatus", "Anchusa azurea", "Antirrhinum majus"],
      dificultad: 2
    }
  },
  {
    id: "euphorbia-helioscopia",
    nombreCientifico: "Euphorbia helioscopia",
    familia: "Euphorbiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas obovadas serradas, inflorescencia en ciato con 5 glándulas amarillas, látex blanco",
    fotos: ["img/euphorbiaceae/euphorbia-helioscopia-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas obovadas serradas, inflorescencia en ciato con 5 glándulas amarillas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: látex blanco. Recordando también que hierba anual de hasta 40 cm, hojas obovadas serradas, inflorescencia en ciato con 5 glándulas amarillas, ¿qué especie exacta es?",
      rasgoClave: "Hojas obovadas serradas",
      distractores: ["Malva nicaeensis", "Malva parviflora", "Malva sylvestris"],
      dificultad: 2
    }
  },
  {
    id: "euphorbia-peplus",
    nombreCientifico: "Euphorbia peplus",
    familia: "Euphorbiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 30 cm, hojas alternas obovadas enteras, inflorescencia en ciato con glándulas con cuernos, látex blanco",
    fotos: ["img/euphorbiaceae/euphorbia-peplus-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual pequeña de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas alternas obovadas enteras, inflorescencia en ciato con glándulas con cuernos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: látex blanco. Recordando también que hierba anual pequeña de hasta 30 cm, hojas alternas obovadas enteras, inflorescencia en ciato con glándulas con cuernos, ¿qué especie exacta es?",
      rasgoClave: "Hojas alternas obovadas enteras",
      distractores: ["Torilis arvensis", "Trifolium angustifolium", "Trifolium campestre"],
      dificultad: 2
    }
  },
  {
    id: "adenocarpus-telonensis",
    nombreCientifico: "Adenocarpus telonensis",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas trifoliadas, flores amarillas en racimos densos, fruto en legumbre glandulosa",
    fotos: ["img/fabaceae/adenocarpus-telonensis-1.jpg", "img/fabaceae/adenocarpus-telonensis-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas, flores amarillas en racimos densos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en legumbre glandulosa. Recordando también que arbusto de hasta 1, 5 m, hojas trifoliadas, flores amarillas en racimos densos, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas",
      distractores: ["Ceratonia siliqua", "Lathyrus cicera", "Lathyrus clymenum"],
      dificultad: 2
    }
  },
  {
    id: "ceratonia-siliqua",
    nombreCientifico: "Ceratonia siliqua",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 10 m, hojas compuestas paripinnadas, flores pequeñas rojizas sin corola, fruto en legumbre grande (algarroba)",
    fotos: ["img/fabaceae/ceratonia-siliqua-1.jpg", "img/fabaceae/ceratonia-siliqua-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de hasta 10 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas compuestas paripinnadas, flores pequeñas rojizas sin corola. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en legumbre grande (algarroba). Recordando también que árbol perenne de hasta 10 m, hojas compuestas paripinnadas, flores pequeñas rojizas sin corola, ¿qué especie exacta es?",
      rasgoClave: "Hojas compuestas paripinnadas",
      distractores: ["Trifolium campestre", "Trifolium repens", "Trifolium resupinatum"],
      dificultad: 2
    }
  },
  {
    id: "lathyrus-cicera",
    nombreCientifico: "Lathyrus cicera",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 60 cm, hojas paripinnadas con zarcillo, flores rojas solitarias, fruto en legumbre con alas",
    fotos: ["img/fabaceae/lathyrus-cicera-1.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba anual trepadora de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas paripinnadas con zarcillo, flores rojas solitarias. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en legumbre con alas. Recordando también que hierba anual trepadora de hasta 60 cm, hojas paripinnadas con zarcillo, flores rojas solitarias, ¿qué especie exacta es?",
      rasgoClave: "Hojas paripinnadas con zarcillo",
      distractores: ["Ceratonia siliqua", "Lathyrus clymenum", "Lupinus angustifolius"],
      dificultad: 3
    }
  },
  {
    id: "lathyrus-clymenum",
    nombreCientifico: "Lathyrus clymenum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora, hojas paripinnadas con zarcillo ramificado, flores púrpura-azuladas, fruto en legumbre comprimida",
    fotos: ["img/fabaceae/lathyrus-clymenum-1.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba anual trepadora. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas paripinnadas con zarcillo ramificado, flores púrpura-azuladas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en legumbre comprimida. Recordando también que hierba anual trepadora, hojas paripinnadas con zarcillo ramificado, flores púrpura-azuladas, ¿qué especie exacta es?",
      rasgoClave: "Hojas paripinnadas con zarcillo ramificado",
      distractores: ["Trifolium repens", "Trifolium resupinatum", "Trifolium stellatum"],
      dificultad: 3
    }
  },
  {
    id: "lupinus-angustifolius",
    nombreCientifico: "Lupinus angustifolius",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 1 m, hojas palmeadas con 5-9 folíolos lanceolados, flores azules en racimos verticales, legumbre peluda",
    fotos: ["img/fabaceae/lupinus-angustifolius-1.jpg", "img/fabaceae/lupinus-angustifolius-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmeadas con 5-9 folíolos lanceolados, flores azules en racimos verticales. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: legumbre peluda. Recordando también que hierba anual de hasta 1 m, hojas palmeadas con 5-9 folíolos lanceolados, flores azules en racimos verticales, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmeadas con 5-9 folíolos lanceolados",
      distractores: ["Trifolium campestre", "Trifolium repens", "Trifolium resupinatum"],
      dificultad: 2
    }
  },
  {
    id: "retama-sphaerocarpa",
    nombreCientifico: "Retama sphaerocarpa",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 3 m, tallos verdes inclinados sin hojas, flores amarillas pequeñas, fruto en legumbre globosa",
    fotos: ["img/fabaceae/retama-sphaerocarpa-1.jpg", "img/fabaceae/retama-sphaerocarpa-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 3 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: tallos verdes inclinados sin hojas, flores amarillas pequeñas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en legumbre globosa. Recordando también que arbusto de hasta 3 m, tallos verdes inclinados sin hojas, flores amarillas pequeñas, ¿qué especie exacta es?",
      rasgoClave: "Tallos verdes inclinados sin hojas",
      distractores: ["Trifolium angustifolium", "Trifolium campestre", "Trifolium repens"],
      dificultad: 2
    }
  },
  {
    id: "trifolium-angustifolium",
    nombreCientifico: "Trifolium angustifolium",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, hojas trifoliadas con folíolos lineares, inflorescencia en capítulo cilíndrico de flores rosadas",
    fotos: ["img/fabaceae/trifolium-angustifolium-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas con folíolos lineares, inflorescencia en capítulo cilíndrico de flores rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en capítulo cilíndrico de flores rosadas. Recordando también que hierba anual de hasta 50 cm, hojas trifoliadas con folíolos lineares, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas con folíolos lineares",
      distractores: ["Retama sphaerocarpa", "Trifolium campestre", "Trifolium repens"],
      dificultad: 3
    }
  },
  {
    id: "trifolium-campestre",
    nombreCientifico: "Trifolium campestre",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas trifoliadas con folíolos obovados, inflorescencia en capítulo globoso de flores amarillas que se vuelven pardas",
    fotos: ["img/fabaceae/trifolium-campestre-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas con folíolos obovados, inflorescencia en capítulo globoso de flores amarillas que se vuelven pardas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en capítulo globoso de flores amarillas que se vuelven pardas. Recordando también que hierba anual de hasta 30 cm, hojas trifoliadas con folíolos obovados, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas con folíolos obovados",
      distractores: ["Retama sphaerocarpa", "Trifolium angustifolium", "Trifolium repens"],
      dificultad: 3
    }
  },
  {
    id: "trifolium-repens",
    nombreCientifico: "Trifolium repens",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne estolonífera, hojas trifoliadas con folíolos con mancha blanquecina, capítulos globosos de flores blancas o rosadas",
    fotos: ["img/fabaceae/trifolium-repens-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne estolonífera. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas con folíolos con mancha blanquecina, capítulos globosos de flores blancas o rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos globosos de flores blancas o rosadas. Recordando también que hierba perenne estolonífera, hojas trifoliadas con folíolos con mancha blanquecina, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas con folíolos con mancha blanquecina",
      distractores: ["Lathyrus cicera", "Lathyrus clymenum", "Lupinus angustifolius"],
      dificultad: 3
    }
  },
  {
    id: "trifolium-stellatum",
    nombreCientifico: "Trifolium stellatum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 20 cm, hojas trifoliadas con folíolos obovados, capítulos globosos con flores rosadas y cáliz acrescente estrellado",
    fotos: ["img/fabaceae/trifolium-stellatum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 20 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas con folíolos obovados, capítulos globosos con flores rosadas y cáliz acrescente estrellado. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos globosos con flores rosadas y cáliz acrescente estrellado. Recordando también que hierba anual de hasta 20 cm, hojas trifoliadas con folíolos obovados, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas con folíolos obovados",
      distractores: ["Trifolium angustifolium", "Trifolium campestre", "Trifolium repens"],
      dificultad: 3
    }
  },
  {
    id: "trifolium-resupinatum",
    nombreCientifico: "Trifolium resupinatum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas trifoliadas, capítulos globosos con flores rosadas resupinadas (cáliz hacia abajo)",
    fotos: ["img/fabaceae/trifolium-resupinatum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas, capítulos globosos con flores rosadas resupinadas (cáliz hacia abajo). ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos globosos con flores rosadas resupinadas (cáliz hacia abajo). Recordando también que hierba anual de hasta 30 cm, hojas trifoliadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas",
      distractores: ["Ceratonia siliqua", "Lathyrus cicera", "Lathyrus clymenum"],
      dificultad: 3
    }
  },
  {
    id: "trifolium-tomentosum",
    nombreCientifico: "Trifolium tomentosum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 20 cm, hojas trifoliadas, capítulos globosos densos de flores rosadas con cáliz tomentoso",
    fotos: ["img/fabaceae/trifolium-tomentosum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 20 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas, capítulos globosos densos de flores rosadas con cáliz tomentoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: capítulos globosos densos de flores rosadas con cáliz tomentoso. Recordando también que hierba anual de hasta 20 cm, hojas trifoliadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas",
      distractores: ["Lathyrus cicera", "Lathyrus clymenum", "Lupinus angustifolius"],
      dificultad: 3
    }
  },
  {
    id: "castanea-sativa",
    nombreCientifico: "Castanea sativa",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 25 m, hojas grandes aserradas lanceoladas, flores en amentos, fruto en erizo con 1-3 aquenios",
    fotos: ["img/fagaceae/castanea-sativa-1.jpg", "img/fagaceae/castanea-sativa-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 25 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas grandes aserradas lanceoladas, flores en amentos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en erizo con 1-3 aquenios. Recordando también que árbol caducifolio de hasta 25 m, hojas grandes aserradas lanceoladas, flores en amentos, ¿qué especie exacta es?",
      rasgoClave: "Hojas grandes aserradas lanceoladas",
      distractores: ["Quercus coccifera", "Quercus faginea", "Quercus pyrenaica"],
      dificultad: 1
    }
  },
  {
    id: "quercus-coccifera",
    nombreCientifico: "Quercus coccifera",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 3 m, hojas pequeñas espinosas onduladas, bellotas con cúpula escamosa y erizada",
    fotos: ["img/fagaceae/quercus-coccifera-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne de hasta 3 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pequeñas espinosas onduladas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: bellotas con cúpula escamosa y erizada. Recordando también que arbusto perenne de hasta 3 m, hojas pequeñas espinosas onduladas, ¿qué especie exacta es?",
      rasgoClave: "Hojas pequeñas espinosas onduladas",
      distractores: ["Quercus rotundifolia", "Quercus suber", "Castanea sativa"],
      dificultad: 2
    }
  },
  {
    id: "quercus-faginea",
    nombreCientifico: "Quercus faginea",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne o marcescente de hasta 20 m, hojas variables con lóbulos poco profundos y envés tomentoso, bellotas solitarias",
    fotos: ["img/fagaceae/quercus-faginea-1.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne o marcescente de hasta 20 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas variables con lóbulos poco profundos y envés tomentoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: bellotas solitarias. Recordando también que árbol perenne o marcescente de hasta 20 m, hojas variables con lóbulos poco profundos y envés tomentoso, ¿qué especie exacta es?",
      rasgoClave: "Hojas variables con lóbulos poco profundos y envés tomentoso",
      distractores: ["Quercus coccifera", "Quercus pyrenaica", "Quercus rotundifolia"],
      dificultad: 2
    }
  },
  {
    id: "quercus-pyrenaica",
    nombreCientifico: "Quercus pyrenaica",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas grandes lobuladas con envés tomentoso, bellotas con cúpula tomentosa, brotes lanosos",
    fotos: ["img/fagaceae/quercus-pyrenaica-1.jpg", "img/fagaceae/quercus-pyrenaica-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 20 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas grandes lobuladas con envés tomentoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brotes lanosos. Recordando también que árbol caducifolio de hasta 20 m, hojas grandes lobuladas con envés tomentoso, bellotas con cúpula tomentosa, ¿qué especie exacta es?",
      rasgoClave: "Hojas grandes lobuladas con envés tomentoso",
      distractores: ["Quercus faginea", "Quercus rotundifolia", "Quercus suber"],
      dificultad: 1
    }
  },
  {
    id: "quercus-rotundifolia",
    nombreCientifico: "Quercus rotundifolia",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 15 m, hojas redondeadas coriáceas con borde entero o espinoso, bellotas dulces comestibles",
    fotos: ["img/fagaceae/quercus-rotundifolia-1.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de hasta 15 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas redondeadas coriáceas con borde entero o espinoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: bellotas dulces comestibles. Recordando también que árbol perenne de hasta 15 m, hojas redondeadas coriáceas con borde entero o espinoso, ¿qué especie exacta es?",
      rasgoClave: "Hojas redondeadas coriáceas con borde entero o espinoso",
      distractores: ["Quercus faginea", "Quercus pyrenaica", "Quercus suber"],
      dificultad: 2
    }
  },
  {
    id: "quercus-suber",
    nombreCientifico: "Quercus suber",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 20 m, corteza gruesa suberosa (corcho), hojas ovales con envés blanquecino, bellotas con cúpula tomentosa",
    fotos: ["img/fagaceae/quercus-suber-1.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de hasta 20 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales con envés blanquecino. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: bellotas con cúpula tomentosa. Recordando también que árbol perenne de hasta 20 m, corteza gruesa suberosa (corcho), hojas ovales con envés blanquecino, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales con envés blanquecino",
      distractores: ["Quercus coccifera", "Quercus faginea", "Quercus pyrenaica"],
      dificultad: 2
    }
  },
  {
    id: "gladiolus-communis",
    nombreCientifico: "Gladiolus communis",
    familia: "Iridaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 80 cm, hojas ensiformes equitantes, inflorescencia en espiga unilateral con flores rosado-púrpuras",
    fotos: ["img/iridaceae/gladiolus-communis-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne bulbosa de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ensiformes equitantes, inflorescencia en espiga unilateral con flores rosado-púrpuras. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga unilateral con flores rosado-púrpuras. Recordando también que hierba perenne bulbosa de hasta 80 cm, hojas ensiformes equitantes, ¿qué especie exacta es?",
      rasgoClave: "Hojas ensiformes equitantes",
      distractores: ["Lathyrus cicera", "Lathyrus clymenum", "Lavandula pedunculata"],
      dificultad: 2
    }
  },
  {
    id: "gynandriris-sisyrinchium",
    nombreCientifico: "Gynandriris sisyrinchium",
    familia: "Iridaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 40 cm, hojas basales lineares, flores azul-violáceas con tubo corto, fruto en cápsula",
    fotos: ["img/iridaceae/gynandriris-sisyrinchium-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne bulbosa de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales lineares, flores azul-violáceas con tubo corto. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en cápsula. Recordando también que hierba perenne bulbosa de hasta 40 cm, hojas basales lineares, flores azul-violáceas con tubo corto, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales lineares",
      distractores: ["Cynosurus echinatus", "Cyperus rotundus", "Dactylis glomerata"],
      dificultad: 2
    }
  },
  {
    id: "cleonia-lusitanica",
    nombreCientifico: "Cleonia lusitanica",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas pinnatífidas, inflorescencia en espiga terminal densa con brácteas coloreadas, flores bilabiadas azules",
    fotos: ["img/lamiaceae/cleonia-lusitanica-1.jpg", "img/lamiaceae/cleonia-lusitanica-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatífidas, inflorescencia en espiga terminal densa con brácteas coloreadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores bilabiadas azules. Recordando también que hierba anual de hasta 30 cm, hojas pinnatífidas, inflorescencia en espiga terminal densa con brácteas coloreadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatífidas",
      distractores: ["Lamium amplexicaule", "Lavandula pedunculata", "Lavandula stoechas"],
      dificultad: 2
    }
  },
  {
    id: "lamium-amplexicaule",
    nombreCientifico: "Lamium amplexicaule",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas opuestas redondeadas y abrazadoras, flores rosadas bilabiadas en verticilastros",
    fotos: ["img/lamiaceae/lamium-amplexicaule-1.jpg", "img/lamiaceae/lamium-amplexicaule-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas opuestas redondeadas y abrazadoras, flores rosadas bilabiadas en verticilastros. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores rosadas bilabiadas en verticilastros. Recordando también que hierba anual de hasta 30 cm, hojas opuestas redondeadas y abrazadoras, ¿qué especie exacta es?",
      rasgoClave: "Hojas opuestas redondeadas y abrazadoras",
      distractores: ["Lavandula stoechas", "Mentha pulegium", "Rosmarinus officinalis"],
      dificultad: 2
    }
  },
  {
    id: "lavandula-pedunculata",
    nombreCientifico: "Lavandula pedunculata",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 50 cm, hojas lineares tomentosas, inflorescencia en espiga densa con brácteas purpúreas y largo pedúnculo",
    fotos: ["img/lamiaceae/lavandula-pedunculata-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbustillo aromático de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares tomentosas, inflorescencia en espiga densa con brácteas purpúreas y largo pedúnculo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga densa con brácteas purpúreas y largo pedúnculo. Recordando también que arbustillo aromático de hasta 50 cm, hojas lineares tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Arbustillo aromático de hasta 50 cm",
      distractores: ["Lavandula stoechas", "Mentha pulegium", "Rosmarinus officinalis"],
      dificultad: 3
    }
  },
  {
    id: "lavandula-stoechas",
    nombreCientifico: "Lavandula stoechas",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 1 m, hojas lineares tomentosas, inflorescencia con brácteas apicales violáceas vistosas, flores púrpura oscuro",
    fotos: ["img/lamiaceae/lavandula-stoechas-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbustillo aromático de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares tomentosas, inflorescencia con brácteas apicales violáceas vistosas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores púrpura oscuro. Recordando también que arbustillo aromático de hasta 1 m, hojas lineares tomentosas, inflorescencia con brácteas apicales violáceas vistosas, ¿qué especie exacta es?",
      rasgoClave: "Arbustillo aromático de hasta 1 m",
      distractores: ["Lamium amplexicaule", "Lavandula pedunculata", "Mentha pulegium"],
      dificultad: 3
    }
  },
  {
    id: "mentha-pulegium",
    nombreCientifico: "Mentha pulegium",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne aromática de hasta 40 cm, hojas ovales opuestas, flores lilas en verticilastros axilares, tallos postrados",
    fotos: ["img/lamiaceae/mentha-pulegium-1.jpg", "img/lamiaceae/mentha-pulegium-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne aromática de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales opuestas, flores lilas en verticilastros axilares. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: tallos postrados. Recordando también que hierba perenne aromática de hasta 40 cm, hojas ovales opuestas, flores lilas en verticilastros axilares, ¿qué especie exacta es?",
      rasgoClave: "Hierba perenne aromática de hasta 40 cm",
      distractores: ["Stachys ocymastrum", "Teucrium capitatum", "Teucrium fruticans"],
      dificultad: 2
    }
  },
  {
    id: "rosmarinus-officinalis",
    nombreCientifico: "Rosmarinus officinalis",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne aromático de hasta 2 m, hojas lineares coriáceas con envés blanquecino, flores azul-lila bilabiadas en racimos",
    fotos: ["img/lamiaceae/rosmarinus-officinalis-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne aromático de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares coriáceas con envés blanquecino, flores azul-lila bilabiadas en racimos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores azul-lila bilabiadas en racimos. Recordando también que arbusto perenne aromático de hasta 2 m, hojas lineares coriáceas con envés blanquecino, ¿qué especie exacta es?",
      rasgoClave: "Arbusto perenne aromático de hasta 2 m",
      distractores: ["Teucrium capitatum", "Teucrium fruticans", "Cleonia lusitanica"],
      dificultad: 3
    }
  },
  {
    id: "stachys-arvensis",
    nombreCientifico: "Stachys arvensis",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas ovales crenadas, flores rosadas bilabiadas con manchas púrpuras en verticilastros",
    fotos: ["img/lamiaceae/stachys-arvensis-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales crenadas, flores rosadas bilabiadas con manchas púrpuras en verticilastros. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores rosadas bilabiadas con manchas púrpuras en verticilastros. Recordando también que hierba anual de hasta 30 cm, hojas ovales crenadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales crenadas",
      distractores: ["Mentha pulegium", "Rosmarinus officinalis", "Stachys ocymastrum"],
      dificultad: 3
    }
  },
  {
    id: "stachys-ocymastrum",
    nombreCientifico: "Stachys ocymastrum",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas ovales crenado-aserradas, flores púrpura-violáceas en verticilastros multifloros",
    fotos: ["img/lamiaceae/stachys-ocymastrum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovales crenado-aserradas, flores púrpura-violáceas en verticilastros multifloros. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores púrpura-violáceas en verticilastros multifloros. Recordando también que hierba anual de hasta 40 cm, hojas ovales crenado-aserradas, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovales crenado-aserradas",
      distractores: ["Lavandula stoechas", "Mentha pulegium", "Rosmarinus officinalis"],
      dificultad: 3
    }
  },
  {
    id: "teucrium-capitatum",
    nombreCientifico: "Teucrium capitatum",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 40 cm, hojas lineares tomentosas, inflorescencia en capítulo terminal denso de flores blancas con labio superior ausente",
    fotos: ["img/lamiaceae/teucrium-capitatum-1.jpg", "img/lamiaceae/teucrium-capitatum-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbustillo aromático de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares tomentosas, inflorescencia en capítulo terminal denso de flores blancas con labio superior ausente. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en capítulo terminal denso de flores blancas con labio superior ausente. Recordando también que arbustillo aromático de hasta 40 cm, hojas lineares tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Arbustillo aromático de hasta 40 cm",
      distractores: ["Lamium amplexicaule", "Lavandula pedunculata", "Lavandula stoechas"],
      dificultad: 2
    }
  },
  {
    id: "teucrium-fruticans",
    nombreCientifico: "Teucrium fruticans",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas ovadas con envés blanco-tomentoso, flores azul-lila con labio superior muy reducido, tallos blanquecinos",
    fotos: ["img/lamiaceae/teucrium-fruticans-1.jpg", "img/lamiaceae/teucrium-fruticans-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas ovadas con envés blanco-tomentoso, flores azul-lila con labio superior muy reducido. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: tallos blanquecinos. Recordando también que arbusto de hasta 1, 5 m, hojas ovadas con envés blanco-tomentoso, flores azul-lila con labio superior muy reducido, ¿qué especie exacta es?",
      rasgoClave: "Hojas ovadas con envés blanco-tomentoso",
      distractores: ["Teucrium capitatum", "Cleonia lusitanica", "Lamium amplexicaule"],
      dificultad: 2
    }
  },
  {
    id: "allium-ampeloprasum",
    nombreCientifico: "Allium ampeloprasum",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 1,5 m, hojas planas lineares, inflorescencia en umbela esférica con flores rosadas, bulbo grande",
    fotos: ["img/liliaceae/allium-ampeloprasum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne bulbosa de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas planas lineares, inflorescencia en umbela esférica con flores rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: bulbo grande. Recordando también que hierba perenne bulbosa de hasta 1, 5 m, hojas planas lineares, inflorescencia en umbela esférica con flores rosadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas planas lineares",
      distractores: ["Asparagus albus", "Allium neapolitanum", "Asparagus acutifolius"],
      dificultad: 2
    }
  },
  {
    id: "allium-neapolitanum",
    nombreCientifico: "Allium neapolitanum",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 30 cm, hojas basales lineares, inflorescencia en umbela de flores blancas estrelladas",
    fotos: ["img/liliaceae/allium-neapolitanum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne bulbosa de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales lineares, inflorescencia en umbela de flores blancas estrelladas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en umbela de flores blancas estrelladas. Recordando también que hierba perenne bulbosa de hasta 30 cm, hojas basales lineares, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales lineares",
      distractores: ["Asparagus albus", "Allium ampeloprasum", "Asparagus acutifolius"],
      dificultad: 2
    }
  },
  {
    id: "asparagus-acutifolius",
    nombreCientifico: "Asparagus acutifolius",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne espinoso de hasta 1,5 m, tallos con espinas, cladodios fasciculados, fruto en baya negra",
    fotos: ["img/liliaceae/asparagus-acutifolius-1.jpg", "img/liliaceae/asparagus-acutifolius-2.jpg", "img/liliaceae/asparagus-acutifolius-3.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne espinoso de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: fruto en baya negra. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya negra. Recordando también que arbusto perenne espinoso de hasta 1, 5 m, tallos con espinas, cladodios fasciculados, ¿qué especie exacta es?",
      rasgoClave: "Arbusto perenne espinoso de hasta 1",
      distractores: ["Asparagus albus", "Allium ampeloprasum", "Allium neapolitanum"],
      dificultad: 1
    }
  },
  {
    id: "asparagus-albus",
    nombreCientifico: "Asparagus albus",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne blanquecino de hasta 1 m, tallos con espinas, cladodios fasciculados finos, fruto en baya roja",
    fotos: ["img/liliaceae/asparagus-albus-1.jpg", "img/liliaceae/asparagus-albus-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne blanquecino de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: fruto en baya roja. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya roja. Recordando también que arbusto perenne blanquecino de hasta 1 m, tallos con espinas, cladodios fasciculados finos, ¿qué especie exacta es?",
      rasgoClave: "Tallos con espinas",
      distractores: ["Asparagus acutifolius", "Allium ampeloprasum", "Allium neapolitanum"],
      dificultad: 1
    }
  },
  {
    id: "malva-hispanica",
    nombreCientifico: "Malva hispanica",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas palmatífidas, flores rosadas axilares solitarias, fruto en esquizocarpo",
    fotos: ["img/malvaceae/malva-hispanica-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmatífidas, flores rosadas axilares solitarias. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en esquizocarpo. Recordando también que hierba anual de hasta 60 cm, hojas palmatífidas, flores rosadas axilares solitarias, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmatífidas",
      distractores: ["Malva nicaeensis", "Malva parviflora", "Malva sylvestris"],
      dificultad: 2
    }
  },
  {
    id: "malva-parviflora",
    nombreCientifico: "Malva parviflora",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, hojas orbiculares palmatífidas, flores pequeñas blancas o rosadas axilares, fruto aplanado",
    fotos: ["img/malvaceae/malva-parviflora-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas orbiculares palmatífidas, flores pequeñas blancas o rosadas axilares. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto aplanado. Recordando también que hierba anual de hasta 50 cm, hojas orbiculares palmatífidas, flores pequeñas blancas o rosadas axilares, ¿qué especie exacta es?",
      rasgoClave: "Hojas orbiculares palmatífidas",
      distractores: ["Malva sylvestris", "Malva hispanica", "Malva nicaeensis"],
      dificultad: 2
    }
  },
  {
    id: "malva-nicaeensis",
    nombreCientifico: "Malva nicaeensis",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas palmatífidas con lóbulos redondeados, flores rosadas agrupadas en fascículos axilares",
    fotos: ["img/malvaceae/malva-nicaeensis-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmatífidas con lóbulos redondeados, flores rosadas agrupadas en fascículos axilares. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores rosadas agrupadas en fascículos axilares. Recordando también que hierba anual de hasta 60 cm, hojas palmatífidas con lóbulos redondeados, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmatífidas con lóbulos redondeados",
      distractores: ["Malva hispanica", "Malva parviflora", "Malva sylvestris"],
      dificultad: 2
    }
  },
  {
    id: "malva-sylvestris",
    nombreCientifico: "Malva sylvestris",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, hojas palmatífidas crenadas, flores grandes rosado-purpúreas con venas más oscuras, fruto en esquizocarpo",
    fotos: ["img/malvaceae/malva-sylvestris-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmatífidas crenadas, flores grandes rosado-purpúreas con venas más oscuras. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en esquizocarpo. Recordando también que hierba perenne de hasta 1 m, hojas palmatífidas crenadas, flores grandes rosado-purpúreas con venas más oscuras, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmatífidas crenadas",
      distractores: ["Malva nicaeensis", "Malva parviflora", "Malva hispanica"],
      dificultad: 2
    }
  },
  {
    id: "ficus-carica",
    nombreCientifico: "Ficus carica",
    familia: "Moraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 8 m, hojas grandes palmatífidas ásperas, fruto en sicono (higo) comestible, inflorescencia interna",
    fotos: ["img/moraceae/ficus-carica-1.jpg", "img/moraceae/ficus-carica-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 8 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas grandes palmatífidas ásperas, fruto en sicono (higo) comestible. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia interna. Recordando también que árbol caducifolio de hasta 8 m, hojas grandes palmatífidas ásperas, fruto en sicono (higo) comestible, ¿qué especie exacta es?",
      rasgoClave: "Hojas grandes palmatífidas ásperas",
      distractores: ["Malva sylvestris", "Mentha pulegium", "Myrtus communis"],
      dificultad: 1
    }
  },
  {
    id: "eucalyptus-camaldulensis",
    nombreCientifico: "Eucalyptus camaldulensis",
    familia: "Myrtaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 30 m, hojas juveniles opuestas y adultas alternas lanceoladas colgantes, fruto en cápsula, corteza lisa",
    fotos: ["img/myrtaceae/eucalyptus-camaldulensis-1.jpg", "img/myrtaceae/eucalyptus-camaldulensis-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de hasta 30 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas juveniles opuestas y adultas alternas lanceoladas colgantes, fruto en cápsula. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corteza lisa. Recordando también que árbol perenne de hasta 30 m, hojas juveniles opuestas y adultas alternas lanceoladas colgantes, fruto en cápsula, ¿qué especie exacta es?",
      rasgoClave: "Hojas juveniles opuestas y adultas alternas lanceoladas colgantes",
      distractores: ["Aristolochia baetica", "Arundo donax", "Asparagus acutifolius"],
      dificultad: 1
    }
  },
  {
    id: "myrtus-communis",
    nombreCientifico: "Myrtus communis",
    familia: "Myrtaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne aromático de hasta 3 m, hojas opuestas ovales puntiagudas, flores blancas con estambres numerosos, fruto en baya negra",
    fotos: ["img/myrtaceae/myrtus-communis-1.jpg", "img/myrtaceae/myrtus-communis-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne aromático de hasta 3 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas opuestas ovales puntiagudas, flores blancas con estambres numerosos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya negra. Recordando también que arbusto perenne aromático de hasta 3 m, hojas opuestas ovales puntiagudas, flores blancas con estambres numerosos, ¿qué especie exacta es?",
      rasgoClave: "Arbusto perenne aromático de hasta 3 m",
      distractores: ["Malva hispanica", "Malva nicaeensis", "Malva parviflora"],
      dificultad: 1
    }
  },
  {
    id: "jasminum-fruticans",
    nombreCientifico: "Jasminum fruticans",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas trifoliadas alternas, flores amarillas tubulares con 5 lóbulos, fruto en baya negra brillante",
    fotos: ["img/oleaceae/jasminum-fruticans-1.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas trifoliadas alternas, flores amarillas tubulares con 5 lóbulos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya negra brillante. Recordando también que arbusto de hasta 2 m, hojas trifoliadas alternas, flores amarillas tubulares con 5 lóbulos, ¿qué especie exacta es?",
      rasgoClave: "Hojas trifoliadas alternas",
      distractores: ["Lolium rigidum", "Lonicera implexa", "Lupinus angustifolius"],
      dificultad: 2
    }
  },
  {
    id: "fraxinus-angustifolia",
    nombreCientifico: "Fraxinus angustifolia",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas compuestas imparipinnadas con folíolos lanceolados aserrados, fruto en sámara alada",
    fotos: ["img/oleaceae/fraxinus-angustifolia-1.jpg", "img/oleaceae/fraxinus-angustifolia-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 20 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas compuestas imparipinnadas con folíolos lanceolados aserrados, fruto en sámara alada. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en sámara alada. Recordando también que árbol caducifolio de hasta 20 m, hojas compuestas imparipinnadas con folíolos lanceolados aserrados, ¿qué especie exacta es?",
      rasgoClave: "Hojas compuestas imparipinnadas con folíolos lanceolados aserrados",
      distractores: ["Rumex pulcher", "Rumex scutatus", "Sanguisorba minor"],
      dificultad: 1
    }
  },
  {
    id: "olea-europaea",
    nombreCientifico: "Olea europaea",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 10 m, hojas opuestas lanceoladas con envés plateado, flores pequeñas blanquecinas, fruto en drupa (aceituna)",
    fotos: ["img/oleaceae/olea-europaea-1.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol perenne de hasta 10 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas opuestas lanceoladas con envés plateado, flores pequeñas blanquecinas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en drupa (aceituna). Recordando también que árbol perenne de hasta 10 m, hojas opuestas lanceoladas con envés plateado, flores pequeñas blanquecinas, ¿qué especie exacta es?",
      rasgoClave: "Hojas opuestas lanceoladas con envés plateado",
      distractores: ["Galium aparine", "Gladiolus communis", "Gynandriris sisyrinchium"],
      dificultad: 2
    }
  },
  {
    id: "paeonia-broteri",
    nombreCientifico: "Paeonia broteri",
    familia: "Paeoniaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas biternadas con segmentos lanceolados, flores grandes rosado-purpúreas de 5-8 pétalos, fruto en folículo",
    fotos: ["img/paeoniaceae/paeonia-broteri-1.jpg", "img/paeoniaceae/paeonia-broteri-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas biternadas con segmentos lanceolados, flores grandes rosado-purpúreas de 5-8 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en folículo. Recordando también que hierba perenne de hasta 60 cm, hojas biternadas con segmentos lanceolados, flores grandes rosado-purpúreas de 5-8 pétalos, ¿qué especie exacta es?",
      rasgoClave: "Hojas biternadas con segmentos lanceolados",
      distractores: ["Verbascum sinuatum", "Viburnum tinus", "Vinca difformis"],
      dificultad: 1
    }
  },
  {
    id: "fumaria-capreolata",
    nombreCientifico: "Fumaria capreolata",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 1 m, hojas pinnatisectas glaucas, inflorescencia en racimo con flores blancas con ápice púrpura",
    fotos: ["img/papaveraceae/fumaria-capreolata-1.jpg", "img/papaveraceae/fumaria-capreolata-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba anual trepadora de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas glaucas, inflorescencia en racimo con flores blancas con ápice púrpura. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en racimo con flores blancas con ápice púrpura. Recordando también que hierba anual trepadora de hasta 1 m, hojas pinnatisectas glaucas, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas glaucas",
      distractores: ["Carex divulsa", "Carlina corymbosa", "Carlina racemosa"],
      dificultad: 1
    }
  },
  {
    id: "papaver-hybridum",
    nombreCientifico: "Papaver hybridum",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas pinnatisectas con segmentos agudos, flores púrpura-violáceas con cápsula subglobosa cubierta de pelos rígidos",
    fotos: ["img/papaveraceae/papaver-hybridum-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas con segmentos agudos, flores púrpura-violáceas con cápsula subglobosa cubierta de pelos rígidos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores púrpura-violáceas con cápsula subglobosa cubierta de pelos rígidos. Recordando también que hierba anual de hasta 40 cm, hojas pinnatisectas con segmentos agudos, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas con segmentos agudos",
      distractores: ["Stachys ocymastrum", "Stipa capensis", "Tamus communis"],
      dificultad: 2
    }
  },
  {
    id: "papaver-rhoeas",
    nombreCientifico: "Papaver rhoeas",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas pinnatisectas, flores grandes rojas con 4 pétalos y mancha negra en la base, cápsula globosa lisa",
    fotos: ["img/papaveraceae/papaver-rhoeas-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas pinnatisectas, flores grandes rojas con 4 pétalos y mancha negra en la base. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: cápsula globosa lisa. Recordando también que hierba anual de hasta 80 cm, hojas pinnatisectas, flores grandes rojas con 4 pétalos y mancha negra en la base, ¿qué especie exacta es?",
      rasgoClave: "Hojas pinnatisectas",
      distractores: ["Cynosurus echinatus", "Cyperus rotundus", "Dactylis glomerata"],
      dificultad: 2
    }
  },
  {
    id: "plantago-afra",
    nombreCientifico: "Plantago afra",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas lineares opuestas, inflorescencia en espiga densa ovoide, fruto en pixidio",
    fotos: ["img/plantaginaceae/plantago-afra-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lineares opuestas, inflorescencia en espiga densa ovoide. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en pixidio. Recordando también que hierba anual de hasta 30 cm, hojas lineares opuestas, inflorescencia en espiga densa ovoide, ¿qué especie exacta es?",
      rasgoClave: "Hojas lineares opuestas",
      distractores: ["Plantago lagopus", "Plantago lanceolata", "Plantago coronopus"],
      dificultad: 2
    }
  },
  {
    id: "plantago-coronopus",
    nombreCientifico: "Plantago coronopus",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual o bienal, hojas en roseta pinnatífidas, inflorescencia en espiga cilíndrica, flores pequeñas con corola blanquecina",
    fotos: ["img/plantaginaceae/plantago-coronopus-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual o bienal. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas en roseta pinnatífidas, inflorescencia en espiga cilíndrica. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores pequeñas con corola blanquecina. Recordando también que hierba anual o bienal, hojas en roseta pinnatífidas, inflorescencia en espiga cilíndrica, ¿qué especie exacta es?",
      rasgoClave: "Hojas en roseta pinnatífidas",
      distractores: ["Plantago afra", "Plantago lagopus", "Plantago lanceolata"],
      dificultad: 2
    }
  },
  {
    id: "plantago-lagopus",
    nombreCientifico: "Plantago lagopus",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas basales lanceoladas, inflorescencia en espiga ovoide densa, brácteas vellosas",
    fotos: ["img/plantaginaceae/plantago-lagopus-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales lanceoladas, inflorescencia en espiga ovoide densa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: brácteas vellosas. Recordando también que hierba anual de hasta 30 cm, hojas basales lanceoladas, inflorescencia en espiga ovoide densa, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales lanceoladas",
      distractores: ["Plantago afra", "Plantago coronopus", "Plantago lanceolata"],
      dificultad: 2
    }
  },
  {
    id: "plantago-lanceolata",
    nombreCientifico: "Plantago lanceolata",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas lanceoladas con 3-7 nervios paralelos, inflorescencia en espiga ovoide-cilíndrica con estambres largos",
    fotos: ["img/plantaginaceae/plantago-lanceolata-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas con 3-7 nervios paralelos, inflorescencia en espiga ovoide-cilíndrica con estambres largos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga ovoide-cilíndrica con estambres largos. Recordando también que hierba perenne de hasta 60 cm, hojas lanceoladas con 3-7 nervios paralelos, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas con 3-7 nervios paralelos",
      distractores: ["Plantago lagopus", "Plantago afra", "Plantago coronopus"],
      dificultad: 2
    }
  },
  {
    id: "arundo-donax",
    nombreCientifico: "Arundo donax",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne gigante de hasta 4 m, tallos gruesos fistulosos, hojas anchas caulinares, inflorescencia en panícula grande plumosa",
    fotos: ["img/poaceae/arundo-donax-1.jpg", "img/poaceae/arundo-donax-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne gigante de hasta 4 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas anchas caulinares, inflorescencia en panícula grande plumosa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en panícula grande plumosa. Recordando también que hierba perenne gigante de hasta 4 m, tallos gruesos fistulosos, hojas anchas caulinares, ¿qué especie exacta es?",
      rasgoClave: "Hojas anchas caulinares",
      distractores: ["Avena sterilis", "Briza maxima", "Bromus madritensis"],
      dificultad: 2
    }
  },
  {
    id: "avena-sterilis",
    nombreCientifico: "Avena sterilis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 1 m, inflorescencia en panícula laxa, espiguillas con 2-3 flores, aristas geniculadas largas, base del grano peluda",
    fotos: ["img/poaceae/avena-sterilis-1.jpg", "img/poaceae/avena-sterilis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula laxa, espiguillas con 2-3 flores. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: base del grano peluda. Recordando también que hierba anual de hasta 1 m, inflorescencia en panícula laxa, espiguillas con 2-3 flores, aristas geniculadas largas, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula laxa",
      distractores: ["Hordeum leporinum", "Hyparrhenia hirta", "Lagurus ovatus"],
      dificultad: 2
    }
  },
  {
    id: "briza-maxima",
    nombreCientifico: "Briza maxima",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, inflorescencia en panícula con espiguillas colgantes acorazonadas, glumas y lemas papiráceas",
    fotos: ["img/poaceae/briza-maxima-1.jpg", "img/poaceae/briza-maxima-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula con espiguillas colgantes acorazonadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: glumas y lemas papiráceas. Recordando también que hierba anual de hasta 60 cm, inflorescencia en panícula con espiguillas colgantes acorazonadas, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula con espiguillas colgantes acorazonadas",
      distractores: ["Arundo donax", "Avena sterilis", "Bromus madritensis"],
      dificultad: 2
    }
  },
  {
    id: "bromus-madritensis",
    nombreCientifico: "Bromus madritensis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, inflorescencia en panícula erecta contraída, espiguillas lanceoladas con aristas rectas",
    fotos: ["img/poaceae/bromus-madritensis-1.jpg", "img/poaceae/bromus-madritensis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula erecta contraída. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espiguillas lanceoladas con aristas rectas. Recordando también que hierba anual de hasta 40 cm, inflorescencia en panícula erecta contraída, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula erecta contraída",
      distractores: ["Hyparrhenia hirta", "Lagurus ovatus", "Lamarckia aurea"],
      dificultad: 2
    }
  },
  {
    id: "cynosurus-echinatus",
    nombreCientifico: "Cynosurus echinatus",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula densa espiciforme con glumas ciliadas con aristas rectas formando un erizo",
    fotos: ["img/poaceae/cynosurus-echinatus-1.jpg", "img/poaceae/cynosurus-echinatus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula densa espiciforme con glumas ciliadas con aristas rectas formando un erizo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en panícula densa espiciforme con glumas ciliadas con aristas rectas formando un erizo. Recordando también que hierba anual de hasta 50 cm, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula densa espiciforme con glumas ciliadas con aristas rectas formando un erizo",
      distractores: ["Sorghum halepense", "Stipa capensis", "Arundo donax"],
      dificultad: 2
    }
  },
  {
    id: "dactylis-glomerata",
    nombreCientifico: "Dactylis glomerata",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne cespitosa de hasta 1 m, inflorescencia en panícula unilateral con espiguillas agrupadas en glomérulos densos",
    fotos: ["img/poaceae/dactylis-glomerata-1.jpg", "img/poaceae/dactylis-glomerata-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne cespitosa de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula unilateral con espiguillas agrupadas en glomérulos densos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en panícula unilateral con espiguillas agrupadas en glomérulos densos. Recordando también que hierba perenne cespitosa de hasta 1 m, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula unilateral con espiguillas agrupadas en glomérulos densos",
      distractores: ["Arundo donax", "Avena sterilis", "Briza maxima"],
      dificultad: 2
    }
  },
  {
    id: "hordeum-leporinum",
    nombreCientifico: "Hordeum leporinum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en espiga densa con aristas largas, espiguillas en tríos",
    fotos: ["img/poaceae/hordeum-leporinum-1.jpg", "img/poaceae/hordeum-leporinum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en espiga densa con aristas largas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espiguillas en tríos. Recordando también que hierba anual de hasta 50 cm, inflorescencia en espiga densa con aristas largas, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en espiga densa con aristas largas",
      distractores: ["Piptatherum miliaceum", "Poa annua", "Sorghum halepense"],
      dificultad: 2
    }
  },
  {
    id: "hyparrhenia-hirta",
    nombreCientifico: "Hyparrhenia hirta",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, inflorescencia en panícula formada por racimos pares con aristas geniculadas, base peluda",
    fotos: ["img/poaceae/hyparrhenia-hirta-1.jpg", "img/poaceae/hyparrhenia-hirta-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula formada por racimos pares con aristas geniculadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: base peluda. Recordando también que hierba perenne de hasta 1 m, inflorescencia en panícula formada por racimos pares con aristas geniculadas, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula formada por racimos pares con aristas geniculadas",
      distractores: ["Piptatherum miliaceum", "Poa annua", "Sorghum halepense"],
      dificultad: 2
    }
  },
  {
    id: "lagurus-ovatus",
    nombreCientifico: "Lagurus ovatus",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula densa ovoide lanosa de color paja, aspecto de cola de liebre",
    fotos: ["img/poaceae/lagurus-ovatus-1.jpg", "img/poaceae/lagurus-ovatus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula densa ovoide lanosa de color paja. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: aspecto de cola de liebre. Recordando también que hierba anual de hasta 50 cm, inflorescencia en panícula densa ovoide lanosa de color paja, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula densa ovoide lanosa de color paja",
      distractores: ["Hordeum leporinum", "Hyparrhenia hirta", "Lamarckia aurea"],
      dificultad: 2
    }
  },
  {
    id: "lamarckia-aurea",
    nombreCientifico: "Lamarckia aurea",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, inflorescencia en panícula densa dorada brillante, espiguillas comprimidas",
    fotos: ["img/poaceae/lamarckia-aurea-1.jpg", "img/poaceae/lamarckia-aurea-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula densa dorada brillante. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espiguillas comprimidas. Recordando también que hierba anual de hasta 30 cm, inflorescencia en panícula densa dorada brillante, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula densa dorada brillante",
      distractores: ["Hordeum leporinum", "Hyparrhenia hirta", "Lagurus ovatus"],
      dificultad: 2
    }
  },
  {
    id: "lolium-rigidum",
    nombreCientifico: "Lolium rigidum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, inflorescencia en espiga dística, espiguillas sésiles alternas, sin aristas",
    fotos: ["img/poaceae/lolium-rigidum-1.jpg", "img/poaceae/lolium-rigidum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en espiga dística. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: sin aristas. Recordando también que hierba anual de hasta 60 cm, inflorescencia en espiga dística, espiguillas sésiles alternas, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en espiga dística",
      distractores: ["Arundo donax", "Avena sterilis", "Briza maxima"],
      dificultad: 2
    }
  },
  {
    id: "piptatherum-miliaceum",
    nombreCientifico: "Piptatherum miliaceum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1,5 m, inflorescencia en panícula grande laxa, espiguillas con arista fina caduca",
    fotos: ["img/poaceae/piptatherum-miliaceum-1.jpg", "img/poaceae/piptatherum-miliaceum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula grande laxa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espiguillas con arista fina caduca. Recordando también que hierba perenne de hasta 1, 5 m, inflorescencia en panícula grande laxa, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula grande laxa",
      distractores: ["Arundo donax", "Avena sterilis", "Briza maxima"],
      dificultad: 2
    }
  },
  {
    id: "poa-annua",
    nombreCientifico: "Poa annua",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 20 cm, inflorescencia en panícula piramidal, espiguillas con 3-5 flores, hojas con lígula obtusa",
    fotos: ["img/poaceae/poa-annua-1.jpg", "img/poaceae/poa-annua-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual pequeña de hasta 20 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula piramidal, espiguillas con 3-5 flores. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: hojas con lígula obtusa. Recordando también que hierba anual pequeña de hasta 20 cm, inflorescencia en panícula piramidal, espiguillas con 3-5 flores, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula piramidal",
      distractores: ["Arundo donax", "Avena sterilis", "Briza maxima"],
      dificultad: 2
    }
  },
  {
    id: "sorghum-halepense",
    nombreCientifico: "Sorghum halepense",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rizomatosa de hasta 2 m, inflorescencia en panícula grande laxa, espiguillas en pares (una sésil y otra pedicelada)",
    fotos: ["img/poaceae/sorghum-halepense-1.jpg", "img/poaceae/sorghum-halepense-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne rizomatosa de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula grande laxa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: espiguillas en pares (una sésil y otra pedicelada). Recordando también que hierba perenne rizomatosa de hasta 2 m, inflorescencia en panícula grande laxa, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula grande laxa",
      distractores: ["Bromus madritensis", "Cynosurus echinatus", "Dactylis glomerata"],
      dificultad: 2
    }
  },
  {
    id: "stipa-capensis",
    nombreCientifico: "Stipa capensis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula contraída, aristas largas plumosas (hasta 10 cm) retorcidas en la base",
    fotos: ["img/poaceae/stipa-capensis-1.jpg", "img/poaceae/stipa-capensis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: inflorescencia en panícula contraída. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: aristas largas plumosas (hasta 10 cm) retorcidas en la base. Recordando también que hierba anual de hasta 50 cm, inflorescencia en panícula contraída, ¿qué especie exacta es?",
      rasgoClave: "Inflorescencia en panícula contraída",
      distractores: ["Briza maxima", "Bromus madritensis", "Cynosurus echinatus"],
      dificultad: 2
    }
  },
  {
    id: "rumex-bucephalophorus",
    nombreCientifico: "Rumex bucephalophorus",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas basales espatuladas, inflorescencia en racimo con frutos rodeados de dientes ganchudos",
    fotos: ["img/polygonaceae/rumex-bucephalophorus-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales espatuladas, inflorescencia en racimo con frutos rodeados de dientes ganchudos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en racimo con frutos rodeados de dientes ganchudos. Recordando también que hierba anual de hasta 30 cm, hojas basales espatuladas, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales espatuladas",
      distractores: ["Tamus communis", "Teucrium capitatum", "Teucrium fruticans"],
      dificultad: 2
    }
  },
  {
    id: "rumex-scutatus",
    nombreCientifico: "Rumex scutatus",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 40 cm, hojas sagitadas con lóbulos basales divergentes, inflorescencia en panícula laxa",
    fotos: ["img/polygonaceae/rumex-scutatus-1.jpg", "img/polygonaceae/rumex-scutatus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas sagitadas con lóbulos basales divergentes, inflorescencia en panícula laxa. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en panícula laxa. Recordando también que hierba perenne de hasta 40 cm, hojas sagitadas con lóbulos basales divergentes, ¿qué especie exacta es?",
      rasgoClave: "Hojas sagitadas con lóbulos basales divergentes",
      distractores: ["Quercus faginea", "Quercus pyrenaica", "Quercus rotundifolia"],
      dificultad: 1
    }
  },
  {
    id: "rumex-pulcher",
    nombreCientifico: "Rumex pulcher",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas inferiores con lóbulos basales divergentes, inflorescencia en verticilastros con valvas dentadas",
    fotos: ["img/polygonaceae/rumex-pulcher-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 60 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas inferiores con lóbulos basales divergentes, inflorescencia en verticilastros con valvas dentadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en verticilastros con valvas dentadas. Recordando también que hierba perenne de hasta 60 cm, hojas inferiores con lóbulos basales divergentes, ¿qué especie exacta es?",
      rasgoClave: "Hojas inferiores con lóbulos basales divergentes",
      distractores: ["Quercus suber", "Ranunculus ficaria", "Ranunculus muricatus"],
      dificultad: 2
    }
  },
  {
    id: "ranunculus-ficaria",
    nombreCientifico: "Ranunculus ficaria",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con tubérculos radicales, hojas acorazonadas brillantes, flores amarillas con 8-12 pétalos brillantes",
    fotos: ["img/ranunculaceae/ranunculus-ficaria-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne con tubérculos radicales. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas acorazonadas brillantes, flores amarillas con 8-12 pétalos brillantes. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores amarillas con 8-12 pétalos brillantes. Recordando también que hierba perenne con tubérculos radicales, hojas acorazonadas brillantes, ¿qué especie exacta es?",
      rasgoClave: "Hojas acorazonadas brillantes",
      distractores: ["Ficus carica", "Fraxinus angustifolia", "Fumaria capreolata"],
      dificultad: 2
    }
  },
  {
    id: "ranunculus-muricatus",
    nombreCientifico: "Ranunculus muricatus",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas palmatífidas con lóbulos redondeados, flores amarillas con 5 pétalos, fruto con tubérculos",
    fotos: ["img/ranunculaceae/ranunculus-muricatus-1.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba anual de hasta 40 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas palmatífidas con lóbulos redondeados, flores amarillas con 5 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto con tubérculos. Recordando también que hierba anual de hasta 40 cm, hojas palmatífidas con lóbulos redondeados, flores amarillas con 5 pétalos, ¿qué especie exacta es?",
      rasgoClave: "Hojas palmatífidas con lóbulos redondeados",
      distractores: ["Cynosurus echinatus", "Cyperus rotundus", "Dactylis glomerata"],
      dificultad: 2
    }
  },
  {
    id: "ranunculus-peltatus",
    nombreCientifico: "Ranunculus peltatus",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne acuática de hasta 1 m, hojas flotantes peltadas y sumergidas filiformes, flores blancas con 5 pétalos y uña amarilla",
    fotos: ["img/ranunculaceae/ranunculus-peltatus-1.jpg", "img/ranunculaceae/ranunculus-peltatus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne acuática de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas flotantes peltadas y sumergidas filiformes, flores blancas con 5 pétalos y uña amarilla. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores blancas con 5 pétalos y uña amarilla. Recordando también que hierba perenne acuática de hasta 1 m, hojas flotantes peltadas y sumergidas filiformes, ¿qué especie exacta es?",
      rasgoClave: "Hojas flotantes peltadas y sumergidas filiformes",
      distractores: ["Lupinus angustifolius", "Malva hispanica", "Malva nicaeensis"],
      dificultad: 1
    }
  },
  {
    id: "rosa-canina",
    nombreCientifico: "Rosa canina",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador de hasta 3 m, tallos con aguijones curvos, hojas imparipinnadas con 5-7 folíolos aserrados, flores rosadas, fruto en cinorrodón rojo",
    fotos: ["img/rosaceae/rosa-canina-1.jpg", "img/rosaceae/rosa-canina-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Arbusto trepador de hasta 3 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas imparipinnadas con 5-7 folíolos aserrados, flores rosadas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en cinorrodón rojo. Recordando también que arbusto trepador de hasta 3 m, tallos con aguijones curvos, hojas imparipinnadas con 5-7 folíolos aserrados, flores rosadas, ¿qué especie exacta es?",
      rasgoClave: "Hojas imparipinnadas con 5-7 folíolos aserrados",
      distractores: ["Smilax aspera", "Smyrnium olusatrum", "Sorghum halepense"],
      dificultad: 1
    }
  },
  {
    id: "rubus-ulmifolius",
    nombreCientifico: "Rubus ulmifolius",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto sarmentoso con aguijones, hojas imparipinnadas con 3-5 folíolos, flores rosadas en panícula, fruto en polidrupa negra comestible",
    fotos: ["img/rosaceae/rubus-ulmifolius-1.jpg", "img/rosaceae/rubus-ulmifolius-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto sarmentoso con aguijones. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas imparipinnadas con 3-5 folíolos, flores rosadas en panícula. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en polidrupa negra comestible. Recordando también que arbusto sarmentoso con aguijones, hojas imparipinnadas con 3-5 folíolos, flores rosadas en panícula, ¿qué especie exacta es?",
      rasgoClave: "Hojas imparipinnadas con 3-5 folíolos",
      distractores: ["Ceratonia siliqua", "Chamaemelum fuscatum", "Chamaemelum mixtum"],
      dificultad: 1
    }
  },
  {
    id: "sanguisorba-minor",
    nombreCientifico: "Sanguisorba minor",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 50 cm, hojas imparipinnadas con folíolos dentados, inflorescencia en espiga globosa verde-amarillenta",
    fotos: ["img/rosaceae/sanguisorba-minor-1.jpg", "img/rosaceae/sanguisorba-minor-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 50 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas imparipinnadas con folíolos dentados, inflorescencia en espiga globosa verde-amarillenta. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga globosa verde-amarillenta. Recordando también que hierba perenne de hasta 50 cm, hojas imparipinnadas con folíolos dentados, ¿qué especie exacta es?",
      rasgoClave: "Hojas imparipinnadas con folíolos dentados",
      distractores: ["Populus alba", "Quercus coccifera", "Quercus faginea"],
      dificultad: 1
    }
  },
  {
    id: "galium-aparine",
    nombreCientifico: "Galium aparine",
    familia: "Rubiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 1,5 m, tallos cuadrangulares con ganchos, hojas en verticilos de 6-8 lineares, fruto con pelos ganchudos",
    fotos: ["img/rubiaceae/galium-aparine-1.jpg", "img/rubiaceae/galium-aparine-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba anual trepadora de hasta 1. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas en verticilos de 6-8 lineares, fruto con pelos ganchudos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto con pelos ganchudos. Recordando también que hierba anual trepadora de hasta 1, 5 m, tallos cuadrangulares con ganchos, hojas en verticilos de 6-8 lineares, ¿qué especie exacta es?",
      rasgoClave: "Hojas en verticilos de 6-8 lineares",
      distractores: ["Carlina racemosa", "Castanea sativa", "Celtis australis"],
      dificultad: 1
    }
  },
  {
    id: "rubia-peregrina",
    nombreCientifico: "Rubia peregrina",
    familia: "Rubiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne trepadora de hasta 2 m, tallos cuadrangulares con aguijones, hojas en verticilos de 4 coriáceas, fruto en baya negra",
    fotos: ["img/rubiaceae/rubia-peregrina-1.jpg", "img/rubiaceae/rubia-peregrina-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Hierba perenne trepadora de hasta 2 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas en verticilos de 4 coriáceas, fruto en baya negra. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en baya negra. Recordando también que hierba perenne trepadora de hasta 2 m, tallos cuadrangulares con aguijones, hojas en verticilos de 4 coriáceas, ¿qué especie exacta es?",
      rasgoClave: "Hojas en verticilos de 4 coriáceas",
      distractores: ["Trifolium resupinatum", "Trifolium stellatum", "Trifolium tomentosum"],
      dificultad: 1
    }
  },
  {
    id: "populus-alba",
    nombreCientifico: "Populus alba",
    familia: "Salicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 25 m, hojas lobuladas con envés blanco-tomentoso, corteza lisa blanquecina, amentos colgantes",
    fotos: ["img/salicaceae/populus-alba-1.jpg", "img/salicaceae/populus-alba-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 25 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lobuladas con envés blanco-tomentoso. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: amentos colgantes. Recordando también que árbol caducifolio de hasta 25 m, hojas lobuladas con envés blanco-tomentoso, corteza lisa blanquecina, ¿qué especie exacta es?",
      rasgoClave: "Hojas lobuladas con envés blanco-tomentoso",
      distractores: ["Silene colorata", "Silene inaperta", "Sinapis alba"],
      dificultad: 1
    }
  },
  {
    id: "osyris-alba",
    nombreCientifico: "Osyris alba",
    familia: "Santalaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne semiparásito de hasta 1 m, hojas alternas lineares coriáceas, flores pequeñas verdosas, fruto en drupa roja carnosa",
    fotos: ["img/santalaceae/osyris-alba-1.jpg", "img/santalaceae/osyris-alba-2.jpg"],
    detective: {
      tipoBiologico: "Arbusto",
      paso1: "Observa la planta en su conjunto. Arbusto perenne semiparásito de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas alternas lineares coriáceas, flores pequeñas verdosas. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en drupa roja carnosa. Recordando también que arbusto perenne semiparásito de hasta 1 m, hojas alternas lineares coriáceas, flores pequeñas verdosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas alternas lineares coriáceas",
      distractores: ["Anchusa azurea", "Antirrhinum majus", "Arbutus unedo"],
      dificultad: 1
    }
  },
  {
    id: "antirrhinum-majus",
    nombreCientifico: "Antirrhinum majus",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 80 cm, hojas lanceoladas, inflorescencia en racimo con flores grandes bilabiadas de color rosa-púrpura",
    fotos: ["img/scrophulariaceae/antirrhinum-majus-1.jpg", "img/scrophulariaceae/antirrhinum-majus-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne de hasta 80 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas lanceoladas, inflorescencia en racimo con flores grandes bilabiadas de color rosa-púrpura. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en racimo con flores grandes bilabiadas de color rosa-púrpura. Recordando también que hierba perenne de hasta 80 cm, hojas lanceoladas, ¿qué especie exacta es?",
      rasgoClave: "Hojas lanceoladas",
      distractores: ["Rumex bucephalophorus", "Rumex pulcher", "Rumex scutatus"],
      dificultad: 1
    }
  },
  {
    id: "cymbalaria-muralis",
    nombreCientifico: "Cymbalaria muralis",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rastrera de hasta 30 cm, hojas alternas palmeadas lobuladas de hasta 3 cm, flores pequeñas azul-lila con paladar amarillo",
    fotos: ["img/scrophulariaceae/cymbalaria-muralis-1.jpg", "img/scrophulariaceae/cymbalaria-muralis-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba perenne rastrera de hasta 30 cm. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas alternas palmeadas lobuladas de hasta 3 cm, flores pequeñas azul-lila con paladar amarillo. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: flores pequeñas azul-lila con paladar amarillo. Recordando también que hierba perenne rastrera de hasta 30 cm, hojas alternas palmeadas lobuladas de hasta 3 cm, ¿qué especie exacta es?",
      rasgoClave: "Hojas alternas palmeadas lobuladas de hasta 3 cm",
      distractores: ["Crassula tillaea", "Cynoglossum creticum", "Cynosurus echinatus"],
      dificultad: 1
    }
  },
  {
    id: "verbascum-sinuatum",
    nombreCientifico: "Verbascum sinuatum",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal de hasta 1 m, hojas basales grandes ondulado-sinuadas tomentosas, inflorescencia en espiga con flores amarillas de 5 pétalos",
    fotos: ["img/scrophulariaceae/verbascum-sinuatum-1.jpg", "img/scrophulariaceae/verbascum-sinuatum-2.jpg"],
    detective: {
      tipoBiologico: "Hierba",
      paso1: "Observa la planta en su conjunto. Hierba bienal de hasta 1 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas basales grandes ondulado-sinuadas tomentosas, inflorescencia en espiga con flores amarillas de 5 pétalos. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: inflorescencia en espiga con flores amarillas de 5 pétalos. Recordando también que hierba bienal de hasta 1 m, hojas basales grandes ondulado-sinuadas tomentosas, ¿qué especie exacta es?",
      rasgoClave: "Hojas basales grandes ondulado-sinuadas tomentosas",
      distractores: ["Olea europaea", "Osyris alba", "Paeonia broteri"],
      dificultad: 1
    }
  },
  {
    id: "smilax-aspera",
    nombreCientifico: "Smilax aspera",
    familia: "Smilacaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador perenne con espinas, hojas acorazonadas espinosas con nervios paralelos, fruto en baya roja, zarcillos en pecíolo",
    fotos: ["img/smilacaceae/smilax-aspera-1.jpg", "img/smilacaceae/smilax-aspera-2.jpg"],
    detective: {
      tipoBiologico: "Trepadora",
      paso1: "Observa la planta en su conjunto. Arbusto trepador perenne con espinas. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas acorazonadas espinosas con nervios paralelos, fruto en baya roja. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: zarcillos en pecíolo. Recordando también que arbusto trepador perenne con espinas, hojas acorazonadas espinosas con nervios paralelos, fruto en baya roja, ¿qué especie exacta es?",
      rasgoClave: "Arbusto trepador perenne con espinas",
      distractores: ["Malva sylvestris", "Mentha pulegium", "Myrtus communis"],
      dificultad: 1
    }
  },
  {
    id: "celtis-australis",
    nombreCientifico: "Celtis australis",
    familia: "Ulmaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas aserradas lanceoladas con base asimétrica, fruto en drupa globosa negro-violácea comestible",
    fotos: ["img/ulmaceae/celtis-australis-1.jpg", "img/ulmaceae/celtis-australis-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 20 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aserradas lanceoladas con base asimétrica, fruto en drupa globosa negro-violácea comestible. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: fruto en drupa globosa negro-violácea comestible. Recordando también que árbol caducifolio de hasta 20 m, hojas aserradas lanceoladas con base asimétrica, ¿qué especie exacta es?",
      rasgoClave: "Hojas aserradas lanceoladas con base asimétrica",
      distractores: ["Trifolium resupinatum", "Trifolium stellatum", "Trifolium tomentosum"],
      dificultad: 1
    }
  },
  {
    id: "ulmus-minor",
    nombreCientifico: "Ulmus minor",
    familia: "Ulmaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 30 m, hojas aserradas con base asimétrica, fruto en sámara oval alada, corteza agrietada",
    fotos: ["img/ulmaceae/ulmus-minor-1.jpg", "img/ulmaceae/ulmus-minor-2.jpg"],
    detective: {
      tipoBiologico: "Árbol",
      paso1: "Observa la planta en su conjunto. Árbol caducifolio de hasta 30 m. ¿Qué tipo de planta estás observando?",
      paso2: "Acércate más y observa el detalle de hojas y estructuras reproductivas: hojas aserradas con base asimétrica, fruto en sámara oval alada. ¿A qué familia botánica podría pertenecer?",
      paso3: "Último detalle decisivo: corteza agrietada. Recordando también que árbol caducifolio de hasta 30 m, hojas aserradas con base asimétrica, fruto en sámara oval alada, ¿qué especie exacta es?",
      rasgoClave: "Hojas aserradas con base asimétrica",
      distractores: ["Dactylis glomerata", "Diplotaxis catholica", "Erica arborea"],
      dificultad: 1
    }
  }
];
