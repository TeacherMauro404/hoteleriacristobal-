/* =========================================================
   BANCO — TURISMO (5 temas)
   Industria turística · agencias y tour operador · guiado y destinos de Chile ·
   destinos y patrimonio mundial · marketing turístico y servicio al cliente
   Formato: [nivel 1–5, pregunta, [opciones (la 1ª es la correcta)], 0]
   ========================================================= */
(function(){
function T(id,name,icon,tag,desc,cats,top5){return {id:id,name:name,icon:icon,group:'tu',tag:tag,desc:desc,top5:top5,cats:cats.map(function(c,i){return {id:id+'_'+i,name:c[0],icon:c[1],q:c[2]};})};}
window.TURISMO=[

T("tu1","Industria turística","🌎","Turismo · Estructura del mercado","Conceptos básicos · tipos de turismo · organismos · turismo en Chile · turismo sostenible",[
 ["Conceptos básicos","📘",[
  [1,"Según la ONU Turismo, ¿qué es el turismo?",["Las actividades de personas que viajan fuera de su entorno habitual por menos de un año, por ocio, negocios u otros motivos","Solo las vacaciones en la playa","Irse a vivir a otro país","Trabajar en un hotel"],0],
  [2,"¿Qué es un turista?",["Un visitante que pernocta al menos una noche en el destino","Una persona que vive en el destino","Un trabajador del aeropuerto","Un visitante que no duerme en el destino"],0],
  [2,"¿Qué es un excursionista (visitante del día)?",["Un visitante que no pernocta en el destino","Un turista que se queda un mes","Un guía de turismo","Un piloto"],0],
  [3,"¿Qué es el turismo receptivo?",["El de visitantes extranjeros que llegan al país","El de chilenos que viajan al extranjero","El de personas que no viajan","El que solo ocurre en invierno"],0],
  [3,"¿Qué es el turismo emisivo?",["El de residentes que viajan al extranjero","El de extranjeros que llegan","El turismo dentro de una ciudad","El turismo espacial"],0],
  [4,"¿Qué es la planta turística?",["Las instalaciones y servicios que atienden al turista: alojamiento, alimentación, transporte y agencias","Un árbol nativo","Una fábrica","El jardín del hotel"],0],
  [5,"¿Qué es la estacionalidad turística?",["La concentración de la demanda en ciertas épocas del año","La cantidad de estaciones de metro","El clima de una ciudad","Un tipo de hotel"],0]]],
 ["Tipos de turismo","🧗",[
  [1,"¿Qué es el ecoturismo?",["Turismo en la naturaleza que busca conservarla y educar","Turismo de compras","Turismo en grandes ciudades","Turismo de casinos"],0],
  [2,"¿Qué es el turismo aventura?",["Actividades con cierto riesgo físico, como rafting, trekking o escalada","Visitar museos","Ir de compras","Descansar en un spa"],0],
  [2,"¿Qué es el agroturismo?",["Visitas a predios agrícolas para conocer y participar en sus labores","Turismo en aeropuertos","Turismo de playa","Turismo médico"],0],
  [3,"¿Qué es el enoturismo?",["Turismo relacionado con el vino: viñas, catas y bodegas","Turismo de nieve","Turismo religioso","Turismo espacial"],0],
  [3,"¿Qué es el astroturismo, muy desarrollado en el norte de Chile?",["Turismo de observación astronómica en cielos limpios","Turismo de astronautas","Turismo de playa","Turismo en submarinos"],0],
  [4,"¿Qué es el turismo indígena?",["Experiencias turísticas gestionadas por comunidades de pueblos originarios, que muestran su cultura","Turismo de compras","Turismo de cruceros","Turismo deportivo"],0],
  [5,"¿Qué es el turismo de intereses especiales?",["Viajes motivados por un interés específico: aves, astronomía, vino, pesca, etc.","Turismo solo para VIP","Turismo de lujo obligatorio","Un tipo de hotel"],0]]],
 ["Organismos del turismo","🏛️",[
  [1,"¿Qué organismo público promueve el turismo en Chile?",["Sernatur (Servicio Nacional de Turismo)","El SERNAC","El SAG","El SII"],0],
  [2,"¿Qué es la ONU Turismo (antes OMT)?",["El organismo de Naciones Unidas especializado en turismo","Una aerolínea","Una cadena hotelera","Un banco"],0],
  [3,"¿De qué ministerio depende la Subsecretaría de Turismo de Chile?",["Del Ministerio de Economía, Fomento y Turismo","Del Ministerio de Salud","Del Ministerio de Defensa","Del Ministerio de Deportes"],0],
  [3,"¿Qué es la IATA?",["La Asociación Internacional de Transporte Aéreo","Una agencia de turismo chilena","Un tipo de pasaje","Un hotel"],0],
  [4,"¿Qué organismo chileno controla el ingreso de productos de origen animal y vegetal?",["El SAG","Sernatur","El SII","El Registro Civil"],0],
  [5,"¿Qué institución controla la entrada y salida de personas en las fronteras de Chile?",["La PDI (Policía de Investigaciones)","Sernatur","El SAG","El Registro Civil"],0]]],
 ["Turismo en Chile","🇨🇱",[
  [1,"¿Qué parque nacional del sur de Chile es famoso en el mundo por sus 'torres'?",["Torres del Paine","Lauca","Conguillío","La Campana"],0],
  [2,"¿Qué destino del norte es famoso por el Valle de la Luna?",["San Pedro de Atacama","Puerto Varas","Pichilemu","Viña del Mar"],0],
  [2,"¿Qué isla chilena es famosa por sus moai?",["Rapa Nui (Isla de Pascua)","Chiloé","Juan Fernández","Isla Mocha"],0],
  [3,"¿Qué ciudad puerto es Patrimonio de la Humanidad por su casco histórico?",["Valparaíso","Antofagasta","Talcahuano","Puerto Montt"],0],
  [3,"¿Qué archipiélago es famoso por sus iglesias de madera, Patrimonio de la Humanidad?",["Chiloé","Juan Fernández","Guaitecas","Rapa Nui"],0],
  [4,"¿Qué balneario de la región de O'Higgins es famoso por el surf?",["Pichilemu","Pucón","Frutillar","Ovalle"],0],
  [5,"¿Qué ciudad junto al volcán Villarrica es un gran centro de turismo aventura?",["Pucón","Iquique","Rancagua","Calama"],0]]],
 ["Turismo sostenible","🌱",[
  [1,"¿Qué busca el turismo sostenible?",["Equilibrar beneficios económicos, cuidado ambiental y bienestar de las comunidades","Recibir la mayor cantidad posible de turistas","Construir hoteles en todos lados","Prohibir el turismo"],0],
  [2,"¿Qué es la capacidad de carga de un destino?",["El número máximo de visitantes que soporta sin deteriorarse","El peso de equipaje permitido","La cantidad de buses","El precio de la entrada"],0],
  [3,"¿Qué pide el principio 'no dejar rastro' en la naturaleza?",["Llevarse la basura, respetar la flora y fauna y no hacer fuego donde no se permite","Pintar las rocas","Recoger plantas de recuerdo","Alimentar a los animales"],0],
  [3,"¿Qué es el sobreturismo?",["Un exceso de turistas que afecta la vida local y el ambiente","El turismo de lujo","El turismo en avión","El turismo de invierno"],0],
  [4,"¿Qué documento de la ONU Turismo orienta un turismo responsable?",["El Código Ético Mundial para el Turismo","El Tratado de Versalles","La Carta Magna","El Código Civil"],0],
  [5,"¿Qué es el turismo comunitario?",["Turismo organizado y gestionado por comunidades locales, que reciben sus beneficios","El turismo de grandes cadenas","El turismo en cruceros","El turismo virtual"],0]]]
],[
 ["Destinos turísticos de Chile 🇨🇱",["Torres del Paine","San Pedro de Atacama","Rapa Nui","Valparaíso","Chiloé"],"Pucón, Puerto Varas, La Serena, Valle del Elqui, Carretera Austral, Viña del Mar"],
 ["Tipos de turismo 🧗",["ecoturismo","turismo aventura","turismo cultural","turismo de playa","turismo de negocios"],"enoturismo, astroturismo, agroturismo, turismo religioso, turismo gastronómico"]]),

T("tu2","Agencias de viajes y tour operador","✈️","Turismo · Agencias y transporte","Agencias y operadores · transporte aéreo · códigos y siglas · paquetes y programación · documentación de viaje",[
 ["Agencias y operadores","🏢",[
  [1,"¿Qué hace una agencia de viajes?",["Asesora, vende y reserva viajes y servicios turísticos","Construye hoteles","Fabrica aviones","Cocina para turistas"],0],
  [2,"¿Qué es un tour operador?",["Una empresa que diseña y organiza paquetes y servicios turísticos","Un piloto de avión","Un recepcionista","Un taxista"],0],
  [2,"¿Qué diferencia a una agencia mayorista de una minorista?",["La mayorista crea paquetes y los vende a otras agencias; la minorista vende al público","No hay diferencia","La minorista siempre es más grande","La mayorista solo vende pasajes de bus"],0],
  [3,"¿Qué es una agencia receptiva?",["La que atiende en el destino a los turistas que llegan (traslados, tours)","La que solo vende viajes al extranjero","Una agencia de empleos","Una agencia de publicidad"],0],
  [4,"¿Qué es la comisión de una agencia?",["El porcentaje que recibe por cada servicio que vende","Un impuesto al pasajero","Una multa","Un reembolso"],0],
  [5,"¿Qué es un 'fam tour' (viaje de familiarización)?",["Un viaje para que agentes o prensa conozcan un destino o producto","Un viaje familiar barato","Un tour de famosos","Un paseo obligatorio"],0]]],
 ["Transporte aéreo","🛫",[
  [1,"¿Qué es un vuelo directo?",["Un vuelo que llega al destino sin cambiar de avión","Un vuelo con tres escalas","Un vuelo cancelado","Un vuelo privado"],0],
  [2,"¿Qué es una escala?",["Una parada intermedia del vuelo antes del destino final","El precio del pasaje","El asiento","El equipaje"],0],
  [2,"¿Qué es el equipaje de mano?",["El bolso o maleta pequeña que el pasajero lleva en la cabina","La maleta que va en la bodega","Una mochila prohibida","La carga comercial"],0],
  [3,"¿Qué es la tarjeta de embarque (boarding pass)?",["El documento que permite subir al avión e indica asiento y puerta","El pasaporte","El seguro de viaje","La factura"],0],
  [3,"¿Qué son las clases de servicio en un avión?",["Económica, ejecutiva (business) y primera","Cursos de vuelo","Turnos de la tripulación","Tipos de aeropuerto"],0],
  [4,"¿Qué es una conexión?",["Un cambio de avión en un aeropuerto intermedio para continuar el viaje","El wifi del avión","El cinturón de seguridad","La puerta de embarque"],0],
  [5,"¿Qué es el overbooking en una aerolínea?",["Vender más pasajes que asientos, contando con que algunos pasajeros no se presenten","Un pasaje gratis","El exceso de equipaje","Un vuelo lleno de VIP"],0]]],
 ["Códigos y siglas de viaje","🔤",[
  [1,"¿Qué código IATA tiene el aeropuerto de Santiago de Chile?",["SCL","SAN","STG","CHL"],0],
  [2,"¿Qué código IATA corresponde a Isla de Pascua (Mataveri)?",["IPC","IDP","RAP","PAS"],0],
  [2,"¿Qué es un PNR?",["El registro de una reserva en el sistema (Passenger Name Record)","Un tipo de avión","Un pasaporte nuevo","Un precio especial"],0],
  [3,"¿Qué es un GDS?",["Un sistema global de distribución de reservas, como Amadeus o Sabre","Un GPS de avión","Un tipo de hotel","Una aerolínea"],0],
  [3,"En un itinerario, ¿qué significa ETA?",["Hora estimada de llegada","Hora estimada de salida","Equipaje total autorizado","Embarque terminado"],0],
  [4,"¿Qué significa ETD?",["Hora estimada de salida (Estimated Time of Departure)","Equipaje total declarado","Embarque tardío","Escala técnica de destino"],0],
  [4,"¿Qué código IATA corresponde a Punta Arenas?",["PUQ","PNT","PAR","PTA"],0],
  [5,"¿Qué es un código compartido (codeshare)?",["Un acuerdo en que dos aerolíneas venden el mismo vuelo con sus propios códigos","La contraseña del wifi","Un asiento doble","Un descuento familiar"],0]]],
 ["Paquetes y programación","🧳",[
  [1,"¿Qué es un paquete turístico?",["Un conjunto de servicios (transporte, alojamiento, tours) vendido a un precio único","Una maleta","Un seguro","Un regalo"],0],
  [2,"¿Qué es un itinerario?",["La descripción día a día de las actividades y servicios de un viaje","El precio total","El pasaporte","El mapa del aeropuerto"],0],
  [2,"¿Qué es un transfer?",["El traslado del pasajero entre aeropuerto, hotel u otros puntos","Una transferencia bancaria","Un cambio de habitación","Un tour a pie"],0],
  [3,"¿Qué es un city tour?",["Un recorrido guiado por los principales atractivos de una ciudad","Un vuelo","Una caminata en la montaña","Una cena"],0],
  [3,"¿Qué es un viaje FIT?",["Un viaje individual organizado a la medida","Un viaje de gimnasio","Un viaje grupal masivo","Un viaje obligatorio"],0],
  [4,"¿Qué incluye normalmente un 'todo incluido'?",["Alojamiento, todas las comidas, bebidas y muchas actividades","Solo la habitación","Solo el desayuno","Solo el pasaje"],0],
  [5,"¿Qué es el costeo de un programa turístico?",["El cálculo de todos los costos para fijar el precio de venta","Un viaje por la costa","La propina del guía","El seguro"],0]]],
 ["Documentación de viaje","🛂",[
  [1,"¿Qué documento se necesita para viajar fuera de Sudamérica?",["Pasaporte vigente","Solo la licencia de conducir","El certificado de notas","Ninguno"],0],
  [2,"¿Qué es una visa?",["Un permiso que otorga un país para ingresar a su territorio","Una tarjeta de crédito","Un pasaje","Un seguro"],0],
  [3,"¿Qué es un seguro de viaje?",["Una cobertura de gastos médicos, equipaje y otros imprevistos durante el viaje","Un pasaje de vuelta","Una visa","Un tipo de hotel"],0],
  [3,"¿Qué deben declarar los viajeros al SAG al entrar a Chile?",["Productos de origen animal o vegetal, como frutas, carnes o semillas","Su ropa","Sus libros","Sus celulares"],0],
  [4,"¿Qué necesita un menor chileno para salir del país sin uno de sus padres?",["Una autorización notarial del padre o madre que no viaja","Nada","Solo una foto","Un certificado escolar"],0],
  [5,"¿Qué es la tarjeta de turismo que entrega la PDI?",["El documento que recibe el extranjero al ingresar a Chile y debe presentar al salir","Una tarjeta de crédito","Una tarjeta de descuentos","Un mapa turístico"],0]]]
],[
 ["Aerolíneas que vuelan en Chile ✈️",["LATAM","Sky Airline","JetSMART","Aerolíneas Argentinas","American Airlines"],"Iberia, Air France, Delta, Copa, Avianca, Qantas"],
 ["Servicios que vende una agencia de viajes 🧳",["pasajes aéreos","hoteles","paquetes turísticos","tours","seguros de viaje"],"traslados, cruceros, arriendo de autos, entradas, asesoría de visas"]]),

T("tu3","Guiado y destinos de Chile","🗺️","Turismo · Guiado","Técnicas de guiado · norte · centro y Santiago · sur y Patagonia · patrimonio y cultura",[
 ["Técnicas de guiado","🎙️",[
  [1,"¿Qué hace un guía de turismo?",["Acompaña, orienta e informa a los turistas sobre el destino","Cocina para los turistas","Conduce aviones","Limpia los hoteles"],0],
  [2,"¿Qué debe hacer el guía al inicio de un tour?",["Presentarse, dar la bienvenida, explicar el itinerario y las normas de seguridad","Empezar a caminar sin hablar","Cobrar propinas","Desaparecer"],0],
  [2,"¿Dónde debe ubicarse el guía al hablarle a su grupo?",["Donde todos lo vean y lo escuchen, sin dar la espalda al grupo","Detrás del grupo","Dentro del bus con la puerta cerrada","Lejos del grupo"],0],
  [3,"¿Dónde deben inscribirse los guías de turismo en Chile?",["En el Registro Nacional de Prestadores de Servicios Turísticos de Sernatur","En el Registro de Pilotos","En el Colegio de Abogados","En ningún lugar"],0],
  [3,"¿Qué es un tour leader (coordinador de grupo)?",["La persona que acompaña al grupo durante todo el viaje, coordinando los servicios","El chofer del bus","El dueño de la agencia","El guía local de un museo"],0],
  [4,"¿Qué es la interpretación del patrimonio?",["Comunicar el valor y el significado de un lugar de forma atractiva y comprensible","Traducir del inglés","Leer un libro","Dibujar mapas"],0],
  [5,"¿Qué debe tener previsto el guía por si un turista se pierde del grupo?",["Un punto y una hora de encuentro, y un contacto de emergencia","Nada","Seguir sin él","Culpar al turista"],0]]],
 ["Destinos del norte","🏜️",[
  [1,"¿Qué desierto recorre el norte de Chile?",["El desierto de Atacama","El Sahara","El desierto de Sonora","El desierto de Gobi"],0],
  [2,"¿Qué ciudad es la 'Puerta Norte' de Chile y tiene el Morro?",["Arica","Iquique","La Serena","Copiapó"],0],
  [2,"¿Qué se puede ver en los géiseres del Tatio?",["Fumarolas y chorros de vapor al amanecer, a más de 4.000 m de altura","Playas de arena blanca","Glaciares","Viñedos"],0],
  [3,"¿Qué parque nacional del altiplano tiene el lago Chungará?",["El Parque Nacional Lauca","Torres del Paine","Pan de Azúcar","Vicente Pérez Rosales"],0],
  [3,"¿Qué valle de la región de Coquimbo es famoso por el pisco y la observación de estrellas?",["Valle del Elqui","Valle de Colchagua","Valle de Casablanca","Valle del Maipo"],0],
  [4,"¿Qué fenómeno ocurre en Atacama cuando llueve más de lo normal?",["El desierto florido","La aurora austral","La marea roja","El deshielo de glaciares"],0],
  [5,"¿Qué observatorios astronómicos del norte de Chile son famosos en el mundo?",["ALMA, Paranal y La Silla","Hubble y Kepler","Arecibo y Greenwich","Ninguno"],0]]],
 ["Centro y Santiago","🏙️",[
  [1,"¿Qué cerro de Santiago tiene una estatua de la Virgen y un teleférico?",["El cerro San Cristóbal","El cerro Santa Lucía","El cerro Manquehue","El cerro El Plomo"],0],
  [2,"¿Qué ciudad es famosa por su Reloj de Flores y sus playas?",["Viña del Mar","Rancagua","Talca","Curicó"],0],
  [2,"¿Qué medio de transporte histórico caracteriza a Valparaíso?",["Los ascensores (funiculares)","Las góndolas","Los tranvías de cable","Los rickshaws"],0],
  [3,"¿Qué hay en Isla Negra, en la costa central?",["Una casa museo de Pablo Neruda frente al mar","Un hotel cinco estrellas","Un fuerte español","Una viña"],0],
  [3,"¿Qué centro de esquí está cerca de Santiago?",["Valle Nevado","Cerro Castor","Bariloche","Antillanca"],0],
  [4,"¿Qué antiguo campamento minero de la región de O'Higgins es Patrimonio de la Humanidad?",["Sewell","Humberstone","Chuquicamata","Lota"],0],
  [5,"¿Qué edificio de Santiago es la sede del gobierno?",["El Palacio de La Moneda","El Congreso Nacional","El Teatro Municipal","La Catedral"],0]]],
 ["Sur y Patagonia","🏔️",[
  [1,"¿Qué ciudad es la capital de la región de Magallanes?",["Punta Arenas","Puerto Montt","Coyhaique","Valdivia"],0],
  [2,"¿Qué ruta escénica une Puerto Montt con la Patagonia de Aysén?",["La Carretera Austral","La Ruta 5 Norte","La Ruta del Vino","La Ruta del Desierto"],0],
  [2,"¿Qué ciudad junto al lago Llanquihue tiene herencia alemana y vista al volcán Osorno?",["Puerto Varas","Temuco","Ancud","Coyhaique"],0],
  [3,"¿Qué ciudad del sur es famosa por sus ríos, su mercado fluvial y la cerveza artesanal?",["Valdivia","Antofagasta","Talca","Chillán"],0],
  [3,"¿Qué glaciar se visita en la Laguna San Rafael?",["El glaciar San Rafael","El glaciar Perito Moreno","El glaciar Aletsch","El glaciar Grey"],0],
  [4,"¿Qué formaciones rocosas se visitan en el lago General Carrera?",["Las Capillas de Mármol","Los moai","El Valle de la Luna","Las Torres del Paine"],0],
  [5,"¿Cuál es la mejor época para visitar la Patagonia chilena?",["Primavera y verano (octubre a marzo)","Pleno invierno (julio)","Solo en mayo","Cualquier día de lluvia"],0]]],
 ["Patrimonio y cultura","🗿",[
  [1,"¿Qué es la cueca?",["El baile nacional de Chile","Un plato típico","Un instrumento","Un volcán"],0],
  [2,"¿Qué pueblo originario es el más numeroso de Chile?",["El pueblo mapuche","El pueblo selk'nam","El pueblo kawésqar","El pueblo yagán"],0],
  [3,"¿Qué son las Fiestas Patrias?",["Las celebraciones del 18 y 19 de septiembre","La Navidad","El Año Nuevo","El Día del Trabajo"],0],
  [3,"¿Qué festividad religiosa del norte reúne bailes chinos y diabladas?",["La Fiesta de La Tirana","La Semana Valdiviana","El Festival de Viña","La Vendimia de Mendoza"],0],
  [4,"¿Cuántos sitios Patrimonio de la Humanidad tiene Chile?",["7","1","25","50"],0],
  [5,"¿Qué sitio Patrimonio de la Humanidad conserva las momias artificiales más antiguas del mundo?",["Los asentamientos de la cultura Chinchorro","Sewell","Valparaíso","Las iglesias de Chiloé"],0]]]
],[
 ["Parques nacionales de Chile 🏞️",["Torres del Paine","Lauca","Conguillío","Vicente Pérez Rosales","Rapa Nui"],"Pan de Azúcar, Puyehue, Chiloé, Huerquehue, La Campana, Queulat"],
 ["Atractivos de Valparaíso y Viña del Mar ⚓",["ascensores","cerro Alegre","La Sebastiana","Reloj de Flores","Muelle Prat"],"cerro Concepción, Palacio Vergara, Castillo Wulff, Plaza Sotomayor, playas de Reñaca"]]),

T("tu4","Destinos y patrimonio mundial","🌍","Turismo · Destinos internacionales","Monumentos famosos · capitales y destinos · patrimonio UNESCO · cruceros y transporte · monedas y horarios",[
 ["Monumentos famosos","🏛️",[
  [1,"¿En qué país está la Torre Eiffel?",["Francia","Italia","España","Bélgica"],0],
  [1,"¿En qué país está Machu Picchu?",["Perú","Bolivia","Chile","Ecuador"],0],
  [2,"¿En qué ciudad está el Coliseo?",["Roma","Atenas","Madrid","Estambul"],0],
  [2,"¿En qué país está el Taj Mahal?",["India","Pakistán","Egipto","Tailandia"],0],
  [3,"¿En qué ciudad está el Cristo Redentor?",["Río de Janeiro","Buenos Aires","Lima","Ciudad de México"],0],
  [3,"¿En qué país está Petra, la ciudad tallada en la roca?",["Jordania","Egipto","Turquía","Grecia"],0],
  [4,"¿En qué país está Chichén Itzá?",["México","Guatemala","Perú","Honduras"],0],
  [5,"¿En qué ciudad está la Sagrada Familia de Gaudí?",["Barcelona","Madrid","Lisboa","Sevilla"],0]]],
 ["Capitales y destinos","🗽",[
  [1,"¿Cuál es la capital de Argentina?",["Buenos Aires","Córdoba","Mendoza","Rosario"],0],
  [2,"¿Cuál es la capital de Perú?",["Lima","Cusco","Arequipa","Trujillo"],0],
  [2,"¿Qué ciudad es conocida como 'la Gran Manzana'?",["Nueva York","Los Ángeles","Chicago","Miami"],0],
  [3,"¿Cuál es la capital de Brasil?",["Brasilia","Río de Janeiro","São Paulo","Salvador"],0],
  [3,"¿Qué ciudad argentina cercana a Chile es muy visitada por sus vinos?",["Mendoza","Ushuaia","Salta","Rosario"],0],
  [4,"¿Qué cataratas están en la frontera entre Argentina y Brasil?",["Las cataratas del Iguazú","Las cataratas del Niágara","El Salto Ángel","Las cataratas Victoria"],0],
  [5,"¿Qué ciudad argentina se conoce como 'el fin del mundo' y es puerta de entrada a la Antártica?",["Ushuaia","Río Gallegos","Bariloche","Córdoba"],0]]],
 ["Patrimonio UNESCO","🌐",[
  [1,"¿Qué organismo declara los sitios Patrimonio de la Humanidad?",["La UNESCO","La FIFA","La OTAN","La OMS"],0],
  [2,"¿Qué sitio Patrimonio de la Humanidad está en Rapa Nui?",["El Parque Nacional Rapa Nui","Las iglesias de Chiloé","Humberstone","Sewell"],0],
  [3,"¿Qué es el Qhapaq Ñan, patrimonio compartido por Chile y otros países andinos?",["El sistema vial andino (camino del Inca)","Un río del norte","Una iglesia colonial","Un volcán"],0],
  [3,"¿Qué es el patrimonio inmaterial?",["Tradiciones, fiestas, músicas, saberes y técnicas que se transmiten entre generaciones","Los edificios antiguos","Los museos","Las monedas antiguas"],0],
  [4,"¿Qué ciudad es famosa por sus canales y góndolas?",["Venecia","Ámsterdam","Brujas","Praga"],0],
  [5,"¿En qué país están las pirámides de Giza?",["Egipto","México","Sudán","Marruecos"],0]]],
 ["Cruceros y transporte","🚢",[
  [1,"¿Qué es un crucero?",["Un viaje turístico en un gran barco con alojamiento y entretención a bordo","Un tipo de avión","Un bus de dos pisos","Un tren de alta velocidad"],0],
  [2,"¿Qué es la recalada de un crucero?",["La llegada o escala del barco en un puerto","La comida a bordo","El camarote","La tripulación"],0],
  [3,"¿Qué es un camarote?",["La habitación de un barco","El comedor","El capitán","El puerto"],0],
  [3,"¿Qué puertos chilenos reciben más cruceros?",["Valparaíso, San Antonio y Punta Arenas","Rancagua y Talca","Calama y Ovalle","Temuco y Los Ángeles"],0],
  [4,"¿Qué es un tren turístico?",["Un tren que recorre rutas de interés paisajístico o histórico para turistas","Un tren de carga","Un metro","Un teleférico"],0],
  [5,"¿Qué ruta marítima turística une Puerto Montt con Puerto Natales?",["La ruta de los canales patagónicos","El Canal de Panamá","El río Danubio","El estrecho de Gibraltar"],0]]],
 ["Monedas y horarios","💱",[
  [1,"¿Cuál es la moneda de Argentina?",["El peso argentino","El real","El sol","El dólar"],0],
  [2,"¿Cuál es la moneda de Perú?",["El sol","El peso","El boliviano","El real"],0],
  [2,"¿Cuál es la moneda de la Unión Europea?",["El euro","La libra","El franco","El dólar"],0],
  [3,"¿Cuál es la moneda de Brasil?",["El real","El peso","El sol","El euro"],0],
  [4,"¿Qué es el tipo de cambio?",["El valor de una moneda expresado en otra","Un tipo de pasaje","La propina","La tarifa del hotel"],0],
  [5,"Si en Santiago son las 12:00 y rige UTC−3, ¿qué hora es en Londres (UTC+0)?",["15:00","09:00","12:00","00:00"],0]]]
],[
 ["Destinos más visitados del mundo 🌍",["París","Nueva York","Roma","Londres","Barcelona"],"Dubái, Tokio, Bangkok, Estambul, Cancún, Río de Janeiro"],
 ["Maravillas del mundo moderno 🏛️",["Machu Picchu","Gran Muralla China","Coliseo","Taj Mahal","Cristo Redentor"],"Petra, Chichén Itzá"]]),

T("tu5","Marketing turístico y servicio al cliente","⭐","Turismo · Marketing y calidad","Marketing mix · segmentación y fidelización · calidad de servicio · ventas online y reseñas · manejo de reclamos",[
 ["Marketing mix","📣",[
  [1,"¿Qué son las 4P del marketing?",["Producto, precio, plaza (distribución) y promoción","Pan, papas, pollo y postre","Personal, piso, puerta y pasillo","Pasaporte, pasaje, playa y piscina"],0],
  [2,"¿Qué es la promoción en marketing?",["Las acciones para comunicar y dar a conocer un producto: publicidad, redes, ofertas","El precio final","El lugar de venta","La fabricación"],0],
  [3,"¿Qué es la marca de un destino?",["La identidad e imagen con que se promociona un lugar","El logo de una aerolínea","Una tarjeta de crédito","El precio de entrada"],0],
  [3,"¿Qué es una ventaja competitiva?",["Algo que hace a un servicio mejor o distinto que la competencia","Un descuento obligatorio","Un error del competidor","Un premio de lotería"],0],
  [4,"¿Qué es el análisis FODA?",["El análisis de fortalezas, oportunidades, debilidades y amenazas","Finanzas, organización, dirección y administración","Fotos, ofertas, descuentos y avisos","Un tipo de hotel"],0],
  [5,"¿Qué es el marketing de contenidos?",["Crear contenido útil o atractivo (videos, blogs, fotos) para atraer clientes","Vender sin publicidad","Repartir volantes en la calle","Bajar los precios"],0]]],
 ["Segmentación y fidelización","🎯",[
  [1,"¿Qué es un segmento de mercado?",["Un grupo de clientes con características y necesidades similares","Un trozo de pizza","Un tipo de habitación","Una calle comercial"],0],
  [2,"¿Qué segmento busca sobre todo hoteles con salas de reuniones y buena conexión a internet?",["Los viajeros de negocios (corporativos)","Los mochileros","Las familias con niños pequeños","Los turistas de playa"],0],
  [3,"¿Qué es el 'buyer persona'?",["Un perfil ficticio que representa al cliente ideal","Un cliente que compra mucho","Un vendedor","Un huésped VIP"],0],
  [3,"¿Qué es la fidelización de clientes?",["Lograr que los clientes vuelvan y recomienden el servicio","Cobrar más a los clientes nuevos","Evitar a los clientes","Cambiar de clientes cada año"],0],
  [4,"¿Qué es un programa de lealtad?",["Un sistema de beneficios o puntos para clientes frecuentes","Un contrato de trabajo","Un seguro","Una reserva no reembolsable"],0],
  [5,"¿Qué es el CRM?",["La gestión de la relación con el cliente (Customer Relationship Management)","Un tipo de habitación","Un código aeroportuario","Un menú"],0]]],
 ["Calidad de servicio","🌟",[
  [1,"¿Qué es la calidad de servicio?",["Cumplir o superar las expectativas del cliente","Tener el hotel más grande","Cobrar siempre barato","Tener muchos empleados"],0],
  [2,"¿Qué es un 'momento de verdad'?",["Cada contacto del cliente con la empresa que forma su opinión del servicio","La hora del check-out","Un reclamo formal","Una auditoría"],0],
  [3,"¿Qué es la empatía en el servicio?",["Ponerse en el lugar del cliente para entender sus necesidades","Decir siempre que sí","Hablar mucho","Ser serio"],0],
  [3,"¿Qué es la comunicación no verbal?",["Los gestos, la postura, las miradas y las expresiones que acompañan lo que decimos","Hablar por teléfono","Escribir correos","Hablar otro idioma"],0],
  [4,"¿Qué es el modelo SERVQUAL?",["Un modelo que mide la calidad del servicio comparando expectativas y percepciones","Un software de reservas","Una cadena hotelera","Un código IATA"],0],
  [5,"¿Qué es la hospitalidad?",["La actitud de recibir y atender a los visitantes con calidez y generosidad","Trabajar en un hospital","Un tipo de habitación","Un plan de alimentación"],0]]],
 ["Ventas online y reseñas","💻",[
  [1,"¿Qué es una reseña online?",["La opinión que deja un cliente en internet sobre un servicio","Un pago por internet","Una reserva cancelada","Una foto del hotel"],0],
  [2,"¿Qué sitio es muy conocido por las opiniones de viajeros?",["TripAdvisor","LinkedIn","Wikipedia","Spotify"],0],
  [3,"¿Cómo debe responder un hotel a una reseña negativa?",["Con respeto: agradeciendo, reconociendo el problema y explicando cómo se solucionará","Insultando al cliente","Ignorándola siempre","Borrando su cuenta"],0],
  [3,"¿Qué es un metabuscador como Trivago o Google Hotels?",["Un sitio que compara precios de muchos canales en una sola búsqueda","Una aerolínea","Un hotel","Un banco"],0],
  [4,"¿Qué es la venta adicional (upselling)?",["Ofrecer al cliente un servicio superior o adicional al que ya compró","Bajar el precio","Vender en la calle","Cancelar la venta"],0],
  [5,"¿Qué es la tasa de conversión de un sitio web?",["El porcentaje de visitantes que terminan haciendo una reserva o compra","El tipo de cambio","La velocidad de la página","El número de fotos"],0]]],
 ["Manejo de reclamos","😠",[
  [1,"Frente a un huésped molesto, ¿qué no se debe hacer?",["Discutir o subir el tono de voz","Escuchar con calma","Pedir disculpas","Buscar una solución"],0],
  [2,"¿Por qué un reclamo puede ser una oportunidad?",["Porque permite mejorar y recuperar la confianza del cliente","Porque se le puede cobrar más","Porque el cliente se va","No lo es"],0],
  [3,"¿Qué es la recuperación del servicio?",["Las acciones para corregir un error y dejar al cliente satisfecho","Recuperar las propinas","Volver a abrir el hotel","Recuperar objetos olvidados"],0],
  [3,"¿Qué institución recibe los reclamos de los consumidores en Chile?",["El SERNAC","Sernatur","El SAG","La Contraloría"],0],
  [4,"Si no puedes resolver un reclamo, ¿qué debes hacer?",["Derivarlo a tu superior sin dejar al cliente esperando sin respuesta","Decirle que no es tu problema","Irte a tu casa","Ignorarlo"],0],
  [5,"¿Qué es el 'empowerment' en el servicio?",["Dar al personal autoridad para resolver en el momento los problemas del cliente","Contratar más gerentes","Usar uniformes elegantes","Subir los precios"],0]]]
],[
 ["Redes y sitios para promocionar un hotel 📱",["Instagram","Facebook","TikTok","página web","Google"],"YouTube, TripAdvisor, Booking.com, WhatsApp, X"],
 ["Cualidades de un buen trabajador de servicio ⭐",["amabilidad","empatía","puntualidad","presentación personal","proactividad"],"paciencia, comunicación, trabajo en equipo, honestidad, idiomas"]])
];
})();
