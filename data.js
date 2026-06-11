const especies = [
  {
    id: "cupressus-sempervirens",
    nombreCientifico: "Cupressus sempervirens",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Árbol perenne de porte columnar, hojas escuamiformes opuestas, gálbulos esféricos de 2-3 cm, ramillas cubiertas de escamas",
    fotos: ["img/cupressaceae/cupressus-sempervirens-1.jpg", "img/cupressaceae/cupressus-sempervirens-2.jpg"]
  },
  {
    id: "juniperus-communis",
    nombreCientifico: "Juniperus communis",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Arbusto o pequeño árbol, hojas aciculares en verticilos de 3 con banda estomática blanca, gálbulos azulados carnosos (enebrinas)",
    fotos: ["img/cupressaceae/juniperus-communis-1.jpg", "img/cupressaceae/juniperus-communis-2.jpg"]
  },
  {
    id: "juniperus-oxycedrus",
    nombreCientifico: "Juniperus oxycedrus",
    familia: "Cupressaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Arbusto o arbolito, hojas aciculares punzantes con dos bandas estomáticas blancas, gálbulos rojizos al madurar",
    fotos: ["img/cupressaceae/juniperus-oxycedrus-1.jpg", "img/cupressaceae/juniperus-oxycedrus-2.jpg"]
  },
  {
    id: "abies-alba",
    nombreCientifico: "Abies alba",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Gran árbol de hoja perenne, acículas planas con dos bandas estomáticas blancas en el envés, piñas erectas que se deshacen en la madurez",
    fotos: ["img/pinaceae/abies-alba-1.jpg", "img/pinaceae/abies-alba-2.jpg"]
  },
  {
    id: "abies-pinsapo",
    nombreCientifico: "Abies pinsapo",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Árbol endémico de Sierras de Málaga y Cádiz, acículas rígidas y punzantes dispuestas radialmente, piñas cilíndricas erectas",
    fotos: ["img/pinaceae/abies-pinsapo-1.jpg", "img/pinaceae/abies-pinsapo-2.jpg"]
  },
  {
    id: "cedrus-atlantica",
    nombreCientifico: "Cedrus atlantica",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Gran árbol de porte cónico, acículas en fascículos sobre braquiblastos, piñas erectas que se deshacen, coloración verde-azulada",
    fotos: ["img/pinaceae/cedrus-atlantica-1.jpg", "img/pinaceae/cedrus-atlantica-2.jpg"]
  },
  {
    id: "pinus-halepensis",
    nombreCientifico: "Pinus halepensis",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino mediterráneo de porte irregular, acículas en pares de 6-15 cm, piñas ovoideas de 5-12 cm, corteza gris plateada",
    fotos: ["img/pinaceae/pinus-halepensis-1.jpg", "img/pinaceae/pinus-halepensis-2.jpg"]
  },
  {
    id: "pinus-pinea",
    nombreCientifico: "Pinus pinea",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino piñonero de copa aparasolada, acículas en pares de 10-20 cm, piñas grandes y globosas con piñones comestibles",
    fotos: ["img/pinaceae/pinus-pinea-1.jpg", "img/pinaceae/pinus-pinea-2.jpg"]
  },
  {
    id: "pinus-pinaster",
    nombreCientifico: "Pinus pinaster",
    familia: "Pinaceae",
    grupo: "Gimnosperma",
    caracteristicasClave: "Pino marítimo o resinero, acículas largas y rígidas en pares de 15-25 cm, piñas cónicas de 10-20 cm, corteza muy gruesa",
    fotos: ["img/pinaceae/pinus-pinaster-1.jpg", "img/pinaceae/pinus-pinaster-2.jpg"]
  },
  {
    id: "acanthus-mollis",
    nombreCientifico: "Acanthus mollis",
    familia: "Acanthaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de grandes hojas lobuladas y brillantes, espiga floral erguida con brácteas espinosas, flores blancas con cáliz púrpura",
    fotos: ["img/acanthaceae/acanthus-mollis-1.jpg", "img/acanthaceae/acanthus-mollis-2.jpg"]
  },
  {
    id: "pistacia-lentiscus",
    nombreCientifico: "Pistacia lentiscus",
    familia: "Anacardiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne, hojas compuestas paripinnadas, fruto en drupa rojiza que se vuelve negra, corteza resinosa aromática (almáciga)",
    fotos: ["img/anacardiaceae/pistacia-lentiscus-1.jpg", "img/anacardiaceae/pistacia-lentiscus-2.jpg"]
  },
  {
    id: "pistacia-terebinthus",
    nombreCientifico: "Pistacia terebinthus",
    familia: "Anacardiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito caducifolio, hojas compuestas imparipinnadas, fruto en drupa rojiza, agallas típicas en el envés de las hojas",
    fotos: ["img/anacardiaceae/pistacia-terebinthus-1.jpg", "img/anacardiaceae/pistacia-terebinthus-2.jpg"]
  },
  {
    id: "eryngium-campestre",
    nombreCientifico: "Eryngium campestre",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne espinosa de aspecto glauco, hojas espinosas coriáceas, inflorescencia en capítulo oviforme con brácteas rígidas y punzantes",
    fotos: ["img/apiaceae/eryngium-campestre-1.jpg", "img/apiaceae/eryngium-campestre-2.jpg"]
  },
  {
    id: "smyrnium-olusatrum",
    nombreCientifico: "Smyrnium olusatrum",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal robusta de 50-150 cm, hojas superiores trifoliadas, umbelas verde-amarillentas, fruto negro ovoide",
    fotos: ["img/apiaceae/smyrnium-olusatrum-1.jpg", "img/apiaceae/smyrnium-olusatrum-2.jpg"]
  },
  {
    id: "torilis-arvensis",
    nombreCientifico: "Torilis arvensis",
    familia: "Apiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual erecta de hasta 80 cm, hojas pinnatisectas, umbelas compuestas con brácteas lineares, fruto cubierto de pelos ganchudos",
    fotos: ["img/apiaceae/torilis-arvensis-1.jpg", "img/apiaceae/torilis-arvensis-2.jpg"]
  },
  {
    id: "nerium-oleander",
    nombreCientifico: "Nerium oleander",
    familia: "Apocynaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 4 m, hojas lanceoladas coriáceas en verticilos, flores grandes rosadas de 5 pétalos, fruto en folículo, muy tóxica",
    fotos: ["img/apocynaceae/nerium-oleander-1.jpg", "img/apocynaceae/nerium-oleander-2.jpg"]
  },
  {
    id: "vinca-difformis",
    nombreCientifico: "Vinca difformis",
    familia: "Apocynaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rastrera, hojas ovadas brillantes, flores grandes azul-lila con tubo corolino, fruto en 2 folículos",
    fotos: ["img/apocynaceae/vinca-difformis-1.jpg", "img/apocynaceae/vinca-difformis-2.jpg"]
  },
  {
    id: "chamaerops-humilis",
    nombreCientifico: "Chamaerops humilis",
    familia: "Arecaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Palmera baja y arbustiva, hojas palmeadas con pecíolo espinoso, inflorescencia amarilla, fruto en drupa pardo-rojiza",
    fotos: ["img/arecaceae/chamaerops-humilis-1.jpg", "img/arecaceae/chamaerops-humilis-2.jpg"]
  },
  {
    id: "aristolochia-baetica",
    nombreCientifico: "Aristolochia baetica",
    familia: "Aristolochiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne trepadora, hojas acorazonadas, flores con perianto tubular curvado de color púrpura-amarillento, fruto en cápsula",
    fotos: ["img/aristolochiaceae/aristolochia-baetica-1.jpg", "img/aristolochiaceae/aristolochia-baetica-2.jpg"]
  },
  {
    id: "anacyclus-clavatus",
    nombreCientifico: "Anacyclus clavatus",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual con capítulos terminales, flores liguladas blancas con base purpúrea y flores del disco amarillas, brácteas involucrales con apéndice escarioso",
    fotos: ["img/asteraceae/anacyclus-clavatus-1.jpg", "img/asteraceae/anacyclus-clavatus-2.jpg"]
  },
  {
    id: "anacyclus-radiatus",
    nombreCientifico: "Anacyclus radiatus",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, capítulos solitarios, flores liguladas amarillas con tubo purpúreo, brácteas involucrales con apéndice ancho",
    fotos: ["img/asteraceae/anacyclus-radiatus-1.jpg", "img/asteraceae/anacyclus-radiatus-2.jpg"]
  },
  {
    id: "carlina-corymbosa",
    nombreCientifico: "Carlina corymbosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con capítulos en corimbo, brácteas involucrales espinosas plateadas, flores del disco amarillas, hojas espinosas",
    fotos: ["img/asteraceae/carlina-corymbosa-1.jpg", "img/asteraceae/carlina-corymbosa-2.jpg"]
  },
  {
    id: "carlina-racemosa",
    nombreCientifico: "Carlina racemosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne monocárpica, capítulos agrupados en racimo, brácteas involucrales espinosas, hojas espinosas y tomentosas",
    fotos: ["img/asteraceae/carlina-racemosa-1.jpg", "img/asteraceae/carlina-racemosa-2.jpg", "img/asteraceae/carlina-racemosa-3.jpg"]
  },
  {
    id: "chamaemelum-fuscatum",
    nombreCientifico: "Chamaemelum fuscatum",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, hojas pinnatisectas con segmentos lineares, capítulos con flores liguladas blancas y disco amarillo cónico",
    fotos: ["img/asteraceae/chamaemelum-fuscatum-1.jpg", "img/asteraceae/chamaemelum-fuscatum-2.jpg"]
  },
  {
    id: "chamaemelum-mixtum",
    nombreCientifico: "Chamaemelum mixtum",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual, capítulos solitarios con flores liguladas blancas y disco amarillo, brácteas involucrales con borde escarioso",
    fotos: ["img/asteraceae/chamaemelum-mixtum-1.jpg", "img/asteraceae/chamaemelum-mixtum-2.jpg"]
  },
  {
    id: "galactites-tomentosa",
    nombreCientifico: "Galactites tomentosa",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual espinosa, hojas espinosas con manchas blancas, capítulos con flores liguladas púrpuras y disco púrpura, brácteas espinosas",
    fotos: ["img/asteraceae/galactites-tomentosa-1.jpg", "img/asteraceae/galactites-tomentosa-2.jpg"]
  },
  {
    id: "helichrysum-stoechas",
    nombreCientifico: "Helichrysum stoechas",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático, hojas lineares tomentosas, capítulos en corimbo denso de color amarillo-dorado persistente, brácteas escariosas",
    fotos: ["img/asteraceae/helichrysum-stoechas-1.jpg", "img/asteraceae/helichrysum-stoechas-2.jpg"]
  },
  {
    id: "phagnalon-saxatile",
    nombreCientifico: "Phagnalon saxatile",
    familia: "Asteraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo de 10-30 cm, hojas linear-oblongas con borde ondulado, capítulos solitarios con flores liguladas blanquecinas y disco amarillo",
    fotos: ["img/asteraceae/phagnalon-saxatile-1.jpg", "img/asteraceae/phagnalon-saxatile-2.jpg"]
  },
  {
    id: "anchusa-azurea",
    nombreCientifico: "Anchusa azurea",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, hojas lanceoladas setosas, inflorescencia en cima escorpioide con flores azules de tubo recto",
    fotos: ["img/boraginaceae/anchusa-azurea-1.jpg", "img/boraginaceae/anchusa-azurea-2.jpg"]
  },
  {
    id: "cynoglossum-creticum",
    nombreCientifico: "Cynoglossum creticum",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal de hasta 80 cm, hojas basales grandes oblongo-lanceoladas, inflorescencia cimosa con flores azules reticuladas",
    fotos: ["img/boraginaceae/cynoglossum-creticum-1.jpg", "img/boraginaceae/cynoglossum-creticum-2.jpg"]
  },
  {
    id: "borago-officinalis",
    nombreCientifico: "Borago officinalis",
    familia: "Boraginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas cubiertas de pelos rígidos, flores azules colgantes con estambres salientes en espiga",
    fotos: ["img/boraginaceae/borago-officinalis-1.jpg", "img/boraginaceae/borago-officinalis-2.jpg"]
  },
  {
    id: "brassica-nigra",
    nombreCientifico: "Brassica nigra",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 2 m, hojas inferiores lirado-pinnatífidas, inflorescencia en racimo con flores amarillas, fruto en silícua aplicada al tallo",
    fotos: ["img/brassicaceae/brassica-nigra-1.jpg", "img/brassicaceae/brassica-nigra-2.jpg"]
  },
  {
    id: "coronopus-didymus",
    nombreCientifico: "Coronopus didymus",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual postrada, hojas pinnatisectas con segmentos lineares, flores muy pequeñas blancas, fruto en silícua reniforme",
    fotos: ["img/brassicaceae/coronopus-didymus-1.jpg", "img/brassicaceae/coronopus-didymus-2.jpg"]
  },
  {
    id: "diplotaxis-catholica",
    nombreCientifico: "Diplotaxis catholica",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas lirado-pinnatífidas carnosas, flores amarillas de 4 pétalos, fruto en silícua erecta",
    fotos: ["img/brassicaceae/diplotaxis-catholica-1.jpg", "img/brassicaceae/diplotaxis-catholica-2.jpg"]
  },
  {
    id: "hirschfeldia-incana",
    nombreCientifico: "Hirschfeldia incana",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal o perenne de hasta 1 m, hojas basales lirado-pinnatífidas, flores amarillas pequeñas, fruto en silícua linear con rostro",
    fotos: ["img/brassicaceae/hirschfeldia-incana-1.jpg", "img/brassicaceae/hirschfeldia-incana-2.jpg"]
  },
  {
    id: "rapistrum-rugosum",
    nombreCientifico: "Rapistrum rugosum",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, fruto en silícua con dos segmentos: inferior estéril y superior globoso",
    fotos: ["img/brassicaceae/rapistrum-rugosum-1.jpg", "img/brassicaceae/rapistrum-rugosum-2.jpg"]
  },
  {
    id: "sinapis-alba",
    nombreCientifico: "Sinapis alba",
    familia: "Brassicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas lirado-pinnatífidas, flores amarillas, fruto en silícua con rostro largo y pelos rígidos",
    fotos: ["img/brassicaceae/sinapis-alba-1.jpg", "img/brassicaceae/sinapis-alba-2.jpg"]
  },
  {
    id: "lonicera-implexa",
    nombreCientifico: "Lonicera implexa",
    familia: "Caprifoliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador perenne, hojas ovales opuestas con las últimas soldadas en disco, flores amarillo-rosadas, fruto en baya roja",
    fotos: ["img/caprifoliaceae/lonicera-implexa-1.jpg", "img/caprifoliaceae/lonicera-implexa-2.jpg"]
  },
  {
    id: "viburnum-tinus",
    nombreCientifico: "Viburnum tinus",
    familia: "Caprifoliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 3 m, hojas ovadas coriáceas, inflorescencia en corimbo de flores blancas o rosadas, fruto en drupa azul-negra",
    fotos: ["img/caprifoliaceae/viburnum-tinus-1.jpg", "img/caprifoliaceae/viburnum-tinus-2.jpg"]
  },
  {
    id: "paronychia-argentea",
    nombreCientifico: "Paronychia argentea",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne postrada, hojas ovales con estípulas plateadas, flores sésiles agrupadas en glomérulos con brácteas escariosas plateadas",
    fotos: ["img/caryophyllaceae/paronychia-argentea-1.jpg", "img/caryophyllaceae/paronychia-argentea-2.jpg"]
  },
  {
    id: "petrorhagia-nanteuilii",
    nombreCientifico: "Petrorhagia nanteuilii",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas lineares agudas, inflorescencia laxa con flores rosadas, cáliz tubular con 5 dientes",
    fotos: ["img/caryophyllaceae/petrorhagia-nanteuilii-1.jpg", "img/caryophyllaceae/petrorhagia-nanteuilii-2.jpg"]
  },
  {
    id: "polycarpon-tetraphyllum",
    nombreCientifico: "Polycarpon tetraphyllum",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 15 cm, hojas ovales en verticilos aparentes, inflorescencia cimosa con flores blanquecinas muy pequeñas",
    fotos: ["img/caryophyllaceae/polycarpon-tetraphyllum-1.jpg", "img/caryophyllaceae/polycarpon-tetraphyllum-2.jpg"]
  },
  {
    id: "silene-colorata",
    nombreCientifico: "Silene colorata",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas espatuladas, flores rosadas con cáliz inflado y vistoso, pétalos escotados",
    fotos: ["img/caryophyllaceae/silene-colorata-1.jpg", "img/caryophyllaceae/silene-colorata-2.jpg"]
  },
  {
    id: "silene-inaperta",
    nombreCientifico: "Silene inaperta",
    familia: "Caryophyllaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas lanceoladas, flores hermafroditas con cáliz tubular algo inflado, pétalos blancos incluidos",
    fotos: ["img/caryophyllaceae/silene-inaperta-1.jpg", "img/caryophyllaceae/silene-inaperta-2.jpg"]
  },
  {
    id: "cistus-albidus",
    nombreCientifico: "Cistus albidus",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas ovales tomentosas blanquecinas, flores grandes rosado-púrpuras de 5 pétalos",
    fotos: ["img/cistaceae/cistus-albidus-1.jpg"]
  },
  {
    id: "cistus-ladanifer",
    nombreCientifico: "Cistus ladanifer",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2,5 m, hojas lanceoladas viscosas aromáticas, flores blancas grandes con mancha rojiza en la base de cada pétalo",
    fotos: ["img/cistaceae/cistus-ladanifer-1.jpg"]
  },
  {
    id: "cistus-populifolius",
    nombreCientifico: "Cistus populifolius",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas anchas ovales con peciolo largo, flores blancas de 5 pétalos con mancha amarilla en la base",
    fotos: ["img/cistaceae/cistus-populifolius-1.jpg"]
  },
  {
    id: "cistus-crispus",
    nombreCientifico: "Cistus crispus",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1 m, hojas ovales onduladas tomentosas, flores rosado-púrpuras de 5 pétalos arrugados",
    fotos: ["img/cistaceae/cistus-crispus-1.jpg"]
  },
  {
    id: "cistus-monspeliensis",
    nombreCientifico: "Cistus monspeliensis",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas lineares estrechas de 3-6 cm, flores blancas pequeñas de 3 cm, agrupadas en racimos",
    fotos: ["img/cistaceae/cistus-monspeliensis-1.jpg"]
  },
  {
    id: "cistus-salviifolius",
    nombreCientifico: "Cistus salviifolius",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1 m, hojas ovales rugosas con nervios marcados, flores blancas solitarias de 5 pétalos con mancha amarilla",
    fotos: ["img/cistaceae/cistus-salviifolius-1.jpg"]
  },
  {
    id: "halimium-atriplicifolium",
    nombreCientifico: "Halimium atriplicifolium",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas opuestas blanco-tomentosas, flores amarillas con mancha basal más oscura en cada pétalo",
    fotos: ["img/cistaceae/halimium-atriplicifolium-1.jpg"]
  },
  {
    id: "halimium-umbellatum",
    nombreCientifico: "Halimium umbellatum",
    familia: "Cistaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 60 cm, hojas lineares tomentosas, flores blancas en umbela terminal con mancha amarilla en la base de los pétalos",
    fotos: ["img/cistaceae/halimium-umbellatum-1.jpg"]
  },
  {
    id: "crassula-tillaea",
    nombreCientifico: "Crassula tillaea",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual diminuta de hasta 5 cm, hojas opuestas carnosas ovales, flores rosadas axilares solitarias muy pequeñas",
    fotos: ["img/crassulaceae/crassula-tillaea-1.jpg"]
  },
  {
    id: "sedum-album",
    nombreCientifico: "Sedum album",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne suculenta, hojas cilíndricas carnosas rojizas, inflorescencia en panícula con flores blancas estrelladas de 5 pétalos",
    fotos: ["img/crassulaceae/sedum-album-1.jpg", "img/crassulaceae/sedum-album-2.jpg"]
  },
  {
    id: "sedum-sediforme",
    nombreCientifico: "Sedum sediforme",
    familia: "Crassulaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne suculenta de hasta 30 cm, hojas glaucas carnosas cilíndricas, inflorescencia con flores blancas o amarillo pálido",
    fotos: ["img/crassulaceae/sedum-sediforme-1.jpg", "img/crassulaceae/sedum-sediforme-2.jpg"]
  },
  {
    id: "carex-divulsa",
    nombreCientifico: "Carex divulsa",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne cespitosa de hasta 70 cm, tallos trígonos, hojas ásperas, inflorescencia en espiga compuesta laxa",
    fotos: ["img/cyperaceae/carex-divulsa-1.jpg", "img/cyperaceae/carex-divulsa-2.jpg"]
  },
  {
    id: "cyperus-rotundus",
    nombreCientifico: "Cyperus rotundus",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con tubérculos subterráneos, tallos trígonos, hojas basales, inflorescencia umbeliforme con 3-5 brácteas, espigas rojizas",
    fotos: ["img/cyperaceae/cyperus-rotundus-1.jpg"]
  },
  {
    id: "scirpoides-holoschoenus",
    nombreCientifico: "Scirpoides holoschoenus",
    familia: "Cyperaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1,5 m, tallos cilíndricos, hojas reducidas a vainas, inflorescencia en glomérulos esféricos terminales",
    fotos: ["img/cyperaceae/scirpoides-holoschoenus-1.jpg", "img/cyperaceae/scirpoides-holoschoenus-2.jpg"]
  },
  {
    id: "tamus-communis",
    nombreCientifico: "Tamus communis",
    familia: "Dioscoreaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Enredadera perenne con tubérculo radical, hojas acorazonadas brillantes, bayas rojas brillantes tóxicas, tallos volubles",
    fotos: ["img/dioscoreaceae/tamus-communis-1.jpg", "img/dioscoreaceae/tamus-communis-2.jpg"]
  },
  {
    id: "arbutus-unedo",
    nombreCientifico: "Arbutus unedo",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito perenne de hasta 8 m, hojas aserradas brillantes, flores blancas campanuladas en panículas colgantes, fruto en baya roja comestible",
    fotos: ["img/ericaceae/arbutus-unedo-1.jpg", "img/ericaceae/arbutus-unedo-2.jpg"]
  },
  {
    id: "erica-arborea",
    nombreCientifico: "Erica arborea",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto o arbolito de hasta 4 m, hojas aciculares en verticilos, flores blancas campanuladas en panículas densas olorosas",
    fotos: ["img/ericaceae/erica-arborea-1.jpg"]
  },
  {
    id: "erica-australis",
    nombreCientifico: "Erica australis",
    familia: "Ericaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas aciculares en verticilos de 4, flores rosadas en racimos densos, corola acampanada",
    fotos: ["img/ericaceae/erica-australis-1.jpg"]
  },
  {
    id: "euphorbia-helioscopia",
    nombreCientifico: "Euphorbia helioscopia",
    familia: "Euphorbiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas obovadas serradas, inflorescencia en ciato con 5 glándulas amarillas, látex blanco",
    fotos: ["img/euphorbiaceae/euphorbia-helioscopia-1.jpg"]
  },
  {
    id: "euphorbia-peplus",
    nombreCientifico: "Euphorbia peplus",
    familia: "Euphorbiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 30 cm, hojas alternas obovadas enteras, inflorescencia en ciato con glándulas con cuernos, látex blanco",
    fotos: ["img/euphorbiaceae/euphorbia-peplus-1.jpg"]
  },
  {
    id: "adenocarpus-telonensis",
    nombreCientifico: "Adenocarpus telonensis",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas trifoliadas, flores amarillas en racimos densos, fruto en legumbre glandulosa",
    fotos: ["img/fabaceae/adenocarpus-telonensis-1.jpg", "img/fabaceae/adenocarpus-telonensis-2.jpg"]
  },
  {
    id: "ceratonia-siliqua",
    nombreCientifico: "Ceratonia siliqua",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 10 m, hojas compuestas paripinnadas, flores pequeñas rojizas sin corola, fruto en legumbre grande (algarroba)",
    fotos: ["img/fabaceae/ceratonia-siliqua-1.jpg", "img/fabaceae/ceratonia-siliqua-2.jpg"]
  },
  {
    id: "lathyrus-cicera",
    nombreCientifico: "Lathyrus cicera",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 60 cm, hojas paripinnadas con zarcillo, flores rojas solitarias, fruto en legumbre con alas",
    fotos: ["img/fabaceae/lathyrus-cicera-1.jpg"]
  },
  {
    id: "lathyrus-clymenum",
    nombreCientifico: "Lathyrus clymenum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora, hojas paripinnadas con zarcillo ramificado, flores púrpura-azuladas, fruto en legumbre comprimida",
    fotos: ["img/fabaceae/lathyrus-clymenum-1.jpg"]
  },
  {
    id: "lupinus-angustifolius",
    nombreCientifico: "Lupinus angustifolius",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 1 m, hojas palmeadas con 5-9 folíolos lanceolados, flores azules en racimos verticales, legumbre peluda",
    fotos: ["img/fabaceae/lupinus-angustifolius-1.jpg"]
  },
  {
    id: "retama-sphaerocarpa",
    nombreCientifico: "Retama sphaerocarpa",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 3 m, tallos verdes inclinados sin hojas, flores amarillas pequeñas, fruto en legumbre globosa",
    fotos: ["img/fabaceae/retama-sphaerocarpa-1.jpg"]
  },
  {
    id: "trifolium-angustifolium",
    nombreCientifico: "Trifolium angustifolium",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, hojas trifoliadas con folíolos lineares, inflorescencia en capítulo cilíndrico de flores rosadas",
    fotos: ["img/fabaceae/trifolium-angustifolium-1.jpg", "img/fabaceae/trifolium-angustifolium-2.jpg"]
  },
  {
    id: "trifolium-campestre",
    nombreCientifico: "Trifolium campestre",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas trifoliadas con folíolos obovados, inflorescencia en capítulo globoso de flores amarillas que se vuelven pardas",
    fotos: ["img/fabaceae/trifolium-campestre-1.jpg", "img/fabaceae/trifolium-campestre-2.jpg"]
  },
  {
    id: "trifolium-repens",
    nombreCientifico: "Trifolium repens",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne estolonífera, hojas trifoliadas con folíolos con mancha blanquecina, capítulos globosos de flores blancas o rosadas",
    fotos: ["img/fabaceae/trifolium-repens-1.jpg"]
  },
  {
    id: "trifolium-stellatum",
    nombreCientifico: "Trifolium stellatum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 20 cm, hojas trifoliadas con folíolos obovados, capítulos globosos con flores rosadas y cáliz acrescente estrellado",
    fotos: ["img/fabaceae/trifolium-stellatum-1.jpg"]
  },
  {
    id: "trifolium-resupinatum",
    nombreCientifico: "Trifolium resupinatum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas trifoliadas, capítulos globosos con flores rosadas resupinadas (cáliz hacia abajo)",
    fotos: ["img/fabaceae/trifolium-resupinatum-1.jpg"]
  },
  {
    id: "trifolium-tomentosum",
    nombreCientifico: "Trifolium tomentosum",
    familia: "Fabaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 20 cm, hojas trifoliadas, capítulos globosos densos de flores rosadas con cáliz tomentoso",
    fotos: ["img/fabaceae/trifolium-tomentosum-1.jpg"]
  },
  {
    id: "castanea-sativa",
    nombreCientifico: "Castanea sativa",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 25 m, hojas grandes aserradas lanceoladas, flores en amentos, fruto en erizo con 1-3 aquenios",
    fotos: ["img/fagaceae/castanea-sativa-1.jpg"]
  },
  {
    id: "quercus-coccifera",
    nombreCientifico: "Quercus coccifera",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne de hasta 3 m, hojas pequeñas espinosas onduladas, bellotas con cúpula escamosa y erizada",
    fotos: ["img/fagaceae/quercus-coccifera-1.jpg"]
  },
  {
    id: "quercus-faginea",
    nombreCientifico: "Quercus faginea",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne o marcescente de hasta 20 m, hojas variables con lóbulos poco profundos y envés tomentoso, bellotas solitarias",
    fotos: ["img/fagaceae/quercus-faginea-1.jpg", "img/fagaceae/quercus-faginea-2.jpg"]
  },
  {
    id: "quercus-pyrenaica",
    nombreCientifico: "Quercus pyrenaica",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas grandes lobuladas con envés tomentoso, bellotas con cúpula tomentosa, brotes lanosos",
    fotos: ["img/fagaceae/quercus-pyrenaica-1.jpg"]
  },
  {
    id: "quercus-rotundifolia",
    nombreCientifico: "Quercus rotundifolia",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 15 m, hojas redondeadas coriáceas con borde entero o espinoso, bellotas dulces comestibles",
    fotos: ["img/fagaceae/quercus-rotundifolia-1.jpg"]
  },
  {
    id: "quercus-suber",
    nombreCientifico: "Quercus suber",
    familia: "Fagaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 20 m, corteza gruesa suberosa (corcho), hojas ovales con envés blanquecino, bellotas con cúpula tomentosa",
    fotos: ["img/fagaceae/quercus-suber-1.jpg"]
  },
  {
    id: "gladiolus-communis",
    nombreCientifico: "Gladiolus communis",
    familia: "Iridaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 80 cm, hojas ensiformes equitantes, inflorescencia en espiga unilateral con flores rosado-púrpuras",
    fotos: ["img/iridaceae/gladiolus-communis-1.jpg"]
  },
  {
    id: "gynandriris-sisyrinchium",
    nombreCientifico: "Gynandriris sisyrinchium",
    familia: "Iridaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 40 cm, hojas basales lineares, flores azul-violáceas con tubo corto, fruto en cápsula",
    fotos: ["img/iridaceae/gynandriris-sisyrinchium-1.jpg", "img/iridaceae/gynandriris-sisyrinchium-2.jpg"]
  },
  {
    id: "cleonia-lusitanica",
    nombreCientifico: "Cleonia lusitanica",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas pinnatífidas, inflorescencia en espiga terminal densa con brácteas coloreadas, flores bilabiadas azules",
    fotos: ["img/lamiaceae/cleonia-lusitanica-1.jpg", "img/lamiaceae/cleonia-lusitanica-2.jpg"]
  },
  {
    id: "lamium-amplexicaule",
    nombreCientifico: "Lamium amplexicaule",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas opuestas redondeadas y abrazadoras, flores rosadas bilabiadas en verticilastros",
    fotos: ["img/lamiaceae/lamium-amplexicaule-1.jpg"]
  },
  {
    id: "lavandula-pedunculata",
    nombreCientifico: "Lavandula pedunculata",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 50 cm, hojas lineares tomentosas, inflorescencia en espiga densa con brácteas purpúreas y largo pedúnculo",
    fotos: ["img/lamiaceae/lavandula-pedunculata-1.jpg"]
  },
  {
    id: "lavandula-stoechas",
    nombreCientifico: "Lavandula stoechas",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 1 m, hojas lineares tomentosas, inflorescencia con brácteas apicales violáceas vistosas, flores púrpura oscuro",
    fotos: ["img/lamiaceae/lavandula-stoechas-1.jpg"]
  },
  {
    id: "mentha-pulegium",
    nombreCientifico: "Mentha pulegium",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne aromática de hasta 40 cm, hojas ovales opuestas, flores lilas en verticilastros axilares, tallos postrados",
    fotos: ["img/lamiaceae/mentha-pulegium-1.jpg"]
  },
  {
    id: "rosmarinus-officinalis",
    nombreCientifico: "Rosmarinus officinalis",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne aromático de hasta 2 m, hojas lineares coriáceas con envés blanquecino, flores azul-lila bilabiadas en racimos",
    fotos: ["img/lamiaceae/rosmarinus-officinalis-1.jpg"]
  },
  {
    id: "stachys-arvensis",
    nombreCientifico: "Stachys arvensis",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas ovales crenadas, flores rosadas bilabiadas con manchas púrpuras en verticilastros",
    fotos: ["img/lamiaceae/stachys-arvensis-1.jpg", "img/lamiaceae/stachys-arvensis-2.jpg"]
  },
  {
    id: "stachys-ocymastrum",
    nombreCientifico: "Stachys ocymastrum",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas ovales crenado-aserradas, flores púrpura-violáceas en verticilastros multifloros",
    fotos: ["img/lamiaceae/stachys-ocymastrum-1.jpg", "img/lamiaceae/stachys-ocymastrum-2.jpg"]
  },
  {
    id: "teucrium-capitatum",
    nombreCientifico: "Teucrium capitatum",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbustillo aromático de hasta 40 cm, hojas lineares tomentosas, inflorescencia en capítulo terminal denso de flores blancas con labio superior ausente",
    fotos: ["img/lamiaceae/teucrium-capitatum-1.jpg"]
  },
  {
    id: "teucrium-fruticans",
    nombreCientifico: "Teucrium fruticans",
    familia: "Lamiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 1,5 m, hojas ovadas con envés blanco-tomentoso, flores azul-lila con labio superior muy reducido, tallos blanquecinos",
    fotos: ["img/lamiaceae/teucrium-fruticans-1.jpg", "img/lamiaceae/teucrium-fruticans-2.jpg"]
  },
  {
    id: "allium-ampeloprasum",
    nombreCientifico: "Allium ampeloprasum",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 1,5 m, hojas planas lineares, inflorescencia en umbela esférica con flores rosadas, bulbo grande",
    fotos: ["img/liliaceae/allium-ampeloprasum-1.jpg", "img/liliaceae/allium-ampeloprasum-2.jpg"]
  },
  {
    id: "allium-neapolitanum",
    nombreCientifico: "Allium neapolitanum",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne bulbosa de hasta 30 cm, hojas basales lineares, inflorescencia en umbela de flores blancas estrelladas",
    fotos: ["img/liliaceae/allium-neapolitanum-1.jpg", "img/liliaceae/allium-neapolitanum-2.jpg"]
  },
  {
    id: "asparagus-acutifolius",
    nombreCientifico: "Asparagus acutifolius",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne espinoso de hasta 1,5 m, tallos con espinas, cladodios fasciculados, fruto en baya negra",
    fotos: ["img/liliaceae/asparagus-acutifolius-1.jpg", "img/liliaceae/asparagus-acutifolius-2.jpg"]
  },
  {
    id: "asparagus-albus",
    nombreCientifico: "Asparagus albus",
    familia: "Liliaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne blanquecino de hasta 1 m, tallos con espinas, cladodios fasciculados finos, fruto en baya roja",
    fotos: ["img/liliaceae/asparagus-albus-1.jpg"]
  },
  {
    id: "malva-hispanica",
    nombreCientifico: "Malva hispanica",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas palmatífidas, flores rosadas axilares solitarias, fruto en esquizocarpo",
    fotos: ["img/malvaceae/malva-hispanica-1.jpg"]
  },
  {
    id: "malva-parviflora",
    nombreCientifico: "Malva parviflora",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, hojas orbiculares palmatífidas, flores pequeñas blancas o rosadas axilares, fruto aplanado",
    fotos: ["img/malvaceae/malva-parviflora-1.jpg"]
  },
  {
    id: "malva-nicaeensis",
    nombreCientifico: "Malva nicaeensis",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, hojas palmatífidas con lóbulos redondeados, flores rosadas agrupadas en fascículos axilares",
    fotos: ["img/malvaceae/malva-nicaeensis-1.jpg"]
  },
  {
    id: "malva-sylvestris",
    nombreCientifico: "Malva sylvestris",
    familia: "Malvaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, hojas palmatífidas crenadas, flores grandes rosado-purpúreas con venas más oscuras, fruto en esquizocarpo",
    fotos: ["img/malvaceae/malva-sylvestris-1.jpg", "img/malvaceae/malva-sylvestris-2.jpg"]
  },
  {
    id: "ficus-carica",
    nombreCientifico: "Ficus carica",
    familia: "Moraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 8 m, hojas grandes palmatífidas ásperas, fruto en sicono (higo) comestible, inflorescencia interna",
    fotos: ["img/moraceae/ficus-carica-1.jpg", "img/moraceae/ficus-carica-2.jpg"]
  },
  {
    id: "eucalyptus-camaldulensis",
    nombreCientifico: "Eucalyptus camaldulensis",
    familia: "Myrtaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 30 m, hojas juveniles opuestas y adultas alternas lanceoladas colgantes, fruto en cápsula, corteza lisa",
    fotos: ["img/myrtaceae/eucalyptus-camaldulensis-1.jpg"]
  },
  {
    id: "myrtus-communis",
    nombreCientifico: "Myrtus communis",
    familia: "Myrtaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne aromático de hasta 3 m, hojas opuestas ovales puntiagudas, flores blancas con estambres numerosos, fruto en baya negra",
    fotos: ["img/myrtaceae/myrtus-communis-1.jpg"]
  },
  {
    id: "jasminum-fruticans",
    nombreCientifico: "Jasminum fruticans",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto de hasta 2 m, hojas trifoliadas alternas, flores amarillas tubulares con 5 lóbulos, fruto en baya negra brillante",
    fotos: ["img/oleaceae/jasminum-fruticans-1.jpg", "img/oleaceae/jasminum-fruticans-2.jpg"]
  },
  {
    id: "fraxinus-angustifolia",
    nombreCientifico: "Fraxinus angustifolia",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas compuestas imparipinnadas con folíolos lanceolados aserrados, fruto en sámara alada",
    fotos: ["img/oleaceae/fraxinus-angustifolia-1.jpg", "img/oleaceae/fraxinus-angustifolia-2.jpg"]
  },
  {
    id: "olea-europaea",
    nombreCientifico: "Olea europaea",
    familia: "Oleaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol perenne de hasta 10 m, hojas opuestas lanceoladas con envés plateado, flores pequeñas blanquecinas, fruto en drupa (aceituna)",
    fotos: ["img/oleaceae/olea-europaea-1.jpg", "img/oleaceae/olea-europaea-2.jpg"]
  },
  {
    id: "paeonia-broteri",
    nombreCientifico: "Paeonia broteri",
    familia: "Paeoniaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas biternadas con segmentos lanceolados, flores grandes rosado-purpúreas de 5-8 pétalos, fruto en folículo",
    fotos: ["img/paeoniaceae/paeonia-broteri-1.jpg"]
  },
  {
    id: "fumaria-capreolata",
    nombreCientifico: "Fumaria capreolata",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 1 m, hojas pinnatisectas glaucas, inflorescencia en racimo con flores blancas con ápice púrpura",
    fotos: ["img/papaveraceae/fumaria-capreolata-1.jpg"]
  },
  {
    id: "papaver-hybridum",
    nombreCientifico: "Papaver hybridum",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas pinnatisectas con segmentos agudos, flores púrpura-violáceas con cápsula subglobosa cubierta de pelos rígidos",
    fotos: ["img/papaveraceae/papaver-hybridum-1.jpg"]
  },
  {
    id: "papaver-rhoeas",
    nombreCientifico: "Papaver rhoeas",
    familia: "Papaveraceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 80 cm, hojas pinnatisectas, flores grandes rojas con 4 pétalos y mancha negra en la base, cápsula globosa lisa",
    fotos: ["img/papaveraceae/papaver-rhoeas-1.jpg"]
  },
  {
    id: "plantago-afra",
    nombreCientifico: "Plantago afra",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas lineares opuestas, inflorescencia en espiga densa ovoide, fruto en pixidio",
    fotos: ["img/plantaginaceae/plantago-afra-1.jpg", "img/plantaginaceae/plantago-afra-2.jpg"]
  },
  {
    id: "plantago-coronopus",
    nombreCientifico: "Plantago coronopus",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual o bienal, hojas en roseta pinnatífidas, inflorescencia en espiga cilíndrica, flores pequeñas con corola blanquecina",
    fotos: ["img/plantaginaceae/plantago-coronopus-1.jpg", "img/plantaginaceae/plantago-coronopus-2.jpg"]
  },
  {
    id: "plantago-lagopus",
    nombreCientifico: "Plantago lagopus",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas basales lanceoladas, inflorescencia en espiga ovoide densa, brácteas vellosas",
    fotos: ["img/plantaginaceae/plantago-lagopus-1.jpg"]
  },
  {
    id: "plantago-lanceolata",
    nombreCientifico: "Plantago lanceolata",
    familia: "Plantaginaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas lanceoladas con 3-7 nervios paralelos, inflorescencia en espiga ovoide-cilíndrica con estambres largos",
    fotos: ["img/plantaginaceae/plantago-lanceolata-1.jpg"]
  },
  {
    id: "arundo-donax",
    nombreCientifico: "Arundo donax",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne gigante de hasta 4 m, tallos gruesos fistulosos, hojas anchas caulinares, inflorescencia en panícula grande plumosa",
    fotos: ["img/poaceae/arundo-donax-1.jpg", "img/poaceae/arundo-donax-2.jpg"]
  },
  {
    id: "avena-sterilis",
    nombreCientifico: "Avena sterilis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 1 m, inflorescencia en panícula laxa, espiguillas con 2-3 flores, aristas geniculadas largas, base del grano peluda",
    fotos: ["img/poaceae/avena-sterilis-1.jpg", "img/poaceae/avena-sterilis-2.jpg"]
  },
  {
    id: "briza-maxima",
    nombreCientifico: "Briza maxima",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, inflorescencia en panícula con espiguillas colgantes acorazonadas, glumas y lemas papiráceas",
    fotos: ["img/poaceae/briza-maxima-1.jpg", "img/poaceae/briza-maxima-2.jpg"]
  },
  {
    id: "bromus-madritensis",
    nombreCientifico: "Bromus madritensis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, inflorescencia en panícula erecta contraída, espiguillas lanceoladas con aristas rectas",
    fotos: ["img/poaceae/bromus-madritensis-1.jpg", "img/poaceae/bromus-madritensis-2.jpg"]
  },
  {
    id: "cynosurus-echinatus",
    nombreCientifico: "Cynosurus echinatus",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula densa espiciforme con glumas ciliadas con aristas rectas formando un erizo",
    fotos: ["img/poaceae/cynosurus-echinatus-1.jpg", "img/poaceae/cynosurus-echinatus-2.jpg"]
  },
  {
    id: "dactylis-glomerata",
    nombreCientifico: "Dactylis glomerata",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne cespitosa de hasta 1 m, inflorescencia en panícula unilateral con espiguillas agrupadas en glomérulos densos",
    fotos: ["img/poaceae/dactylis-glomerata-1.jpg", "img/poaceae/dactylis-glomerata-2.jpg"]
  },
  {
    id: "hordeum-leporinum",
    nombreCientifico: "Hordeum leporinum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en espiga densa con aristas largas, espiguillas en tríos",
    fotos: ["img/poaceae/hordeum-leporinum-1.jpg", "img/poaceae/hordeum-leporinum-2.jpg"]
  },
  {
    id: "hyparrhenia-hirta",
    nombreCientifico: "Hyparrhenia hirta",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1 m, inflorescencia en panícula formada por racimos pares con aristas geniculadas, base peluda",
    fotos: ["img/poaceae/hyparrhenia-hirta-1.jpg", "img/poaceae/hyparrhenia-hirta-2.jpg"]
  },
  {
    id: "lagurus-ovatus",
    nombreCientifico: "Lagurus ovatus",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula densa ovoide lanosa de color paja, aspecto de cola de liebre",
    fotos: ["img/poaceae/lagurus-ovatus-1.jpg", "img/poaceae/lagurus-ovatus-2.jpg"]
  },
  {
    id: "lamarckia-aurea",
    nombreCientifico: "Lamarckia aurea",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, inflorescencia en panícula densa dorada brillante, espiguillas comprimidas",
    fotos: ["img/poaceae/lamarckia-aurea-1.jpg", "img/poaceae/lamarckia-aurea-2.jpg"]
  },
  {
    id: "lolium-rigidum",
    nombreCientifico: "Lolium rigidum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 60 cm, inflorescencia en espiga dística, espiguillas sésiles alternas, sin aristas",
    fotos: ["img/poaceae/lolium-rigidum-1.jpg", "img/poaceae/lolium-rigidum-2.jpg"]
  },
  {
    id: "piptatherum-miliaceum",
    nombreCientifico: "Piptatherum miliaceum",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 1,5 m, inflorescencia en panícula grande laxa, espiguillas con arista fina caduca",
    fotos: ["img/poaceae/piptatherum-miliaceum-1.jpg", "img/poaceae/piptatherum-miliaceum-2.jpg"]
  },
  {
    id: "poa-annua",
    nombreCientifico: "Poa annua",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual pequeña de hasta 20 cm, inflorescencia en panícula piramidal, espiguillas con 3-5 flores, hojas con lígula obtusa",
    fotos: ["img/poaceae/poa-annua-1.jpg", "img/poaceae/poa-annua-2.jpg"]
  },
  {
    id: "sorghum-halepense",
    nombreCientifico: "Sorghum halepense",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rizomatosa de hasta 2 m, inflorescencia en panícula grande laxa, espiguillas en pares (una sésil y otra pedicelada)",
    fotos: ["img/poaceae/sorghum-halepense-1.jpg", "img/poaceae/sorghum-halepense-2.jpg"]
  },
  {
    id: "stipa-capensis",
    nombreCientifico: "Stipa capensis",
    familia: "Poaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 50 cm, inflorescencia en panícula contraída, aristas largas plumosas (hasta 10 cm) retorcidas en la base",
    fotos: ["img/poaceae/stipa-capensis-1.jpg", "img/poaceae/stipa-capensis-2.jpg"]
  },
  {
    id: "rumex-bucephalophorus",
    nombreCientifico: "Rumex bucephalophorus",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 30 cm, hojas basales espatuladas, inflorescencia en racimo con frutos rodeados de dientes ganchudos",
    fotos: ["img/polygonaceae/rumex-bucephalophorus-1.jpg"]
  },
  {
    id: "rumex-scutatus",
    nombreCientifico: "Rumex scutatus",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 40 cm, hojas sagitadas con lóbulos basales divergentes, inflorescencia en panícula laxa",
    fotos: ["img/polygonaceae/rumex-scutatus-1.jpg"]
  },
  {
    id: "rumex-pulcher",
    nombreCientifico: "Rumex pulcher",
    familia: "Polygonaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 60 cm, hojas inferiores con lóbulos basales divergentes, inflorescencia en verticilastros con valvas dentadas",
    fotos: ["img/polygonaceae/rumex-pulcher-1.jpg"]
  },
  {
    id: "ranunculus-ficaria",
    nombreCientifico: "Ranunculus ficaria",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne con tubérculos radicales, hojas acorazonadas brillantes, flores amarillas con 8-12 pétalos brillantes",
    fotos: ["img/ranunculaceae/ranunculus-ficaria-1.jpg"]
  },
  {
    id: "ranunculus-muricatus",
    nombreCientifico: "Ranunculus muricatus",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual de hasta 40 cm, hojas palmatífidas con lóbulos redondeados, flores amarillas con 5 pétalos, fruto con tubérculos",
    fotos: ["img/ranunculaceae/ranunculus-muricatus-1.jpg", "img/ranunculaceae/ranunculus-muricatus-2.jpg"]
  },
  {
    id: "ranunculus-peltatus",
    nombreCientifico: "Ranunculus peltatus",
    familia: "Ranunculaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne acuática de hasta 1 m, hojas flotantes peltadas y sumergidas filiformes, flores blancas con 5 pétalos y uña amarilla",
    fotos: ["img/ranunculaceae/ranunculus-peltatus-1.jpg", "img/ranunculaceae/ranunculus-peltatus-2.jpg"]
  },
  {
    id: "rosa-canina",
    nombreCientifico: "Rosa canina",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador de hasta 3 m, tallos con aguijones curvos, hojas imparipinnadas con 5-7 folíolos aserrados, flores rosadas, fruto en cinorrodón rojo",
    fotos: ["img/rosaceae/rosa-canina-1.jpg", "img/rosaceae/rosa-canina-2.jpg"]
  },
  {
    id: "rubus-ulmifolius",
    nombreCientifico: "Rubus ulmifolius",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto sarmentoso con aguijones, hojas imparipinnadas con 3-5 folíolos, flores rosadas en panícula, fruto en polidrupa negra comestible",
    fotos: ["img/rosaceae/rubus-ulmifolius-1.jpg", "img/rosaceae/rubus-ulmifolius-2.jpg"]
  },
  {
    id: "sanguisorba-minor",
    nombreCientifico: "Sanguisorba minor",
    familia: "Rosaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 50 cm, hojas imparipinnadas con folíolos dentados, inflorescencia en espiga globosa verde-amarillenta",
    fotos: ["img/rosaceae/sanguisorba-minor-1.jpg", "img/rosaceae/sanguisorba-minor-2.jpg"]
  },
  {
    id: "galium-aparine",
    nombreCientifico: "Galium aparine",
    familia: "Rubiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba anual trepadora de hasta 1,5 m, tallos cuadrangulares con ganchos, hojas en verticilos de 6-8 lineares, fruto con pelos ganchudos",
    fotos: ["img/rubiaceae/galium-aparine-1.jpg", "img/rubiaceae/galium-aparine-2.jpg"]
  },
  {
    id: "rubia-peregrina",
    nombreCientifico: "Rubia peregrina",
    familia: "Rubiaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne trepadora de hasta 2 m, tallos cuadrangulares con aguijones, hojas en verticilos de 4 coriáceas, fruto en baya negra",
    fotos: ["img/rubiaceae/rubia-peregrina-1.jpg", "img/rubiaceae/rubia-peregrina-2.jpg"]
  },
  {
    id: "populus-alba",
    nombreCientifico: "Populus alba",
    familia: "Salicaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 25 m, hojas lobuladas con envés blanco-tomentoso, corteza lisa blanquecina, amentos colgantes",
    fotos: ["img/salicaceae/populus-alba-1.jpg", "img/salicaceae/populus-alba-2.jpg"]
  },
  {
    id: "osyris-alba",
    nombreCientifico: "Osyris alba",
    familia: "Santalaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto perenne semiparásito de hasta 1 m, hojas alternas lineares coriáceas, flores pequeñas verdosas, fruto en drupa roja carnosa",
    fotos: ["img/santalaceae/osyris-alba-1.jpg", "img/santalaceae/osyris-alba-2.jpg"]
  },
  {
    id: "antirrhinum-majus",
    nombreCientifico: "Antirrhinum majus",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne de hasta 80 cm, hojas lanceoladas, inflorescencia en racimo con flores grandes bilabiadas de color rosa-púrpura",
    fotos: ["img/scrophulariaceae/antirrhinum-majus-1.jpg", "img/scrophulariaceae/antirrhinum-majus-2.jpg"]
  },
  {
    id: "cymbalaria-muralis",
    nombreCientifico: "Cymbalaria muralis",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba perenne rastrera de hasta 30 cm, hojas alternas palmeadas lobuladas de hasta 3 cm, flores pequeñas azul-lila con paladar amarillo",
    fotos: ["img/scrophulariaceae/cymbalaria-muralis-1.jpg", "img/scrophulariaceae/cymbalaria-muralis-2.jpg"]
  },
  {
    id: "verbascum-sinuatum",
    nombreCientifico: "Verbascum sinuatum",
    familia: "Scrophulariaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Hierba bienal de hasta 1 m, hojas basales grandes ondulado-sinuadas tomentosas, inflorescencia en espiga con flores amarillas de 5 pétalos",
    fotos: ["img/scrophulariaceae/verbascum-sinuatum-1.jpg", "img/scrophulariaceae/verbascum-sinuatum-2.jpg"]
  },
  {
    id: "smilax-aspera",
    nombreCientifico: "Smilax aspera",
    familia: "Smilacaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Arbusto trepador perenne con espinas, hojas acorazonadas espinosas con nervios paralelos, fruto en baya roja, zarcillos en pecíolo",
    fotos: ["img/smilacaceae/smilax-aspera-1.jpg", "img/smilacaceae/smilax-aspera-2.jpg"]
  },
  {
    id: "celtis-australis",
    nombreCientifico: "Celtis australis",
    familia: "Ulmaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 20 m, hojas aserradas lanceoladas con base asimétrica, fruto en drupa globosa negro-violácea comestible",
    fotos: ["img/ulmaceae/celtis-australis-1.jpg", "img/ulmaceae/celtis-australis-2.jpg"]
  },
  {
    id: "ulmus-minor",
    nombreCientifico: "Ulmus minor",
    familia: "Ulmaceae",
    grupo: "Angiosperma",
    caracteristicasClave: "Árbol caducifolio de hasta 30 m, hojas aserradas con base asimétrica, fruto en sámara oval alada, corteza agrietada",
    fotos: ["img/ulmaceae/ulmus-minor-1.jpg", "img/ulmaceae/ulmus-minor-2.jpg"]
  }
];
