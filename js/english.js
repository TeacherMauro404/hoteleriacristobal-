/* =========================================================
   BANK — ENGLISH FOR HOSPITALITY (5 topics)
   Front desk · restaurant & bar · housekeeping & guest requests ·
   travel & tourism · polite phrases & customer service
   Format: [level 1–5, question, [options (1st is correct)], 0]
   ========================================================= */
(function(){
function T(id,name,icon,tag,desc,cats,top5){return {id:id,name:name,icon:icon,group:'en',tag:tag,desc:desc,top5:top5,cats:cats.map(function(c,i){return {id:id+'_'+i,name:c[0],icon:c[1],q:c[2]};})};}
window.ENGLISH=[

T("en1","Front Desk English","🛎️","English · Reception","Greetings & check-in · reservations on the phone · rooms & facilities · directions · check-out & payment",[
 ["Greetings & check-in","👋",[
  [1,"How do you greet a guest at 9 a.m.?",["Good morning, welcome to our hotel!","Good night, welcome!","Goodbye, sir!","See you later!"],0],
  [1,"What does 'check-in' mean in Spanish?",["Registro de llegada","Salida del hotel","Limpieza","Propina"],0],
  [2,"Complete: 'Do you have a ___?'",["reservation","reserve","reserving","reserved"],0],
  [2,"Which question asks for the guest's name?",["May I have your name, please?","Where is your name?","Who is your name?","How name are you?"],0],
  [3,"Complete: 'Could I see your ___, please?' (documento de viaje)",["passport","passing","pasta","password"],0],
  [3,"How do you say 'Su habitación está en el tercer piso'?",["Your room is on the third floor.","Your room is in the three floor.","Your room are on third floor.","You room is at the third flat."],0],
  [4,"What do you say when you give the key card?",["Here is your key card. Enjoy your stay!","Take this and go.","This is my key.","Give me your key."],0],
  [5,"Which sentence is the most polite?",["Would you mind filling in this registration form, please?","Fill this form now.","You must write here.","Form. Write."],0]]],
 ["Reservations on the phone","📞",[
  [1,"How do you answer the phone at a hotel?",["Good afternoon, Hotel Pacific, Ana speaking. How may I help you?","Hello? Who are you?","Yes, what?","Hotel. Bye."],0],
  [2,"Complete: 'For how many ___ would you like to stay?'",["nights","nigths","knights","night's"],0],
  [2,"What does 'single room' mean?",["Habitación para una persona","Habitación doble","Suite","Habitación compartida"],0],
  [3,"Complete: 'I'd like to ___ a double room for next weekend.'",["book","cook","look","took"],0],
  [3,"How do you say 'Lo siento, estamos completos'?",["I'm sorry, we are fully booked.","Sorry, we are full of food.","I'm sorry, we are complete people.","Sorry, we are closed forever."],0],
  [4,"Which question asks for the arrival date?",["When will you be arriving?","When did you arrive yesterday?","Where are you arriving?","How are you arriving?"],0],
  [5,"What does 'non-refundable rate' mean?",["Una tarifa que no se devuelve si se cancela","Una tarifa gratis","Una tarifa con desayuno","Una tarifa para niños"],0]]],
 ["Rooms & facilities","🏨",[
  [1,"What is a 'swimming pool'?",["Piscina","Gimnasio","Ascensor","Estacionamiento"],0],
  [1,"What is a 'lift' (UK) or 'elevator' (US)?",["Ascensor","Escalera","Pasillo","Balcón"],0],
  [2,"Complete: 'Breakfast is served ___ 7 to 10 a.m.'",["from","in","on","at"],0],
  [2,"What is the 'gym'?",["Gimnasio","Jardín","Spa","Bar"],0],
  [3,"Complete: 'The Wi-Fi password is on the ___ of your key card holder.'",["back","bag","black","book"],0],
  [3,"How do you say 'El estacionamiento es gratuito'?",["Parking is free of charge.","The parking is free charge of.","Parking are free.","Free is the parking charge."],0],
  [4,"What does a 'Do Not Disturb sign' mean?",["Cartel de no molestar","Cartel de salida","Cartel de limpieza","Cartel de peligro"],0],
  [5,"Which sentence describes a room correctly?",["The room has a king-size bed, a minibar and a sea view.","The room have a bed king and a view sea.","The room is having bed and sea.","Room has bed king minibar view."],0]]],
 ["Directions & information","🧭",[
  [1,"What does 'turn left' mean?",["Gira a la izquierda","Gira a la derecha","Sigue derecho","Detente"],0],
  [2,"What does 'go straight ahead' mean?",["Sigue derecho","Gira a la izquierda","Vuelve atrás","Sube la escalera"],0],
  [2,"Complete: 'The restaurant is ___ the lobby.' (al lado de)",["next to","next of","near of","beside of"],0],
  [3,"A guest asks: 'Where is the nearest pharmacy?' Which is a good answer?",["It's two blocks away, on the corner of Main Street.","Yes, I am a pharmacy.","Pharmacy is good.","I don't like pharmacies."],0],
  [3,"What does 'opposite' mean?",["Enfrente","Detrás","Al lado","Arriba"],0],
  [4,"Complete: 'You can take a taxi ___ the airport. It takes about 30 minutes.'",["to","at","in","on"],0],
  [5,"Which is a polite recommendation?",["I'd recommend visiting Cerro Alegre; the views are amazing.","You must go Cerro Alegre.","Go Cerro Alegre now.","Cerro Alegre is recommend."],0]]],
 ["Check-out & payment","💳",[
  [1,"Which sentence gives the check-out time?",["Check-out is at 12 noon.","Check-out is in the lobby.","Check-out is a card.","Check-out is free."],0],
  [2,"What is the 'bill' or 'invoice'?",["La cuenta / factura","La llave","La reserva","La propina"],0],
  [2,"Complete: 'How would you like to ___? Cash or card?'",["pay","play","pray","paid"],0],
  [3,"What does 'minibar charges' mean?",["Cargos por consumo del minibar","Minibar gratis","Limpieza del minibar","Llave del minibar"],0],
  [3,"How do you say 'Que tenga un buen viaje'?",["Have a nice trip!","Make a good travel!","Have a trip nice!","Do a good journey!"],0],
  [4,"Complete: 'Did you ___ anything from the minibar last night?'",["have","had","having","has"],0],
  [5,"How do you ask about the guest's experience?",["How was your stay with us?","How is your stay yesterday?","Was your stay how?","How did you stayed?"],0]]]
],[
 ["Hotel facilities 🏨",["swimming pool","gym","restaurant","spa","parking"],"bar, sauna, business center, laundry, garden, rooftop"],
 ["Phrases to greet a guest 👋",["Good morning","Welcome","How may I help you?","Nice to meet you","Good evening"],"Hello, Good afternoon, How are you?, Welcome back"]]),

T("en2","Restaurant & Bar English","🍽️","English · Food & beverage","Taking orders · food & cooking words · drinks & bar · tableware · the bill & complaints",[
 ["Taking orders","📝",[
  [1,"What does the waiter say to take the order?",["Are you ready to order?","Are you ready to pay?","Are you ready to leave?","Are you ready to cook?"],0],
  [2,"Complete: 'Would you like something to ___?' (beber)",["drink","drunk","drank","drinking"],0],
  [2,"What is 'the menu'?",["La carta","La cuenta","La mesa","El garzón"],0],
  [3,"How do you ask about the cooking point of the meat?",["How would you like your steak cooked?","How many steaks?","Where is your steak?","Do you cook steak?"],0],
  [3,"Complete: 'I'll ___ the salmon, please.'",["have","has","having","had"],0],
  [4,"What does 'today's special' mean?",["El plato del día","El postre especial","La cuenta especial","El menú infantil"],0],
  [5,"How do you ask about allergies politely?",["Do you have any food allergies or dietary requirements?","Are you sick?","What's wrong with you?","Do you eat everything or not?"],0]]],
 ["Food & cooking words","🍳",[
  [1,"What is 'chicken'?",["Pollo","Cerdo","Pescado","Vacuno"],0],
  [1,"What is 'fish'?",["Pescado","Pollo","Queso","Pan"],0],
  [2,"What does 'grilled' mean?",["A la parrilla","Frito","Hervido","Crudo"],0],
  [2,"What is 'dessert'?",["Postre","Desierto","Entrada","Bebida"],0],
  [3,"What does 'rare' mean for a steak?",["Poco cocido (jugoso)","Bien cocido","Raro","Quemado"],0],
  [3,"What does 'well done' mean for a steak?",["Bien cocido","Poco cocido","Muy bueno","A medio cocer"],0],
  [4,"What is 'seafood'?",["Mariscos","Comida de mar seca","Algas","Sal de mar"],0],
  [5,"What is a 'starter' (UK) or 'appetizer' (US)?",["Entrada","Plato de fondo","Postre","Bebida"],0]]],
 ["Drinks & bar","🍹",[
  [1,"What is 'sparkling water'?",["Agua con gas","Agua sin gas","Agua caliente","Agua de la llave"],0],
  [2,"What is 'still water'?",["Agua sin gas","Agua con gas","Agua helada","Agua tónica"],0],
  [2,"How do you ask about ice?",["Would you like ice in your drink?","Do you want cold?","Ice is good?","Are you ice?"],0],
  [3,"What does 'a glass of red wine' mean?",["Una copa de vino tinto","Una botella de vino blanco","Un vaso de jugo","Una jarra de vino"],0],
  [3,"What does 'on the rocks' mean?",["Con hielo","En las rocas de la playa","Sin hielo","Caliente"],0],
  [4,"What is a 'soft drink'?",["Una bebida sin alcohol (gaseosa)","Un trago suave","Un vino dulce","Un café"],0],
  [5,"What does the bartender ask a young-looking guest before serving alcohol?",["May I see your ID, please?","Are you rich?","Do you like cocktails?","Where do you live?"],0]]],
 ["Tableware","🍴",[
  [1,"What is a 'fork'?",["Tenedor","Cuchillo","Cuchara","Plato"],0],
  [1,"What is a 'knife'?",["Cuchillo","Tenedor","Servilleta","Vaso"],0],
  [2,"What is a 'spoon'?",["Cuchara","Copa","Cuchillo","Mantel"],0],
  [2,"What is a 'napkin'?",["Servilleta","Mantel","Plato","Bandeja"],0],
  [3,"What is a 'tablecloth'?",["Mantel","Servilleta","Delantal","Toalla"],0],
  [3,"What is a 'tray'?",["Bandeja","Taza","Jarra","Salero"],0],
  [4,"What is a 'wine glass'?",["Copa de vino","Vaso de agua","Botella","Taza"],0],
  [5,"What are 'salt and pepper shakers'?",["Saleros y pimenteros","Cócteles","Cocteleras","Platos de pan"],0]]],
 ["The bill & complaints","🧾",[
  [1,"How does a guest ask for the bill?",["Could I have the bill, please?","Give me the money.","Where is the kitchen?","I want the menu again."],0],
  [2,"What is a 'tip'?",["Propina","Consejo de cocina","Tapa","Cuenta"],0],
  [2,"Complete: 'Is service ___?' (incluido)",["included","include","including","includes"],0],
  [3,"A guest says: 'My soup is cold.' What do you answer?",["I'm so sorry. I'll bring you a hot one right away.","It's not my problem.","Eat it fast.","Soups are always cold."],0],
  [3,"What does 'I'm afraid we don't have…' mean?",["Lamentablemente no tenemos…","Tengo miedo de no tener…","No nos gusta…","Estamos asustados…"],0],
  [4,"How do you apologize for a delay?",["I apologize for the wait. Your food will be ready in five minutes.","Wait more.","Sorry, the cook is slow, no problem.","You are late, not us."],0],
  [5,"What does 'Shall I split the bill?' mean?",["¿Divido la cuenta?","¿Rompo la cuenta?","¿Pago yo?","¿Traigo otra carta?"],0]]]
],[
 ["Tableware words 🍴",["fork","knife","spoon","plate","glass"],"napkin, cup, bowl, tray, tablecloth, saucer"],
 ["Words to describe food 😋",["delicious","spicy","sweet","salty","fresh"],"sour, bitter, crunchy, tasty, hot, juicy"]]),

T("en3","Housekeeping & Guest Requests","🧹","English · Housekeeping","Room items · bathroom & amenities · cleaning vocabulary · guest requests · problems & solutions",[
 ["Room items","🛏️",[
  [1,"What is a 'pillow'?",["Almohada","Sábana","Frazada","Toalla"],0],
  [1,"What is a 'blanket'?",["Frazada","Almohada","Cortina","Alfombra"],0],
  [2,"What are 'sheets'?",["Sábanas","Hojas de papel","Toallas","Cortinas"],0],
  [2,"What is a 'wardrobe' or 'closet'?",["Clóset","Cajón","Espejo","Lámpara"],0],
  [3,"What is a 'hanger'?",["Colgador (percha)","Hangar de aviones","Cajón","Pinche de pelo"],0],
  [3,"What is the 'safe' in a hotel room?",["Caja fuerte","Seguro de viaje","Salida de emergencia","Cerradura"],0],
  [4,"What is a 'bedspread'?",["Cubrecama","Cama extra","Colchón","Cojín"],0],
  [5,"What is a 'rollaway bed'?",["Cama extra plegable con ruedas","Cama matrimonial","Cuna","Litera"],0]]],
 ["Bathroom & amenities","🛁",[
  [1,"What is a 'towel'?",["Toalla","Jabón","Ducha","Lavamanos"],0],
  [2,"What is 'shampoo'?",["Champú","Jabón de manos","Pasta de dientes","Crema"],0],
  [2,"What is the 'shower'?",["Ducha","Tina","Lavamanos","Inodoro"],0],
  [3,"What is a 'bathtub'?",["Tina de baño","Ducha","Toalla","Bata"],0],
  [3,"What is 'toilet paper'?",["Papel higiénico","Papel de carta","Servilleta","Toalla de cocina"],0],
  [4,"What is a 'bathrobe'?",["Bata de baño","Toalla de piso","Gorra de baño","Pantuflas"],0],
  [5,"What is a 'hairdryer'?",["Secador de pelo","Peineta","Plancha de ropa","Cepillo de dientes"],0]]],
 ["Cleaning vocabulary","🧽",[
  [1,"What does 'clean' mean?",["Limpio / limpiar","Sucio","Ordenar","Botar"],0],
  [2,"What does 'dirty' mean?",["Sucio","Limpio","Mojado","Seco"],0],
  [2,"What does 'make the bed' mean?",["Hacer la cama","Comprar una cama","Dormir en la cama","Mover la cama"],0],
  [3,"What is a 'vacuum cleaner'?",["Aspiradora","Escoba","Trapero","Plumero"],0],
  [3,"What does 'housekeeping' mean in a hotel?",["El servicio de limpieza y pisos","La casa del gerente","La llave de la casa","El jardín"],0],
  [4,"What does a door sign saying 'Please make up my room' mean?",["Por favor, limpie mi habitación","Por favor, maquille mi habitación","No molestar","Habitación desocupada"],0],
  [5,"Which sentence is correct for a housekeeper knocking on the door?",["Good morning, housekeeping! May I come in?","Open the door now!","Housekeeping. Go out.","I clean. You leave."],0]]],
 ["Guest requests","🙋",[
  [1,"A guest says: 'Could I have an extra towel?' What do they want?",["Una toalla adicional","Una almohada","Una cama","Una llave"],0],
  [2,"Complete: 'I'll ___ it up to your room right away.'",["bring","bringing","brought","brings"],0],
  [2,"What does 'wake-up call' mean?",["Llamada despertador","Llamada de emergencia","Llamada de reclamo","Llamada de larga distancia"],0],
  [3,"A guest asks: 'Can I have a late check-out?' What do they want?",["Dejar la habitación más tarde","Llegar más tarde","Cancelar la reserva","Pagar después"],0],
  [3,"Complete: 'Certainly, sir. I'll send someone ___ ten minutes.'",["in","on","at","by"],0],
  [4,"How do you politely refuse a request?",["I'm afraid that's not possible, but I can offer you…","No. Impossible.","Forget it.","We don't do that, bye."],0],
  [5,"What is a 'laundry service'?",["Servicio de lavandería","Servicio despertador","Servicio de taxi","Servicio de comidas"],0]]],
 ["Problems & solutions","🔧",[
  [1,"A guest says: 'The air conditioning isn't working.' What is broken?",["El aire acondicionado","La televisión","La ducha","La luz"],0],
  [2,"What does 'The light bulb is broken' mean?",["La ampolleta está quemada","La luz es muy fuerte","La lámpara es bonita","La luz está apagada"],0],
  [2,"Which answer solves the problem?",["I'll send maintenance to fix it immediately.","Fix it yourself.","That is normal.","Call tomorrow."],0],
  [3,"A guest says: 'There's no hot water.' What should you do?",["Apologize and send maintenance or offer another room","Tell them to shower with cold water","Ignore the call","Laugh"],0],
  [3,"What does 'The tap is leaking' mean?",["La llave está goteando","La llave está brillando","La llave está cerrada","La llave está nueva"],0],
  [4,"What does 'noisy' mean in 'My room is very noisy'?",["Ruidosa","Oscura","Sucia","Pequeña"],0],
  [5,"Which phrase offers an alternative?",["Would you like me to move you to a quieter room?","You can leave the hotel.","Noise is free.","Sleep in the lobby."],0]]]
],[
 ["Bathroom amenities 🧴",["soap","shampoo","conditioner","toothbrush","shower cap"],"body lotion, comb, toothpaste, sewing kit, shaving kit"],
 ["Bedroom items 🛏️",["bed","pillow","blanket","wardrobe","lamp"],"sheets, curtains, mirror, desk, hanger, safe"]]),

T("en4","Travel & Tourism English","✈️","English · Travel","At the airport · tours & excursions · transport · weather & clothing · describing places",[
 ["At the airport","🛫",[
  [1,"What is a 'flight'?",["Vuelo","Pelea","Luz","Piso"],0],
  [2,"What is the 'boarding pass'?",["Tarjeta de embarque","Pasaporte","Maleta","Puerta de salida"],0],
  [2,"What is 'luggage' or 'baggage'?",["Equipaje","Pasaje","Asiento","Aduana"],0],
  [3,"What is 'customs' at the airport?",["Aduana","Costumbres del país","Clientes","Tienda libre de impuestos"],0],
  [3,"What does 'My flight is delayed' mean?",["Mi vuelo está retrasado","Mi vuelo está cancelado","Mi vuelo llegó temprano","Mi vuelo está lleno"],0],
  [4,"What is the 'gate'?",["Puerta de embarque","Reja de la casa","Pista","Torre de control"],0],
  [5,"What is 'jet lag'?",["Cansancio por el cambio de huso horario","Un tipo de avión","Un retraso de equipaje","Una maleta perdida"],0]]],
 ["Tours & excursions","🗺️",[
  [1,"What is a 'tour guide'?",["Guía de turismo","Mapa","Agencia","Hotel"],0],
  [2,"Complete: 'The tour ___ at 9 a.m. from the hotel lobby.'",["starts","start","starting","is start"],0],
  [2,"What does 'pick-up' mean in tourism?",["Recogida (pasar a buscar al pasajero)","Levantar pesas","Escoger fruta","Pagar"],0],
  [3,"What is a 'day trip'?",["Una excursión de un día","Un viaje de un año","Un viaje nocturno","Un vuelo"],0],
  [3,"Which sentence describes the length of a tour correctly?",["The tour lasts about four hours.","The tour is four hours long ago.","The tour take four hours.","Four hours the tour."],0],
  [4,"Complete: 'Please bring comfortable shoes, sunscreen ___ a hat.'",["and","but","or","so"],0],
  [5,"What does 'The price includes lunch and entrance fees' mean?",["El precio incluye almuerzo y entradas","El precio no incluye nada","El almuerzo es extra","Las entradas son gratis para siempre"],0]]],
 ["Transport","🚌",[
  [1,"What is a 'bus stop'?",["Paradero de bus","Terminal de trenes","Aeropuerto","Estacionamiento"],0],
  [2,"What is the 'subway' (US) or 'underground' (UK)?",["El metro","Un túnel peatonal","El sótano","El ascensor"],0],
  [2,"What does 'one-way ticket' mean?",["Pasaje de ida","Pasaje de ida y vuelta","Pasaje gratis","Pasaje de grupo"],0],
  [3,"What does 'round-trip ticket' mean?",["Pasaje de ida y vuelta","Pasaje solo de ida","Pasaje de juguete","Pasaje en bus circular"],0],
  [3,"How do you ask the price of a taxi ride?",["How much is it to the city center?","How many taxis are there?","Where is taxi expensive?","Is taxi a car?"],0],
  [4,"What is 'car rental'?",["Arriendo de autos","Venta de autos","Taller mecánico","Taxi"],0],
  [5,"Complete: 'You need to ___ off the bus at the third stop.'",["get","take","go","put"],0]]],
 ["Weather & clothing","☀️",[
  [1,"What does 'sunny' mean?",["Soleado","Lluvioso","Nublado","Ventoso"],0],
  [2,"What does 'It's raining' mean?",["Está lloviendo","Está nevando","Hace calor","Hay viento"],0],
  [2,"What should a tourist wear on a cold day in Patagonia?",["A warm jacket, gloves and a hat","Shorts and sandals","A swimsuit","Nothing special"],0],
  [3,"What does 'windy' mean?",["Ventoso","Soleado","Nevado","Húmedo"],0],
  [3,"Complete: 'Don't forget your ___; it might rain.'",["umbrella","sunglasses","swimsuit","sandals"],0],
  [4,"What does 'The temperature drops at night in the desert' mean?",["La temperatura baja de noche en el desierto","La temperatura sube de noche","No hay temperatura","Hace calor de noche"],0],
  [5,"Which season is December in Chile?",["Summer","Winter","Autumn","Spring"],0]]],
 ["Describing places","🏞️",[
  [1,"What does 'beautiful' mean?",["Hermoso","Feo","Grande","Viejo"],0],
  [2,"What is the opposite of 'crowded'?",["Quiet","Busy","Full","Noisy"],0],
  [2,"What is a 'beach'?",["Playa","Bahía de barcos","Bosque","Cerro"],0],
  [3,"Complete: 'Valparaíso is famous ___ its colorful houses.'",["for","of","at","by"],0],
  [3,"Which sentence uses the superlative correctly?",["Atacama is the driest desert in the world.","Atacama is the more dry desert.","Atacama is driest of world desert.","Atacama is the most dry desert of world."],0],
  [4,"What does 'breathtaking view' mean?",["Una vista impresionante","Una vista que asfixia","Una vista aburrida","Una vista lejana"],0],
  [5,"Complete: 'Torres del Paine is ___ than Santiago in winter.'",["colder","more cold","coldest","cold"],0]]]
],[
 ["Things you see at an airport ✈️",["plane","check-in counter","gate","security","duty free"],"customs, baggage claim, departures board, boarding pass, runway"],
 ["Tourist activities 🧗",["hiking","sightseeing","swimming","skiing","shopping"],"surfing, wine tasting, kayaking, horse riding, stargazing"]]),

T("en5","Polite English for Customer Service","🤝","English · Customer service","Polite requests · apologizing · numbers, dates & times · phone phrases · Spanish → English",[
 ["Polite requests","🙏",[
  [1,"What does 'please' mean?",["Por favor","Gracias","De nada","Perdón"],0],
  [1,"What does 'You're welcome' mean?",["De nada","Bienvenido","Gracias","Hola"],0],
  [2,"Which is more polite?",["Could you wait a moment, please?","Wait.","You wait!","Stop there."],0],
  [2,"Complete: '___ I help you?'",["May","Must","Am","Do"],0],
  [3,"Complete: 'Would you like ___ coffee?'",["some","any","a lot","much"],0],
  [3,"Which phrase offers more help?",["Is there anything else I can do for you?","Anything else? No? Good.","What do you want now?","Are you finished?"],0],
  [4,"How do you politely ask a guest to repeat?",["Sorry, could you repeat that, please?","What?","Again!","Speak better."],0],
  [5,"Which sentence uses 'Would you mind…' correctly?",["Would you mind waiting in the lobby for a few minutes?","Would you mind to wait?","Would you minding wait?","Would mind you wait?"],0]]],
 ["Apologizing","😔",[
  [1,"What does 'I'm sorry' mean?",["Lo siento","Estoy feliz","Estoy cansado","Estoy listo"],0],
  [2,"Complete: 'I ___ for the inconvenience.'",["apologize","apology","sorry","forgive"],0],
  [3,"What does 'inconvenience' mean?",["Molestia / inconveniente","Comodidad","Conveniencia","Invitación"],0],
  [3,"Which is a good apology?",["I'm very sorry about that. Let me fix it right away.","It wasn't me.","That happens.","Not my fault."],0],
  [4,"What does 'complimentary' mean in 'a complimentary dessert'?",["De cortesía (gratis)","Complementario y caro","Felicitado","Obligatorio"],0],
  [5,"Choose the best response to a complaint:",["I completely understand your frustration. Let me see what I can do.","Calm down.","You are wrong.","Read the rules."],0]]],
 ["Numbers, dates & times","🔢",[
  [1,"How do you say 15?",["Fifteen","Fifty","Five","Fiveteen"],0],
  [2,"How do you say 'el 3 de marzo'?",["March third (the third of March)","Three March","March three day","Third of the March month"],0],
  [2,"How do you say 7:30?",["Half past seven","Seven and half","Half to seven","Thirty to seven"],0],
  [3,"How do you say 8:45?",["A quarter to nine","A quarter past eight","Eight and quarter","Nine less fifteen"],0],
  [3,"How do you say 'el segundo piso'?",["The second floor","The two floor","The secondly floor","The floor two"],0],
  [4,"How do you say $120?",["A hundred and twenty dollars","One two zero dollars","Twelve dollars","One hundred twenty dollar"],0],
  [5,"How do you say 'del 10 al 15 de enero'?",["From January 10th to 15th","Since January 10 until 15","Of January 10 to 15","From 10 January since 15"],0]]],
 ["Phone phrases","☎️",[
  [1,"What does 'Hold on, please' mean?",["Espere en línea, por favor","Cuelgue, por favor","Llame después","Hable más fuerte"],0],
  [2,"What does 'I'll put you through' mean?",["Le transfiero la llamada","Le corto la llamada","Le paso la cuenta","Le doy la llave"],0],
  [3,"Complete: 'Can I take a ___?' (recado)",["message","massage","mess","menu"],0],
  [3,"How do you ask someone to spell their name?",["Could you spell your last name, please?","How is your name written by you?","Letter your name.","Spell me."],0],
  [4,"What does 'The line is busy' mean?",["La línea está ocupada","La línea está libre","La línea es lenta","La línea se cortó"],0],
  [5,"Which is the best way to end a call?",["Thank you for calling. Have a great day!","Okay, bye, whatever.","Finish call.","Close."],0]]],
 ["Spanish → English","🔁",[
  [1,"'Bienvenido a nuestro hotel' →",["Welcome to our hotel","Well come at our hotel","Welcome in our hotel","Welcomed to our hotel"],0],
  [2,"'¿En qué le puedo ayudar?' →",["How can I help you?","What can I help?","How I can help you?","In what I help you?"],0],
  [2,"'Aquí tiene su llave' →",["Here is your key","Here has your key","Here your key is","There is your key here"],0],
  [3,"'El desayuno está incluido' →",["Breakfast is included","Breakfast is including","Breakfast includes","The breakfast are included"],0],
  [3,"'¿Desea algo más?' →",["Would you like anything else?","Do you want more something?","Wish something more?","Want anything other?"],0],
  [4,"'Disculpe la espera' →",["Sorry for the wait","Sorry for the hope","Excuse the waiting you","Sorry to wait"],0],
  [5,"'Que disfrute su estadía' →",["Enjoy your stay","Enjoy your state","Enjoy your staying","Have enjoy your stay"],0]]]
],[
 ["Polite words and phrases 🙏",["please","thank you","excuse me","sorry","you're welcome"],"pardon, certainly, of course, my pleasure, would you…"],
 ["Days of the week 📅",["Monday","Tuesday","Wednesday","Thursday","Friday"],"Saturday, Sunday"]])
];
})();
