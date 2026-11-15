/* =========================================================
   RETOS DE HOTELERÍA Y TURISMO
   mcq: pregunta · order: ordena el procedimiento · tf: verdadero o falso
   who: ¿qué cargo soy? · speak: ¡atiende al huésped! (role-play)
   mime: mímica de servicio · draw: dibuja y adivina · duel: duelo
   mystery: caja fuerte misteriosa
   ========================================================= */
window.RETOS = {
types:{
  mcq:{i:'❓',n:'Pregunta',pts:200,c:'#1d4e89'},
  order:{i:'📋',n:'Ordena el procedimiento',pts:200,c:'#c2410c'},
  tf:{i:'✅❌',n:'Verdadero o falso relámpago',pts:0,c:'#2e8b57'},
  who:{i:'🕵️',n:'¿Qué cargo soy?',pts:300,c:'#6d4c8f'},
  speak:{i:'🛎️',n:'¡Atiende al huésped!',pts:300,c:'#0f766e'},
  mime:{i:'🎭',n:'Mímica de servicio',pts:200,c:'#9a3412'},
  draw:{i:'🎨',n:'Dibuja y adivina',pts:200,c:'#b7791f'},
  duel:{i:'⚔️',n:'Duelo',pts:300,c:'#2b6cb0'},
  mystery:{i:'🔐',n:'Caja fuerte misteriosa',pts:0,c:'#12263f'}
},
/* procedimientos: [título, [pasos en orden]] */
timeline:{
 ho:[["Check-in de un huésped",["Saludar y dar la bienvenida","Solicitar la reserva y el documento","Completar la tarjeta de registro","Solicitar garantía de pago","Entregar la llave e indicar la habitación"]],
  ["Limpieza de una habitación de salida",["Golpear y anunciarse","Ventilar y retirar la basura","Retirar la lencería sucia","Hacer la cama","Limpiar el baño","Aspirar y revisar"]],
  ["Servicio de una botella de vino",["Presentar la botella al anfitrión","Descorchar","Dar a probar al anfitrión","Servir a los invitados","Servir al final al anfitrión"]],
  ["Servicio en el restaurante",["Recibir y ubicar al cliente","Entregar la carta","Tomar la comanda","Servir los platos","Retirar y ofrecer postre","Presentar la cuenta"]],
  ["Check-out",["Saludar y preguntar por la estadía","Revisar consumos y minibar","Presentar la cuenta","Cobrar","Despedir e invitar a volver"]],
  ["Manejo de un reclamo",["Escuchar sin interrumpir","Disculparse","Buscar una solución","Aplicar la solución","Hacer seguimiento y agradecer"]],
  ["Evacuación por incendio",["Dar la alarma","Mantener la calma","Guiar a los huéspedes por la vía de evacuación","Llegar al punto de encuentro","Verificar que estén todos"]],
  ["Turndown service",["Golpear y anunciarse","Cerrar las cortinas","Abrir la cama","Reponer toallas y amenities","Dejar luz tenue y un detalle de cortesía"]],
  ["Orden de un menú clásico",["Aperitivo","Entrada","Plato de fondo","Postre","Café o bajativo"]],
  ["Preparar un pisco sour",["Medir el pisco","Agregar jugo de limón","Agregar jarabe de azúcar","Batir con hielo en la coctelera","Colar y servir en copa"]]],
 tu:[["Organizar un paquete turístico",["Identificar al cliente y sus necesidades","Diseñar el itinerario","Cotizar y costear los servicios","Reservar los servicios","Emitir vouchers y documentos"]],
  ["Atender a un cliente en la agencia",["Saludar y detectar sus necesidades","Presentar opciones","Cotizar","Confirmar la reserva","Entregar los vouchers"]],
  ["Llegada de un grupo al hotel",["Recibir al grupo en el lobby","Ofrecer el cóctel de bienvenida","Registrar al coordinador del grupo","Entregar las llaves","Explicar los servicios del hotel"]],
  ["Un city tour",["Recoger a los pasajeros en el hotel","Dar la bienvenida y explicar el recorrido","Visitar los atractivos","Responder preguntas","Regresar al hotel y despedirse"]],
  ["Ciudades de norte a sur",["Arica","Antofagasta","La Serena","Valparaíso","Puerto Montt","Punta Arenas"]],
  ["Organizar un evento",["Reunión con el cliente","Cotización y contrato","Planificación y montaje","Realización del evento","Desmontaje y evaluación"]]],
 en:[["Answering the phone",["Good morning, Hotel Pacific.","This is Ana speaking.","How may I help you?","Let me check availability.","Thank you for calling."]],
  ["Check-in in English",["Welcome to our hotel!","Do you have a reservation?","May I see your passport, please?","Please sign here.","Here is your key card. Enjoy your stay!"]],
  ["Taking an order",["Good evening, here is the menu.","Would you like something to drink?","Are you ready to order?","How would you like your steak?","Enjoy your meal!"]],
  ["Days of the week",["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]],
  ["Months of the year",["January","March","May","July","September","November"]],
  ["Check-out in English",["Good morning! Are you checking out?","How was your stay?","Did you use the minibar?","Here is your bill.","Have a safe trip!"]]]
},
tf:{
 ho:[["El check-out se refiere a la llegada del huésped.",false],["Un walk-in es un huésped que llega sin reserva.",true],["La gobernanta dirige el área de pisos.",true],["El vino tinto se sirve idealmente a 0 °C.",false],
  ["En el montaje, el tenedor va a la izquierda del plato.",true],["El RevPAR mide el ingreso por habitación disponible.",true],["Se debe usar el ascensor durante un incendio.",false],["El 131 es el número del SAMU en Chile.",true],
  ["La Carménère es una cepa emblemática de Chile.",true],["El maître es el jefe de cocina.",false],["DND significa 'Do Not Disturb'.",true],["El pisco sour lleva ron y menta.",false],
  ["La brunoise es un corte en cubos muy pequeños.",true],["El overbooking es vender más habitaciones de las disponibles.",true],["Una habitación OOO está lista para venderse.",false],
  ["Mezclar cloro con amoníaco es seguro.",false],["La pensión completa incluye desayuno, almuerzo y cena.",true],["El sommelier se encarga de los vinos.",true],["El curanto es típico de Chiloé.",true],["La comanda es la cuenta que se entrega al cliente.",false]],
 tu:[["Sernatur es el Servicio Nacional de Turismo.",true],["La CONAF administra los parques nacionales de Chile.",true],["Un excursionista pernocta en el destino.",false],["Torres del Paine está en la región de Magallanes.",true],
  ["El Valle de la Luna está en Puerto Varas.",false],["Un transfer in es el traslado de llegada del pasajero a su hotel.",true],["Machu Picchu está en Bolivia.",false],["Una OTA es una agencia de viajes en línea.",true],
  ["Rapa Nui está en el océano Atlántico.",false],["El SAG controla el ingreso de productos animales y vegetales.",true],["Valparaíso es Patrimonio de la Humanidad.",true],["El ecoturismo busca conservar la naturaleza.",true],
  ["Un full day es una excursión de medio día.",false],["Las 4P del marketing son producto, precio, plaza y promoción.",true],["Chile tiene 7 sitios Patrimonio de la Humanidad.",true],["Pucón está junto al volcán Villarrica.",true],["La moneda de Perú es el peso.",false]],
 en:[["'Pillow' means almohada.",true],["'Towel' means toalla.",true],["'Tip' means cuenta.",false],["'Lift' means ascensor.",true],["'Fork' means cuchillo.",false],
  ["'Fully booked' means completo, sin disponibilidad.",true],["'Turn left' means gira a la derecha.",false],["'Still water' is agua sin gas.",true],["A 'rare' steak is bien cocido.",false],
  ["'Customs' means aduana.",true],["'Half past seven' is 7:30.",true],["'Museum' means mercado.",false],["'Housekeeping' is the cleaning department.",true],
  ["'You're welcome' means de nada.",true],["'Sheets' means sábanas.",true],["'Souvenir' means recuerdo de viaje.",true],["'Dessert' means desierto.",false]]
},
/* ¿qué cargo soy?: [respuesta, [pista difícil, pista media, pista fácil]] */
who:{
 ho:[["Recepcionista",["Trabajo en el front office.","Manejo el PMS y la tarjeta de registro.","Hago el check-in y el check-out."]],
  ["Gobernanta (ama de llaves)",["Superviso a un equipo grande.","Controlo la lencería y los insumos.","Dirijo el departamento de pisos (housekeeping)."]],
  ["Mucama (camarera de pisos)",["Uso un carro con insumos.","Hago camas y repongo amenities.","Limpio las habitaciones."]],
  ["Botones",["Trabajo cerca de la puerta del hotel.","Uso un carro de equipaje.","Acompaño al huésped y llevo sus maletas."]],
  ["Conserje (concierge)",["Conozco muy bien la ciudad.","Consigo entradas y reservas especiales.","Doy información y recomendaciones a los huéspedes."]],
  ["Sommelier",["Trabajo en el restaurante con una carta especial.","Conozco cepas, valles y maridajes.","Recomiendo y sirvo vinos."]],
  ["Maître",["Trabajo en la sala, no en la cocina.","Organizo los rangos de los garzones.","Soy el jefe del comedor."]],
  ["Bartender",["Uso coctelera y jigger.","Trabajo detrás de una barra.","Preparo cócteles y tragos."]],
  ["Chef ejecutivo",["Diseño las cartas y controlo costos.","Dirijo la brigada.","Soy el jefe de cocina."]],
  ["Auditor nocturno",["Trabajo cuando casi todos duermen.","Reviso cuentas y cargos del día.","Hago el cierre diario (night audit)."]],
  ["Gerente general",["Respondo ante los dueños del hotel.","Todos los departamentos dependen de mí.","Soy la máxima autoridad del hotel."]],
  ["Técnico de mantención",["Trabajo con herramientas.","Reviso calderas, aire acondicionado y luces.","Reparo lo que se echa a perder en el hotel."]]],
 tu:[["Guía de turismo",["Debo estar inscrito en Sernatur.","Uso micrófono y conozco historias del lugar.","Acompaño e informo a los turistas en un recorrido."]],
  ["Agente de viajes",["Trabajo con un GDS como Amadeus.","Emito pasajes y vouchers.","Vendo viajes y paquetes turísticos."]],
  ["Tour operador",["Negocio con hoteles y transportes.","Armo paquetes y los vendo a agencias.","Diseño y organizo programas turísticos."]],
  ["Guía de enoturismo",["Trabajo en una viña.","Explico cómo se elabora el vino.","Guío catas y recorridos por las bodegas."]],
  ["Coordinador de grupos (tour leader)",["Viajo todo el itinerario con el grupo.","Coordino hoteles, buses y excursiones.","Acompaño y represento al grupo durante todo el viaje."]],
  ["Chofer de turismo",["Tengo licencia profesional.","Trabajo con un guía y un grupo.","Conduzco el bus o la van de los turistas."]],
  ["Organizador de eventos (event planner)",["Uso cronogramas y check lists.","Coordino montajes y proveedores.","Organizo congresos, matrimonios y fiestas."]],
  ["Informador turístico",["Trabajo en un módulo o una oficina de turismo.","Entrego mapas y folletos.","Oriento a los turistas sobre la ciudad."]],
  ["Guardaparques",["Trabajo para CONAF.","Cuido senderos, flora y fauna.","Protejo un parque nacional y oriento a los visitantes."]]],
 en:[["Receptionist",["I work at the front desk.","I use the PMS every day.","I check guests in and out."]],
  ["Housekeeper",["I push a trolley.","I change sheets and towels.","I clean the guest rooms."]],
  ["Waiter / Waitress",["I carry trays.","I take orders.","I serve food in the restaurant."]],
  ["Bellboy / Porter",["I work near the entrance.","I use a luggage cart.","I carry the guests' bags to their rooms."]],
  ["Chef",["I wear a white jacket and a tall hat.","I lead the kitchen team.","I cook the food."]],
  ["Tour guide",["I know a lot about history.","I speak to groups with a microphone.","I show tourists around the city."]],
  ["Bartender",["I use a shaker.","I work behind the bar.","I make cocktails."]],
  ["Concierge",["I know the best restaurants in town.","I book tickets and tours for guests.","I give guests information and recommendations."]],
  ["Lifeguard",["I work at the swimming pool.","I wear a whistle.","I keep guests safe in the water."]]]
},
/* ¡Atiende al huésped!: por tema (id del banco) y genéricas */
speak:{
 _:["Role-play: un integrante es huésped y otro trabajador. Resuelvan la situación con amabilidad en 40 segundos.","Expliquen 3 conceptos clave de este tema en 30 segundos.","Expliquen paso a paso cómo realizarían una tarea de este tema."],
 general:["Expliquen el significado de 5 siglas hoteleras.","Nombren 5 cargos de un hotel y expliquen qué hace cada uno."],
 ho1:["Role-play: hagan un check-in completo a un huésped extranjero.","Role-play: llega un huésped sin reserva (walk-in) y el hotel está casi lleno.","Role-play: hay overbooking y deben reubicar a un huésped en otro hotel."],
 ho2:["Expliquen cómo se limpia una habitación de salida, paso a paso.","Role-play: un huésped reclama que su habitación no fue limpiada."],
 ho3:["Role-play: reciban a una pareja, ubíquenla, entreguen la carta y tomen la comanda.","Expliquen cómo se monta una mesa para un almuerzo formal."],
 ho4:["Role-play: presenten y sirvan una botella de vino al anfitrión.","Expliquen cómo se prepara un pisco sour y en qué copa se sirve."],
 ho5:["Role-play: un cliente quiere organizar su matrimonio para 120 personas; tomen sus requerimientos.","Expliquen 3 tipos de montaje de salón y cuándo usar cada uno."],
 ho6:["Expliquen qué son la ocupación, el ADR y el RevPAR con un ejemplo.","Expliquen ventajas y desventajas de vender habitaciones por una OTA."],
 ho7:["Expliquen qué hacer ante un incendio en el hotel.","Expliquen cómo se evita la contaminación cruzada en la cocina."],
 ho8:["Expliquen cómo se prepara un plato chileno típico.","Nombren y expliquen 3 técnicas de cocción."],
 tu1:["Expliquen la diferencia entre turista y excursionista con ejemplos.","Expliquen qué es el turismo sostenible con un ejemplo de Chile."],
 tu2:["Role-play: un cliente quiere viajar 4 días a San Pedro de Atacama; armen una propuesta.","Expliquen qué documentos necesita un chileno para viajar a Europa."],
 tu3:["Hagan de guías: presenten un atractivo de Valparaíso en 40 segundos.","Recomienden un destino del sur de Chile a un turista y justifiquen."],
 tu4:["Recomienden 3 destinos del mundo a una familia y expliquen por qué.","Describan un sitio Patrimonio de la Humanidad como si fueran guías."],
 tu5:["Role-play: respondan en voz alta una reseña negativa de un huésped.","Creen un eslogan y una publicación para promocionar un hotel."],
 en1:["Role-play in English: check in a guest from the USA.","Role-play in English: take a room reservation on the phone."],
 en2:["Role-play in English: take an order at a restaurant.","Role-play in English: a guest complains that the soup is cold."],
 en3:["Role-play in English: a guest asks for extra towels and pillows.","Role-play in English: the air conditioning in a room is not working."],
 en4:["Role-play in English: give directions from the hotel to the beach.","Describe a Chilean destination in English in 30 seconds."],
 en5:["Say 5 polite phrases you would use with a guest.","Role-play in English: answer the phone and take a message."]
},
mime:["hacer una cama","descorchar un vino","cargar maletas como botones","servir una sopa","preparar un cóctel con coctelera","hacer un check-in","aspirar una alfombra","doblar una servilleta",
  "recibir a un huésped con una reverencia","tomar una comanda","un huésped con mucho sueño","un guía con un grupo de turistas","un turista sacándose selfies","un turista cargando una mochila enorme","un chef probando la sazón",
  "un huésped que quedó afuera de su habitación","un sommelier catando vino","limpiar ventanas","un salvavidas en la piscina","un turista perdido con un mapa"],
draw:["llave magnética","campana de recepción","carro de housekeeping","copa de vino","coctelera","maleta","bus de turismo","pasaporte","cama king","cisne de toalla","moai","Torres del Paine",
  "bandeja de room service","sacacorchos","mapa","palmera","gorro de chef","ascensor","piscina","cartel de no molestar"],
mystery:[["💰","¡Propina generosa! +300 puntos","add",300],["😤","¡Huésped molesto! −100 puntos","add",-100],["⭐","¡Reseña de 5 estrellas! Todos los equipos ganan +100","all",100],
  ["🕵️","¡Inspección sorpresa! Quita 200 puntos al equipo que va primero","steal",200],["🛎️","¡Upgrade a suite! Tu próximo acierto vale el doble","double",0],["🧳","Caja fuerte vacía… pasa el turno","none",0],
  ["🔄","¡Overbooking! Intercambia tu puntaje con el equipo que va último","swap",0],["🍾","¡Botella de cortesía! +150 puntos","add",150]]
};

/* ---------- motor de retos ---------- */
var CH={cur:null,dbl:{},
  course:function(){var k=S.bank==='__mix'?(BK().ids[Math.floor(Math.random()*BK().ids.length)]):S.bank,g=(BANKS[k]||{}).group;return ORDER[g]?g:['ho','tu','en'][Math.floor(Math.random()*3)];},
  bankId:function(){return S.bank==='__mix'?(BK().ids[Math.floor(Math.random()*BK().ids.length)]):S.bank;},
  word:function(){var w=[];catsActive().forEach(function(c){c.q.forEach(function(q){var x=q[2][q[3]];if(/^[A-Za-z]{5,12}$/.test(x))w.push(x);});});return w.length>8&&Math.random()<.6?w[Math.floor(Math.random()*w.length)]:RETOS.spell[Math.floor(Math.random()*RETOS.spell.length)];},
  sentences:function(){var out=[];catsActive().forEach(function(c){c.q.forEach(function(q){var t=q[1],a=q[2][q[3]];
      if(t.indexOf('___')>=0&&!/→|↔|=|answers|goes with|\+|—|:/.test(t)){var s=t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',a).replace(/\s+/g,' ').trim();
        var wr=q[2].filter(function(o,i){return i!==q[3];});var n=s.split(' ').length;if(n>=3&&n<=12&&/^[A-Z]/.test(s))out.push({s:s,wrong:t.replace(/\s*\([^)]*\)/g,'').replace(/^[^A-Za-z_]+/,'').replace('___',wr[0]).replace(/\s+/g,' ').trim(),lv:q[0]});}
      else if(/^Correct it|^Choose the correct|^Which (is|sentence)/.test(t)&&/[.?!]$/.test(a)&&a.split(' ').length>=3&&a.split(' ').length<=12)out.push({s:a,wrong:q[2][(q[3]+1)%q[2].length],lv:q[0]});});});
    return out;},
  pickType:function(allowed){var a=allowed||['mcq','order','tf','who','speak','mime','draw','duel','mystery'],w={mcq:3,order:3,tf:2.5,who:2.5,speak:1.5,mime:1.5,draw:1.5,duel:2,mystery:1.5};
    if(S.teams.length<2)a=a.filter(function(x){return x!=='duel';});var tot=a.reduce(function(s,x){return s+(w[x]||1);},0),r=Math.random()*tot;
    for(var i=0;i<a.length;i++){r-=w[a[i]]||1;if(r<=0)return a[i];}return a[0];},
  make:function(type){var T=RETOS.types[type],ch={type:type,t:T,time:30};
    if(type==='mcq'||type==='duel'){ch.q=anyQ();ch.pts=type==='duel'?300:ch.q.lv*50+100;ch.time=type==='duel'?20:30;
      if(type==='duel'){var others=S.teams.map(function(_,i){return i;}).filter(function(i){return i!==S.turn;});ch.rival=others[Math.floor(Math.random()*others.length)];}}
    else if(type==='order'){var P=RETOS.timeline[this.course()],x=P[Math.floor(Math.random()*P.length)];ch.title=x[0];ch.ev=x[1].map(function(s,i){return [s,i+1];});ch.s=x[1].join(' | ');
      var sh=shuffle(x[1].slice()),k=0;while(sh.join(' | ')===ch.s&&k++<9)sh=shuffle(x[1].slice());ch.words=sh;ch.pts=250;ch.time=50;}
    else if(type==='tf'){ch.items=shuffle(RETOS.tf[this.course()]).slice(0,5).map(function(x){return {s:x[0],ok:x[1]};});ch.i=0;ch.hits=0;ch.time=30;ch.pts=60;}
    else if(type==='who'){var W=RETOS.who[this.course()],x=W[Math.floor(Math.random()*W.length)];ch.w=x[0];ch.clues=x[1];ch.ci=1;ch.pts=300;ch.time=60;}
    else if(type==='speak'){var bk=this.bankId(),P2=(RETOS.speak[bk]||[]).concat(RETOS.speak._);ch.p=P2[Math.floor(Math.random()*P2.length)];ch.topic=BANKS[bk]?BANKS[bk].name:'';ch.pts=300;ch.time=40;}
    else if(type==='mime'||type==='draw'){var M=RETOS[type];ch.w=M[Math.floor(Math.random()*M.length)];ch.pts=200;ch.time=60;}
    else if(type==='spell'){ch.w=this.word();ch.pts=150;ch.time=30;}
    else if(type==='twister'){ch.w=RETOS.twister[Math.floor(Math.random()*RETOS.twister.length)];ch.pts=200;ch.time=20;}
    else if(type==='mystery'){ch.m=RETOS.mystery[Math.floor(Math.random()*RETOS.mystery.length)];ch.time=0;}
    if(this.dbl[S.turn]&&ch.pts){ch.pts*=2;ch.doubled=true;}
    return ch;},
  /* HTML del contenido del reto; fin(ok) se llama al resolver los retos autocorregibles */
  body:function(ch){var T=ch.t,team=S.teams[S.turn],L='ABCD',h='';
    var hint={order:'Hagan clic en los pasos en el orden correcto, del primero al último.',tf:'¿Verdadero o falso? Respondan rápido: 5 afirmaciones.',speak:'Dos integrantes actúan o explican en voz alta. El profesor decide si lo lograron.',who:'Adivinen el cargo u oficio. Cada pista extra resta 100 puntos.',
      mime:'Un integrante actúa SIN hablar. Su equipo adivina la acción o el personaje.',draw:'Un integrante dibuja en la pizarra SIN letras ni números. Su equipo adivina.',
      duel:'¡Duelo! Responde primero quien pulse su tecla (o levante la mano).',mcq:'Elijan la alternativa correcta.'}[ch.type]||'';
    if(hint)h+='<p style="text-align:center;color:#7d5f3f;font-weight:700;margin:4px 0 10px">'+hint+'</p>';
    if(ch.type==='mcq'||ch.type==='duel'){var q=ch.q;
      if(ch.type==='duel')h+='<div style="text-align:center;font-family:Playfair Display;font-size:28px;font-weight:600;margin-bottom:6px">'+team.emoji+' '+esc(team.name)+' ⚔️ '+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+'</div>';
      h+='<div class="qtext">'+esc(q.text)+'</div><div class="opts" id="iopts">'+q.opts.map(function(x,i){return '<button class="op" data-i="'+i+'" '+(ch.type==='mcq'?'onclick="CH.mcq('+i+')"':'onclick="this.classList.toggle(\'pick\')"')+'><span class="l">'+L[i]+'</span>'+esc(x)+'</button>';}).join('')+'</div>';}
    else if(ch.type==='order'){h+='<div class="qtext" style="font-size:clamp(22px,3vw,36px)">📋 '+esc(ch.title)+'</div>';}
    if(ch.type==='order'){h+='<div class="chipsw" id="ow" style="justify-content:center">'+ch.words.map(function(w,i){return '<button class="w" data-k="'+i+'" onclick="CH.ow(this)">'+esc(w)+'</button>';}).join('')+'</div><div class="built" id="ob"></div>';}
    else if(ch.type==='tf'){h+='<div id="tfbox"></div>';}
    else if(ch.type==='who'){h+='<div id="whobox">'+CH.whoHtml(ch)+'</div><div class="secret" id="secret"></div>';}
    else if(ch.type==='speak'){h+='<div class="qtext">🎤 '+esc(ch.p)+'</div>'+(ch.topic?'<p style="text-align:center;font-weight:800;color:#0f766e">Tema: '+esc(ch.topic)+'</p>':'');}
    else if(ch.type==='mime'||ch.type==='draw'){h+='<div class="secret" id="secret"><button class="btn" onclick="CH.peek()">👀 Ver la palabra (solo el '+(ch.type==='mime'?'actor':'dibujante')+')</button></div>';}
    else if(ch.type==='spell'){h+='<div style="text-align:center"><button class="btn big" onclick="say(CH.cur.w)">🔊 Escuchar la palabra</button><div class="secret" id="secret" style="margin-top:12px"><button class="btn sec" onclick="CH.show()">👁 Mostrar la palabra</button></div></div>';}
    else if(ch.type==='twister'){h+='<div class="qtext">😜 '+esc(ch.w)+'</div><div style="text-align:center"><button class="spk" onclick="say(CH.cur.w)">🔊 Escuchar</button></div>';}
    else if(ch.type==='mystery'){h+='<div class="mbox2"><div class="mbx">🎁</div></div>';}
    return h;},
  head:function(ch,label){var T=ch.t;return '<div class="mtop"><span class="mcat" style="color:'+T.c+'">'+T.i+' '+(label||'')+T.n+'</span>'+(ch.pts?'<span class="mval">'+(ch.doubled?'⭐ ':'')+ch.pts+' pts</span>':'')+(ch.time?'<span class="timer" id="qtimer"></span>':'')+'</div>';},
  /* reto en ventana (tablero/ruleta) */
  inModal:function(ch,label,awardHtml,onAuto){this.cur=ch;this.onAuto=onAuto;stopTimer();QC.q={text:(ch.t.i+' '+ch.t.n+': '+(ch.s||ch.p||ch.w||(ch.q&&ch.q.text)||'')),cat:{name:ch.t.n,icon:ch.t.i},ans:ch.s||ch.w||(ch.q?ch.q.opts[ch.q.a]:'')};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.t0=null;QC.tStop=null;QC.limit=0;QC.buzz=null;QC.out=[];
    $('mbox').innerHTML=this.head(ch,label)+this.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+awardHtml+'</div>';$('mo').classList.add('open');
    this.after();},
  after:function(){var ch=this.cur;if(ch.time)startTimer(ch.time,function(){if(ch.done)return;if(ch.type==='tf')CH.tfEnd();else if(ch.type==='mcq')CH.mcq(-1);
      else if(ch.type==='order'){ch.done=true;$('qans').innerHTML='⏰ ✅ '+ch.ev.map(function(x){return x[1]+'. '+esc(x[0]);}).join(' → ');$('qans').classList.add('show');sBad();CH.fin(false);}});
    if(ch.type==='tf')this.tfShow();if(ch.type==='mystery')setTimeout(function(){CH.mystery();},900);},
  whoHtml:function(ch){return ch.clues.slice(0,ch.ci).map(function(c,i){return '<div class="qtext" style="font-size:clamp(20px,2.6vw,32px);margin:6px 0">🔎 Pista '+(i+1)+': '+esc(c)+'</div>';}).join('')+
      (ch.ci<ch.clues.length&&!ch.done?'<div style="text-align:center"><button class="btn sec" onclick="CH.clue()">➕ Otra pista (−100)</button></div>':'');},
  clue:function(){var ch=this.cur;if(ch.ci>=ch.clues.length||ch.done)return;ch.ci++;ch.pts=Math.max(100,ch.pts-100);$('whobox').innerHTML=this.whoHtml(ch);var b=document.querySelector('#qaward button');if(b&&/Lo lograron/.test(b.textContent))b.textContent='✅ ¡Lo lograron! (+'+ch.pts+')';tone(660,.08);},
  peek:function(){var b=$('secret');b.innerHTML='<div class="qtext" style="margin:6px 0">'+esc(this.cur.w)+'</div><p style="text-align:center">Se ocultará en 3 segundos…</p>';
    setTimeout(function(){if($('secret'))$('secret').innerHTML='<p style="text-align:center;font-weight:800">🤫 ¡A '+(CH.cur.type==='mime'?'actuar':'dibujar')+'! <button class="spk" onclick="CH.show()">👁 Mostrar a todos</button></p>';},3000);},
  show:function(){var ch=this.cur;if(ch.type==='who'){ch.done=true;ch.ci=ch.clues.length;$('whobox').innerHTML=this.whoHtml(ch);}$('secret').innerHTML='<div class="qtext" style="margin:6px 0">'+(ch.type==='who'?'🕵️ ':'')+esc(ch.w)+'</div>';},
  mcq:function(k){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();markInline(k,ch.q.a);var ok=k===ch.q.a;ok?sOk():sBad();this.fin(ok);},
  ow:function(b){var ob=$('ob');var c=document.createElement('button');c.className='w';c.textContent=b.textContent;
    c.onclick=function(){if(CH.cur.done)return;b.classList.remove('used');c.remove();};ob.appendChild(c);b.classList.add('used');
    if(!document.querySelector('#ow .w:not(.used)')){var got=[].map.call(ob.querySelectorAll('.w'),function(x){return x.textContent;}).join(' | ');var ok=got===this.cur.s;this.cur.done=true;stopTimer();
      ob.style.background=ok?'#d9f7e8':'#ffe0e6';$('qans').innerHTML=(ok?'🎉 ':'✅ ')+this.cur.ev.map(function(x){return x[1]+'. '+esc(x[0]);}).join(' → ');$('qans').classList.add('show');ok?sOk():sBad();this.fin(ok);}},
  tfShow:function(){var ch=this.cur,it=ch.items[ch.i];if(!it)return this.tfEnd();
    $('tfbox').innerHTML='<p style="text-align:center;font-weight:800;color:#7d5f3f">'+(ch.i+1)+' / '+ch.items.length+' · ✅ '+ch.hits+'</p><div class="qtext">'+esc(it.s)+'</div><div class="opts"><button class="op" style="background:#4c7d3f" onclick="CH.tf(true)">✅ Correct</button><button class="op" style="background:#b3313f" onclick="CH.tf(false)">❌ Wrong</button></div>';},
  tf:function(v){var ch=this.cur;if(ch.done||ch.lock)return;ch.lock=true;var it=ch.items[ch.i],ok=v===it.ok;if(ok){ch.hits++;tone(880,.08);}else tone(200,.15);
    var ops=document.querySelectorAll('#tfbox .op');ops[v?0:1].style.outline='5px solid '+(ok?'#0f8a52':'#3b2716');
    setTimeout(function(){ch.lock=false;ch.i++;if(ch.i>=ch.items.length)CH.tfEnd();else CH.tfShow();},ok?350:800);},
  tfEnd:function(){var ch=this.cur;if(ch.done)return;ch.done=true;stopTimer();ch.pts=ch.hits*60*(ch.doubled?2:1);$('tfbox').innerHTML='<div class="qtext">✅ '+ch.hits+' de '+ch.items.length+' correctas</div>';ch.hits>=3?sOk():sBad();this.fin(ch.hits>=3,ch.pts);},
  fin:function(ok,pts){if(this.onAuto)this.onAuto(ok,pts!=null?pts:this.cur.pts);},
  mystery:function(){if(!this.cur||!this.cur.m)return;var m=this.cur.m,t=S.turn,team=S.teams[t];var box=document.querySelector('.mbx');if(box){box.textContent=m[0];box.classList.add('open');}
    $('qans').innerHTML=m[1];$('qans').classList.add('show');
    if(m[2]==='add'){team.score+=m[3];floatPts(t,(m[3]>0?'+':'−')+Math.abs(m[3]),m[3]<0);m[3]>0?sOk():sBad();}
    else if(m[2]==='all'){S.teams.forEach(function(x,i){x.score+=m[3];floatPts(i,'+'+m[3]);});sOk();}
    else if(m[2]==='steal'){var lead=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[b].score-S.teams[a].score;})[0];if(lead!=null){S.teams[lead].score-=m[3];team.score+=m[3];floatPts(lead,'−'+m[3],true);floatPts(t,'+'+m[3]);}sOk();}
    else if(m[2]==='double'){this.dbl[t]=true;sOk();}
    else if(m[2]==='swap'){var last=S.teams.map(function(x,i){return i;}).filter(function(i){return i!==t;}).sort(function(a,b){return S.teams[a].score-S.teams[b].score;})[0];if(last!=null){var tmp=team.score;team.score=S.teams[last].score;S.teams[last].score=tmp;}tone(600,.2);tone(400,.2,.15);}
    else sBad();
    renderScore();logR(t,true,0,{text:'🎁 '+m[1],cat:{name:'Caja misteriosa'},ans:''});if(this.onAuto)this.onAuto(null,0,true);}
};

/* ---------- juego: Retos locos ---------- */
var RT={
  init:function(){CH.dbl={};this.intro();},
  intro:function(){var t=S.teams[S.turn];
    $('stage').innerHTML='<div class="introcard"><div class="deck" onclick="RT.draw()"><span>🎲</span></div><h2>Turno de '+t.emoji+' '+esc(t.name)+'</h2>'+(CH.dbl[S.turn]?'<p style="color:var(--yellow);font-weight:900">⭐ ¡Su próximo reto vale el doble!</p>':'')+
      '<p style="opacity:.85">Saquen una carta: puede ser una pregunta, ordenar un procedimiento, verdadero o falso, ¿qué cargo soy?, atender a un huésped, mímica, dibujar, un duelo… ¡o la caja fuerte misteriosa!</p>'+
      '<div class="row" style="justify-content:center;margin-top:12px"><button class="btn big" onclick="RT.draw()">🎴 ¡Sacar reto!</button></div>'+
      '<div class="rtypes">'+Object.keys(RETOS.types).map(function(k){var T=RETOS.types[k];return '<span style="background:'+T.c+'">'+T.i+' '+T.n+'</span>';}).join('')+'</div></div>';renderScore();},
  draw:function(){var self=this;$('stage').innerHTML='<div class="introcard"><div class="deck flipping"><span>🎴</span></div><h2>…</h2></div>';tone(500,.08);tone(700,.08,.1);tone(900,.12,.2);
    setTimeout(function(){self.show(CH.make(CH.pickType()));},700);},
  show:function(ch){CH.cur=ch;var T=ch.t,team=S.teams[S.turn],self=this;if(ch.doubled)CH.dbl[S.turn]=false;
    var judge=(ch.type==='speak'||ch.type==='mime'||ch.type==='draw'||ch.type==='who');
    var act=judge?'<button style="background:#4c7d3f" onclick="RT.res(true)">✅ ¡Lo lograron! (+'+ch.pts+')</button><button style="background:#b3313f" onclick="RT.res(false)">❌ No lo lograron</button>':
      ch.type==='duel'?'<button style="background:'+COLORS[S.turn]+'" onclick="RT.duel('+S.turn+')">'+team.emoji+' '+esc(team.name)+' ✅</button><button style="background:'+COLORS[ch.rival]+'" onclick="RT.duel('+ch.rival+')">'+S.teams[ch.rival].emoji+' '+esc(S.teams[ch.rival].name)+' ✅</button><button style="background:#555" onclick="RT.duel(null)">😶 Nadie</button><button class="spk" onclick="CH.duelReveal()">💡 Mostrar respuesta</button>':'';
    $('stage').innerHTML='<div class="qcard flipin" style="border-top:10px solid '+T.c+'">'+CH.head(ch,team.emoji+' '+team.name+' · ')+CH.body(ch)+'<div class="buzz" id="qbuzz"></div><div class="answer" id="qans"></div><div class="award" id="qaward">'+act+'</div></div>';
    CH.onAuto=function(ok,pts,myst){if(myst){$('qaward').innerHTML='<button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';return;}
      var p=0;if(ok){p=award(S.turn,pts);}else miss(S.turn);logR(S.turn,!!ok,p,{text:T.n+': '+(ch.s||(ch.q&&ch.q.text)||''),cat:{name:T.i+' '+T.n},ans:ch.s||(ch.q?ch.q.opts[ch.q.a]:'')});
      $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(ok?'🎉 +'+p+' pts':'😅 ¡Casi!')+'</div><button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';};
    QC.o={mode:ch.type==='duel'?'teacher':'retos'};QC.done=false;QC.buzz=null;QC.out=[];CH.after();},
  res:function(ok){stopTimer();var ch=CH.cur;if(ch.type==='mime'||ch.type==='draw'||ch.type==='who'){if($('secret'))CH.show();}ok?sOk():sBad();CH.onAuto(ok,ch.pts);},
  duel:function(i){stopTimer();var ch=CH.cur;CH.duelReveal();var p=0;if(i!=null){p=award(i,ch.pts);sOk();}else sBad();if(i!==S.turn)miss(S.turn);
    logR(i,i!=null,p,{text:'⚔️ '+ch.q.text,cat:{name:'⚔️ Duelo'},ans:ch.q.opts[ch.q.a]});
    $('qaward').innerHTML='<div style="width:100%;text-align:center;font-weight:900;font-size:20px">'+(i!=null?'🏆 '+S.teams[i].name+' gana el duelo (+'+p+')':'Nadie gana el duelo')+'</div><button style="background:var(--yellow);color:#3b2716" onclick="RT.next()">▶ Siguiente equipo</button>';},
  next:function(){stopTimer();if(window.countTurn&&countTurn())return;S.turn=(S.turn+1)%S.teams.length;this.intro();}
};
CH.duelReveal=function(){var ch=CH.cur;if(!ch||!ch.q)return;markInline(-1,ch.q.a);$('qans').innerHTML='✅ '+esc(ch.q.opts[ch.q.a]);$('qans').classList.add('show');};
