/* =========================================================
   BANCO — HOTELERÍA (8 temas)
   Categorías inspiradas en las mallas de ENAC, CFT Santo Tomás, Duoc UC,
   INACAP y UNAB: recepción y reservas, housekeeping, salón comedor, bar y
   vinos, eventos y protocolo, gestión hotelera, higiene y seguridad, gastronomía.
   Formato: [nivel 1–5, pregunta, [opciones (la 1ª es la correcta)], 0]
   (las opciones se mezclan al azar en el juego)
   ========================================================= */
(function(){
function T(id,name,icon,tag,desc,cats,top5){return {id:id,name:name,icon:icon,group:'ho',tag:tag,desc:desc,top5:top5,cats:cats.map(function(c,i){return {id:id+'_'+i,name:c[0],icon:c[1],q:c[2]};})};}
window.HOTEL=[

T("ho1","Recepción y reservas","🛎️","Hotelería · Front Office","Check-in y check-out · reservas · habitaciones y tarifas · atención al huésped · PMS y caja",[
 ["Check-in y check-out","🔑",[
  [1,"¿Qué es el check-in?",["El registro de llegada del huésped al hotel","La salida del huésped y el pago de la cuenta","La limpieza de la habitación","La reserva por teléfono"],0],
  [1,"¿Qué es el check-out?",["El proceso de salida del huésped, con revisión y pago de la cuenta","El registro de llegada","El cambio de sábanas","La entrega del desayuno"],0],
  [2,"¿Qué documento se solicita a un huésped extranjero al hacer check-in?",["Pasaporte o documento de identidad válido","Solo la licencia de conducir","Certificado de nacimiento","Ninguno"],0],
  [2,"¿Qué se entrega al huésped al terminar el check-in?",["La llave o tarjeta de la habitación e información del hotel","La cuenta final","El menú de la cena impreso","Una toalla"],0],
  [3,"¿Qué es la tarjeta de registro (registration card)?",["El formulario con los datos del huésped que este firma al llegar","La tarjeta de crédito del hotel","La llave magnética","La credencial del recepcionista"],0],
  [4,"¿Qué es un 'early check-in'?",["Permitir la entrada a la habitación antes de la hora establecida","Salir del hotel antes de tiempo","Reservar con un año de anticipación","Llegar sin reserva"],0],
  [4,"¿Qué es un 'late check-out'?",["Permitir que el huésped deje la habitación después de la hora establecida","Llegar tarde al hotel","Cancelar la reserva","Pagar con cheque"],0],
  [5,"¿Qué es el pre-registro?",["Preparar con anticipación los datos y la habitación de quienes llegan, para agilizar el check-in","Registrarse después de salir","Inscribirse como empleado","Una reserva no confirmada"],0]]],
 ["Reservas","📅",[
  [1,"¿Qué es una reserva?",["El compromiso de guardar una habitación para un huésped en fechas determinadas","El pago final de la estadía","Un tipo de habitación","Un reclamo del huésped"],0],
  [2,"¿Qué es un 'walk-in'?",["Un huésped que llega sin reserva previa","Un huésped VIP","Un pasillo del hotel","Una reserva por internet"],0],
  [2,"¿Qué es un 'no-show'?",["Un huésped con reserva que no llega ni avisa","Un huésped que se va sin pagar","Una habitación fuera de servicio","Un show cancelado"],0],
  [3,"¿Qué es una reserva garantizada?",["La asegurada con tarjeta de crédito o depósito, que se mantiene aunque el huésped llegue tarde","Una reserva sin datos","Una reserva gratuita","Una reserva de restaurante"],0],
  [3,"¿Qué es el overbooking (sobreventa)?",["Vender más habitaciones de las disponibles, previendo cancelaciones o no-shows","Tener el hotel vacío","Cobrar de más a un huésped","Un descuento por grupo"],0],
  [4,"Si hay overbooking y un huésped con reserva queda sin habitación, lo correcto es…",["Reubicarlo en un hotel de igual o mejor categoría, asumiendo el costo","Decirle que vuelva mañana","Cobrarle una multa","Pedirle que duerma en el lobby"],0],
  [4,"¿Qué es la política de cancelación?",["Las condiciones y plazos para anular una reserva sin cargo o con penalidad","La lista de huéspedes cancelados","El horario del check-out","Las reglas de la piscina"],0],
  [5,"¿Qué es un 'allotment' o cupo?",["Habitaciones bloqueadas para una agencia u operador durante un período, que se liberan si no se venden","Una reserva individual","Una habitación gratis","Un medio de pago"],0]]],
 ["Habitaciones y tarifas","🛏️",[
  [1,"¿Qué es una habitación single?",["Una habitación para una persona","Una habitación para cuatro personas","Una suite","Un dormitorio compartido"],0],
  [2,"¿Qué diferencia una habitación 'twin' de una matrimonial (double)?",["La twin tiene dos camas individuales; la matrimonial, una cama grande","La twin siempre es más cara","La matrimonial no tiene baño","Son lo mismo"],0],
  [2,"¿Qué es una suite?",["Una habitación amplia con dormitorio y sala de estar separada","Una habitación sin ventana","Una cama extra","Un baño compartido"],0],
  [3,"¿Qué es la 'tarifa rack'?",["La tarifa oficial publicada, sin descuentos","La tarifa más barata","La tarifa para empleados","El precio del minibar"],0],
  [3,"¿Qué son las habitaciones comunicadas (connecting rooms)?",["Dos habitaciones unidas por una puerta interior","Habitaciones con teléfono","Habitaciones del mismo piso","Habitaciones con wifi"],0],
  [4,"¿Qué es un 'upgrade'?",["Mejorar al huésped a una habitación de categoría superior, muchas veces sin costo","Bajar la categoría de la habitación","Subir el precio sin aviso","Cambiarlo de hotel"],0],
  [4,"¿Qué es una tarifa corporativa?",["Una tarifa especial negociada con empresas que envían huéspedes con frecuencia","La tarifa de fin de semana","La tarifa para niños","La tarifa sin desayuno"],0],
  [5,"¿Qué es una habitación accesible (adaptada)?",["Una habitación diseñada para personas con movilidad reducida","Una habitación recién pintada","Una habitación para mascotas","Una habitación con jacuzzi"],0]]],
 ["Atención al huésped","🙋",[
  [1,"¿Cuál es la actitud correcta al recibir a un huésped?",["Saludar con una sonrisa, contacto visual y amabilidad","Seguir mirando el celular","Esperar sin mirarlo a que hable","Pedirle que vuelva más tarde"],0],
  [2,"¿Qué hace el conserje (concierge)?",["Entrega información y recomendaciones y gestiona servicios especiales","Limpia las habitaciones","Cocina el desayuno","Lleva la contabilidad"],0],
  [2,"¿Qué hace un botones (bellboy)?",["Traslada el equipaje y acompaña al huésped a su habitación","Prepara cócteles","Hace las camas","Atiende la piscina"],0],
  [3,"Ante un reclamo, ¿qué debe hacer primero el recepcionista?",["Escuchar con atención y sin interrumpir","Discutir con el huésped","Culpar a otro departamento","Ignorarlo"],0],
  [3,"¿Qué significa VIP en hotelería?",["Very Important Person: huésped muy importante que recibe atenciones especiales","Vista Interior Privada","Pago con tarjeta","Reserva internacional"],0],
  [4,"¿Qué propone el método LAST para manejar reclamos?",["Escuchar, disculparse, solucionar y agradecer (Listen, Apologize, Solve, Thank)","Llamar, anotar, salir y terminar","Leer, archivar, sellar y timbrar","Limpiar, arreglar, secar y tender"],0],
  [5,"¿Qué es el libro de reclamos y sugerencias?",["Un medio formal donde el cliente deja constancia de su reclamo o sugerencia","Un libro de reservas antiguas","El inventario de lencería","La carta del restaurante"],0]]],
 ["Sistemas y caja","💻",[
  [1,"¿Qué es un PMS en hotelería?",["Un sistema de gestión hotelera (Property Management System) para reservas, check-in y cuentas","Un tipo de habitación","Una tarifa promocional","Un plan de menú"],0],
  [2,"¿Qué es el 'folio' de un huésped?",["La cuenta donde se cargan todos sus consumos y pagos","Su número de pasaporte","Su número de habitación","Su reserva de restaurante"],0],
  [3,"¿Qué es la auditoría nocturna (night audit)?",["El cierre diario que revisa cuentas, cargos y estadísticas del día","Una fiesta nocturna","La limpieza nocturna del lobby","La vigilancia del estacionamiento"],0],
  [3,"¿Cuál es un ejemplo conocido de PMS?",["Opera (Oracle Hospitality)","Photoshop","Instagram","Spotify"],0],
  [4,"¿Qué es un voucher en recepción?",["Un documento que acredita servicios ya pagados, por ejemplo a una agencia","Un vale de propina","Una llave de repuesto","Un reclamo escrito"],0],
  [5,"¿Qué es el 'city ledger'?",["Las cuentas por cobrar a empresas o agencias con crédito, no al huésped directamente","El plano de la ciudad","La lista de huéspedes de la ciudad","Un impuesto municipal"],0]]]
],[
 ["Funciones del recepcionista 🛎️",["check-in","check-out","reservas","informar al huésped","cobrar cuentas"],"atender el teléfono, registrar reclamos, entregar llaves, coordinar con housekeeping"],
 ["Cargos del área de recepción (front office) 🧑‍💼",["recepcionista","conserje","botones","jefe de recepción","auditor nocturno"],"reservas, cajero, telefonista, guest relations, portero"]]),

T("ho2","Housekeeping: habitaciones y pisos","🧹","Hotelería · Habitaciones y pisos","Organización · limpieza de habitaciones · lencería y lavandería · estados de habitación · amenities y seguridad",[
 ["Organización del área de pisos","🗂️",[
  [1,"¿Qué es el departamento de housekeeping (pisos)?",["El área encargada de la limpieza, el orden y la presentación de habitaciones y espacios del hotel","El área de cocina","El área de reservas","El área de contabilidad"],0],
  [2,"¿Cómo se llama a la jefa o jefe del departamento de pisos?",["Ama de llaves o gobernanta (executive housekeeper)","Maître","Chef ejecutivo","Conserje"],0],
  [2,"¿Qué hace una mucama o camarera de pisos?",["Limpia y prepara las habitaciones","Cobra las cuentas","Sirve el vino","Recibe a los huéspedes"],0],
  [3,"¿Qué es el reporte de habitaciones (room report)?",["El informe del estado real de cada habitación que housekeeping envía a recepción","La lista de reclamos","El menú del día","La factura del huésped"],0],
  [4,"¿Qué es el 'office' o cuarto de pisos?",["Un espacio en cada piso para guardar insumos, lencería y el carro","La oficina del gerente","El bar del lobby","La sala de reuniones"],0],
  [5,"¿Qué se hace con los objetos olvidados (lost and found)?",["Se registran y se guardan para devolverlos a su dueño","Se venden","Se usan como insumos","Se botan de inmediato"],0]]],
 ["Limpieza de habitaciones","🧽",[
  [1,"¿Qué se recomienda hacer primero al entrar a limpiar una habitación?",["Golpear, anunciarse ('Housekeeping') y ventilar","Encender la TV","Hacer la cama sin mirar","Revisar las maletas del huésped"],0],
  [2,"¿Cuál es el orden general de limpieza de una habitación?",["De arriba hacia abajo y del fondo hacia la puerta","De abajo hacia arriba","Solo el piso","Desde la puerta hacia adentro"],0],
  [2,"¿Qué es el 'turndown service' (servicio de cobertura)?",["Preparar la habitación por la tarde: abrir la cama, cerrar cortinas, luz tenue y un detalle","Dar vuelta el colchón","Cambiar la alfombra","Cobrar el minibar"],0],
  [3,"¿Por qué se usan paños de distintos colores?",["Para evitar la contaminación cruzada entre baño, superficies y vajilla","Por decoración","Porque son más baratos","Para identificar al empleado"],0],
  [3,"¿Qué es una limpieza de salida (check-out)?",["Una limpieza profunda de la habitación después de que el huésped se va","Una limpieza rápida mientras el huésped duerme","La limpieza del lobby","El lavado del auto del huésped"],0],
  [4,"¿Qué caracteriza el tendido de cama con 'esquina de sobre' (inglete)?",["Esquinas dobladas en ángulo y bien ajustadas bajo el colchón","Una cama sin sábanas","Una cama de agua","Un sofá cama"],0],
  [5,"¿Qué es la inspección de habitaciones?",["La revisión que hace la supervisora para verificar que la habitación cumpla el estándar antes de liberarla","La revisión del equipaje","El control de la temperatura del agua","La visita del huésped"],0]]],
 ["Lencería y lavandería","👕",[
  [1,"¿Qué es la lencería en un hotel?",["Sábanas, toallas, fundas y otros textiles","Las joyas del huésped","Los muebles de la habitación","La vajilla del comedor"],0],
  [2,"¿Cuántas mudas (juegos) de lencería se recomienda tener por cama?",["Entre 3 y 5 (en uso, en lavandería, en stock…)","Solo 1","20","Ninguna"],0],
  [3,"¿Qué es el 'par' de lencería?",["La cantidad estándar de juegos necesaria para operar sin quedar desabastecido","Un par de calcetines","Dos toallas","El precio de la lavandería"],0],
  [3,"¿Qué se hace con la lencería manchada o dañada?",["Se separa para tratamiento especial o se da de baja","Se vuelve a poner en la cama","Se regala al huésped","Se esconde"],0],
  [4,"¿Qué es el servicio de lavandería para huéspedes (valet)?",["El lavado y planchado de la ropa del huésped, con cargo a su cuenta","La limpieza de autos","El estacionamiento","El lavado de manteles"],0],
  [5,"En una etiqueta de cuidado textil, ¿qué indica un cuadrado con un círculo dentro tachado?",["No usar secadora","Lavar a mano","Planchar a alta temperatura","Usar cloro"],0]]],
 ["Estados de habitación","🚪",[
  [1,"¿Qué significa una habitación 'ocupada' (OC)?",["Que tiene un huésped registrado","Que está sucia y vacía","Que está en reparación","Que está bloqueada para un VIP"],0],
  [2,"¿Qué significa 'VD' (vacant dirty)?",["Habitación sin huésped que aún no ha sido limpiada","Habitación ocupada y limpia","Habitación lista para vender","Habitación en remodelación"],0],
  [2,"¿Qué significa 'VC' (vacant clean)?",["Habitación vacía y limpia, lista o pendiente de inspección","Habitación ocupada","Habitación sucia","Habitación sin cama"],0],
  [3,"¿Qué significa 'OOO' (out of order)?",["Habitación fuera de servicio por reparaciones, que no se puede vender","Habitación ocupada","Habitación de lujo","Habitación de empleados"],0],
  [3,"¿Qué indica el cartel 'DND' (Do Not Disturb)?",["Que el huésped no quiere ser molestado","Que la habitación está lista","Que el huésped pidió limpieza","Que hay que cambiar las toallas"],0],
  [4,"¿Qué es una discrepancia entre recepción y housekeeping?",["Cuando el estado de una habitación en el sistema no coincide con su estado real","Una pelea entre empleados","Un error en el menú","Un cambio de turno"],0],
  [5,"¿Qué es una habitación 'sleep out'?",["Una habitación registrada y pagada en la que el huésped no durmió","Una habitación al aire libre","Una cama extra","Una habitación sin luz"],0]]],
 ["Amenities y seguridad","🧴",[
  [1,"¿Qué son los amenities?",["Artículos de cortesía para el huésped: jabón, champú, gorra de baño, etc.","Los muebles de la habitación","Las propinas","Las tarifas especiales"],0],
  [2,"¿Qué es el minibar?",["Un pequeño refrigerador con bebidas y snacks que se cobran al consumirlos","El bar del lobby","Una botella de agua gratis","La cocina del hotel"],0],
  [3,"¿Qué lleva el carro de housekeeping?",["Lencería limpia, amenities, productos e implementos de limpieza y bolsa para ropa sucia","Comida para el huésped","Equipaje","Documentos de recepción"],0],
  [3,"¿Por qué nunca se deben mezclar cloro y amoníaco?",["Porque generan gases tóxicos","Porque pierden el olor","Porque manchan la ropa","Porque se congelan"],0],
  [4,"¿Qué hacer si se encuentra un objeto de valor en la habitación de un huésped que ya se fue?",["Registrarlo como objeto olvidado y entregarlo a la supervisión","Guardarlo en el bolsillo","Dejarlo en el lobby","Botarlo"],0],
  [5,"¿Qué es la hoja de datos de seguridad (HDS) de un producto químico?",["Un documento con sus riesgos, uso seguro y primeros auxilios","La factura de compra","La etiqueta de precio","El menú de limpieza"],0]]]
],[
 ["Amenities de un baño de hotel 🧴",["jabón","champú","acondicionador","gorra de baño","kit dental"],"crema corporal, peineta, kit de costura, lustrabotas, secador de pelo"],
 ["Tareas al limpiar una habitación 🧹",["ventilar","retirar la basura","hacer la cama","limpiar el baño","aspirar"],"sacudir el polvo, reponer amenities, reponer toallas, revisar el minibar, revisar las luces"]]),

T("ho3","Servicio de salón comedor","🍽️","Hotelería · Alimentos y bebidas","Tipos de servicio · mise en place y montaje · brigada de sala · cartas y comandas · desayunos y room service",[
 ["Tipos de servicio","🍽️",[
  [1,"¿Qué es el servicio buffet?",["El cliente se sirve solo desde mesas con preparaciones exhibidas","El garzón sirve todo en la mesa","Se pide por teléfono","Solo se sirven bebidas"],0],
  [2,"¿Qué caracteriza al servicio a la americana (emplatado)?",["Los platos salen servidos desde la cocina","El cliente cocina en la mesa","El garzón sirve desde una fuente con pinzas","El cliente se sirve solo"],0],
  [3,"¿Qué es el servicio a la francesa?",["El garzón presenta la fuente por la izquierda y el comensal se sirve","Los platos vienen servidos desde la cocina","Todo se prepara frente al cliente en un carro","No hay garzón"],0],
  [3,"¿Qué es el servicio a la inglesa?",["El garzón sirve al comensal desde la fuente usando pinzas (cuchara y tenedor)","El cliente se sirve solo","Se sirve en vasos desechables","Se sirve en la cocina"],0],
  [4,"¿Qué es el servicio de gueridón (a la rusa)?",["Se terminan o porcionan preparaciones en un carro auxiliar frente al cliente","Solo se sirve sopa","Se come en la cocina","Es un buffet sin mesas"],0],
  [4,"¿Por qué lado se sirve y se retira generalmente el plato emplatado?",["Por la derecha del comensal","Por encima de la cabeza","Siempre por la izquierda","No importa el lado"],0],
  [5,"¿Qué es el servicio 'à la carte'?",["El cliente elige platos de la carta, cada uno con su precio","Un menú fijo para todos","Un buffet libre","Solo postres"],0]]],
 ["Mise en place y montaje","🍴",[
  [1,"¿Qué significa 'mise en place'?",["Tener todo preparado y en su lugar antes del servicio","Lavar la loza al final","Cobrar la cuenta","Cambiar el mantel"],0],
  [2,"En un montaje básico, ¿dónde va el tenedor?",["A la izquierda del plato","A la derecha del plato","Sobre el plato","Debajo de la mesa"],0],
  [2,"¿Dónde se ubica la copa de agua?",["Arriba a la derecha, sobre la punta del cuchillo","A la izquierda del pan","Debajo del plato","En el centro de la mesa"],0],
  [3,"¿Qué es el muletón?",["Una tela gruesa bajo el mantel que amortigua el ruido y protege la mesa","Un tipo de copa","Un plato de pan","Una servilleta"],0],
  [3,"¿Hacia dónde va el filo del cuchillo en el montaje?",["Hacia el plato","Hacia afuera","Hacia arriba","No importa"],0],
  [4,"¿Qué es el cubremantel?",["Un mantel más pequeño sobre el principal, fácil de cambiar","Una servilleta de papel","Un plato decorativo","Un individual de plástico"],0],
  [5,"¿Qué es el aparador (estación de servicio)?",["Un mueble de apoyo con cubiertos, loza y elementos para el servicio","La caja registradora","La barra del bar","El refrigerador de cocina"],0]]],
 ["Brigada de sala","👔",[
  [1,"¿Cómo se llama al jefe del comedor?",["Maître (maître d'hôtel)","Sommelier","Chef","Botones"],0],
  [2,"¿Qué hace el sommelier?",["Recomienda y sirve vinos","Cocina los postres","Limpia las mesas","Recibe las reservas del hotel"],0],
  [3,"¿Qué es el 'chef de rang'?",["El garzón a cargo de un sector o rango de mesas","El cocinero principal","El ayudante de cocina","El cajero"],0],
  [3,"¿Qué hace un 'commis' de sala?",["Ayuda al garzón: lleva platos, repone y retira","Dirige el hotel","Hace las reservas","Prepara los cócteles"],0],
  [4,"¿Qué hace la 'hostess' en un restaurante?",["Recibe a los clientes y los ubica en sus mesas","Cocina","Atiende la tienda","Dirige la lavandería"],0],
  [5,"¿Qué es el rango o sector en el comedor?",["El grupo de mesas asignado a un garzón","El cargo del gerente","La categoría del restaurante","El horario del turno"],0]]],
 ["Cartas, menús y comandas","📜",[
  [1,"¿Qué es la comanda?",["La nota con el pedido del cliente que el garzón envía a cocina o bar","La cuenta final","El menú del día","La propina"],0],
  [2,"¿Qué diferencia hay entre carta y menú?",["La carta ofrece varios platos a elegir; el menú es una secuencia fija a un precio","Son lo mismo","El menú es solo de bebidas","La carta es solo de postres"],0],
  [3,"¿Qué es un menú degustación?",["Varias preparaciones pequeñas en secuencia para conocer la propuesta del chef","Un solo plato grande","Un buffet","Un menú infantil"],0],
  [3,"¿Cuál es el orden clásico de un menú?",["Entrada, plato de fondo y postre","Postre, entrada y sopa","Café, postre y entrada","Plato de fondo, café y entrada"],0],
  [4,"¿Qué es la carta de vinos?",["La lista de vinos disponibles con sus precios y características","Una carta escrita por un enólogo","El menú infantil","La factura del proveedor"],0],
  [5,"¿Qué información sobre alérgenos conviene indicar en la carta?",["Ingredientes que pueden causar alergias, como gluten, maní o mariscos","El nombre del cocinero","El clima del día","La edad del cliente"],0]]],
 ["Desayunos y room service","☕",[
  [1,"¿Qué es el room service?",["El servicio de comidas y bebidas a la habitación","La limpieza de la habitación","El cambio de habitación","El estacionamiento"],0],
  [2,"¿Qué es un desayuno continental?",["Un desayuno ligero: panes, mantequilla, mermelada, café o té y jugo","Un desayuno con carnes y huevos","Un almuerzo","Una cena tardía"],0],
  [2,"¿Qué es un desayuno americano?",["Un desayuno completo con huevos, embutidos y además lo continental","Solo café","Solo fruta","Un desayuno sin bebidas"],0],
  [3,"¿Qué es la tarjeta de desayuno para colgar en la puerta (doorknob menu)?",["Una tarjeta en que el huésped marca su pedido y la hora, y la cuelga afuera","El cartel de no molestar","La llave","El recibo del minibar"],0],
  [4,"¿Qué es el brunch?",["Una comida que combina desayuno y almuerzo, a media mañana","Una cena","Un cóctel nocturno","Un postre"],0],
  [5,"¿Qué se debe hacer con las bandejas de room service que quedan en los pasillos?",["Retirarlas a tiempo para mantener el orden y la higiene","Dejarlas varios días","Pedir al huésped que las baje","Esconderlas bajo la cama"],0]]]
],[
 ["Elementos del montaje de una mesa 🍴",["tenedor","cuchillo","cuchara","copa","servilleta"],"plato de pan, cuchillo de mantequilla, mantel, plato base, salero"],
 ["Tipos de servicio de comedor 🍽️",["buffet","a la americana","a la francesa","a la inglesa","gueridón (a la rusa)"],"à la carte, self-service, room service, banquete"]]),

T("ho4","Bar, vinos y coctelería","🍷","Hotelería · Alimentos y bebidas","Vinos de Chile · servicio del vino · coctelería · destilados · maridaje y sommelería",[
 ["Vinos de Chile","🍇",[
  [1,"¿Qué cepa se considera emblemática de Chile?",["Carménère","Malbec","Tannat","Zinfandel"],0],
  [2,"¿Qué cepa, que se creía casi desaparecida, fue identificada en viñedos chilenos en 1994?",["Carménère","Cabernet Sauvignon","Merlot","Chardonnay"],0],
  [2,"¿Cuál de estos es un valle vitivinícola chileno?",["Valle de Colchagua","Valle de Napa","Valle del Loira","Valle de Uco"],0],
  [3,"¿Qué cepa blanca es típica del valle de Casablanca?",["Sauvignon Blanc","Carménère","Syrah","País"],0],
  [3,"¿Qué es la cepa País?",["Una cepa histórica traída por los españoles, base del vino colonial y popular","Una cepa francesa moderna","Un tipo de pisco","Un vino espumante"],0],
  [4,"¿Qué es el pisco?",["Un destilado de uva típico de Chile y Perú","Un vino blanco","Una cerveza","Un licor de hierbas"],0],
  [5,"¿Qué valle del norte chico es famoso por la producción de pisco?",["Valle del Elqui","Valle del Maipo","Valle de Curicó","Valle del Itata"],0]]],
 ["Servicio del vino","🍷",[
  [1,"¿A qué temperatura aproximada se sirve un vino tinto?",["Entre 16 y 18 °C","Entre 0 y 2 °C","A 30 °C","Muy caliente"],0],
  [2,"¿A qué temperatura aproximada se sirven el vino blanco y el espumante?",["Entre 6 y 10 °C","Entre 20 y 25 °C","A 40 °C","Congelados"],0],
  [2,"¿Quién prueba primero el vino en la mesa?",["La persona que lo pidió (el anfitrión)","El garzón","El chef","Todos a la vez"],0],
  [3,"¿Para qué se decanta un vino?",["Para separar sedimentos y oxigenarlo","Para enfriarlo rápido","Para agregarle azúcar","Para cambiarle el color"],0],
  [3,"¿Hasta dónde se llena habitualmente una copa de vino tinto?",["Aproximadamente un tercio","Hasta el borde","Siempre exactamente hasta la mitad","Solo unas gotas"],0],
  [4,"¿Qué es el sacacorchos 'de dos tiempos' (de mozo)?",["El sacacorchos profesional con navaja y palanca de dos apoyos","Un abridor eléctrico","Una pinza para hielo","Un decantador"],0],
  [5,"¿Qué significa que un vino esté 'corchado'?",["Que está contaminado por TCA y huele a cartón mojado o humedad","Que tiene muchos corchos","Que está muy frío","Que es espumante"],0]]],
 ["Coctelería","🍸",[
  [1,"¿Qué es la coctelería?",["El arte de preparar cócteles mezclando bebidas y otros ingredientes","La venta de vinos","La limpieza de la barra","Un tipo de cerveza"],0],
  [2,"¿Con qué se prepara un pisco sour chileno?",["Pisco, jugo de limón y azúcar (o jarabe)","Ron, menta y soda","Tequila y naranja","Vodka y tomate"],0],
  [2,"¿Qué es la coctelera (shaker)?",["Un recipiente para batir y enfriar cócteles con hielo","Un vaso de cerveza","Una jarra de agua","Un exprimidor"],0],
  [3,"¿Qué ingredientes lleva un mojito?",["Ron blanco, menta, limón, azúcar y soda","Pisco y limón","Vodka y jugo de tomate","Gin y tónica"],0],
  [3,"¿Qué es el jigger?",["Un medidor para dosificar líquidos en coctelería","Un tipo de copa","Un colador","Hielo picado"],0],
  [4,"¿Qué significa servir un trago 'on the rocks'?",["Servirlo sobre hielo","Servirlo sin hielo","Servirlo caliente","Servirlo en un vaso de piedra"],0],
  [5,"¿Qué es el 'garnish' de un cóctel?",["La decoración o guarnición (piel de cítrico, fruta, hoja) que lo acompaña","El hielo","El vaso","El precio"],0]]],
 ["Destilados y licores","🥃",[
  [1,"¿Qué es un destilado?",["Una bebida alcohólica obtenida al destilar un fermentado","Un jugo natural","Un vino sin alcohol","Un refresco"],0],
  [2,"¿De qué planta se obtiene el tequila?",["Del agave azul","De la caña de azúcar","De la uva","De la papa"],0],
  [2,"¿De qué se obtiene el ron?",["De la caña de azúcar o la melaza","Del agave","De la cebada","Del arroz"],0],
  [3,"¿Qué destilado se aromatiza con bayas de enebro?",["El gin (ginebra)","El whisky","El ron","El tequila"],0],
  [4,"¿Qué es un digestivo (bajativo)?",["Una bebida que se sirve después de la comida, como un licor o coñac","Una bebida antes de comer","Un jugo de frutas","Un postre"],0],
  [4,"¿Qué es un aperitivo?",["Una bebida o bocado antes de la comida para abrir el apetito","Una bebida después del postre","Un café","Un plato de fondo"],0],
  [5,"Según la ley chilena, ¿a quién está prohibido vender bebidas alcohólicas?",["A menores de 18 años","A mayores de 60 años","A turistas extranjeros","A deportistas"],0]]],
 ["Maridaje y sommelería","🧀",[
  [1,"¿Qué es el maridaje?",["Combinar comidas y bebidas para que se complementen","Un tipo de boda","Cocinar con vino","Servir agua con hielo"],0],
  [2,"Tradicionalmente, ¿con qué combina mejor un pescado blanco?",["Con un vino blanco","Con un tinto muy tánico","Con licor de café","Con bebida cola"],0],
  [2,"¿Con qué suele maridar bien una carne roja asada?",["Con un vino tinto con cuerpo","Con un vino dulce de postre","Con agua tónica","Con un vino blanco muy liviano"],0],
  [3,"¿Cuáles son las fases de la cata de vinos?",["Visual, olfativa y gustativa","Fría, tibia y caliente","Rápida, lenta y media","Dulce, salada y ácida"],0],
  [3,"¿Qué son los taninos del vino?",["Compuestos que dan sensación de sequedad y astringencia, sobre todo en los tintos","El azúcar del vino","Las burbujas del espumante","El color del corcho"],0],
  [4,"¿Qué es el retrogusto (final) de un vino?",["La persistencia de los sabores después de tragarlo","El primer aroma","El color del borde","La temperatura de la copa"],0],
  [5,"¿Qué es un vino de cosecha tardía?",["Un vino dulce elaborado con uvas cosechadas tarde, con más azúcar","Un vino de mala calidad","Un vino del año pasado","Un vino con gas"],0]]]
],[
 ["Cepas de vino tinto 🍷",["Cabernet Sauvignon","Carménère","Merlot","Syrah","Pinot Noir"],"Malbec, País, Carignan, Cabernet Franc"],
 ["Cócteles famosos 🍸",["pisco sour","mojito","piña colada","margarita","caipiriña"],"daiquiri, cosmopolitan, terremoto, piscola, negroni, Aperol spritz"]]),

T("ho5","Eventos, banquetería y protocolo","🎉","Hotelería · Eventos","Tipos de eventos (MICE) · montajes de salón · banquetería · protocolo y etiqueta · planificación",[
 ["Tipos de eventos (MICE)","🎤",[
  [1,"¿Qué significa la sigla MICE en turismo?",["Reuniones, incentivos, congresos y exposiciones (Meetings, Incentives, Conferences, Exhibitions)","Música, idiomas, cine y espectáculos","Mesas, invitados, cocina y escenario","Mapas, itinerarios, ciudades y excursiones"],0],
  [2,"¿Qué es un congreso?",["Una reunión de profesionales de un área para compartir conocimientos, con varias sesiones","Una fiesta de cumpleaños","Una cena familiar","Un concierto"],0],
  [2,"¿Qué es un viaje de incentivo?",["Un viaje que una empresa regala a sus trabajadores como premio","Un viaje escolar","Un viaje de negocios obligatorio","Un crucero gratis para todos"],0],
  [3,"¿Qué es una feria o exposición comercial?",["Un evento donde empresas exhiben sus productos en stands","Un desfile militar","Un matrimonio","Un torneo deportivo"],0],
  [4,"¿Qué es un coffee break?",["Una pausa con café y bocadillos durante una reunión","Un desayuno completo","Una cena formal","Un cóctel nocturno"],0],
  [5,"¿Qué es un evento híbrido?",["Un evento que combina asistentes presenciales y en línea","Un evento en dos idiomas","Un matrimonio y un cumpleaños juntos","Un evento sin comida"],0]]],
 ["Montajes de salón","🪑",[
  [1,"¿Qué es el montaje tipo auditorio (teatro)?",["Filas de sillas mirando al escenario, sin mesas","Mesas redondas","Una mesa en forma de U","Mesas altas de cóctel"],0],
  [2,"¿Qué es el montaje tipo escuela?",["Filas de mesas con sillas mirando al frente","Sillas en círculo","Mesas redondas de banquete","Sin sillas"],0],
  [2,"¿Qué es el montaje en U?",["Mesas en forma de U, ideal para reuniones con presentaciones","Mesas en fila india","Sillas sueltas","Un buffet"],0],
  [3,"¿Qué es el montaje tipo banquete?",["Mesas redondas con sillas alrededor para comer","Filas de sillas","Una mesa larga sin sillas","Mesas altas sin asientos"],0],
  [3,"¿Qué es el montaje tipo cóctel?",["Mesas altas y espacio para circular de pie","Filas de sillas","Mesas de escuela","Camas"],0],
  [4,"¿Qué es el montaje imperial?",["Una gran mesa rectangular con los asistentes a ambos lados","Mesas redondas","Sillas en círculo","Mesas en V"],0],
  [5,"¿Qué es el BEO (Banquet Event Order)?",["La orden de servicio con todos los detalles del evento para cada departamento","El presupuesto de un matrimonio","La lista de invitados","El menú infantil"],0]]],
 ["Banquetería","🥂",[
  [1,"¿Qué es la banquetería?",["El servicio de alimentos y bebidas para eventos y grupos grandes","La venta de bancos","La limpieza del salón","Un tipo de pan"],0],
  [2,"¿Qué es el catering?",["Un servicio de comidas preparado para servirse en otro lugar o evento","Un tipo de habitación","Una agencia de viajes","Un tipo de vino"],0],
  [3,"¿Qué es un cóctel de bienvenida?",["Bebidas y bocados que se sirven a la llegada de los invitados","El plato de fondo","El postre final","El desayuno del día siguiente"],0],
  [3,"¿Qué son los canapés?",["Bocados pequeños sobre una base (pan o masa) que se comen de un mordisco","Platos de sopa","Postres grandes","Bebidas calientes"],0],
  [4,"¿Qué es la garantía de asistentes en un banquete?",["El número mínimo de cubiertos que el cliente confirma y paga","La seguridad del salón","El seguro de los invitados","La propina obligatoria"],0],
  [5,"En banquetería, ¿qué es un 'cubierto'?",["Cada comensal o servicio completo por persona","Solo el tenedor","Un plato tapado","El techo del salón"],0]]],
 ["Protocolo y etiqueta","🎩",[
  [1,"¿Qué es el protocolo?",["El conjunto de normas para organizar actos y ceremonias de forma ordenada","Un plato típico","Una lista de precios","Un tipo de reserva"],0],
  [2,"En una mesa presidencial, ¿dónde se ubica el anfitrión?",["En el centro, con los invitados más importantes a sus lados","En una esquina","De espaldas al público","Fuera del salón"],0],
  [3,"¿Qué significa 'precedencia' en protocolo?",["El orden de importancia de autoridades e invitados","La hora de inicio","El menú principal","El color del mantel"],0],
  [3,"En los actos oficiales en Chile, ¿qué se entona?",["El Himno Nacional","Una canción de moda","El himno de otro país","Nada"],0],
  [4,"Según la regla general de protocolo, ¿dónde se ubica el invitado de mayor honor?",["A la derecha del anfitrión","A la izquierda del anfitrión","Detrás del anfitrión","En otra mesa"],0],
  [5,"¿Qué indica 'tenida formal' o 'etiqueta' en una invitación?",["Que se debe asistir con vestimenta elegante (terno oscuro o vestido de fiesta)","Que se puede ir con ropa deportiva","Que es un evento al aire libre","Que no hay comida"],0]]],
 ["Planificación de eventos","📋",[
  [1,"¿Qué es el cronograma (run of show) de un evento?",["La planificación horaria detallada de cada actividad","El menú","La lista de invitados","La factura"],0],
  [2,"¿Qué es el RSVP en una invitación?",["Una solicitud para confirmar asistencia","Un código de vestimenta","El precio de la entrada","La dirección del lugar"],0],
  [3,"¿Qué es un wedding planner?",["Un profesional que organiza matrimonios","Un fotógrafo","Un chef","Un DJ"],0],
  [3,"¿Qué es la check list de un evento?",["La lista de verificación de todas las tareas y elementos necesarios","La lista de reclamos","El menú de bebidas","El registro de huéspedes"],0],
  [4,"¿Qué son el montaje y el desmontaje de un evento?",["La instalación y el retiro del mobiliario, la decoración y los equipos","El inicio y el fin del menú","La llegada y salida de los invitados","La compra y venta de entradas"],0],
  [5,"¿Qué equipos audiovisuales suele requerir un congreso?",["Proyector, pantalla, micrófonos y amplificación","Una parrilla","Un horno industrial","Una piscina"],0]]]
],[
 ["Tipos de montaje de salón 🪑",["auditorio","escuela","en U","banquete","cóctel"],"imperial, directorio, espina de pescado, cabaret"],
 ["Eventos que se organizan en un hotel 🎉",["matrimonios","congresos","cumpleaños","seminarios","graduaciones"],"cenas de empresa, lanzamientos, ferias, bautizos, fiestas de fin de año"]]),

T("ho6","Gestión hotelera y revenue","📊","Hotelería · Gestión","Tipos de alojamiento · organigrama · indicadores (KPI) · revenue y canales de venta · calidad y costos",[
 ["Tipos de alojamiento","🏨",[
  [1,"¿Qué es un hostal?",["Un alojamiento sencillo y económico, a menudo con espacios compartidos","Un hotel cinco estrellas","Un crucero","Un camping"],0],
  [2,"¿Qué es un resort?",["Un complejo turístico con alojamiento y muchas actividades y servicios en un mismo lugar","Una habitación pequeña","Una agencia de viajes","Un restaurante"],0],
  [2,"¿Qué es un apart-hotel?",["Departamentos con cocina y servicios de hotel","Un hotel sin habitaciones","Un hostal juvenil","Un motel"],0],
  [3,"¿Qué es un hotel boutique?",["Un hotel pequeño, con diseño exclusivo y atención personalizada","Un hotel con tiendas de ropa","Un hotel de carretera","Un hotel de mil habitaciones"],0],
  [3,"¿Qué institución chilena lleva el registro de prestadores de servicios turísticos?",["Sernatur","El SII","Carabineros","La Contraloría"],0],
  [4,"¿Qué es el sello Q de calidad turística en Chile?",["Una distinción que certifica que un servicio turístico cumple normas de calidad","Un impuesto","Una categoría de habitación","Un tipo de tarifa"],0],
  [5,"¿Qué es el sello S de turismo sustentable?",["Una distinción para servicios turísticos que cumplen criterios de sustentabilidad","Una marca de jabón","Un seguro de viaje","Un sistema de reservas"],0]]],
 ["Organigrama del hotel","🧑‍💼",[
  [1,"¿Quién es la máxima autoridad operativa de un hotel?",["El gerente general","El botones","El sommelier","La mucama"],0],
  [2,"¿Qué departamentos forman la división de habitaciones (rooms division)?",["Recepción y housekeeping","Cocina y bar","Contabilidad y marketing","Mantención y seguridad"],0],
  [3,"¿Qué departamento repara la infraestructura y los equipos del hotel?",["Mantención","Reservas","Banquetes","Ventas"],0],
  [3,"¿Qué hace el área de ventas y marketing de un hotel?",["Promociona el hotel y consigue clientes y convenios","Limpia las habitaciones","Cocina","Repara cañerías"],0],
  [4,"¿Qué diferencia hay entre 'front of house' y 'back of house'?",["Front of house tiene contacto directo con el huésped; back of house trabaja detrás, sin contacto directo","Son lo mismo","Front of house es la cocina","Back of house es la recepción"],0],
  [5,"¿Qué es un 'duty manager'?",["El gerente de turno responsable del hotel en un horario determinado","El jefe de cocina","El jefe de mantención","El encargado del bar"],0]]],
 ["Indicadores (KPI)","📈",[
  [1,"¿Qué mide la tasa de ocupación?",["El porcentaje de habitaciones vendidas sobre las disponibles","El número de empleados","Las propinas del día","La cantidad de reclamos"],0],
  [2,"Si un hotel tiene 100 habitaciones disponibles y vende 80, ¿cuál es su ocupación?",["80%","20%","100%","8%"],0],
  [3,"¿Qué es el ADR (tarifa media diaria)?",["El ingreso por habitaciones dividido por las habitaciones vendidas","El número de huéspedes","El precio del desayuno","Las habitaciones disponibles"],0],
  [3,"¿Qué es el RevPAR?",["El ingreso por habitación disponible (ingresos de habitaciones ÷ habitaciones disponibles)","El número de reservas canceladas","El costo de la lencería","La tarifa rack"],0],
  [4,"Si el ADR es $50.000 y la ocupación es 60%, ¿cuál es el RevPAR?",["$30.000","$50.000","$110.000","$6.000"],0],
  [4,"¿Qué mide la estadía promedio?",["El número promedio de noches que permanecen los huéspedes","La edad promedio de los huéspedes","El sueldo promedio","El gasto en desayuno"],0],
  [5,"¿Qué es el GOP de un hotel?",["La utilidad bruta de operación (Gross Operating Profit)","Un tipo de habitación","El gerente de operaciones","Una plataforma de reservas"],0]]],
 ["Revenue y canales de venta","💹",[
  [1,"¿Qué es una OTA?",["Una agencia de viajes en línea, como Booking.com o Expedia","Un tipo de habitación","Un impuesto hotelero","Un plato típico"],0],
  [2,"¿Qué es la venta directa?",["Cuando el huésped reserva con el hotel sin intermediarios (web, teléfono, recepción)","Una venta en la calle","Una venta a través de una OTA","Un remate"],0],
  [3,"¿Qué es el revenue management?",["La estrategia de vender la habitación correcta, al cliente correcto, al precio y en el momento correctos","La limpieza de habitaciones","La contabilidad del bar","El control de llaves"],0],
  [3,"¿Qué son las tarifas dinámicas?",["Precios que cambian según la demanda, la temporada y la anticipación","Precios que nunca cambian","Tarifas solo para deportistas","Precios en dólares"],0],
  [4,"¿Qué es un 'channel manager'?",["Un software que sincroniza tarifas y disponibilidad en todos los canales de venta","El encargado de la TV","El jefe de recepción","Un canal de YouTube del hotel"],0],
  [4,"¿Qué es la comisión que cobra una OTA?",["Un porcentaje del valor de la reserva que el hotel paga a la plataforma","Un descuento al huésped","Una propina","Un impuesto del Estado"],0],
  [5,"¿Qué es la temporada alta?",["El período de mayor demanda turística, con tarifas más altas","Cuando el hotel está cerrado","Los días de lluvia","Siempre el invierno"],0]]],
 ["Calidad y costos","✅",[
  [1,"¿Qué es un estándar de servicio?",["Una forma definida y medible de realizar una tarea con calidad","Una tarifa","Un uniforme","Un reclamo"],0],
  [2,"¿Qué es la rotación de personal?",["La salida y el reemplazo frecuente de trabajadores","Cambiar de turno","Dar vuelta las camas","Un baile del personal"],0],
  [3,"¿Qué es un cliente incógnito (mystery guest)?",["Una persona que evalúa el servicio haciéndose pasar por huésped","Un huésped famoso","Un fantasma del hotel","Un huésped sin reserva"],0],
  [3,"¿Qué es el inventario de bodega?",["El registro de existencias de productos e insumos","El listado de huéspedes","El mapa del hotel","El horario del personal"],0],
  [4,"¿Qué significa FIFO en el manejo de bodega?",["Lo primero que entra es lo primero que sale","Lo último que entra sale primero","Comprar una vez al año","No usar nada"],0],
  [5,"¿Qué es el costo por habitación ocupada (CPOR)?",["Lo que cuesta operar cada habitación vendida: lencería, amenities, limpieza, etc.","El precio de venta","La propina","El valor del edificio"],0]]]
],[
 ["Departamentos de un hotel 🏨",["recepción","housekeeping","alimentos y bebidas","mantención","ventas"],"recursos humanos, contabilidad, seguridad, eventos, gerencia"],
 ["Canales para reservar un hotel 💻",["Booking.com","Expedia","Airbnb","web del hotel","teléfono"],"Despegar, Hotels.com, agencias de viajes, Google Hotels, correo electrónico"]]),

T("ho7","Higiene, seguridad y primeros auxilios","🦺","Hotelería · Prevención","Higiene de alimentos · prevención de riesgos · emergencias · primeros auxilios · sustentabilidad",[
 ["Higiene de alimentos","🧼",[
  [1,"¿Qué es la contaminación cruzada?",["El paso de microorganismos de un alimento o superficie a otro","Mezclar dos jugos","Cocinar dos platos a la vez","Cruzar la cocina corriendo"],0],
  [2,"¿Cuál es la 'zona de peligro' de temperatura para los alimentos?",["Entre 5 °C y 60 °C, donde las bacterias se multiplican rápido","Bajo 0 °C","Sobre 100 °C","Entre 80 y 90 °C"],0],
  [2,"¿Cuándo debe lavarse las manos quien manipula alimentos?",["Al empezar, después de ir al baño, de tocar basura o alimentos crudos, y con frecuencia","Solo al final del turno","Una vez al día","Nunca, si usa guantes"],0],
  [3,"¿Qué reglamento regula la higiene de los alimentos en Chile?",["El Reglamento Sanitario de los Alimentos","El Código Civil","La Ley de Tránsito","El Código del Trabajo"],0],
  [3,"En salud, ¿qué es una ETA?",["Una enfermedad transmitida por alimentos","Una hora estimada de llegada","Un tipo de tarifa","Una agencia de turismo"],0],
  [4,"¿Qué es el sistema HACCP?",["Un sistema de análisis de peligros y puntos críticos de control para la inocuidad alimentaria","Un software de reservas","Un tipo de cóctel","Una cadena hotelera"],0],
  [5,"¿Qué es la inocuidad alimentaria?",["La garantía de que un alimento no causará daño a quien lo consume","El sabor de los alimentos","El precio de los alimentos","La decoración del plato"],0]]],
 ["Prevención de riesgos","⚠️",[
  [1,"¿Qué es un EPP?",["Un elemento de protección personal, como guantes, mascarilla o calzado de seguridad","Un plato de entrada","Un tipo de reserva","Una planilla de turnos"],0],
  [2,"¿Cuál es la postura correcta para levantar peso, como una caja o un colchón?",["Doblar las rodillas, espalda recta y carga cerca del cuerpo","Doblar la espalda con las piernas rectas","Girar el tronco con la carga","Levantar con un solo brazo"],0],
  [3,"¿Qué ley chilena establece el seguro contra accidentes del trabajo y enfermedades profesionales?",["La Ley 16.744","La Ley 20.000","La Ley de Alcoholes","La Ley del Consumidor"],0],
  [3,"¿Qué indica una señal de seguridad de color verde?",["Una condición segura o una salida de emergencia","Prohibición","Peligro","Obligación"],0],
  [4,"¿Qué indica una señal redonda, roja y con una barra cruzada?",["Prohibición","Información","Salida de emergencia","Primeros auxilios"],0],
  [5,"¿Qué es el comité paritario de higiene y seguridad?",["Un grupo de representantes de trabajadores y empresa que vela por la prevención de riesgos","Un club deportivo","Una cooperativa de compras","La gerencia general"],0]]],
 ["Emergencias en el hotel","🚨",[
  [1,"¿Qué debe hacer el personal al escuchar la alarma de incendio?",["Seguir el plan de evacuación y guiar a los huéspedes por las vías de escape","Usar el ascensor","Volver a buscar sus cosas","Esconderse en una habitación"],0],
  [2,"¿Por qué no se debe usar el ascensor en un incendio?",["Porque puede detenerse o abrirse en un piso con fuego y humo","Porque es muy lento","Porque está reservado al gerente","Porque gasta electricidad"],0],
  [3,"¿Qué extintor se usa en fuegos tipo A (papel, madera, textiles)?",["Uno de agua o de polvo químico seco multipropósito","Ninguno","Uno de aceite","Cualquier líquido"],0],
  [3,"Durante un sismo dentro del hotel, ¿qué se recomienda?",["Mantener la calma, agacharse, cubrirse y afirmarse; después evacuar si se indica","Correr por la escalera mientras tiembla","Saltar por la ventana","Usar el ascensor"],0],
  [4,"¿Qué es el punto de encuentro?",["Un lugar seguro y señalizado donde se reúnen las personas tras evacuar","El bar del hotel","La recepción","Una habitación libre"],0],
  [5,"¿Qué número de emergencia corresponde a Bomberos en Chile?",["132","131","133","134"],0]]],
 ["Primeros auxilios","🩹",[
  [1,"¿A qué número se llama al SAMU (ambulancia) en Chile?",["131","132","133","134"],0],
  [2,"¿Qué número corresponde a Carabineros en Chile?",["133","131","132","130"],0],
  [2,"Ante una quemadura leve, ¿qué se recomienda?",["Enfriar con agua corriente a temperatura ambiente durante varios minutos","Poner mantequilla","Reventar la ampolla","Aplicar hielo directo por una hora"],0],
  [3,"¿Qué maniobra se usa ante el atragantamiento de un adulto consciente?",["La maniobra de Heimlich (compresiones abdominales)","Darle agua","Golpearle la cabeza","Acostarlo boca arriba y esperar"],0],
  [4,"¿Qué es la RCP?",["La reanimación cardiopulmonar: compresiones torácicas para mantener la circulación","Un tipo de vendaje","Un medicamento","Una camilla"],0],
  [4,"¿Qué es un DEA?",["Un desfibrilador externo automático para tratar paros cardíacos","Un extintor","Un botiquín","Un ascensor de emergencia"],0],
  [5,"En la RCP de un adulto, ¿a qué ritmo aproximado se hacen las compresiones?",["Entre 100 y 120 por minuto","10 por minuto","300 por minuto","Una cada 10 segundos"],0]]],
 ["Sustentabilidad","♻️",[
  [1,"¿Qué significa reciclar?",["Transformar residuos en nuevos materiales o productos","Botar todo junto","Quemar la basura","Comprar más"],0],
  [2,"¿Para qué invitan los hoteles a reutilizar las toallas?",["Para ahorrar agua, energía y detergentes","Para un concurso","Para cobrar una multa","Para vender toallas"],0],
  [3,"¿Qué es la huella de carbono?",["La cantidad de gases de efecto invernadero que genera una actividad","Una mancha en la alfombra","El humo de la cocina","Un tipo de pisada"],0],
  [3,"¿Qué ley chilena prohibió la entrega de bolsas plásticas en el comercio?",["La Ley 21.100","La Ley 16.744","La Ley 20.000","La Ley Zamudio"],0],
  [4,"¿Qué busca la Ley 21.368 sobre plásticos de un solo uso?",["Reducir los desechables en el servicio de alimentos (cubiertos, bombillas, vasos)","Prohibir los vasos de vidrio","Obligar a usar plumavit","Eliminar los restaurantes"],0],
  [5,"¿Qué significa un hotel sustentable?",["Que opera cuidando el ambiente, beneficiando a la comunidad local y siendo económicamente viable","Que usa solo luz solar","Que no recibe huéspedes","Que cobra más caro"],0]]]
],[
 ["Números de emergencia en Chile 🚨",["131 (SAMU)","132 (Bomberos)","133 (Carabineros)","134 (PDI)","137 (rescate marítimo)"],"130 (CONAF, incendios forestales)"],
 ["Elementos de protección personal (EPP) 🦺",["guantes","mascarilla","calzado de seguridad","delantal","cofia"],"antiparras, protector auditivo, casco, faja"]]),

T("ho8","Taller de gastronomía","👨‍🍳","Hotelería · Gastronomía","Técnicas de cocción · cortes y bases · cocina chilena · cocina internacional · brigada de cocina",[
 ["Técnicas de cocción","🔥",[
  [1,"¿Qué significa hervir?",["Cocinar un alimento en un líquido a 100 °C","Cocinar en aceite","Cocinar al horno sin agua","Congelar"],0],
  [2,"¿Qué es saltear?",["Cocinar rápido en sartén con poca materia grasa y fuego alto","Cocinar en abundante agua","Cocinar al vapor","Hornear lentamente"],0],
  [2,"¿Qué es cocinar al vapor?",["Cocinar con el vapor del agua, sin que el alimento toque el líquido","Freír","Asar a la parrilla","Marinar"],0],
  [3,"¿Qué es brasear?",["Una cocción lenta: primero dorar y luego cocinar tapado con poco líquido","Freír en abundante aceite","Comer crudo","Cocinar en microondas"],0],
  [3,"¿Qué es el baño maría?",["Calentar un recipiente dentro de otro con agua caliente","Cocinar con agua salada","Lavar los alimentos","Enfriar con hielo"],0],
  [4,"¿Qué es blanquear un alimento?",["Hervirlo brevemente y enfriarlo de inmediato en agua con hielo","Pintarlo de blanco","Agregarle crema","Cocinarlo por horas"],0],
  [5,"¿Qué es el 'sous vide'?",["Una cocción al vacío a baja temperatura controlada","Cocinar sin sal","Freír dos veces","Cocinar a la leña"],0]]],
 ["Cortes y bases","🔪",[
  [1,"¿Qué es la brunoise?",["Un corte en cubos muy pequeños","Un corte en bastones largos","Una salsa","Un postre"],0],
  [2,"¿Qué es el corte juliana?",["Tiras finas y largas","Cubos grandes","Rodajas","Puré"],0],
  [3,"¿Qué es el corte chiffonade?",["Tiras muy finas de hojas, como albahaca o lechuga","Cubos de papa","Trozos de carne","Rodajas de pan"],0],
  [3,"¿Qué es un fondo de cocina?",["Un caldo base hecho con huesos, verduras y aromáticos","El fondo de la olla","El postre","La mesa de trabajo"],0],
  [4,"¿Cuáles son las salsas madre de la cocina clásica francesa?",["Bechamel, velouté, española, tomate y holandesa","Kétchup y mayonesa","Pebre y chancho en piedra","Soya y teriyaki"],0],
  [5,"¿Qué es un 'bouquet garni'?",["Un atado de hierbas aromáticas para perfumar fondos y guisos","Un ramo de flores para la mesa","Un tipo de pan","Un vino blanco"],0]]],
 ["Cocina chilena","🇨🇱",[
  [1,"¿Qué es el pastel de choclo?",["Una preparación con pino de carne cubierta con pasta de choclo y horneada","Un postre de chocolate","Un pan de maíz","Una sopa de mariscos"],0],
  [2,"¿Qué es el pino de una empanada?",["El relleno de carne picada, cebolla, huevo, aceituna y pasas","La masa","Un árbol","La salsa"],0],
  [2,"¿Qué es el pebre?",["Una salsa de tomate, cebolla, cilantro y ají","Un postre de leche","Un vino","Un pan"],0],
  [3,"¿De qué zona es típico el curanto?",["De Chiloé","De Arica","De Santiago","De Antofagasta"],0],
  [3,"¿Qué es la cazuela?",["Una sopa con presa de carne, papa, zapallo y choclo","Un postre helado","Una ensalada","Un trago"],0],
  [4,"¿Qué es el charquicán?",["Un guiso de zapallo, papa y carne (originalmente charqui)","Un dulce de leche","Una bebida","Un pan amasado"],0],
  [5,"¿Qué es el umu?",["Una preparación tradicional rapanui cocida bajo tierra con piedras calientes","Una bebida mapuche","Un postre alemán del sur","Un pan del norte"],0]]],
 ["Cocina internacional","🌍",[
  [1,"¿De qué país es típica la pizza?",["Italia","Japón","México","Perú"],0],
  [2,"¿De qué país es el sushi?",["Japón","China","Tailandia","Corea"],0],
  [2,"¿De qué país es el ceviche, uno de sus platos más famosos?",["Perú","España","Francia","Italia"],0],
  [3,"¿Qué es la paella?",["Un arroz típico de Valencia, España","Una pasta italiana","Una sopa francesa","Un taco mexicano"],0],
  [4,"¿Qué es el ratatouille?",["Un guiso francés de verduras","Un queso suizo","Un postre italiano","Un pan alemán"],0],
  [5,"¿Qué es el curry?",["Una mezcla de especias típica de la cocina de la India","Un tipo de arroz japonés","Un queso","Un vino portugués"],0]]],
 ["Brigada de cocina","🍳",[
  [1,"¿Quién dirige la cocina de un hotel?",["El chef ejecutivo","El maître","La gobernanta","El conserje"],0],
  [2,"¿Qué es el sous chef?",["El segundo a cargo de la cocina, que reemplaza al chef","El lavaplatos","El encargado del bar","El panadero"],0],
  [3,"¿Qué hace el pastelero?",["Prepara postres, masas y repostería","Corta carnes","Prepara cócteles","Sirve en sala"],0],
  [3,"¿Qué es una 'partida' en una cocina profesional?",["Una sección especializada: fríos, calientes, pastelería, etc.","El inicio del turno","Un plato de entrada","Una comanda"],0],
  [4,"¿Qué es el 'garde manger'?",["La partida de cocina fría: ensaladas, entradas y fiambres","El encargado del garaje","El jefe de sala","Un cuchillo"],0],
  [5,"¿Quién organizó el sistema de brigada de la cocina moderna?",["Auguste Escoffier","Gordon Ramsay","Ferran Adrià","Julia Child"],0]]]
],[
 ["Comidas típicas chilenas 🇨🇱",["empanada","pastel de choclo","cazuela","curanto","porotos granados"],"charquicán, humitas, sopaipillas, completo, chorrillana, mote con huesillo"],
 ["Técnicas de cocción 🔥",["hervir","freír","hornear","saltear","asar"],"vapor, brasear, guisar, gratinar, confitar, escalfar"]])
];
})();
