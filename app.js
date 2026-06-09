window.onerror = function(message, source, lineno, colno, error) {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding: 24px; color: #ff5555; background: rgba(255,0,0,0.1); border: 2px solid #ff5555; border-radius: 8px; font-family: monospace; margin: 20px; z-index: 9999; position: relative;">
      <h3>Runtime Error Detected</h3>
      <p><strong>Error:</strong> ${message}</p>
      <p><strong>Location:</strong> ${source} (Line ${lineno}:${colno})</p>
      <pre style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.5); border-radius: 4px; overflow-x: auto;">${error ? error.stack : ''}</pre>
    </div>`;
  }
  return false;
};

const IMGS={
  heli_overview:"img/heli_overview.jpg",
  dimensions:"img/dimensions.jpg",
  data_table:"img/data_table.jpg",
  instrument_panel:"img/instrument_panel.jpg",
  pitot_static:"img/pitot_static.jpg",
  limitations:"img/limitations.jpg",
  engine_gear:"img/engine_gear.jpg",
  fuel_system:"img/fuel_system.jpg",
  transmission:"img/transmission.jpg",
  hydraulic:"img/hydraulic.jpg",
  power_check:"img/power_check.jpg",
  rate_of_climb:"img/rate_of_climb.jpg",
  wind_azimuth:"img/wind_azimuth.jpg",
  hover_ige:"img/hover_ige.jpg",
  hover_oge:"img/hover_oge.jpg",
  height_velocity:"img/height_velocity.jpg",
  weight_balance:"img/weight_balance.jpg",
  emergency:"img/emergency.jpg",
  firma:"img/firma.png",
  bell206_in_flight:"img/bell206_in_flight.png"
}

// ========= EMAIL CONFIG =========
const EMAIL_CFG = {
  publicKey:  localStorage.getItem('ejsPK')  || '',
  serviceId:  localStorage.getItem('ejsSVC') || '',
  templateId: localStorage.getItem('ejsTID') || '',
  templateIdReg: localStorage.getItem('ejsTIDReg') || '',
  ccEmail:    'eforgan@gruppomodena.com'
};
if(EMAIL_CFG.publicKey){
  try{ emailjs.init({publicKey: EMAIL_CFG.publicKey}); }catch(e){}
}

// ========= FIREBASE CONFIG =========
const FIREBASE_CFG = {
  apiKey: localStorage.getItem('fbAPI') || '',
  authDomain: localStorage.getItem('fbAuthDomain') || '',
  projectId: localStorage.getItem('fbProject') || ''
};
let db = null;
if(FIREBASE_CFG.apiKey){
  try{ 
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CFG);
    db = firebase.firestore();
  }catch(e){}
}

// ========= COURSE DATA =========
const MODULES = [
{id:1,title:"Descripción General y Tripulación",subtitle:"Secciones 1 y 2 — Airframe, rotores, compartimientos",icon:"✈",
chapters:[
{title:"1.1 — El JetRanger III: Descripción General",pages:[8,9],
content:`<p>El <strong style="color:var(--amber2)">Bell Model 206B JetRanger III</strong> es un helicóptero utilitario de motor sencillo diseñado para despegar y aterrizar en cualquier terrain razonablemente nivelado. La configuración estándar es para un piloto y cuatro pasajeros.</p>
<div class="info-box"><p>Esta publicación es exclusivamente para capacitación en el Bell Model 206B-3. Para procedimientos y limitaciones actualizados, consultar los Manuales de Vuelo vigentes (BHT-206B-FM-1).</p></div>
<div class="chapter-title" style="margin-top:12px">Datos Técnicos Principales</div>
<div class="data-row"><span class="data-label">Motor</span><span class="data-value">Allison 250-C20J (Rolls Royce)</span></div>
<div class="data-row"><span class="data-label">Potencia nominal</span><span class="data-value">420 SHP <span class='metric'>(313 kW)</span></span></div>
<div class="data-row"><span class="data-label">Potencia despegue (limitada)</span><span class="data-value">317 SHP <span class='metric'>(236 kW)</span> — 5 min</span></div>
<div class="data-row"><span class="data-label">Potencia continua (limitada)</span><span class="data-value">270 SHP <span class='metric'>(201 kW)</span></span></div>
<div class="data-row"><span class="data-label">Peso vacío promedio</span><span class="data-value">1,604 libras <span class='metric'>(727.6 kg)</span></span></div>
<div class="data-row"><span class="data-label">Peso bruto máximo (interno)</span><span class="data-value">3,200 libras <span class='metric'>(1,451.5 kg)</span></span></div>
<div class="data-row"><span class="data-label">Peso bruto máximo (externo)</span><span class="data-value">3,350 libras <span class='metric'>(1,519.6 kg)</span></span></div>`},
{title:"1.2 — Rotor Principal y de Cola",pages:[20],
content:`<div class="chapter-title">Rotor Principal</div>
<p>El rotor principal es <strong style="color:var(--amber2)">semi-rígido de subibaja (seesaw/underslung)</strong>, con el eje de cambio de paso por debajo del eje de aleteo. Tiene <strong style="color:var(--amber2)">dos palas de metal intercambiables individualmente</strong>. Cada pala unida al cubo por horquilla, cojinetes de cambio de paso y barra de tensión-torsión.</p>
<div class="data-row"><span class="data-label">Número de palas</span><span class="data-value">2</span></div>
<div class="data-row"><span class="data-label">Diámetro</span><span class="data-value">33 pies 4" <span class='metric'>(10.16 m)</span></span></div>
<div class="data-row"><span class="data-label">Cuerda</span><span class="data-value">13 pulgadas <span class='metric'>(330 mm)</span></span></div>
<div class="data-row"><span class="data-label">Torcimiento de pala</span><span class="data-value">-10 grados</span></div>
<div class="data-row"><span class="data-label">Proporción motor/rotor</span><span class="data-value">15.23 a 1</span></div>
<div class="data-row"><span class="data-label">RPM a 100% (Rotor)</span><span class="data-value">395 RPM</span></div>
<div class="chapter-title" style="margin-top:12px">Rotor de Cola</div>
<p>Es un rotor del tipo de subibaja con dos palas de metal conectadas a un yugo común con cojinetes y pernos para cambios de paso.</p>
<div class="data-row"><span class="data-label">Número de palas</span><span class="data-value">2 — semi-rígido subibaja</span></div>
<div class="data-row"><span class="data-label">Diámetro</span><span class="data-value">5 pies 5" <span class='metric'>(1.65 m)</span></span></div>
<div class="data-row"><span class="data-label">RPM a 100% (Rotor de cola)</span><span class="data-value">2,560 RPM</span></div>
<div class="warn-box"><p>Las RPM del rotor de cola no son indicadas directamente al piloto. Se controlan a través del régimen del motor N2.</p></div>`},
{title:"1.3 — Fuselaje y Dimensiones",pages:[12,13],
content:`<p>El fuselaje se divide en tres secciones:</p>
<div class="data-row"><span class="data-label">Sección Delantera</span><span class="data-value">Honeycomb aluminio — máx. resistencia y bajo ruido</span></div>
<div class="data-row"><span class="data-label">Sección Intermedia</span><span class="data-value">Semimonocasco — plataforma motor + carga + equipo</span></div>
<div class="data-row"><span class="data-label">Cono de Cola</span><span class="data-value">Monocasco — soporta eje, rotor cola, estabilizadores</span></div>
<div class="data-row"><span class="data-label">Largo total fuselaje</span><span class="data-value">39 pies 1" <span class='metric'>(11.91 m)</span></span></div>
<div class="data-row"><span class="data-label">Altura total</span><span class="data-value">9 pies 7.5" <span class='metric'>(2.94 m)</span></span></div>
<div class="data-row"><span class="data-label">Separación patines</span><span class="data-value">6 pies 3.5" <span class='metric'>(1.92 m)</span></span></div>
<div class="data-row"><span class="data-label">Compartimiento principal de carga</span><span class="data-value">40 ft³ <span class='metric'>(1.13 m³)</span></span></div>
<div class="data-row"><span class="data-label">Compartimiento de equipaje</span><span class="data-value">16 ft³ <span class='metric'>(0.45 m³)</span> — máx. 250 libras <span class='metric'>(113.4 kg)</span></span></div>`},
{title:"1.4 — Compartimiento de Tripulación y Estabilizadores",pages:[12],
content:`<div class="chapter-title">Compartimiento de Tripulación</div>
<p>La sección delantera tiene aproximadamente <strong style="color:var(--amber2)">40 ft³ <span class='metric'>(1.13 m³)</span></strong> para acomodar pasajeros o carga. Las puertas traseras pueden quitarse para llevar objetos largos. Hay 16 ft³ <span class='metric'>(0.45 m³)</span> adicionales en la sección intermedia donde se pueden llevar 250 libras de equipaje.</p>
<div class="chapter-title" style="margin-top:12px">Estabilizadores</div>
<p><strong style="color:var(--amber2)">Estabilizador horizontal:</strong> Construido de aluminio, unido al cono de cola. Mantiene actitud casi nivelada a cualquier velocidad.</p>
<p style="margin-top:8px"><strong style="color:var(--amber2)">Estabilizador vertical:</strong> La orilla de ataque está desviada <strong>5.5°</strong> hacia el exterior para reducir el empuste del rotor de cola en vuelos de avance, mejorando la habilidad de aterrizajes por pérdida de pedal. Es de núcleo de panal de abeja de aluminio y piel de aluminio.</p>
<div class="info-box"><p>El combustible y pasajeros se ubican <strong>debajo del rotor principal</strong> para minimizar los cambios en el centro de gravedad durante el consumo de combustible.</p></div>`}
],
quiz:[
{q:"¿Cuál es la configuración estándar del Bell 206B JetRanger III?",opts:["2 pilotos y 3 pasajeros","1 piloto y 4 pasajeros","2 pilotos y 4 pasajeros","1 piloto y 3 pasajeros"],ans:1},
{q:"¿Qué tipo de rotor principal tiene el JetRanger III?",opts:["Articulado, de 4 palas","Rígido, de 2 palas","Semi-rígido de subibaja (seesaw), de 2 palas","Semi-rígido articulado, de 3 palas"],ans:2},
{q:"¿Dónde se ubica el tanque de combustible para minimizar cambios en el CG?",opts:["Arriba del motor","En el morro del helicóptero","Debajo y detrás del asiento del pasajero","En el cono de cola"],ans:2},
{q:"¿Cuál es la capacidad máxima del compartimiento de equipaje en la sección intermedia?",opts:["40 ft³ (1.13 m³) / sin límite de peso","500 libras — 16 ft³ (0.45 m³)","250 libras — 16 ft³ (0.45 m³)","350 libras — 25 pies cúbicos"],ans:2},
{q:"¿Cuántos grados está desviada la orilla de ataque del estabilizador vertical hacia el exterior?",opts:["3°","10°","5.5°","7°"],ans:2}
]},
{id:2,title:"Limitaciones de Operación",subtitle:"Sección 3 — Velocidades, altitudes, tipo de vuelo",icon:"⚠",
chapters:[
{title:"2.1 — Tipo de Operación y Tripulación",pages:[12],
content:`<p>El helicóptero básico está aprobado para <strong style="color:var(--amber2)">5 pasajeros</strong> y certificado para operaciones <strong style="color:var(--amber2)">diurnas y nocturnas VFR cuando no hay hielo</strong>.</p>
<div class="chapter-title">Panel de Instrumentos</div>
<p>El panel de instrumentos estándar y el pedestal de radio están diseñados para el monitoreo visual rápido.</p>
<div class="chapter-title" style="margin-top:12px">Tripulación de Vuelo</div>
<p>La tripulación mínima consiste de <strong style="color:var(--amber2)">un piloto, sentado en el asiento de la derecha</strong>. El asiento de la izquierda puede ser para un piloto adicional solo cuando están instalados los controles dobles aprobados.</p>
<div class="warn-box"><p>Las operaciones nocturnas se limitan a condiciones de contacto visual. La orientación debe mantenerse por referencia visual con objetos en tierra, por luces terrestres o adecuada iluminación celeste.</p></div>`},
{title:"2.2 — Sistema Pitot/Estático y Marcas",pages:[22,32],
content:`<p>El tubo pitot está montado en la parte más delantera de la nariz de la cabina, al lado derecho de la línea central del helicóptero. La presión del aire estático se obtiene de dos ventilas estáticas localizadas en los paneles izquierdo y derecho abajo de la ventana inferior de la cabina.</p>
<div class="chapter-title" style="margin-top:12px">Instrumentos de Cabina y Marcas</div>
<ul>
<li><strong>Línea roja:</strong> Límite de operación máximo o mínimo. No exceder.</li>
<li><strong>Arco amarillo:</strong> Rango de precaución o de tránsito.</li>
<li><strong>Arco verde:</strong> Operación normal y continua.</li>
</ul>`},
{title:"2.3 — Limitaciones de Velocidad (VNE) y Altitud",pages:[13],
content:`<div class="chapter-title">Peso bruto 3,000 lb o menos</div>
<div class="data-row"><span class="data-label">VNE nivel del mar a 3,000 ft densidad</span><span class="data-value">150 MPH <span class='metric'>(241 km/h)</span> (130 KIAS)</span></div>
<div class="data-row"><span class="data-label">Reducción c/1,000 ft sobre 3,000 ft dens.</span><span class="data-value">4.0 MPH (3.5 KIAS)</span></div>
<div class="data-row"><span class="data-label">Altitud máxima de presión</span><span class="data-value">20,000 pies <span class='metric'>(6,096 m)</span></span></div>
<div class="chapter-title" style="margin-top:12px">Peso bruto por encima de 3,000 lb</div>
<div class="data-row"><span class="data-label">VNE nivel del mar a 3,000 ft densidad</span><span class="data-value">140 MPH <span class='metric'>(225 km/h)</span> (122 KIAS)</span></div>
<div class="data-row"><span class="data-label">Reducción c/1,000 ft sobre 3,000 ft dens.</span><span class="data-value">8.0 MPH (7.0 KIAS)</span></div>
<div class="data-row"><span class="data-label">Altitud máxima de densidad</span><span class="data-value">13,500 pies <span class='metric'>(4,115 m)</span></span></div>
<div class="chapter-title" style="margin-top:12px">Otras Velocidades Limitantes</div>
<div class="data-row"><span class="data-label">Velocidad máxima para autorrotación estable</span><span class="data-value">115 MPH <span class='metric'>(185 km/h)</span> (100 nudos)</span></div>
<div class="data-row"><span class="data-label">Velocidad máxima con puertas traseras quitadas</span><span class="data-value">100 MPH <span class='metric'>(161 km/h)</span> (87 nudos)</span></div>
<div class="data-row"><span class="data-label">Velocidad máxima con puertas delanteras quitadas</span><span class="data-value">80 MPH <span class='metric'>(129 km/h)</span> (69 nudos)</span></div>
<div class="warn-box"><p>Se prohíbe usar intencionalmente los límites transitorios. Encender la luz anticolisión al volar cerca de o en humedad visible para evitar reflejos y vértigo.</p></div>`},
{title:"2.4 — Limitaciones CG, Motor y Condiciones Especiales",pages:[14,15],
content:`<div class="chapter-title">Límites del CG Lateral</div>
<div class="data-row"><span class="data-label">Límite izquierdo (-)</span><span class="data-value">3.0 pulgadas (76.2 mm) de línea central</span></div>
<div class="data-row"><span class="data-label">Límite derecho (+)</span><span class="data-value">4.0 pulgadas (101.6 mm) de línea central</span></div>
<div class="chapter-title" style="margin-top:12px">Turbina de Potencia N2 — Límites RPM en Operación</div>
<div class="data-row"><span class="data-label">Mínimo (encendido)</span><span class="data-value">97%</span></div>
<div class="data-row"><span class="data-label">Máximo (encendido)</span><span class="data-value">100%</span></div>
<div class="danger-box"><p>NO SE AUTORIZA USAR EL ACELERADOR PARA CONTROLAR RPM (excepciones: ver Sección 3, Procedimientos en Emergencias y Fallas).</p></div>
<div class="chapter-title" style="margin-top:12px">Vuelo Sin Puertas</div>
<div class="data-row"><span class="data-label">Carga externa máxima</span><span class="data-value">3,350 libras (1,519.6 kg)</span></div>
<div class="data-row"><span class="data-label">Se prohíbe</span><span class="data-value">Vuelo extendido de reversa o lateral</span></div>`}
],
quiz:[
{q:"¿Cuál es la velocidad VNE para peso bruto de 3,000 libras o menos, a nivel del mar hasta 3,000 pies de densidad altitud?",opts:["140 MPH IAS (122 nudos)","150 MPH IAS (130 KIAS)","130 MPH IAS (113 nudos)","160 MPH IAS (139 nudos)"],ans:1},
{q:"¿Cuál es la altitud máxima de operación para pesos brutos menores de 3,000 libras?",opts:["13,500 pies densidad altitud","15,000 pies presión altitud","20,000 pies presión altitud","25,000 pies presión altitud"],ans:2},
{q:"¿Para qué tipo de operación está certificado el Bell 206B en su configuración básica?",opts:["VFR y IFR, día y noche","VFR día y noche sin hielo","IFR día únicamente","VFR día solamente"],ans:1},
{q:"¿En qué asiento debe sentarse el piloto mínimo requerido para operar el JetRanger III?",opts:["Asiento de la izquierda","Asiento trasero central","Asiento de la derecha","Cualquiera de los asientos delanteros"],ans:2},
{q:"¿Cuál es la carga externa máxima al volar sin puertas?",opts:["2,500 libras (1,133 kg)","3,350 libras (1,519.6 kg)","3,000 libras (1,360.8 kg)","4,000 libras (1,814 kg)"],ans:1}
]},
{id:3,title:"Planta de Potencia y Combustible",subtitle:"Secciones 5 y 6 — Motor Allison 250-C20J, sistema de combustible",icon:"⚙",
chapters:[
{title:"3.1 — Motor Allison 250-C20J: Descripción y Componentes",pages:[14,15],
content:`<p>El JetRanger III está equipado con el motor turboeje <strong style="color:var(--amber2)">Allison 250-C20J</strong>, fabricado por Allison Engine Company, División de Rolls Royce. El motor tiene una capacidad de <strong style="color:var(--amber2)">420 SHP <span class='metric'>(313 kW)</span></strong>, limitado para la operación.</p>
<div class="chapter-title">Componentes accionados por N1 (productora de gas):</div>
<ul>
<li>Generador tacómetro de la productora de gas</li>
<li>Conjunto de la bomba de combustible y regulador</li>
<li>Generador/Arrancador</li>
<li>Control de combustible de la productora de gas N1</li>
<li>Conjunto de la bomba de aceite</li>
</ul>
<div class="info-box"><p>El tren N2 da una reducción en la velocidad de N2 de 33,290 RPM en el rotor de la turbina de potencia a 6,016 RPM de salida a la unidad de rueda libre.</p></div>`},
{title:"3.2 — Limitaciones del Motor",pages:[15],
content:`<div class="chapter-title">Límites TOT (Temperatura de Salida de Turbina)</div>
<div class="data-row"><span class="data-label">TOT máximo DESPEGUE (5 min)</span><span class="data-value" style="color:var(--red)">810°C</span></div>
<div class="data-row"><span class="data-label">TOT máximo CONTINUO</span><span class="data-value">738°C</span></div>
<div class="data-row"><span class="data-label">TOT máximo TRANSITORIO (Arranque 10s)</span><span class="data-value">927°C</span></div>
<div class="chapter-title" style="margin-top:12px">Límites RPM y Torque</div>
<div class="data-row"><span class="data-label">N1 máximo</span><span class="data-value">105%</span></div>
<div class="data-row"><span class="data-label">Torque máximo despegue</span><span class="data-value">100% (5 minutos)</span></div>
<div class="data-row"><span class="data-label">Torque máximo transitorio</span><span class="data-value">110% (5 segundos)</span></div>
<div class="data-row"><span class="data-label">Potencia máxima continua (85% torque)</span><span class="data-value">270 SHP <span class='metric'>(201 kW)</span></span></div>
<div class="danger-box"><p>NUNCA exceder los límites del motor. El TOT por encima del máximo continuo puede dañar irreparablemente los álabes de la turbina.</p></div>`},
{title:"3.3 — Sistema de Combustible",pages:[21],
content:`<p>El sistema consta de una única celda de combustible tipo vejiga resistente a impactos ubicada debajo y detrás de los asientos de los pasajeros traseros.</p>
<div class="data-row"><span class="data-label">Capacidad total tanque</span><span class="data-value">91 galones <span class='metric'>(344 L)</span></span></div>
<div class="data-row"><span class="data-label">Capacidad usable</span><span class="data-value">76 galones <span class='metric'>(288 L)</span></span></div>
<div class="data-row"><span class="data-label">Tipo de tanque</span><span class="data-value">Vejiga, resistente a impactos</span></div>
<div class="data-row"><span class="data-label">Llenado</span><span class="data-value">Desde el lado derecho</span></div>
<div class="data-row"><span class="data-label">Bombas reforzadoras</span><span class="data-value">2 bombas eléctricas en el fondo de la celda</span></div>
<div class="chapter-title" style="margin-top:12px">Combustibles Aprobados</div>
<div class="data-row"><span class="data-label">Principal</span><span class="data-value">ASTM Tipo Jet B (JP-4) — cualquier temperatura</span></div>
<div class="data-row"><span class="data-label">Alternativo (> -17.8°C)</span><span class="data-value">ASTM Tipo Jet A o A-1 (JP-5 o JP-8)</span></div>`},
{title:"3.4 — Procedimiento de Drenaje de Combustible",pages:[32],
content:`<p>Antes del primer vuelo del día se debe drenar y revisar la muestra de combustible del sumidero de la celda y del filtro del fuselaje.</p>
<div class="data-row"><span class="data-label">Paso 1</span><span class="data-value">Rompe-circuitos FUEL BOOST AFT y FWD — Fuera</span></div>
<div class="data-row"><span class="data-label">Paso 2</span><span class="data-value">Interruptor BAT — ON</span></div>
<div class="data-row"><span class="data-label">Paso 3</span><span class="data-value">Interruptor FUEL VALVE — OFF</span></div>
<div class="data-row"><span class="data-label">Paso 4</span><span class="data-value">Botón drenaje de combustible — Oprimir, tomar muestra, soltar</span></div>
<div class="chapter-title" style="margin-top:12px">Filtro de Combustible del Fuselaje</div>
<div class="data-row"><span class="data-label">Paso 1</span><span class="data-value">Interruptor FUEL VALVE — ON</span></div>
<div class="data-row"><span class="data-label">Paso 2</span><span class="data-value">Rompe-circuitos FUEL BOOST AFT y FWD — Adentro</span></div>
<div class="data-row"><span class="data-label">Paso 3</span><span class="data-value">Rompe circuito CAUTION LT — Adentro</span></div>
<div class="data-row"><span class="data-label">Paso 4</span><span class="data-value">Válvula de drenaje del filtro — Abrir, obtener muestra, cerrar</span></div>
<div class="warn-box"><p>No arrancar el motor si la muestra de combustible tiene agua, sedimentos o contaminación. Consultar a mantenimiento antes de proceder.</p></div>`}
],
quiz:[
{q:"¿Cuál es el modelo y fabricante del motor del Bell 206B JetRanger III?",opts:["Pratt & Whitney PT6B-37A","Turbomeca Arrius 2B1","Allison 250-C20J, División de Rolls Royce","General Electric CT7-2D"],ans:2},
{q:"¿A cuántos SHP está limitado el motor para la operación de despegue?",opts:["420 SHP","250 SHP","270 SHP","317 SHP"],ans:3},
{q:"¿Cuál es la capacidad usable del tanque de combustible (S/N 3567 en adelante)?",opts:["76 galones","91 galones","100 galones","83 galones"],ans:0},
{q:"¿Cuál es el TOT máximo permitido durante el despegue?",opts:["738°C","927°C","810°C","850°C"],ans:2},
{q:"¿Cuál es el porcentaje máximo de N1 (turbina productora de gas)?",opts:["100%","110%","107%","105%"],ans:3}
]},
{id:4,title:"Fuselaje, Transmisión y Sistemas",subtitle:"Secciones 4, 7, 8, 9, 10, 11 — Estructura, hidráulico, eléctrico",icon:"🔧",
chapters:[
{title:"4.1 — Transmisión y Tren Impulsor",pages:[20,32],
content:`<p>El sistema de transmisión transmite la potencia del motor al rotor principal y de cola. El eje impulsor principal conecta la salida del motor con la caja de engranajes de la transmisión principal.</p>
<div class="chapter-title">Puntos Críticos de Inspección en Preflight</div>
<div class="data-row"><span class="data-label">Pasador de arrastre</span><span class="data-value">Seguridad y evidencia de contacto con placa tape estático</span></div>
<div class="data-row"><span class="data-label">Acople delantero eje impulsor</span><span class="data-value">Condición y fugas de grasa — tiras café = calor excesivo</span></div>
<div class="data-row"><span class="data-label">Transmisión — aceite</span><span class="data-value">Nivel y fugas en el visor</span></div>
<div class="warn-box"><p>Las tiras indicadoras de calentamiento excesivo de color café en el acople delantero del eje impulsor principal indican posible falla grave. Reportar inmediatamente a mantenimiento, no realizar el vuelo.</p></div>`},
{title:"4.2 — Fuselaje y Carenajes",pages:[32,33],
content:`<p>La <strong style="color:var(--amber2)">sección intermedia</strong> es semimonocasco con plataforma del motor, compartimiento equipaje y compartimiento equipo. Cubierta por pieles de aleación de aluminio y carenaje de fibra de vidrio en el extremo inferior trasero.</p>
<p style="margin-top:8px">Hay un <strong style="color:var(--amber2)">recipiente de titanio</strong> debajo del motor que sirve para recibir el goteo y como pared de fuego.</p>
<div class="chapter-title" style="margin-top:12px">Puerta de Carga</div>
<p>Tiene un <strong style="color:var(--amber2)">microswitch</strong> hacia la luz de aviso. Está a la izquierda del fuselaje con bisagras en el extremo delantero. Se abre a todo lo ancho y alto.</p>`},
{title:"4.3 — Sistema Hidráulico",pages:[38,47],
content:`<p>El sistema hidráulico del JetRanger proporciona asistencia hidráulica a los <strong style="color:var(--amber2)">controles cíclico y colectivo</strong>, reduciendo el esfuerzo del piloto.</p>
<div class="chapter-title">Verificación Hidráulica en Corrida de Motor</div>
<div class="data-row"><span class="data-label">Acelerador</span><span class="data-value">Abierto a 70% N1</span></div>
<div class="data-row"><span class="data-label">Gobernador N2</span><span class="data-value">Verificar rango 97 a 100% RPM</span></div>
<div class="data-row"><span class="data-label">Interruptor HYD SYSTEM</span><span class="data-value">OFF — luego ON</span></div>
<div class="data-row"><span class="data-label">Lubricante aprobado</span><span class="data-value">MIL-H-5606 — 1 pinta en depósito, 1 pinta en sistema</span></div>`},
{title:"4.4 — Sistema Eléctrico y Controles de Vuelo",pages:[21,39,50],
content:`<div class="chapter-title">Sistema Eléctrico</div>
<div class="data-row"><span class="data-label">Generador-arrancador</span><span class="data-value">30V, 150 Amp regulado a 28V CC</span></div>
<div class="data-row"><span class="data-label">Batería</span><span class="data-value">Ni-Cad o Plomo-Ácido de 24V</span></div>
<div class="data-row"><span class="data-label">Carga máxima normal pre-despegue</span><span class="data-value">Por debajo del 70%</span></div>
<div class="chapter-title" style="margin-top:12px">Controles de Vuelo</div>
<div class="data-row"><span class="data-label">Cíclico</span><span class="data-value">Control de actitud y velocidad horizontal</span></div>
<div class="data-row"><span class="data-label">Colectivo</span><span class="data-value">Control de paso colectivo y potencia</span></div>
<div class="data-row"><span class="data-label">Pedales</span><span class="data-value">Control de paso del rotor de cola (guiñada)</span></div>`}
],
quiz:[
{q:"¿Para qué sirve el recipiente de titanio ubicado debajo del motor?",opts:["Almacenar aceite extra de reserva","Recibir el goteo y actuar como pared de fuego","Soporte estructural del motor","Ventilación del compartimiento motor"],ans:1},
{q:"¿Qué tipo de estructura es el cono de cola del JetRanger III?",opts:["Semimonocasco","Monocasco","Estructura de panal de abeja","Largueros y costillas"],ans:1},
{q:"¿Qué indica una tira indicadora de color café en el acople delantero del eje impulsor?",opts:["Que el aceite debe cambiarse","Evidencia de calentamiento excesivo — no volar","Lubricación insuficiente reciente","Alineación incorrecta del eje"],ans:1},
{q:"¿Cuál es la cantidad total de fluido hidráulico en el depósito y el sistema?",opts:["1 pinta en depósito, 1 pinta en sistema (MIL-H-5606)","2 pintas en depósito, 2 pintas en sistema","1 cuarto de galón","3 pintas en depósito, 1 pinta en sistema"],ans:0},
{q:"¿Cuál es la carga normal máxima del generador antes del despegue?",opts:["50%","60%","70%","80%"],ans:2}
]},
{id:5,title:"Rendimiento, Peso y Balance",subtitle:"Secciones 12 y 13 — Verificación de potencia, datos de desempeño",icon:"📊",
chapters:[
{title:"5.1 — Verificación de Potencia",pages:[52,53],
content:`<p>Los datos de rendimiento se aplican al motor <strong style="color:var(--amber2)">250-C20B/C20J</strong>. La gráfica indica el porcentaje mínimo de torque que debe haber disponible de un motor que cumple los requerimientos mínimos de Allison.</p>
<div class="chapter-title">Método preferido — ascenso a 60 MPH (52 nudos)</div>
<p>Se pueden hacer verificaciones de potencia exactas en un ascenso a <strong style="color:var(--amber2)">60 mph <span class='metric'>(97 km/h)</span> (52 nudos) IAS</strong> agregando <strong style="color:var(--amber2)">2% a la lectura de la gráfica de porcentaje de torque</strong>.</p>
<div class="warn-box"><p>Para verificación de potencia, asegurar que ENGINE DEICING/ANTI-ICING y el switch GEN estén OFF. Levantar colectivo hasta TOT estabilizado o alcanzar límite de torque. Anotar OAT, TOT, presión, altitud, torque y N1.</p></div>`},
{title:"5.2 — Régimen de Ascenso",pages:[54],
content:`<p>El <strong style="color:var(--amber2)">régimen de ascenso</strong> en la gráfica se denomina "TAPELINE RATE OF CLIMB". Mide el régimen real en un día estándar con gradiente vertical de temperatura estándar.</p>
<div class="chapter-title">Corrección por Anti-Hielo</div>
<div class="data-row"><span class="data-label">Anti-Hielo OFF — R/C base</span><span class="data-value">Leer directamente de la gráfica</span></div>
<div class="data-row"><span class="data-label">Con Anti-Hielo ON (ejemplo)</span><span class="data-value">Disminuir ΔR/C = 240 ft/min</span></div>
<div class="data-row"><span class="data-label">Operación sin puertas</span><span class="data-value">Reducir datos base en 350 ft/min</span></div>`},
{title:"5.3 — Techo de Vuelo Estacionario: IGE y OGE",pages:[60,61,63],
content:`<p>Las gráficas de Techo de Vuelo Estacionario muestran el desempeño en vuelo estacionario (peso bruto permitido) en condiciones de presión altitud y OAT. Se dividen en dos áreas:</p>
<ul>
<li><strong style="color:var(--amber2)">ÁREA A:</strong> Control demostrado con vientos de hasta 20 mph (17 nudos)</li>
<li><strong style="color:var(--amber2)">ÁREA B:</strong> Solo vientos calmados o fuera del Área Crítica de Viento Azimuth</li>
</ul>
<div class="warn-box"><p>Con Anti-Hielo ON: IGE restar 220 lb (99.8 kg) — OGE restar 295 lb (133.8 kg) del peso bruto.</p></div>`},
{title:"5.4 — Diagrama Altura-Velocidad y Peso/Balance",pages:[66,16,17],
content:`<p>El <strong style="color:var(--amber2)">Diagrama Altura-Velocidad (H-V)</strong> define las condiciones desde las cuales se puede hacer un aterrizaje seguro en superficie plana, nivelada y firme después de una falla del motor. Es válido solo cuando el peso bruto no excede los límites de Altitud vs Peso Bruto.</p>
<div class="danger-box"><p>EVITAR OPERAR EN EL ÁREA SOMBREADA. Las condiciones dentro del área sombreada no permiten garantizar un aterrizaje seguro después de una falla del motor.</p></div>
<div class="chapter-title" style="margin-top:12px">Peso y Balance — Límites</div>
<div class="data-row"><span class="data-label">Peso bruto máximo (interno)</span><span class="data-value">3,200 libras (1,451.5 kg)</span></div>
<div class="data-row"><span class="data-label">Peso bruto máximo (externo)</span><span class="data-value">3,350 libras (1,519.6 kg)</span></div>
<div class="data-row"><span class="data-label">CG lateral máximo izquierdo</span><span class="data-value">3.0 pulgadas (76.2 mm)</span></div>
<div class="data-row"><span class="data-label">CG lateral máximo derecho</span><span class="data-value">4.0 pulgadas (101.6 mm)</span></div>`}
],
quiz:[
{q:"¿Cuál es el peso bruto máximo del Bell 206B JetRanger III (operación interna)?",opts:["2,850 libras","3,000 libras","3,200 libras (1,451.5 kg)","3,500 libras"],ans:2},
{q:"¿Cuál es el límite de torque para la operación de despegue?",opts:["85% tiempo ilimitado","100% máximo 5 minutos","95% máximo 10 minutos","110% máximo 2 minutos"],ans:1},
{q:"Para una verificación de potencia más exacta en ascenso, ¿qué velocidad y corrección se aplica?",opts:["80 mph sin corrección","100 mph menos 5% de torque","60 mph (52 nudos) agregando 2% al torque leído","70 mph sin corrección"],ans:2},
{q:"¿Cuál es el TOT máximo para operación continua?",opts:["810°C","850°C","700°C","738°C"],ans:3},
{q:"Para pesos superiores a 3,000 libras, ¿cuál es la altitud máxima de densidad?",opts:["20,000 pies","15,000 pies","13,500 pies","10,000 pies"],ans:2}
]},
{id:6,title:"Procedimientos Normales y de Emergencia",subtitle:"Secciones 14 y 15 — Arranque, vuelo, autorrotación, fallas",icon:"🚁",
chapters:[
{title:"6.1 — Inspección Preflight (Puntos Clave)",pages:[31,32,33,34,35],
content:`<p>La inspección preflight es obligatoria antes de cada vuelo. Incluye verificaciones sistemáticas de todos los sistemas.</p>
<div class="chapter-title">Área de Transmisión</div>
<div class="data-row"><span class="data-label">Transmisión</span><span class="data-value">Nivel de aceite y fugas</span></div>
<div class="data-row"><span class="data-label">Montaje aislante</span><span class="data-value">Condición</span></div>
<div class="data-row"><span class="data-label">Pasador de arrastre</span><span class="data-value">Seguridad y evidencia de contacto</span></div>
<div class="data-row"><span class="data-label">Acople delantero eje impulsor</span><span class="data-value">Condición, fugas de grasa, tiras indicadoras</span></div>
<div class="warn-box"><p>Instalar los amarres del rotor principal y de cola si hay: pronóstico de vientos fuertes, otros helicópteros operando en el área, o si se va a dejar el helicóptero desatendido.</p></div>`},
{title:"6.2 — Arranque del Motor y Pre-Despegue",pages:[36,37,38,39],
content:`<div class="chapter-title">Secuencia de Arranque del Motor</div>
<div class="data-row"><span class="data-label">Batería (BAT Switch)</span><span class="data-value">ON (mínimo 24 Voltios)</span></div>
<div class="data-row"><span class="data-label">Arrancador (Starter)</span><span class="data-value">Oprimir (iniciar cronómetro)</span></div>
<div class="data-row"><span class="data-label">A 12% a 15% N1</span><span class="data-value">Abrir acelerador a Ralentí (Idle stop)</span></div>
<div class="data-row"><span class="data-label">Temperatura TOT</span><span class="data-value">Monitorear (límite de arranque de 927°C)</span></div>
<div class="data-row"><span class="data-label">Arrancador</span><span class="data-value">Soltar al pasar el 58% N1</span></div>`},
{title:"6.3 — Falla del Motor y Autorrotación",pages:[45],
content:`<div class="danger-box"><p>REDUCIR LA VELOCIDAD DE AVANCE A LA VELOCIDAD DESEADA. VELOCIDAD MÍNIMA DESCENSO: 60 MPH (52 NUDOS) IAS. VELOCIDAD MÁXIMA DISTANCIA DE PLANEO: 80 MPH (69 NUDOS) IAS.</p></div>
<div class="chapter-title">Procedimiento de Falla del Motor y Autorrotación</div>
<div class="data-row"><span class="data-label">Paso del colectivo</span><span class="data-value">Ajustar para mantener RPM rotor 90% a 107%</span></div>
<div class="data-row"><span class="data-label">A baja altura</span><span class="data-value">Cerrar acelerador y ejecutar el flare para reducir velocidad</span></div>
<div class="data-row"><span class="data-label">Toque nivelado</span><span class="data-value">Antes de pasar el 70% de RPM del rotor</span></div>
<div class="data-row"><span class="data-label">Velocidad máx. autorrotación estable</span><span class="data-value">115 MPH <span class='metric'>(185 km/h)</span> (100 nudos)</span></div>`},
{title:"6.4 — Fallas Especiales y Post-Aterrizaje",pages:[46,47],
content:`<div class="chapter-title">Arranque del Motor en el Aire</div>
<div class="danger-box"><p>Cuando se cree que la causa de la falla del motor es mecánica, NO intente volver a arrancar.</p></div>
<div class="data-row"><span class="data-label">Solo intentar si</span><span class="data-value">La falla NO parece ser mecánica</span></div>
<div class="data-row"><span class="data-label">Precaución</span><span class="data-value">NO intentar arrancar arriba de 12,000 pies presión altitud</span></div>
<div class="chapter-title" style="margin-top:12px">Falla del Control de Combustible/Gobernador</div>
<div class="data-row"><span class="data-label">Si motor se acelera</span><span class="data-value">Controlar potencia con el acelerador</span></div>
<div class="data-row"><span class="data-label">Si motor se desacelera</span><span class="data-value">Mantener RPM con el paso del colectivo</span></div>
<div class="chapter-title" style="margin-top:12px">Falla del Rotor de Cola — Pérdida Total de Empuje</div>
<div class="data-row"><span class="data-label">Acción inmediata</span><span class="data-value">Reducir acelerador a marcha lenta, entrar en autorrotación</span></div>`}
],
quiz:[
{q:"Durante la autorrotación, ¿cuál es el rango de RPM de rotor que se debe mantener?",opts:["80% a 100%","100% a 110%","90% a 107%","85% a 95%"],ans:2},
{q:"¿Cuál es la velocidad aérea mínima para el descenso en autorrotación?",opts:["40 MPH (35 nudos) IAS","60 MPH (52 nudos) IAS","80 MPH (69 nudos) IAS","100 MPH (87 nudos) IAS"],ans:1},
{q:"Según el procedimiento pre-despegue, ¿en qué posición debe estar el acelerador?",opts:["Media apertura","70% apertura","Todo abierto","Lo necesario para mantener RPM 100%"],ans:2},
{q:"¿Cuándo se debe intentar un arranque del motor en el aire?",opts:["Siempre que el rotor esté girando","Solo si la falla NO parece ser mecánica","Siempre que la altitud lo permita","Solo debajo de 2,000 pies AGL"],ans:1},
{q:"¿Qué debe hacer el piloto después de un aterrizaje de emergencia?",opts:["Salir inmediatamente del helicóptero","Cortar el motor y salir de inmediato","Permanecer en los controles hasta que el rotor se haya detenido totalmente","Abrir las puertas y esperar ayuda"],ans:2}
]}
];

const FINAL_EXAM = [
{q:"¿Cuál es el combustible usable del tanque tipo vejiga del JetRanger III (S/N 3567+)?",opts:["91 gal <span class='metric'>(344 L)</span>","83 galones","76 gal <span class='metric'>(288 L)</span>","70 galones"],ans:2},
{q:"¿Cuál es la potencia máxima continua del motor Allison 250-C20J (limitada para operación)?",opts:["317 SHP <span class='metric'>(236 kW)</span>","420 SHP <span class='metric'>(313 kW)</span>","270 SHP <span class='metric'>(201 kW)</span>","350 SHP"],ans:2},
{q:"La sección delantera del fuselaje tiene una capacidad aproximada de:",opts:["16 ft³ <span class='metric'>(0,45 m³)</span>","25 pies cúbicos","40 ft³ <span class='metric'>(1,13 m³)</span>","50 pies cúbicos"],ans:2},
{q:"¿Cuándo se deben instalar los amarres del rotor principal y de cola?",opts:["Solo si hay tormenta eléctrica","Con pronóstico de vientos fuertes, otros helicópteros en el área, o helicóptero desatendido","Nunca, los rotores no necesitan amarre","Solo en mantenimiento programado"],ans:1},
{q:"La velocidad aérea máxima para autorrotación estable es:",opts:["80 MPH <span class='metric'>(129 km/h)</span> (69 nudos) IAS","100 MPH <span class='metric'>(161 km/h)</span> (87 nudos) IAS","115 MPH <span class='metric'>(185 km/h)</span> (100 nudos) IAS","130 MPH (113 nudos) IAS"],ans:2},
{q:"Para vuelo con nieve volando o cayendo se debe tener instalado:",opts:["Solo calefacción para el motor","Sistema de separación de partículas y deflector","Parabrisas especial blindado","Protección de hielo para los rotores"],ans:1},
{q:"El estabilizador horizontal del JetRanger está construido de:",opts:["Fibra de carbono","Aluminio","Acero inoxidable","Material compuesto de fibra de vidrio"],ans:1},
{q:"Durante las operaciones nocturnas, ¿cómo se debe mantener la orientación?",opts:["Exclusivamente por instrumentos","Por referencia visual con objetos en tierra, luces terrestres o iluminación celeste","Usando GPS y piloto automático","No se permite vuelo nocturno en este helicóptero"],ans:1},
{q:"¿Cuál es el diámetro del rotor principal del Bell 206B JetRanger III?",opts:["30 pies (9,14 m)","33 pies 4\" (10,16 m)","36 pies (10,97 m)","28 pies (8,53 m)"],ans:1},
{q:"Para VNE con peso superior a 3,000 lb, por cada 1,000 ft de densidad altitud sobre 3,000 ft se disminuye:",opts:["4.0 MPH <span class='metric'>(6.4 km/h)</span> (3.5 KIAS)","6.0 MPH IAS","8.0 MPH <span class='metric'>(12.9 km/h)</span> (7.0 nudos)","10 MPH IAS"],ans:2},
{q:"¿Cuál es el combustible PRINCIPAL aprobado para el JetRanger III, válido para cualquier temperatura ambiente?",opts:["AVGAS 100LL, solo para altitudes superiores a 5,000 pies","ASTM Tipo Jet A (JP-5), solo por encima de 0°F (-17,8°C)","ASTM Tipo Jet B (JP-4) — aprobado para cualquier temperatura","Mezcla 80/87 AVGAS y Jet A-1, solo en emergencia"],ans:2},
{q:"En la inspección preflight, ¿qué se verifica de la tapa de la toma de combustible?",opts:["Solo que no gotee","Revisar visualmente el nivel y asegurar la tapa","Abrirla para airear el tanque","No requiere verificación diaria"],ans:1},
{q:"La turbina N2 de potencia debe estar al 100% de RPM antes del despegue:",opts:["Durante el crucero a velocidad de crucero","Con el colectivo abajo, como parte del pre-despegue","Solo para despegues de alta altitud","Al inicio del arranque del motor"],ans:1},
{q:"El pasador de arrastre del eje impulsor principal debe inspeccionarse buscando:",opts:["Solo oxidación superficial","Fugas de aceite por el sello","Seguridad y evidencia de contacto con la placa de tape estático","Solo desgaste por fricción"],ans:2},
{q:"¿Cuál es la velocidad máxima de vuelo permitida con las puertas DELANTERAS quitadas?",opts:["100 mph — 87 nudos","87 nudos — 100 mph","69 nudos — 80 mph","130 nudos — 150 mph"],ans:2},
{q:"La cubierta de la caja de engranajes del rotor de cola está hecha de:",opts:["Fibra de vidrio","Acero inoxidable","Aleación de aluminio","Material compuesto"],ans:2},
{q:"Para una verificación de potencia inaceptable en tierra, ¿cuándo se recomienda realizarla en vuelo?",opts:["En cualquier condición de temperatura","Cuando la altura, temperatura y peso permiten un vuelo estacionario seguro","Solo en días fríos con temperatura negativa","A máxima altitud posible"],ans:1},
{q:"El sistema hidráulico del JetRanger asiste principalmente a:",opts:["Los frenos del tren de aterrizaje","Los controles cíclico y colectivo (y pedales)","Las puertas del compartimiento de carga","El sistema de combustible"],ans:1},
{q:"Para drenar muestra del sumidero de combustible, el interruptor FUEL VALVE debe estar en posición:",opts:["ON con el BAT OFF","OFF, mientras BAT está ON y se sacan rompe-circuitos FUEL BOOST","En cualquier posición","Solo OFF durante el vuelo"],ans:1},
{q:"¿Cuántas bombas reforzadoras de combustible tiene el sistema del JetRanger III y dónde están ubicadas?",opts:["1 bomba eléctrica en la línea principal de combustible","2 bombas eléctricas en el fondo de la celda vejiga","3 bombas: 2 principales y 1 de reserva en paralelo","1 bomba mecánica accionada directamente por el motor N1"],ans:1},
{q:"Una advertencia WARNING en el manual del Bell 206B indica:",opts:["Una nota de información general importante","Un procedimiento que puede resultar en daño al equipo","Un procedimiento que si no se sigue correctamente puede resultar en lesiones o muerte","Una limitación operacional secundaria"],ans:2},
{q:"¿Qué muestra el indicador tacómetro doble del rotor en el panel de instrumentos?",opts:["Solo las RPM del rotor principal en porcentaje","La velocidad N2 (turbina de potencia) y las RPM del rotor principal","Las velocidades N1 y N2 del motor simultáneamente","La temperatura de aceite del rotor y las RPM del motor"],ans:1},
{q:"La puerta de carga del compartimiento de equipaje tiene un microswitch que activa:",opts:["El cierre automático","La luz de aviso en cabina","La alarma de peso excesivo","El interruptor de fuego"],ans:1},
{q:"¿Cuál es el límite máximo del CG lateral hacia el lado DERECHO (+) de la línea central del JetRanger III?",opts:["2,5 pulgadas (63,5 mm) de la línea central","3,0 pulgadas (76,2 mm) de la línea central","5,0 pulgadas (127 mm) de la línea central","4,0 pulgadas (101,6 mm) de la línea central"],ans:3},
{q:"La velocidad de máxima distancia de planeo (máximo planeo) en autorrotación es:",opts:["60 MPH <span class='metric'>(97 km/h)</span> (52 nudos) IAS","80 MPH <span class='metric'>(129 km/h)</span> (69 nudos) IAS","100 MPH <span class='metric'>(161 km/h)</span> (87 nudos) IAS","115 MPH <span class='metric'>(185 km/h)</span> (100 nudos) IAS"],ans:1},
{q:"Las palas del rotor principal del JetRanger III son:",opts:["De fibra de carbono y no intercambiables","De metal, individualmente intercambiables","De aluminio en pares intercambiables únicamente","De material compuesto permanentes"],ans:1},
{q:"Se prohíbe el vuelo extendido de reversa o lateral sin puertas porque:",opts:["Aumenta excesivamente el consumo de combustible","Existen restricciones de CG y límites de velocidad aerodinámica","Se pueden perder objetos de la cabina","El sistema hidráulico no opera correctamente"],ans:1},
{q:"Un CAUTION (precaución) en el manual indica:",opts:["Lesiones personales o muerte si no se cumple","Un procedimiento que si no se observa puede resultar en daño o destrucción del equipo","Una nota informativa de operación","Un requisito reglamentario"],ans:1},
{q:"¿Cuál es el fluido hidráulico aprobado para el JetRanger III y su cantidad total en el sistema?",opts:["MIL-H-5606 — 2 pintas total (1 en depósito, 1 en sistema)","ATF Dexron III — 1 cuarto de galón total","MIL-H-83282 — 3 pintas total en circuito cerrado","Aceite mineral ISO 46 — 1 litro total"],ans:0},
{q:"¿Qué se recomienda hacer antes de que el rotor toque el suelo en autorrotación?",opts:["Aplicar colectivo al máximo","Un toque nivelado antes de pasar el 70% de RPM del rotor, reduciendo el colectivo suavemente","Aplicar freno de rotor inmediatamente","Cerrar el acelerador completamente al tocar"],ans:1}
];

// ========= CHECKLISTS DATABASE =========
const CHECKLISTS = {
  normales: [
    {
      id: "norm_before_ext",
      title: "1. Antes de la Inspección Exterior",
      items: [
        "Publicaciones de la aeronave — Verificar (Manual de Vuelo, Certificados)",
        "Peso y Balanceo — Calcular y verificar dentro de límites",
        "Batería — Conectada (BAT Switch ON / verificar voltaje)",
        "Llaves de encendido — Fuera",
        "Controles de vuelo — Fricciones ajustadas, controles libres y correctos"
      ]
    },
    {
      id: "norm_ext",
      title: "2. Inspección Exterior (Preflight)",
      items: [
        "Línea estática derecha — Condición (limpia, sin obstrucciones)",
        "Nivel de aceite hidráulico — Verificar visor",
        "Acople delantero eje impulsor — Tiras de temperatura (Temp-Plates) sin puntos negros",
        "Nivel de aceite de transmisión — Verificar visor",
        "Pasador de arrastre y tope estático — Verificar seguridad",
        "Tapa de combustible — Asegurada y nivel verificado visualmente",
        "Sumidero de combustible — Drenar muestra y verificar contaminantes (agua, sedimentos)",
        "Filtro de combustible del fuselaje — Drenar muestra y verificar switch de alarma",
        "Fuselaje y cono de cola — Sin rajaduras, remaches firmes",
        "Caja de engranajes rotor de cola — Nivel de aceite y pérdidas",
        "Rotor de cola — Libre movimiento y amarre quitado",
        "Rotor principal — Quitar amarres, verificar palas, horquillas y barras de torsión",
        "Swashplate (Plato oscilante) — Fuelle, varillas y tijeras en condición",
        "Línea estática izquierda — Condición (limpia)",
        "Compartimiento equipaje — Cierre correcto y carga asegurada (máx. 250 lb)"
      ]
    },
    {
      id: "norm_before_start",
      title: "3. Antes de Arrancar el Motor",
      items: [
        "Freno de rotor — Desactivado",
        "Colectivo — Abajo, friccionado",
        "Cíclico y Pedales — Centrados y libres",
        "Acelerador — Cerrado totalmente (Full closed)",
        "Interruptores eléctricos — Todo OFF",
        "Batería (BAT switch) — ON (mínimo 24 Voltios)",
        "Alarma sonora Nr e indicador ROTOR LOW RPM — Verificar encendido",
        "Cantidad de combustible — Verificar en indicador",
        "Válvula de combustible (FUEL VALVE) — ON (protección de seguridad colocada)"
      ]
    },
    {
      id: "norm_start",
      title: "4. Arranque del Motor",
      items: [
        "Área del rotor — ¡LIBRE!",
        "Arrancador (Starter) — Oprimir (iniciar cronómetro)",
        "Presión de aceite de motor — Indicación antes de 15% N1",
        "A 12% a 15% N1 — Abrir acelerador a ralentí (Idle stop)",
        "Temperatura TOT — Monitorear (límite de arranque de 927°C transitorio)",
        "Arrancador — Soltar al pasar el 58% N1",
        "Presión de aceite de motor y transmisión — Rango normal",
        "Generador (GEN switch) — ON (carga menor a 70%)"
      ]
    },
    {
      id: "norm_runup",
      title: "5. Corrida de Motor y Pre-Despegue",
      items: [
        "Instrumentos del motor — En rango normal (zona verde)",
        "Acelerador — Abrir suavemente a 100% N2 (colectivo totalmente abajo)",
        "RPM de rotor (Nr) y N2 — Agujas cruzadas al 100%",
        "Sistema hidráulico — Probar (HYD Switch OFF, verificar dureza y centrado, luego ON)",
        "Fricciones de controles — Ajustar para el despegue",
        "Radios y navegación — Probar y configurar"
      ]
    },
    {
      id: "norm_shutdown",
      title: "6. Apagado del Motor y Amarres",
      items: [
        "Colectivo — Abajo, friccionado",
        "Acelerador — Reducir a marcha lenta (Idle stop)",
        "TOT — Dejar enfriar por 2 minutos (por debajo de 600°C)",
        "Acelerador — Cerrar completamente contra el tope (Full closed)",
        "Presión de combustible — OFF (después de que N1 baje del 10%)",
        "Batería (BAT switch) — OFF (una vez detenido el rotor)",
        "Amarres y protectores — Colocar en palas, toma de admisión y pitot"
      ]
    }
  ],
  emergencias: [
    {
      id: "emerg_start_fire",
      title: "1. Fuego de Motor Durante el Arranque",
      items: [
        "Motor de arranque (Starter) — Continuar operando (para aspirar llamas al interior)",
        "Acelerador — Cerrar completamente (Full closed)",
        "Válvula de combustible (FUEL VALVE) — OFF",
        "Fusible de ignición (IGN ENG breaker) — Fuera (Pull Out)",
        "Batería (BAT switch) — OFF (una vez ventilado el motor)",
        "Evacuar la aeronave de inmediato"
      ],
      warning: "WARNING: No intente volar tras un fuego en arranque. Inspeccione y repare el motor."
    },
    {
      id: "emerg_flight_fire",
      title: "2. Fuego de Motor en Vuelo",
      items: [
        "Acelerador — Cerrar completamente (Full closed)",
        "Entrar inmediatamente en Autorrotación",
        "Válvula de combustible (FUEL VALVE) — OFF",
        "Batería (BAT switch) — OFF",
        "Realizar descenso y aterrizaje en autorrotación",
        "Evacuar tras la detención total de las palas"
      ],
      warning: "WARNING: Priorice mantener el control de actitud y las RPM de rotor por sobre cualquier otra tarea."
    },
    {
      id: "emerg_engine_fail",
      title: "3. Falla de Motor en Vuelo / Autorrotación",
      items: [
        "Paso colectivo — Ajustar de inmediato para mantener RPM de rotor (90% a 107%)",
        "Velocidad aérea — Reducir a 60 MPH (52 KTS) para menor tasa de descenso, o 80 MPH (69 KTS) para máximo planeo",
        "A baja altura (aprox. 40-50 ft) — Ejecutar Flare (romper velocidad horizontal)",
        "Cerca del suelo — Aplicar paso colectivo suavemente para amortiguar el impacto",
        "Toque a tierra — Nivelado antes de bajar del 70% de Nr",
        "Colectivo al tocar — Reducir suavemente una vez asentado el helicóptero"
      ],
      warning: "WARNING: Evite carreras largas en tierra con colectivo arriba para prevenir vuelcos dinámicos."
    },
    {
      id: "emerg_driveshaft",
      title: "4. Falla del Eje de Transmisión (Driveshaft)",
      items: [
        "Colectivo — Bajar inmediatamente (entrar en autorrotación)",
        "Cíclico — Mantener actitud y control de rumbo",
        "Ajustar velocidad — 52 a 69 KIAS (60 a 80 MPH)",
        "Acelerador — Dejar abierto (mantiene alimentación al rotor de cola para control direccional)",
        "Aterrizaje — Ejecutar aterrizaje autorrotativo completo"
      ],
      warning: "WARNING: La falla de transmisión produce guiñada izquierda y rápida caída de Nr. Reaccione de inmediato."
    },
    {
      id: "emerg_tail_rotor",
      title: "5. Falla de Rotor de Cola (Pérdida Total de Empuje)",
      items: [
        "Acelerador — Reducir a marcha lenta (Flight Idle) inmediatamente",
        "Entrar en autorrotación",
        "Mantener velocidad de planeo — Mínimo 58 MPH (50 KTS) durante el descenso",
        "Aterrizaje — Realizar con acelerador totalmente cerrado al tocar tierra"
      ],
      warning: "CAUTION: El flujo de aire alrededor del estabilizador vertical puede dar control con velocidad, pero al tocar tierra el motor debe estar en ralentí/cortado para evitar trompos."
    },
    {
      id: "emerg_hydraulic",
      title: "6. Falla del Sistema Hidráulico",
      items: [
        "Velocidad de vuelo — Reducir a 70 - 80 MPH (61 - 69 KTS)",
        "Fusible HYD BOOST — Sacar (si no restaura presión, volver a meter)",
        "Interruptor hidráulico (HYD SYSTEM) — ON; si no hay presión, pasar a OFF",
        "Aterrizaje — Aterrizaje corrido (Run-on landing) recomendado a 10 - 15 KTS"
      ],
      warning: "NOTE: El esfuerzo físico requerido para mover los mandos aumentará drásticamente. Evite maniobras bruscas."
    }
  ]
};

// ========= STATE =========
const defaultState = {
  view: 'intro',
  user: null,
  currentModule: 0,
  currentChapter: 0,
  completedModules: [],
  moduleScores: {},
  examAnswers: [],
  examReviewed: false,
  examQ: 0,
  finalAnswers: [],
  finalReviewed: false,
  finalQ: 0,
  adminOpen: false,
  checkedItems: {},
  activeChecklistTab: 'normales',
  activeChecklistId: 'norm_before_ext',
  weight_balance: {
    empty_weight: 727.6, // kg
    empty_arm: 111.0,
    empty_lat_arm: 0.0,
    oil_qty: 1.5, // gal
    pilot: 77.1, // kg
    copilot: 0,
    rear_left: 0,
    rear_center: 0,
    rear_right: 0,
    fuel: 189.3, // L
    baggage: 0,
    cargo_hook: 0
  },
  performance: {
    alt_press: 0, // ft
    oat: 15, // C
    anti_ice: false,
    doors: 'installed',
    flight_height: 150, // ft
    flight_speed: 60 // MPH
  }
};

let state = { ...defaultState };

function loadState(){
  try{
    const s = localStorage.getItem('bell206_state');
    if(s){
      const parsed = JSON.parse(s);
      state = { ...defaultState, ...parsed };
      state.view = 'intro'; // Force intro view on load
      state.weight_balance = { ...defaultState.weight_balance, ...parsed.weight_balance };
      state.performance = { ...defaultState.performance, ...parsed.performance };
      state.checkedItems = { ...defaultState.checkedItems, ...parsed.checkedItems };
    }
  }catch(e){}
}
function saveState(){
  try{
    const {adminOpen,...toSave}=state;
    localStorage.setItem('bell206_state',JSON.stringify(toSave));
  }catch(e){}
}
loadState();

window.setView = (v) => {
  state.view = v;
  const appContainer = document.querySelector('.app');
  if (appContainer) {
    if (v === 'module') {
      appContainer.classList.add('split-active');
    } else {
      appContainer.classList.remove('split-active');
    }
  }
  render();
};

window.goIntro = () => setView('intro');
window.goRegister = () => setView('register');
window.startCourse = () => setView('map');
window.goMap = () => setView('map');

window.guestMode = () => {
  state.user = null;
  saveState();
  setView('map');
};

window.logout = () => {
  state.user = null;
  state.completedModules = [];
  state.moduleScores = {};
  state.checkedItems = {};
  saveState();
  setView('intro');
};

window.submitRegister = () => {
  const nombre = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const licencia = document.getElementById('reg-licencia').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const errDiv = document.getElementById('reg-error');
  
  if (!nombre || !apellido || !licencia || !email) {
    errDiv.style.display = 'block';
    errDiv.textContent = 'Por favor, complete todos los campos obligatorios.';
    return;
  }
  
  if (!email.includes('@') || !email.includes('.')) {
    errDiv.style.display = 'block';
    errDiv.textContent = 'Por favor, ingrese un correo electrónico válido.';
    return;
  }
  
  errDiv.style.display = 'none';
  state.user = { nombre, apellido, licencia, email };
  
  if (typeof sendRegistrationEmails === 'function') {
    sendRegistrationEmails();
  }

  if (db) {
    db.collection('alumnos').add({
      nombre,
      apellido,
      licencia,
      email,
      fecha_registro: new Date(),
      estado: 'En curso',
      puntaje: ''
    }).then(docRef => {
      state.user.docId = docRef.id;
      saveState();
    }).catch(err => console.error("Firebase Error: ", err));
  }
  
  saveState();
  setView('map');
};

window.goModule = (i) => {
  state.currentModule = i;
  state.currentChapter = 0;
  state.view = 'module';
  render();
};

window.setChapter = (i) => {
  state.currentChapter = i;
  render();
};

window.prevChapter = () => {
  if (state.currentChapter > 0) {
    state.currentChapter--;
    render();
  }
};

window.nextChapter = () => {
  const m = MODULES[state.currentModule];
  if (state.currentChapter < m.chapters.length - 1) {
    state.currentChapter++;
    render();
  }
};

window.goExam = () => {
  state.examAnswers = [];
  state.examQ = 0;
  state.examReviewed = false;
  state.view = 'moduleExam';
  render();
};

window.backToModule = () => {
  state.view = 'module';
  render();
};

window.setExamQ = (i) => {
  state.examQ = i;
  render();
};

window.prevExamQ = () => {
  if (state.examQ > 0) {
    state.examQ--;
    render();
  }
};

window.nextExamQ = () => {
  const m = MODULES[state.currentModule];
  if (state.examQ < m.quiz.length - 1) {
    state.examQ++;
    render();
  }
};

window.selectAnswer = (oi) => {
  if (!state.examReviewed) {
    state.examAnswers[state.examQ] = oi;
    render();
  }
};

window.submitExam = () => {
  state.examReviewed = true;
  render();
};

window.showExamResult = () => {
  const m = MODULES[state.currentModule];
  const correct = m.quiz.filter((q, i) => state.examAnswers[i] === q.ans).length;
  if (correct >= 4 && !state.completedModules.includes(state.currentModule)) {
    state.completedModules.push(state.currentModule);
    state.moduleScores[state.currentModule] = correct;
  }
  state.view = 'examResult';
  render();
};

window.retryExam = () => {
  state.examAnswers = [];
  state.examQ = 0;
  state.examReviewed = false;
  state.view = 'moduleExam';
  render();
};

window.nextModule = () => {
  const next = state.currentModule + 1;
  if (next < MODULES.length) {
    state.currentModule = next;
    state.currentChapter = 0;
    state.examAnswers = [];
    state.examQ = 0;
    state.examReviewed = false;
    state.view = 'module';
    render();
  } else {
    state.view = 'map';
    render();
  }
};

window.startFinal = () => {
  state.finalAnswers = [];
  state.finalQ = 0;
  state.finalReviewed = false;
  state.view = 'finalExam';
  render();
};

window.setFinalQ = (i) => {
  state.finalQ = i;
  render();
};

window.prevFinalQ = () => {
  if (state.finalQ > 0) {
    state.finalQ--;
    render();
  }
};

window.nextFinalQ = () => {
  if (state.finalQ < 29) {
    state.finalQ++;
    render();
  }
};

window.selectFinalAnswer = (oi) => {
  if (!state.finalReviewed) {
    state.finalAnswers[state.finalQ] = oi;
    render();
  }
};

window.submitFinal = () => {
  state.finalReviewed = true;
  render();
};

window.showFinalResult = () => {
  state.view = 'finalResult';
  render();
};

window.retryFinal = () => {
  state.finalAnswers = [];
  state.finalQ = 0;
  state.finalReviewed = false;
  state.view = 'finalExam';
  render();
};

window.openAdmin = () => {
  state.adminOpen = true;
  render();
};

window.closeAdmin = () => {
  state.adminOpen = false;
  const el = document.getElementById('admin-modal');
  if (el) el.remove();
};
window.adjustZoom = (amount) => {
  if (state.viewerZoom === undefined) state.viewerZoom = 1.0;
  state.viewerZoom = Math.max(0.5, Math.min(3.0, state.viewerZoom + amount));
  const img = document.getElementById('manual-page-img');
  if (img) {
    img.style.transform = `scale(${state.viewerZoom})`;
  }
};

window.resetZoom = () => {
  state.viewerZoom = 1.0;
  const img = document.getElementById('manual-page-img');
  if (img) {
    img.style.transform = `scale(1)`;
  }
};

window.navigateManualPage = (direction) => {
  const current = state.activeViewerPage || 1;
  const target = Math.max(1, Math.min(448, current + direction));
  state.activeViewerPage = target;
  render();
};

window.onManualPageInputChange = (val) => {
  const target = parseInt(val, 10);
  if (!isNaN(target) && target >= 1 && target <= 448) {
    state.activeViewerPage = target;
    render();
  } else {
    const input = document.getElementById('manual-page-input');
    if (input) input.value = state.activeViewerPage;
  }
};

window.openFullscreenViewer = (pageNum) => {
  let modal = document.getElementById('fullscreen-viewer-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'fullscreen-viewer-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(10,14,26,0.95)';
    modal.style.zIndex = '99999';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.padding = '20px';
    
    modal.innerHTML = `
      <div style="position:absolute;top:20px;right:20px;display:flex;gap:10px;z-index:100000">
        <button class="btn btn-sm btn-primary" onclick="window.adjustFullscreenZoom(0.2)">🔍+ Zoom</button>
        <button class="btn btn-sm btn-primary" onclick="window.adjustFullscreenZoom(-0.2)">🔍- Zoom</button>
        <button class="btn btn-sm btn-danger" onclick="window.closeFullscreenViewer()">✖ Cerrar</button>
      </div>
      <div id="fs-img-container" style="width:100%;height:100%;overflow:auto;display:flex;justify-content:center;align-items:flex-start;background:#0d1117;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
        <img id="fs-manual-img" src="" style="max-height:95%;width:auto;transition:transform 0.2s;transform-origin:top center" alt="Manual de vuelo en pantalla completa">
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  const fsImg = document.getElementById('fs-manual-img');
  if (fsImg) {
    fsImg.src = `img/fm_pages/page_${pageNum}.jpg`;
    state.fsZoom = 1.0;
    fsImg.style.transform = `scale(1)`;
  }
  modal.style.display = 'flex';
};

window.adjustFullscreenZoom = (amount) => {
  if (state.fsZoom === undefined) state.fsZoom = 1.0;
  state.fsZoom = Math.max(0.5, Math.min(4.0, state.fsZoom + amount));
  const img = document.getElementById('fs-manual-img');
  if (img) {
    img.style.transform = `scale(${state.fsZoom})`;
  }
};

window.closeFullscreenViewer = () => {
  const modal = document.getElementById('fullscreen-viewer-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};



function renderIntro(){
  const greeting = state.user ? `<div class="badge badge-green" style="margin-bottom:10px;font-size:12px">✓ Bienvenido, ${state.user.nombre} ${state.user.apellido}</div>` : '';
  return `
  <div class="view-enter" style="text-align:center;padding:30px 0 20px;position:relative">
    <div class="hero-heli" style="font-size:0;line-height:0;filter:none;margin-bottom:12px">
      <img src="${IMGS.bell206_in_flight}" style="width:100%;max-width:520px;height:auto;border-radius:var(--radius2);border:1.5px solid var(--border2);box-shadow:var(--shadow-card);display:inline-block" alt="Bell 206B JetRanger III en vuelo">
    </div>
    <div class="tag" style="margin-top:14px;margin-bottom:6px">República Argentina · Regulación ANAC / RAAC</div>
    <h1 style="font-size:28px;margin:4px 0 2px">Curso de Adaptación</h1>
    <div style="font-size:17px;font-weight:600;color:var(--amber2);margin-bottom:10px;letter-spacing:-.01em">Bell Model 206B JetRanger III — B3</div>
    ${greeting}
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <span class="badge badge-amber">6 Módulos · 24 Capítulos</span>
      <span class="badge badge-blue">Examen Final 30 Preguntas</span>
      <span class="badge badge-green">Certificado PDF</span>
    </div>
  </div>
  <div class="card" style="margin:14px 0">
    <h3 style="margin-bottom:10px">🎯 Objetivo del Curso</h3>
    <p>Capacitar al piloto para la operación segura y eficiente del helicóptero <strong style="color:var(--amber2)">Bell Model 206B JetRanger III</strong> conforme a los estándares de la <strong style="color:var(--amber2)">ANAC</strong> y los Reglamentos Aeronáuticos de la República Argentina (RAAC), mediante el dominio integral de los sistemas de la aeronave, sus limitaciones de operación, procedimientos normales y de emergencia, y datos de rendimiento.</p>
    <p style="margin-top:8px">Al completar el curso satisfactoriamente, el piloto estará en condiciones de realizar el vuelo de adaptación con un instructor habilitado para obtener la habilitación en tipo.</p>
  </div>
  <div class="card" style="margin:14px 0">
    <h3 style="margin-bottom:10px">📋 Requisitos para Realizar el Curso</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div style="background:var(--bg3);border-radius:var(--radius);padding:12px;border:1px solid var(--border)">
        <div class="tag">Licencia</div>
        <p style="font-size:13px;margin-top:4px">Licencia de Piloto de Helicóptero vigente (ANAC) — Habilitación categoría helicóptero</p>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius);padding:12px;border:1px solid var(--border)">
        <div class="tag">Experiencia</div>
        <p style="font-size:13px;margin-top:4px">Mínimo 50 horas de vuelo en helicóptero certificadas. Experiencia previa en turbina recomendada.</p>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius);padding:12px;border:1px solid var(--border)">
        <div class="tag">Certificado Médico</div>
        <p style="font-size:13px;margin-top:4px">Certificado de aptitud psicofísica vigente, clase según corresponda a la licencia habilitante.</p>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius);padding:12px;border:1px solid var(--border)">
        <div class="tag">Documentación</div>
        <p style="font-size:13px;margin-top:4px">Lectura previa del Manual de Vuelo vigente BHT-206B-FM-1 y suplementos aplicables.</p>
      </div>
    </div>
    <div class="warn-box"><p>Este curso es complementario al Manual de Vuelo oficial. Los datos se basan en el Manual de Procedimientos en Tierra y Vuelo para Pilotos (206BIII P/G SPN 10/98). Siempre consultar los documentos vigentes aprobados por ANAC.</p></div>
  </div>
  <div class="card" style="margin:14px 0">
    <h3 style="margin-bottom:10px">📚 Estructura del Curso</h3>
    ${MODULES.map(m=>`
    <div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-size:12px;color:var(--amber);font-weight:500">Módulo ${m.id}: ${m.icon} ${m.title}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px">${m.subtitle}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:3px;padding-left:10px">${m.chapters.map(c=>`<span style="display:inline-block;margin-right:14px;opacity:.8">→ ${c.title}</span>`).join('')}</div>
    </div>`).join('')}
    <div style="padding:8px 0;font-size:12px;color:var(--blue2);font-weight:500">⭐ Examen Final Integrador — 30 preguntas (80% mínimo para aprobar)</div>
  </div>
  <div style="text-align:center;margin-top:20px;margin-bottom:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
    ${state.user
      ? `<button class="btn btn-primary" onclick="startCourse()" style="padding:12px 32px;font-size:15px">🚁 Continuar Curso</button>
         <button class="btn btn-sm" onclick="logout()">Cerrar sesión</button>`
      : `<button class="btn btn-primary" onclick="goRegister()" style="padding:12px 32px;font-size:15px">📝 Registrarse</button>
         <button class="btn" onclick="guestMode()" style="padding:12px 32px;font-size:15px">👤 Continuar como Invitado</button>`}
  </div>
`;
}

function renderRegister(){
  return `
  <div style="max-width:440px;margin:0 auto;padding:20px 0">
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:32px">📝</div>
      <h2 style="margin-top:8px">Registro de Cursante</h2>
      <p style="font-size:13px;color:var(--text3);margin-top:4px">Los cursantes registrados recibirán un certificado PDF al aprobar</p>
    </div>
    <div class="card">
      <label>Nombre *</label>
      <input type="text" id="reg-nombre" placeholder="Nombre" />
      <label>Apellido *</label>
      <input type="text" id="reg-apellido" placeholder="Apellido" />
      <label>Nro. de Licencia ANAC *</label>
      <input type="text" id="reg-licencia" placeholder="Ej: I.V.H. Lic. 12.345" />
      <label>Correo Electrónico *</label>
      <input type="email" id="reg-email" placeholder="piloto@ejemplo.com" />
      <div id="reg-error" style="color:var(--red);font-size:13px;margin-bottom:10px;display:none"></div>
      <div style="display:flex;gap:10px;margin-top:4px">
        <button class="btn btn-primary" onclick="submitRegister()" style="flex:1">Registrarse →</button>
        <button class="btn btn-sm" onclick="goIntro()">Cancelar</button>
      </div>
    </div>
    <div style="text-align:center;margin-top:12px">
      <button class="btn btn-sm" onclick="guestMode()">Continuar como Invitado sin registro</button>
    </div>
  </div>`;
}

function renderMap(){
  const allDone = state.completedModules.length === MODULES.length;
  return `
  <div class="flex-between" style="margin-bottom:16px">
    <h2>🗺 Progreso del Curso</h2>
    <div class="flex" style="gap:8px">
      ${state.user?`<span class="badge badge-green">${state.user.nombre} ${state.user.apellido}</span>`:'<span class="badge badge-gray">Invitado</span>'}
      <span class="badge badge-amber">${state.completedModules.length}/${MODULES.length}</span>
    </div>
  </div>
  <div class="progress-bar"><div class="progress-fill" style="width:${(state.completedModules.length/MODULES.length)*100}%"></div></div>
  <div style="margin:16px 0">
  ${MODULES.map((m,i)=>{
    const done=state.completedModules.includes(i);
    const locked=i>0&&!state.completedModules.includes(i-1)&&!done;
    const score=state.moduleScores[i];
    return `<div class="module-card ${done?'completed':''} ${locked?'locked':''} ${(!done&&!locked)?'active':''}" ${!locked?`onclick="goModule(${i})"`:''}>
      <div class="flex-between">
        <div class="flex">
          <div style="font-size:22px">${m.icon}</div>
          <div>
            <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em">Módulo ${m.id} · ${m.chapters.length} capítulos</div>
            <div style="font-size:14px;font-weight:500;color:${done?'#2ecc71':'var(--text)'}">${m.title}</div>
            <div style="font-size:12px;color:var(--text3)">${m.subtitle}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:3px">${m.chapters.map(c=>`<span style="margin-right:8px;opacity:.7">${c.title.split('—')[0]?.trim()}</span>`).join('')}</div>
          </div>
        </div>
        <div style="text-align:right;min-width:60px">
          ${done?`<span class="badge badge-green">✓ ${score!==undefined?score+'/5':''}</span>`:
          locked?`<span class="badge badge-gray">🔒</span>`:
          `<span class="badge badge-amber">→</span>`}
        </div>
      </div>
    </div>`;
  }).join('')}
  </div>
  ${allDone?`
  <div style="background:#1e2e1a;border:1px solid #2a5a2a;border-radius:var(--radius2);padding:18px;text-align:center;margin-top:8px">
    <div style="font-size:28px;margin-bottom:8px">🏆</div>
    <h3 style="color:var(--green);margin-bottom:8px">¡Todos los módulos completados!</h3>
    <p style="margin-bottom:14px">Está habilitado para rendir el Examen Final Integrador (30 preguntas)</p>
    <button class="btn btn-green" onclick="startFinal()">Rendir Examen Final ★</button>
  </div>`:`
  <div class="info-box" style="margin-top:8px"><p>Complete todos los módulos para acceder al Examen Final. Debe aprobar cada examen de módulo con mínimo <strong>4/5 (80%)</strong> de respuestas correctas para avanzar al siguiente módulo. El Examen Final requiere <strong>24/30 (80%)</strong>.</p></div>`}
  `;
}

function renderModule(){
  const m=MODULES[state.currentModule];
  const ch=m.chapters[state.currentChapter];
  
  // Set class split-active on app container
  const appContainer = document.querySelector('.app');
  if (appContainer) {
    appContainer.classList.add('split-active');
  }

  // Active page from chapter - reset ONLY when chapter changes
  const chapterKey = `${state.currentModule}_${state.currentChapter}`;
  if (state.lastChapterKey !== chapterKey) {
    state.lastChapterKey = chapterKey;
    state.activeViewerPage = ch.pages ? ch.pages[0] : 1;
  }
  
  const pages = ch.pages || [1];
  
  // Zoom level state
  if (state.viewerZoom === undefined) state.viewerZoom = 1.0;
  
  const pagesSelector = pages.length > 1 ? `
    <div style="display:flex;gap:4px;margin-bottom:8px;width:100%">
      ${pages.map(p => `
        <button class="viewer-btn" style="background:${state.activeViewerPage === p ? 'var(--amber)' : 'var(--bg3)'};color:${state.activeViewerPage === p ? '#000' : 'var(--text2)'};font-weight:${state.activeViewerPage === p ? '700' : '400'}" onclick="state.activeViewerPage = ${p}; render();">Pág. ${p}</button>
      `).join('')}
    </div>
  ` : '';

  return `
  <div class="flex-between" style="margin-bottom:14px">
    <button class="btn btn-sm" onclick="goMap()">← Mapa de Módulos</button>
    <span class="badge badge-amber">Módulo ${m.id} / ${MODULES.length}</span>
  </div>
  <div style="margin-bottom:12px">
    <div class="tag">MÓDULO ${m.id} DE ${MODULES.length} · ${m.subtitle}</div>
    <h2>${m.icon} Módulo ${m.id}: ${m.title}</h2>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">
  ${m.chapters.map((c,i)=>`
    <button onclick="setChapter(${i})" style="padding:6px 12px;border-radius:20px;border:1.5px solid ${i===state.currentChapter?'var(--amber)':'var(--border2)'};background:${i===state.currentChapter?'#2a1e00':'var(--bg3)'};color:${i===state.currentChapter?'var(--amber)':'var(--text3)'};cursor:pointer;font-size:12px;font-family:inherit" title="${c.title}">${c.title.split('—')[0]?.trim()||`${m.id}.${i+1}`}</button>
  `).join('')}
  </div>

  <div class="split-container">
    <div class="split-left">
      <div class="card" style="height:520px;display:flex;flex-direction:column;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
        <div class="chapter-title" style="margin-bottom:12px;flex-shrink:0">${ch.title}</div>
        <div class="scroll-area" style="flex:1;overflow-y:auto;padding-right:8px">${ch.content}</div>
      </div>
    </div>
    <div class="split-right">
      <div class="manual-viewer-card">
        <div class="tag" style="margin-bottom:4px;width:100%;text-align:left">Páginas asociadas a este tema</div>
        ${pagesSelector}
        
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;background:rgba(0,0,0,0.2);padding:6px 10px;border-radius:6px;margin-bottom:8px;border:1px solid var(--border)">
          <button class="viewer-btn" style="flex:0;width:32px;padding:3px" onclick="window.navigateManualPage(-1)">◀</button>
          <div style="display:flex;align-items:center;gap:4px">
            <span style="font-size:12px;color:var(--text2)">Ir a Pág.</span>
            <input type="number" id="manual-page-input" value="${state.activeViewerPage}" min="1" max="448" style="width:55px;text-align:center;padding:3px;border:1px solid var(--border2);background:var(--bg4);color:var(--text);border-radius:4px" onchange="window.onManualPageInputChange(this.value)">
            <span style="font-size:12px;color:var(--text3)">/ 448</span>
          </div>
          <button class="viewer-btn" style="flex:0;width:32px;padding:3px" onclick="window.navigateManualPage(1)">▶</button>
        </div>

        <div class="manual-img-container" id="manual-img-container">
          <img src="img/fm_pages/page_${state.activeViewerPage}.jpg" class="manual-img" id="manual-page-img" style="transform: scale(${state.viewerZoom});" alt="Página ${state.activeViewerPage} del Manual de Vuelo">
        </div>
        <div class="viewer-controls">
          <button class="viewer-btn" onclick="window.adjustZoom(0.15)">🔍+ Zoom</button>
          <button class="viewer-btn" onclick="window.adjustZoom(-0.15)">🔍- Zoom</button>
          <button class="viewer-btn" onclick="window.resetZoom()">Reajustar</button>
          <button class="viewer-btn" onclick="window.openFullscreenViewer(${state.activeViewerPage})">🗖 Completa</button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-between" style="margin-top:14px">
    <button class="btn btn-sm" onclick="prevChapter()" ${state.currentChapter===0?'disabled style="opacity:.4"':''}>← Anterior</button>
    ${state.currentChapter<m.chapters.length-1
      ?`<button class="btn btn-sm btn-primary" onclick="nextChapter()">Siguiente →</button>`
      :`<button class="btn btn-primary" onclick="goExam()">Ir al Examen del Módulo 📝</button>`}
  </div>`;
}

function renderModuleExam(){
  const m=MODULES[state.currentModule];
  const q=m.quiz[state.examQ];
  const reviewed=state.examReviewed;
  return `
  <div class="flex-between" style="margin-bottom:14px">
    <button class="btn btn-sm" onclick="backToModule()">← Volver al módulo</button>
    <span class="badge badge-amber">Examen — Módulo ${m.id}</span>
  </div>
  <h3 style="margin-bottom:4px">📝 Examen de Módulo ${m.id}: ${m.title}</h3>
  <p style="font-size:12px;color:var(--text3);margin-bottom:12px">Responda las 5 preguntas. Necesita mínimo <strong>4/5 (80%)</strong> de respuestas correctas para aprobar y avanzar al siguiente módulo.</p>
  <div style="display:flex;gap:4px;flex-wrap:wrap;margin:12px 0">
  ${m.quiz.map((_,i)=>{
    let cls='ep-dot';
    if(reviewed){cls+=state.examAnswers[i]===m.quiz[i].ans?' correct':' incorrect';}
    else if(state.examAnswers[i]!==undefined) cls+=' answered';
    if(i===state.examQ) cls+=' current';
    return `<div class="${cls}" onclick="setExamQ(${i})">${i+1}</div>`;
  }).join('')}
  </div>
  <div class="card" style="margin-bottom:12px">
    <div class="flex-between" style="margin-bottom:12px">
      <span style="font-size:12px;color:var(--text3)">Pregunta ${state.examQ+1} de ${m.quiz.length}</span>
      ${state.examAnswers[state.examQ]!==undefined?`<span class="badge badge-blue">Respondida</span>`:''}
    </div>
    <p style="font-size:15px;font-weight:500;color:var(--text);margin-bottom:16px;line-height:1.6">${q.q}</p>
    ${q.opts.map((o,oi)=>{
      let cls='opt';
      if(reviewed){
        if(oi===q.ans) cls+=' correct';
        else if(oi===state.examAnswers[state.examQ]&&oi!==q.ans) cls+=' incorrect';
      }else if(state.examAnswers[state.examQ]===oi) cls+=' selected';
      return `<button class="${cls}" ${reviewed?'disabled':''} onclick="selectAnswer(${oi})"><strong style="margin-right:8px;color:var(--text3)">${String.fromCharCode(65+oi)}.</strong>${o}</button>`;
    }).join('')}
    ${reviewed&&state.examAnswers[state.examQ]!==q.ans?`<div class="info-box" style="margin-top:8px"><p>✓ Respuesta correcta: <strong>${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</strong></p></div>`:''}
  </div>
  <div class="flex-between">
    <button class="btn btn-sm" onclick="prevExamQ()" ${state.examQ===0?'disabled style="opacity:.4"':''}>← Anterior</button>
    <div class="flex" style="gap:8px">
    ${!reviewed&&state.examAnswers.filter(a=>a!==undefined).length===m.quiz.length
      ?`<button class="btn btn-primary" onclick="submitExam()">Finalizar Examen ✓</button>`
      :reviewed?`<button class="btn btn-sm btn-green" onclick="showExamResult()">Ver Resultado →</button>`
      :`<button class="btn btn-sm btn-primary" onclick="nextExamQ()" ${state.examQ===m.quiz.length-1?'disabled style="opacity:.4"':''}>Siguiente →</button>`}
    </div>
  </div>`;
}

function renderExamResult(){
  const m=MODULES[state.currentModule];
  const correct=m.quiz.filter((q,i)=>state.examAnswers[i]===q.ans).length;
  const passed=correct>=4;
  return `
  <div class="view-enter" style="text-align:center;padding:24px 0 16px">
    <div style="font-size:56px;margin-bottom:8px;animation:scorePop .5s cubic-bezier(.4,0,.2,1)">${passed?'🎯':'📋'}</div>
    <h2 style="margin:6px 0;font-size:22px;color:${passed?'var(--green)':'var(--red)'};font-weight:800">${passed?'¡Módulo Aprobado!':'Módulo No Aprobado'}</h2>
    <div class="score-big ${passed?'green':'red'}" style="margin:12px 0">${correct}/5</div>
    <p style="font-size:14px">${passed?'Ha superado el examen con <strong>'+correct+'</strong> respuestas correctas ('+Math.round(correct/5*100)+'%).':'Obtuvo '+correct+' respuestas correctas. Necesita mínimo <strong>4/5 (80%)</strong> para aprobar.'}</p>
  </div>
  <div class="card" style="margin:14px 0">
    <h3 style="margin-bottom:10px">Revisión de Respuestas</h3>
    ${m.quiz.map((q,i)=>{
      const ok=state.examAnswers[i]===q.ans;
      return `<div style="padding:10px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;gap:8px;align-items:flex-start">
          <div style="font-size:16px;margin-top:1px">${ok?'✅':'❌'}</div>
          <div style="flex:1">
            <div style="font-size:13px;color:var(--text);margin-bottom:4px">${i+1}. ${q.q}</div>
            ${!ok?`<div style="font-size:12px;color:var(--red)">Su resp.: ${String.fromCharCode(65+state.examAnswers[i])}. ${q.opts[state.examAnswers[i]]}</div>`:''}
            <div style="font-size:12px;color:${ok?'var(--green)':'var(--amber)'}">Correcta: ${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>
  <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    ${passed
      ?`<button class="btn btn-green" onclick="nextModule()">Siguiente Módulo →</button>
        <button class="btn btn-sm" onclick="goMap()">Ver Mapa del Curso</button>`
      :`<button class="btn btn-primary" onclick="retryExam()">🔄 Reintentar Examen</button>
        <button class="btn btn-sm" onclick="backToModule()">← Repasar Módulo</button>`}
  </div>`;
}

function renderFinalExam(){
  const q=FINAL_EXAM[state.finalQ];
  const reviewed=state.finalReviewed;
  return `
  <div class="flex-between" style="margin-bottom:14px">
    <button class="btn btn-sm" onclick="goMap()">← Mapa</button>
    <span class="badge badge-amber">Examen Final — ${state.finalQ+1}/30</span>
  </div>
  <h3 style="margin-bottom:4px">⭐ Examen Final Integrador</h3>
  <p style="font-size:12px;color:var(--text3);margin-bottom:12px">30 preguntas sobre todo el manual. Mínimo 24/30 (80%) para aprobar.</p>
  <div style="display:flex;gap:4px;flex-wrap:wrap;margin:8px 0 12px">
  ${FINAL_EXAM.map((_,i)=>{
    let cls='ep-dot';
    if(reviewed){cls+=state.finalAnswers[i]===FINAL_EXAM[i].ans?' correct':' incorrect';}
    else if(state.finalAnswers[i]!==undefined) cls+=' answered';
    if(i===state.finalQ) cls+=' current';
    return `<div class="${cls}" onclick="setFinalQ(${i})">${i+1}</div>`;
  }).join('')}
  </div>
  <div class="flex-between" style="margin-bottom:8px">
    <span style="font-size:12px;color:var(--text3)">Respondidas: ${state.finalAnswers.filter(a=>a!==undefined).length}/30</span>
    <span style="font-size:12px;color:var(--text3)">Faltantes: ${30-state.finalAnswers.filter(a=>a!==undefined).length}</span>
  </div>
  <div class="progress-bar"><div class="progress-fill" style="width:${(state.finalAnswers.filter(a=>a!==undefined).length/30)*100}%"></div></div>
  <div class="card" style="margin:12px 0">
    <div class="flex-between" style="margin-bottom:12px">
      <span style="font-size:12px;color:var(--text3)">Pregunta ${state.finalQ+1} de 30</span>
      ${state.finalAnswers[state.finalQ]!==undefined?`<span class="badge badge-blue">Respondida</span>`:''}
    </div>
    <p style="font-size:15px;font-weight:500;color:var(--text);margin-bottom:16px;line-height:1.6">${q.q}</p>
    ${q.opts.map((o,oi)=>{
      let cls='opt';
      if(reviewed){
        if(oi===q.ans) cls+=' correct';
        else if(oi===state.finalAnswers[state.finalQ]&&oi!==q.ans) cls+=' incorrect';
      }else if(state.finalAnswers[state.finalQ]===oi) cls+=' selected';
      return `<button class="${cls}" ${reviewed?'disabled':''} onclick="selectFinalAnswer(${oi})"><strong style="margin-right:8px;color:var(--text3)">${String.fromCharCode(65+oi)}.</strong>${o}</button>`;
    }).join('')}
    ${reviewed&&state.finalAnswers[state.finalQ]!==q.ans?`<div class="info-box" style="margin-top:8px"><p>✓ Respuesta correcta: <strong>${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</strong></p></div>`:''}
  </div>
  <div class="flex-between">
    <button class="btn btn-sm" onclick="prevFinalQ()" ${state.finalQ===0?'disabled style="opacity:.4"':''}>← Anterior</button>
    <div class="flex" style="gap:8px">
    ${!reviewed&&state.finalAnswers.filter(a=>a!==undefined).length===30
      ?`<button class="btn btn-primary" onclick="submitFinal()">Finalizar Examen Final ✓</button>`
      :reviewed?`<button class="btn btn-sm btn-green" onclick="showFinalResult()">Ver Resultado →</button>`
      :`<button class="btn btn-sm btn-primary" onclick="nextFinalQ()" ${state.finalQ===29?'disabled style="opacity:.4"':''}>Siguiente →</button>`}
    </div>
  </div>`;
}

function renderFinalResult(){
  const correct=FINAL_EXAM.filter((q,i)=>state.finalAnswers[i]===q.ans).length;
  const pct=Math.round((correct/30)*100);
  const passed=correct>=24;
  return `
  <div class="view-enter" style="text-align:center;padding:24px 0 14px">
    <div style="font-size:60px;margin-bottom:8px;animation:scorePop .6s cubic-bezier(.4,0,.2,1)">${passed?'🏆':'📋'}</div>
    <h1 style="font-size:26px;margin:6px 0">${passed?'¡CURSO COMPLETADO!':'Examen No Aprobado'}</h1>
    <div class="score-big ${passed?'':'red'}" style="margin:14px 0">${correct}/30</div>
    <div style="font-size:22px;font-weight:800;color:${passed?'var(--green)':'var(--red)'};margin-bottom:8px">${pct}%</div>
    <p style="margin-top:6px">${passed?'Ha completado satisfactoriamente el Curso de Adaptación al Bell 206B JetRanger III.':'Obtuvo '+pct+'%. Necesita <strong>80% (24/30)</strong> para aprobar.'}</p>
  </div>
  ${passed?`
  <div style="background:#1e2a10;border:1px solid #3a5a20;border-radius:var(--radius2);padding:18px;margin:14px 0">
    <h3 style="color:var(--green);margin-bottom:10px">📜 Condición de Completitud</h3>
    <div class="data-row"><span class="data-label">Aeronave</span><span class="data-value">Bell Model 206B JetRanger III</span></div>
    <div class="data-row"><span class="data-label">Módulos completados</span><span class="data-value">${MODULES.map((_,i)=>`M${i+1}:${state.moduleScores[i]||0}/5`).join(' · ')}</span></div>
    <div class="data-row"><span class="data-label">Examen Final</span><span class="data-value">${correct}/30 (${pct}%)</span></div>
    <div class="data-row"><span class="data-label">Condición</span><span class="data-value" style="color:var(--green)">APROBADO ✓</span></div>
    ${state.user?`
    <div class="data-row"><span class="data-label">Cursante</span><span class="data-value">${state.user.nombre} ${state.user.apellido}</span></div>
    <div class="data-row"><span class="data-label">Licencia</span><span class="data-value">${state.user.licencia}</span></div>
    `:'<div class="warn-box"><p>Para obtener el certificado PDF debe estar registrado. Si cursó como invitado, regístrese e ingrese nuevamente para obtener su certificado.</p></div>'}
    <div class="warn-box" style="margin-top:12px"><p>Esta constancia acredita la parte teórica del Curso de Adaptación. Para la habilitación en tipo deberá completar el vuelo de adaptación con un Instructor de Vuelo habilitado conforme RAAC Parte 61.</p></div>
  </div>
  ${state.user?`<div style="text-align:center;margin-top:12px"><button class="btn btn-primary" onclick="generateCertificate(${correct},${pct})" style="padding:12px 28px;font-size:15px">📄 Descargar y Enviar Certificado</button></div><div id="email-status-msg" class="email-status" style="display:none"></div>`:''}`:''}
  <div class="card" style="margin:14px 0">
    <div class="flex-between" style="margin-bottom:10px">
      <h3>Revisión Completa</h3>
      <span class="badge ${passed?'badge-green':'badge-red'}">${correct} correctas / ${30-correct} incorrectas</span>
    </div>
    <div class="scroll-area" style="max-height:300px">
    ${FINAL_EXAM.map((q,i)=>{
      const ok=state.finalAnswers[i]===q.ans;
      return `<div style="padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;gap:8px;align-items:flex-start">
          <div style="font-size:14px;margin-top:1px;min-width:18px">${ok?'✅':'❌'}</div>
          <div style="flex:1">
            <div style="font-size:12px;color:var(--text);margin-bottom:3px">${i+1}. ${q.q}</div>
            ${!ok?`<div style="font-size:11px;color:var(--red)">Su resp: ${String.fromCharCode(65+state.finalAnswers[i])}. ${q.opts[state.finalAnswers[i]]}</div>`:''}
            <div style="font-size:11px;color:${ok?'var(--green)':'var(--amber)'}">Correcta: ${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</div>
          </div>
        </div>
      </div>`;
    }).join('')}
    </div>
  </div>
  <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    ${!passed?`<button class="btn btn-primary" onclick="retryFinal()">🔄 Reintentar Examen Final</button>`:''}
    <button class="btn btn-sm" onclick="goMap()">← Mapa del Curso</button>
  </div>`;
}

// ========= ADMIN PANEL =========
function showAdminPanel(){
  if(document.getElementById('admin-modal')) return;
  const el=document.createElement('div');
  el.id='admin-modal';
  el.className='modal-overlay';
  el.innerHTML=`
  <div class="modal">
    <div class="flex-between" style="margin-bottom:16px">
      <h3>⚙ Panel de Administrador</h3>
      <button class="btn btn-sm btn-danger" onclick="closeAdmin()">✕ Cerrar</button>
    </div>
    <div id="admin-content">
      <label>Contraseña de Administrador</label>
      <input type="password" id="admin-pwd" placeholder="Ingrese contraseña" />
      <button class="btn btn-primary" onclick="checkAdmin()" style="width:100%">Ingresar</button>
      <div id="admin-error" style="color:var(--red);font-size:13px;margin-top:8px;display:none">Contraseña incorrecta</div>
    </div>
  </div>`;
  document.body.appendChild(el);
}

function checkAdmin(){
  const pwd=document.getElementById('admin-pwd').value;
  if(btoa(pwd)==='QmVsbDIwNkIzX0FkbWlu'){
    document.getElementById('admin-content').innerHTML=renderAdminKeys();
  }else{
    document.getElementById('admin-error').style.display='block';
  }
}

function renderAdminKeys(){
  const pkVal = localStorage.getItem('ejsPK')||'';
  const svcVal = localStorage.getItem('ejsSVC')||'';
  const tidVal = localStorage.getItem('ejsTID')||'';
  const tidRegVal = localStorage.getItem('ejsTIDReg')||'';
  const configured = pkVal && svcVal && tidVal;
  let html=`
  <div style="background:#0a1e10;border:1px solid #1a5a2a;border-radius:var(--radius);padding:14px;margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div style="font-size:14px;font-weight:500;color:var(--green)">📧 Configuración EmailJS</div>
      <span class="badge ${configured?'badge-green':'badge-red'}">${configured?'✓ Configurado':'Sin configurar'}</span>
    </div>
    <div style="font-size:12px;color:var(--text3);margin-bottom:10px">
      1. Crear cuenta gratis en <strong style="color:var(--blue2)">emailjs.com</strong><br>
      2. Conectar servicio Gmail/Outlook en <strong>Email Services</strong><br>
      3. Crear plantillas con las variables indicadas abajo en <strong>Email Templates</strong><br>
      4. Copiar las claves de <strong>Account &gt; API Keys</strong>
    </div>
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Public Key (Account → API Keys)</label>
    <input type="text" id="ejs-pk" value="${pkVal}" placeholder="Ej: AbCdEfGhIjKlMnOp" style="margin-bottom:8px;font-size:13px" />
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Service ID (Email Services → Service ID)</label>
    <input type="text" id="ejs-svc" value="${svcVal}" placeholder="Ej: service_xxxxxxx" style="margin-bottom:8px;font-size:13px" />
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Template ID (Para Certificado Aprobado)</label>
    <input type="text" id="ejs-tid" value="${tidVal}" placeholder="Ej: template_xxxxxxx" style="margin-bottom:8px;font-size:13px" />
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Template ID (Para Nuevo Registro)</label>
    <input type="text" id="ejs-tid-reg" value="${tidRegVal}" placeholder="Ej: template_yyyyyyy" style="margin-bottom:8px;font-size:13px" />
    <button class="btn btn-sm btn-green" onclick="saveEmailConfig()" style="width:100%;margin-bottom:8px">💾 Guardar configuración EmailJS</button>
    <div id="email-cfg-status" style="font-size:12px;text-align:center;color:var(--text3)"></div>
    <div style="background:var(--bg3);border-radius:var(--radius);padding:10px;margin-top:8px;font-size:11px;color:var(--text3)">
      <strong style="color:var(--amber)">Variables de la plantilla EmailJS:</strong><br>
      <code style="color:var(--blue2)">{{to_name}}</code> — Nombre del cursante<br>
      <code style="color:var(--blue2)">{{to_email}}</code> — Email destinatario<br>
      <code style="color:var(--blue2)">{{licencia}}</code> — Nro. de licencia ANAC<br>
      <code style="color:var(--blue2)">{{score}}</code> — Resultado (ej: 25/30 — 83%)<br>
      <code style="color:var(--blue2)">{{fecha}}</code> — Fecha de aprobación<br>
      <code style="color:var(--blue2)">{{aeronave}}</code> — Bell Model 206B JetRanger III<br>
      <code style="color:var(--blue2)">{{instructor}}</code> — Eduardo J. Forgan<br>
      <code style="color:var(--blue2)">{{pdf_base64}}</code> — Certificado PDF adjunto (base64)
    </div>
  </div>

  <div style="background:#0e111a;border:1px solid #1a2333;border-radius:var(--radius);padding:14px;margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div style="font-size:14px;font-weight:500;color:var(--blue)">🔥 Configuración Firebase Database</div>
      <span class="badge ${FIREBASE_CFG.apiKey?'badge-green':'badge-red'}">${FIREBASE_CFG.apiKey?'✓ Conectado':'Sin configurar'}</span>
    </div>
    <div style="font-size:12px;color:var(--text3);margin-bottom:10px">Guarda los registros de los alumnos en Firestore.</div>
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">API Key</label>
    <input type="text" id="fb-api" value="${FIREBASE_CFG.apiKey}" placeholder="Ej: AIzaSyD..." style="margin-bottom:8px;font-size:13px" />
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Auth Domain</label>
    <input type="text" id="fb-auth" value="${FIREBASE_CFG.authDomain}" placeholder="Ej: mi-proyecto.firebaseapp.com" style="margin-bottom:8px;font-size:13px" />
    <label style="font-size:12px;color:var(--text2);margin-bottom:3px">Project ID</label>
    <input type="text" id="fb-proj" value="${FIREBASE_CFG.projectId}" placeholder="Ej: mi-proyecto-123" style="margin-bottom:8px;font-size:13px" />
    <button class="btn btn-sm btn-primary" onclick="saveFirebaseConfig()" style="width:100%;margin-bottom:8px">💾 Guardar configuración Firebase</button>
    <div id="fb-cfg-status" style="font-size:12px;text-align:center;color:var(--text3)"></div>
    
    <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
      <div style="display:flex; gap:8px;">
        <button class="btn btn-sm" onclick="fetchFirebaseStudents()" style="flex:1">📋 Ver Alumnos Registrados</button>
        <button class="btn btn-sm" onclick="exportFirebaseCSV()" style="background:#205e33; color:white;">📥 Exportar CSV</button>
      </div>
      <div id="fb-students-list" style="margin-top:10px;font-size:12px;max-height:200px;overflow-y:auto"></div>
    </div>
  </div>

  <h3 style="color:var(--amber);margin-bottom:12px">🔑 Clave de Respuestas Correctas</h3>`;
  MODULES.forEach((m,mi)=>{
    html+=`<div style="margin-bottom:12px"><div class="chapter-title">Módulo ${m.id}: ${m.title}</div>`;
    m.quiz.forEach((q,qi)=>{
      html+=`<div style="font-size:12px;padding:4px 0;border-bottom:1px solid var(--border)">
        <span style="color:var(--text3)">M${m.id}.${qi+1}</span>
        <span style="color:var(--text2);margin:0 6px">${q.q.substring(0,60)}...</span>
        <span class="badge badge-green" style="font-size:10px">Resp: ${String.fromCharCode(65+q.ans)}</span>
      </div>`;
    });
    html+='</div>';
  });
  html+='<div class="chapter-title" style="margin-top:12px">Examen Final (30 preguntas)</div>';
  FINAL_EXAM.forEach((q,i)=>{
    html+=`<div style="font-size:12px;padding:4px 0;border-bottom:1px solid var(--border)">
      <span style="color:var(--text3)">F${i+1}</span>
      <span style="color:var(--text2);margin:0 6px">${q.q.substring(0,55)}...</span>
      <span class="badge badge-green" style="font-size:10px">Resp: ${String.fromCharCode(65+q.ans)}</span>
    </div>`;
  });
  html+=`<button class="btn btn-sm" onclick="downloadAdminKeys()" style="margin-top:14px;width:100%">⬇ Descargar clave completa .txt</button>`;
  return html;
}

function downloadAdminKeys(){
  const lines=[];
  lines.push('CLAVE DE RESPUESTAS — CURSO DE ADAPTACIÓN BELL 206B JETRANGER III');
  lines.push('DOCUMENTO CONFIDENCIAL — SOLO PARA EL ADMINISTRADOR DEL CURSO');
  lines.push('='.repeat(70));
  lines.push('Basado en: Bell 206BIII P/G SPN 10/98');
  lines.push('Referencia regulatoria: ANAC Argentina / RAAC Parte 61 y 91');
  lines.push('');
  MODULES.forEach((m,mi)=>{
    lines.push('');lines.push('='.repeat(70));
    lines.push(`MÓDULO ${m.id}: ${m.title.toUpperCase()}`);lines.push('='.repeat(70));
    m.quiz.forEach((q,qi)=>{
      lines.push(`\nPregunta M${m.id}.${qi+1}: ${q.q}`);
      q.opts.forEach((o,oi)=>lines.push(`  ${String.fromCharCode(65+oi)}. ${o}${oi===q.ans?' ◄ CORRECTA':''}`));
    });
  });
  lines.push('');lines.push('='.repeat(70));
  lines.push('EXAMEN FINAL INTEGRADOR (30 PREGUNTAS)');lines.push('='.repeat(70));
  FINAL_EXAM.forEach((q,i)=>{
    lines.push(`\nPregunta F${i+1}: ${q.q}`);
    q.opts.forEach((o,oi)=>lines.push(`  ${String.fromCharCode(65+oi)}. ${o}${oi===q.ans?' ◄ CORRECTA':''}`));
  });
  const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='Bell206B3_ClaveAdmin_CONFIDENCIAL.txt';
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
}

// ========= CERTIFICATE =========
function generateCertificate(score, pct){
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
  const W=297,H=210;
  
  // Background deep navy
  doc.setFillColor(12,16,30);
  doc.rect(0,0,W,H,'F');
  
  // Outer border gold double line
  doc.setDrawColor(218,165,32);doc.setLineWidth(2.5);
  doc.rect(10,10,W-20,H-20);
  doc.setLineWidth(0.5);
  doc.rect(13,13,W-26,H-26);
  doc.rect(15,15,W-30,H-30);
  
  // Top decorative bar
  doc.setFillColor(220,160,30);doc.rect(8,8,W-16,8,'F');
  doc.setFillColor(12,16,30);doc.rect(11,11,W-22,2,'F');
  
  // Bottom bar
  doc.setFillColor(220,160,30);doc.rect(8,H-16,W-16,8,'F');
  
  // Header text in gold bar
  doc.setTextColor(12,16,30);
  doc.setFontSize(9);doc.setFont('helvetica','bold');
  doc.text('MODENA AIR SERVICE — CENTRO DE CAPACITACIÓN Y ENTRENAMIENTO — ANAC ARGENTINA',W/2,13.5,{align:'center'});
  
  // Course type tag
  doc.setFillColor(30,40,70);
  doc.roundedRect(W/2-60,22,120,8,2,2,'F');
  doc.setTextColor(150,180,255);doc.setFontSize(8);doc.setFont('helvetica','normal');
  doc.text('CERTIFICADO DE APROBACIÓN — FASE TEÓRICA',W/2,27.5,{align:'center'});
  
  // Main title
  doc.setTextColor(218,165,32);doc.setFontSize(32);doc.setFont('times','italic');
  doc.text('Curso de Adaptación',W/2,50,{align:'center'});
  
  // Helicopter model
  doc.setTextColor(245,200,66);doc.setFontSize(20);
  doc.text('Bell Model 206B JetRanger III',W/2,62,{align:'center'});
  
  // Divider line
  doc.setDrawColor(220,160,30);doc.setLineWidth(0.5);
  doc.line(40,68,W-40,68);
  
  // "Se certifica que" text
  doc.setTextColor(180,190,210);doc.setFontSize(12);doc.setFont('helvetica','normal');
  doc.text('Se certifica que el/la piloto',W/2,78,{align:'center'});
  
  // Name
  const nombre=`${state.user.nombre} ${state.user.apellido}`;
  doc.setTextColor(255,255,255);doc.setFontSize(26);doc.setFont('times','bold');
  doc.text(nombre,W/2,92,{align:'center'});
  
  // License
  doc.setTextColor(180,190,210);doc.setFontSize(11);doc.setFont('helvetica','normal');
  doc.text(`Licencia ANAC N°: ${state.user.licencia}`,W/2,101,{align:'center'});
  
  // Completion text
  doc.setFontSize(11);
  doc.text('ha completado satisfactoriamente la Fase Teórica del Curso de Adaptación al',W/2,112,{align:'center'});
  doc.setTextColor(245,200,66);doc.setFont('helvetica','bold');
  doc.text('helicóptero Bell Model 206B JetRanger III (B3)',W/2,120,{align:'center'});
  
  // Score box
  doc.setFillColor(25,35,60);doc.setDrawColor(100,140,220);doc.setLineWidth(0.5);
  doc.roundedRect(W/2-50,125,100,16,3,3,'FD');
  doc.setTextColor(150,180,255);doc.setFontSize(9);doc.setFont('helvetica','normal');
  doc.text('Resultado Examen Final Integrador',W/2,131,{align:'center'});
  doc.setTextColor(100,220,140);doc.setFontSize(14);doc.setFont('helvetica','bold');
  doc.text(`${score}/30   (${pct}%)   APROBADO`,W/2,140,{align:'center'});
  
  // Regulatory note
  doc.setTextColor(120,130,150);doc.setFontSize(8);doc.setFont('helvetica','italic');
  doc.text('Esta constancia acredita únicamente la fase teórica. La habilitación en tipo requiere el vuelo de adaptación',W/2,151,{align:'center'});
  doc.text('con Instructor de Vuelo habilitado conforme RAAC Parte 61 — ANAC República Argentina.',W/2,157,{align:'center'});
  
  // Date
  const now=new Date();
  const dateStr=now.toLocaleDateString('es-AR',{day:'2-digit',month:'long',year:'numeric'});
  doc.setTextColor(180,190,210);doc.setFontSize(9);doc.setFont('helvetica','normal');
  doc.text(`Buenos Aires, ${dateStr}`,W/2,165,{align:'center'});
  
  // Signature line
  doc.setDrawColor(100,110,130);doc.setLineWidth(0.3);
  doc.line(W/2-45,175,W/2+45,175);
  
  // Signature image (firma)
  try{
    doc.addImage(IMGS.firma,'PNG',W/2-35,158,70,22);
  }catch(e){}
  
  doc.setTextColor(200,210,230);doc.setFontSize(9);doc.setFont('helvetica','bold');
  doc.text('Eduardo J. Forgan',W/2,180,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(140,150,170);
  doc.text('Instructor de Vuelo de Helicópteros — Comandante',W/2,185,{align:'center'});
  doc.text('Modena Air Service — I.V.H. / ANAC Argentina',W/2,190,{align:'center'});
  
  // Bottom gold bar text
  doc.setTextColor(12,16,30);doc.setFontSize(7);doc.setFont('helvetica','normal');
  doc.text(`Bell Model 206B JetRanger III — Manual de Procedimientos 206BIII P/G SPN 10/98 — ANAC / RAAC Parte 61 y 91`,W/2,H-11,{align:'center'});
  
  const safeName=(nombre).replace(/\s+/g,'_');

  // Save locally
  doc.save(`Certificado_Bell206B3_${safeName}.pdf`);

  // Also send by email
  sendCertificateEmails(doc, safeName, score, pct);
}

// ========= EMAIL SENDING =========
async function sendRegistrationEmails() {
  if(!EMAIL_CFG.publicKey || !EMAIL_CFG.serviceId || !EMAIL_CFG.templateIdReg){
    console.warn('EmailJS no configurado o falta Template ID de registro. No se enviará email de registro.');
    return;
  }

  const nombre = `${state.user.nombre} ${state.user.apellido}`;
  const templateParams = {
    to_name:     nombre,
    to_email:    state.user.email,
    licencia:    state.user.licencia,
    aeronave:    'Bell Model 206B JetRanger III',
    instructor:  'Eduardo J. Forgan',
    cc_email:    EMAIL_CFG.ccEmail
  };

  try{
    // Send to student
    await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.templateIdReg, {
      ...templateParams,
      reply_to: EMAIL_CFG.ccEmail,
    });

    // Send copy to instructor
    await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.templateIdReg, {
      ...templateParams,
      to_name:  'Eduardo J. Forgan',
      to_email: EMAIL_CFG.ccEmail,
      reply_to: state.user.email,
      asunto_prefijo: '[NUEVO ALUMNO] '
    });
    console.log('Emails de registro enviados exitosamente.');
  } catch(err){
    console.error('EmailJS error al enviar registro:', err);
  }
}

async function sendCertificateEmails(doc, safeName, score, pct){
  if (db && state.user.docId) {
    try {
      db.collection('alumnos').doc(state.user.docId).update({
        estado: 'Aprobado',
        puntaje: `${score}/30 (${pct}%)`,
        fecha_aprobacion: new Date()
      });
    } catch(e) { console.error('Firebase Error:', e); }
  }

  const statusEl = document.getElementById('email-status-msg');
  if(!statusEl) return;

  if(!EMAIL_CFG.publicKey || !EMAIL_CFG.serviceId || !EMAIL_CFG.templateId){
    statusEl.className='email-status error';
    statusEl.innerHTML='⚠ Email no configurado. Configure EmailJS en el Panel Administrador para enviar emails automáticos.';
    statusEl.style.display='block';
    return;
  }

  statusEl.className='email-status sending';
  statusEl.innerHTML='📧 Enviando certificado por email... por favor espere.';
  statusEl.style.display='block';

  const now = new Date();
  const dateStr = now.toLocaleDateString('es-AR',{day:'2-digit',month:'long',year:'numeric'});
  const pdfBase64 = doc.output('datauristring');
  const nombre = `${state.user.nombre} ${state.user.apellido}`;

  const templateParams = {
    to_name:     nombre,
    to_email:    state.user.email,
    licencia:    state.user.licencia,
    score:       `${score}/30 (${pct}%)`,
    fecha:       dateStr,
    aeronave:    'Bell Model 206B JetRanger III',
    instructor:  'Eduardo J. Forgan',
    cc_email:    EMAIL_CFG.ccEmail,
    pdf_nombre:  `Certificado_Bell206B3_${safeName}.pdf`,
    pdf_base64:  pdfBase64,
  };

  try{
    // Send to student
    await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.templateId, {
      ...templateParams,
      reply_to: EMAIL_CFG.ccEmail,
    });

    // Send copy to instructor
    await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.templateId, {
      ...templateParams,
      to_name:  'Eduardo J. Forgan',
      to_email: EMAIL_CFG.ccEmail,
      reply_to: state.user.email,
      asunto_prefijo: '[COPIA] '
    });

    statusEl.className='email-status sent';
    statusEl.innerHTML=`✅ Certificado enviado exitosamente a <strong>${state.user.email}</strong> y copia a <strong>${EMAIL_CFG.ccEmail}</strong>`;
  } catch(err){
    console.error('EmailJS error:', err);
    statusEl.className='email-status error';
    statusEl.innerHTML=`❌ Error al enviar email: ${err?.text||JSON.stringify(err)}. El certificado ya fue descargado localmente.`;
  }
}

// ========= EMAIL CONFIG SAVE =========
window.saveEmailConfig = function(){
  const pk  = document.getElementById('ejs-pk').value.trim();
  const svc = document.getElementById('ejs-svc').value.trim();
  const tid = document.getElementById('ejs-tid').value.trim();
  const tidReg = document.getElementById('ejs-tid-reg').value.trim();
  if(!pk||!svc||!tid){
    document.getElementById('email-cfg-status').innerHTML='<span style="color:var(--red)">Por favor complete todos los campos básicos (PK, SVC, TID Certificado).</span>';
    return;
  }
  localStorage.setItem('ejsPK', pk);
  localStorage.setItem('ejsSVC', svc);
  localStorage.setItem('ejsTID', tid);
  localStorage.setItem('ejsTIDReg', tidReg);
  EMAIL_CFG.publicKey  = pk;
  EMAIL_CFG.serviceId  = svc;
  EMAIL_CFG.templateId = tid;
  EMAIL_CFG.templateIdReg = tidReg;
  try{ emailjs.init({publicKey: pk}); }catch(e){}
  document.getElementById('email-cfg-status').innerHTML='<span style="color:var(--green)">✅ Configuración guardada exitosamente.</span>';
};

window.saveFirebaseConfig = function() {
  const api = document.getElementById('fb-api').value.trim();
  const auth = document.getElementById('fb-auth').value.trim();
  const proj = document.getElementById('fb-proj').value.trim();
  
  if(!api || !auth || !proj) {
    document.getElementById('fb-cfg-status').innerHTML='<span style="color:var(--red)">Completa todos los campos.</span>';
    return;
  }
  
  localStorage.setItem('fbAPI', api);
  localStorage.setItem('fbAuthDomain', auth);
  localStorage.setItem('fbProject', proj);
  FIREBASE_CFG.apiKey = api;
  FIREBASE_CFG.authDomain = auth;
  FIREBASE_CFG.projectId = proj;
  
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CFG);
    db = firebase.firestore();
    document.getElementById('fb-cfg-status').innerHTML='<span style="color:var(--green)">✅ Guardado y Conectado.</span>';
  } catch(e) {
    document.getElementById('fb-cfg-status').innerHTML='<span style="color:var(--red)">❌ Error al inicializar. Revise la consola.</span>';
  }
};

window.fetchFirebaseStudents = async function() {
  const listEl = document.getElementById('fb-students-list');
  if(!db) {
    listEl.innerHTML = '<span style="color:var(--red)">Base de datos no configurada o desconectada.</span>';
    return;
  }
  
  listEl.innerHTML = '<span style="color:var(--blue)">Cargando alumnos...</span>';
  try {
    const snapshot = await db.collection('alumnos').orderBy('fecha_registro', 'desc').get();
    if(snapshot.empty) {
      listEl.innerHTML = '<span>No hay alumnos registrados.</span>';
      return;
    }
    
    let html = '<table style="width:100%;border-collapse:collapse;text-align:left"><tr><th style="border-bottom:1px solid var(--border);padding:4px">Nombre</th><th style="border-bottom:1px solid var(--border);padding:4px">Email</th><th style="border-bottom:1px solid var(--border);padding:4px">Licencia</th><th style="border-bottom:1px solid var(--border);padding:4px">Estado</th><th style="border-bottom:1px solid var(--border);padding:4px">Puntaje</th></tr>';
    
    window._firebaseStudents = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      window._firebaseStudents.push(data);
      html += `<tr>
        <td style="padding:4px;border-bottom:1px solid var(--border2)">${data.nombre} ${data.apellido}</td>
        <td style="padding:4px;border-bottom:1px solid var(--border2)">${data.email}</td>
        <td style="padding:4px;border-bottom:1px solid var(--border2)">${data.licencia}</td>
        <td style="padding:4px;border-bottom:1px solid var(--border2)">
          <span class="badge ${data.estado==='Aprobado'?'badge-green':'badge-amber'}">${data.estado}</span>
        </td>
        <td style="padding:4px;border-bottom:1px solid var(--border2)">${data.puntaje || '-'}</td>
      </tr>`;
    });
    html += '</table>';
    listEl.innerHTML = html;
  } catch(e) {
    listEl.innerHTML = `<span style="color:var(--red)">Error: ${e.message}</span>`;
  }
};

window.exportFirebaseCSV = async function() {
  if (!db) {
    alert("Base de datos no configurada.");
    return;
  }
  try {
    const snapshot = await db.collection('alumnos').orderBy('fecha_registro', 'desc').get();
    if(snapshot.empty) {
      alert("No hay alumnos para exportar.");
      return;
    }
    
    let csv = "Nombre,Apellido,Email,Licencia,Estado,Puntaje,Fecha Registro,Fecha Aprobacion\n";
    snapshot.forEach(doc => {
      const d = doc.data();
      const fr = d.fecha_registro ? d.fecha_registro.toDate().toLocaleString() : '';
      const fa = d.fecha_aprobacion ? d.fecha_aprobacion.toDate().toLocaleString() : '';
      csv += `"${d.nombre}","${d.apellido}","${d.email}","${d.licencia}","${d.estado}","${d.puntaje || ''}","${fr}","${fa}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "alumnos_bell206.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch(e) {
    alert("Error exportando: " + e.message);
  }
};

// ========= SIDEBAR =========
function renderSidebar() {
  const u = state.user;
  const nameStr = u ? `${u.nombre} ${u.apellido}` : "Invitado";
  const licStr = u ? u.licencia : "Sin registro";
  
  let progressHtml = '';
  if (u) {
    const totalModules = MODULES.length;
    let completed = 0;
    for(let i=0; i<totalModules; i++) {
      if(state.examCompleted[i]) completed++;
    }
    const pct = Math.round((completed / totalModules) * 100);
    progressHtml = `
      <div style="padding: 0 15px 15px 15px; border-bottom: 1px solid var(--border); margin-bottom: 15px;">
        <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text3); margin-bottom:4px;">
          <span>Progreso del Curso</span>
          <span>${pct}%</span>
        </div>
        <div style="width:100%; height:6px; background:var(--bg3); border-radius:3px; overflow:hidden;">
          <div style="width:${pct}%; height:100%; background:var(--green); transition:width 0.5s ease-out;"></div>
        </div>
      </div>
    `;
  }
  
  return `
  <div class="sidebar">
    <div class="sidebar-title">🚁 Bell 206B Ground School</div>
    ${progressHtml}
    
    <button class="sidebar-btn ${state.view==='intro'?'active':''}" onclick="setView('intro')">🏠 Portada del Curso</button>
    <button class="sidebar-btn ${state.view==='map'||state.view==='module'||state.view==='moduleExam'||state.view==='examResult'?'active':''}" onclick="setView('map')">🗺️ Módulos del Curso</button>
    <button class="sidebar-btn ${state.view==='weight_balance'?'active':''}" onclick="setView('weight_balance')">⚖️ Peso y Balanceo</button>
    <button class="sidebar-btn ${state.view==='performance'?'active':''}" onclick="setView('performance')">📊 Calculador Perf.</button>
    <button class="sidebar-btn ${state.view==='hv_diagram'?'active':''}" onclick="setView('hv_diagram')">📈 Curva Hombre Muerto</button>
    <button class="sidebar-btn ${state.view==='checklists'?'active':''}" onclick="setView('checklists')">📋 Listas de Chequeo</button>
    
    <div style="flex-grow:1"></div>
    
    <a href="manual.pdf" target="_blank" class="sidebar-btn" style="text-decoration:none">📖 Manual (Español)</a>
    <a href="bell-206b3-fm-1 (1).pdf" target="_blank" class="sidebar-btn" style="text-decoration:none">🇬🇧 Flight Manual (Inglés)</a>
    
    <div class="sidebar-profile" style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-weight:700;color:var(--text)">${nameStr}</div>
        <div style="font-size:10px;margin-top:2px">${licStr}</div>
      </div>
      ${u ? `<button onclick="logoutUser()" title="Cerrar Sesión" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:16px;">🚪</button>` : ''}
    </div>
  </div>`;
}

window.logoutUser = function() {
  if(confirm("¿Estás seguro de que deseas cerrar sesión? Perderás el progreso local si no has aprobado.")) {
    localStorage.removeItem('b206State');
    location.reload();
  }
};

function renderWeightBalance() {
  const wb = state.weight_balance;
  
  const emptyW_kg = parseFloat(wb.empty_weight) || 0;
  const oilW = parseFloat(wb.oil_qty) * 7.5; // oil stays in gallons, oilW in lbs
  const pilotW_kg = parseFloat(wb.pilot) || 0;
  const copilotW_kg = parseFloat(wb.copilot) || 0;
  const rlW_kg = parseFloat(wb.rear_left) || 0;
  const rcW_kg = parseFloat(wb.rear_center) || 0;
  const rrW_kg = parseFloat(wb.rear_right) || 0;
  const fuelL = parseFloat(wb.fuel) || 0;
  const baggageW_kg = parseFloat(wb.baggage) || 0;
  const hookW_kg = parseFloat(wb.cargo_hook) || 0;

  // Convert kg/L input values to lbs for calculation
  const emptyW = emptyW_kg * 2.20462262;
  const pilotW = pilotW_kg * 2.20462262;
  const copilotW = copilotW_kg * 2.20462262;
  const rlW = rlW_kg * 2.20462262;
  const rcW = rcW_kg * 2.20462262;
  const rrW = rrW_kg * 2.20462262;
  const fuelW = fuelL * (6.7 / 3.785411784); // JP-1 density conversion to lbs
  const baggageW = baggageW_kg * 2.20462262;
  const hookW = hookW_kg * 2.20462262;
  
  const totalW = emptyW + oilW + pilotW + copilotW + rlW + rcW + rrW + fuelW + baggageW + hookW;
  
  const emptyM = emptyW * parseFloat(wb.empty_arm);
  const oilM = oilW * 118.5;
  const cabinM = (pilotW + copilotW) * 65.0;
  const rearM = (rlW + rcW + rrW) * 104.0;
  const fuelM = fuelW * 110.0;
  const baggageM = baggageW * 127.0;
  const hookM = hookW * 110.0;
  
  const totalLongM = emptyM + oilM + cabinM + rearM + fuelM + baggageM + hookM;
  const cgLong = totalW > 0 ? (totalLongM / totalW) : 0;
  
  const pilotLatM = pilotW * 11.0;
  const copilotLatM = copilotW * (-11.0);
  const rrLatM = rrW * 11.0;
  const rlLatM = rlW * (-11.0);
  
  const totalLatM = pilotLatM + copilotLatM + rrLatM + rlLatM;
  const cgLat = totalW > 0 ? (totalLatM / totalW) : 0;
  
  const maxStructuralW = hookW > 0 ? 3350 : 3200;
  const weightOk = totalW <= maxStructuralW;
  
  const cgLongMin = 106.0;
  let cgLongMax = 114.2;
  if (totalW > 2420) {
    cgLongMax = 114.2 - 0.004359 * (totalW - 2420);
    if (cgLongMax < 110.8) cgLongMax = 110.8;
  }
  const longOk = cgLong >= cgLongMin && cgLong <= cgLongMax;
  const latOk = cgLat >= -3.0 && cgLat <= 4.0;
  const baggageOk = baggageW <= 250;
  const fuelOk = parseFloat(wb.fuel) <= 91;
  const inLimits = weightOk && longOk && latOk && baggageOk && fuelOk;
  
  const getX = (x) => 40 + ((x - 104) / 12) * 220;
  const getY = (y) => 190 - ((y - 1400) / 2100) * 140;
  
  const envPoints = [
    {x: 106.0, y: 1400},
    {x: 106.0, y: 3200},
    {x: 110.8, y: 3200},
    {x: 114.2, y: 2420},
    {x: 114.2, y: 1400}
  ];
  const envPath = envPoints.map((p, i) => `${i===0?'M':'L'} ${getX(p.x)} ${getY(p.y)}`).join(' ') + ' Z';
  
  const hookPoints = [
    {x: 106.0, y: 3200},
    {x: 106.0, y: 3350},
    {x: 110.1, y: 3350},
    {x: 110.8, y: 3200}
  ];
  const hookPath = hookPoints.map((p, i) => `${i===0?'M':'L'} ${getX(p.x)} ${getY(p.y)}`).join(' ') + ' Z';
  
  const currentX = getX(cgLong);
  const currentY = getY(totalW);
  
  const getXLat = (x) => 40 + ((x + 4.0) / 9.0) * 220;
  const getYLat = (y) => 190 - ((y - 1400) / 2100) * 140;
  
  const latPoints = [
    {x: -3.0, y: 1400},
    {x: -3.0, y: 3200},
    {x: 4.0, y: 3200},
    {x: 4.0, y: 1400}
  ];
  const latPath = latPoints.map((p, i) => `${i===0?'M':'L'} ${getXLat(p.x)} ${getYLat(p.y)}`).join(' ') + ' Z';
  
  const latHookPoints = [
    {x: -3.0, y: 3200},
    {x: -3.0, y: 3350},
    {x: 4.0, y: 3350},
    {x: 4.0, y: 3200}
  ];
  const latHookPath = latHookPoints.map((p, i) => `${i===0?'M':'L'} ${getXLat(p.x)} ${getYLat(p.y)}`).join(' ') + ' Z';
  
  const currentXLat = getXLat(cgLat);
  const currentYLat = getYLat(totalW);

  return `
  <div class="view-enter">
    <div class="flex-between" style="margin-bottom:14px">
      <h2>⚖️ Peso y Balanceo</h2>
      <button class="btn btn-sm btn-green" onclick="resetWeightBalance()">🔄 Reestablecer Estándar</button>
    </div>
    
    <div class="wb-grid">
      <div class="card">
        <h3 style="margin-bottom:12px;color:var(--amber2)">📥 Datos de Carga</h3>
        
        <div class="wb-input-group">
          <div class="wb-row">
            <div class="input-group">
              <label>Peso Vacío (kg)</label>
              <input type="text" inputmode="decimal" id="wb-empty-weight" value="${wb.empty_weight}" onchange="updateWB('empty_weight', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.empty_weight) || 0) * 2.20462).toFixed(1)} lbs</div>
            </div>
            <div class="input-group">
              <label>Brazo Longitudinal (in)</label>
              <input type="text" inputmode="decimal" id="wb-empty-arm" value="${wb.empty_arm}" onchange="updateWB('empty_arm', this.value)" />
            </div>
          </div>
          
          <h4 style="margin-bottom:10px">Tripulación y Pasajeros (kg)</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
            <div class="input-group">
              <label>Piloto</label>
              <input type="text" inputmode="decimal" id="wb-pilot" value="${wb.pilot}" onchange="updateWB('pilot', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.pilot) || 0) * 2.20462).toFixed(1)} lbs</div>
            </div>
            <div class="input-group">
              <label>Copiloto / Pasajero Fwd</label>
              <input type="text" inputmode="decimal" id="wb-copilot" value="${wb.copilot}" onchange="updateWB('copilot', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.copilot) || 0) * 2.20462).toFixed(1)} lbs</div>
            </div>
          </div>
          <div class="input-group" style="margin-bottom:16px">
            <label style="margin-bottom:4px">Pasajeros Traseros (kg)</label>
            <div style="display:flex;gap:6px">
              <div>
                <input type="text" inputmode="decimal" id="wb-rear-left" placeholder="Izq" value="${wb.rear_left}" onchange="updateWB('rear_left', this.value)" style="flex:1;margin-bottom:0" />
                <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.rear_left) || 0) * 2.20462).toFixed(1)} lbs</div>
              </div>
              <div>
                <input type="text" inputmode="decimal" id="wb-rear-center" placeholder="Cen" value="${wb.rear_center}" onchange="updateWB('rear_center', this.value)" style="flex:1;margin-bottom:0" />
                <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.rear_center) || 0) * 2.20462).toFixed(1)} lbs</div>
              </div>
              <div>
                <input type="text" inputmode="decimal" id="wb-rear-right" placeholder="Der" value="${wb.rear_right}" onchange="updateWB('rear_right', this.value)" style="flex:1;margin-bottom:0" />
                <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.rear_right) || 0) * 2.20462).toFixed(1)} lbs</div>
              </div>
            </div>
          </div>
          
          <h4 style="margin-bottom:10px">Combustible y Carga</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px">
            <div class="input-group">
              <label>Combustible (Litros JP-1)</label>
              <input type="text" inputmode="decimal" id="wb-fuel" value="${wb.fuel}" onchange="updateWB('fuel', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.fuel) || 0) / 3.78541).toFixed(1)} gal / ${fuelW.toFixed(1)} lbs</div>
            </div>
            <div class="input-group">
              <label>Portaequipajes (kg)</label>
              <input type="text" inputmode="decimal" id="wb-baggage" value="${wb.baggage}" onchange="updateWB('baggage', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.baggage) || 0) * 2.20462).toFixed(1)} lbs</div>
            </div>
          </div>
          
          <h4 style="margin-bottom:10px">Opcionales</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
            <div class="input-group">
              <label>Gancho de Carga (kg)</label>
              <input type="text" inputmode="decimal" id="wb-hook" value="${wb.cargo_hook}" onchange="updateWB('cargo_hook', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${((parseFloat(wb.cargo_hook) || 0) * 2.20462).toFixed(1)} lbs</div>
            </div>
            <div class="input-group">
              <label>Aceite (Galones)</label>
              <input type="text" inputmode="decimal" id="wb-oil" value="${wb.oil_qty}" onchange="updateWB('oil_qty', this.value)" />
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${oilW.toFixed(1)} lbs</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card wb-graph-box">
          <h3 style="font-size:13px;margin-bottom:6px;color:var(--text2)">Envolvente de CG Longitudinal</h3>
          <svg width="280" height="200" style="background:#0a0f1d;border-radius:8px;border:1px solid var(--border)">
            <line x1="${getX(106)}" y1="20" x2="${getX(106)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="${getX(110)}" y1="20" x2="${getX(110)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="${getX(114)}" y1="20" x2="${getX(114)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="40" y1="${getY(2000)}" x2="270" y2="${getY(2000)}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="40" y1="${getY(3000)}" x2="270" y2="${getY(3000)}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            
            <text x="35" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">104</text>
            <text x="${getX(106)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">106</text>
            <text x="${getX(110)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">110</text>
            <text x="${getX(114)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">114</text>
            <text x="35" y="${getY(1400)}" fill="var(--text3)" font-size="8" text-anchor="end">1.4k</text>
            <text x="35" y="${getY(2000)}" fill="var(--text3)" font-size="8" text-anchor="end">2.0k</text>
            <text x="35" y="${getY(3000)}" fill="var(--text3)" font-size="8" text-anchor="end">3.0k</text>
            <text x="35" y="${getY(3350)}" fill="var(--text3)" font-size="8" text-anchor="end">3.35k</text>
            
            <path d="${envPath}" fill="rgba(0,224,168,0.05)" stroke="var(--green)" stroke-width="1.5" />
            <path d="${hookPath}" fill="rgba(0,153,255,0.05)" stroke="var(--blue2)" stroke-width="1.2" stroke-dasharray="2,2" />
            
            ${totalW > 0 && cgLong >= 104 && cgLong <= 116 ? `
              <circle cx="${currentX}" cy="${currentY}" r="5" fill="${inLimits?'var(--green)':'var(--red)'}" />
              <circle cx="${currentX}" cy="${currentY}" r="9" fill="none" stroke="${inLimits?'var(--green)':'var(--red)'}" stroke-width="1">
                <animate attributeName="r" values="5;11;5" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            `:''}
          </svg>
        </div>
        
        <div class="card wb-graph-box">
          <h3 style="font-size:13px;margin-bottom:6px;color:var(--text2)">Envolvente de CG Lateral</h3>
          <svg width="280" height="200" style="background:#0a0f1d;border-radius:8px;border:1px solid var(--border)">
            <line x1="${getXLat(-3)}" y1="20" x2="${getXLat(-3)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="${getXLat(0)}" y1="20" x2="${getXLat(0)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="${getXLat(4)}" y1="20" x2="${getXLat(4)}" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="40" y1="${getYLat(2000)}" x2="270" y2="${getYLat(2000)}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            <line x1="40" y1="${getYLat(3000)}" x2="270" y2="${getYLat(3000)}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" />
            
            <text x="${getXLat(-3)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">-3.0L</text>
            <text x="${getXLat(0)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">0.0</text>
            <text x="${getXLat(4)}" y="195" fill="var(--text3)" font-size="8" text-anchor="middle">+4.0R</text>
            <text x="35" y="${getYLat(1400)}" fill="var(--text3)" font-size="8" text-anchor="end">1.4k</text>
            <text x="35" y="${getYLat(2000)}" fill="var(--text3)" font-size="8" text-anchor="end">2.0k</text>
            <text x="35" y="${getYLat(3000)}" fill="var(--text3)" font-size="8" text-anchor="end">3.0k</text>
            <text x="35" y="${getYLat(3350)}" fill="var(--text3)" font-size="8" text-anchor="end">3.35k</text>
            
            <path d="${latPath}" fill="rgba(0,224,168,0.05)" stroke="var(--green)" stroke-width="1.5" />
            <path d="${latHookPath}" fill="rgba(0,153,255,0.05)" stroke="var(--blue2)" stroke-width="1.2" stroke-dasharray="2,2" />
            
            ${totalW > 0 && cgLat >= -4 && cgLat <= 5 ? `
              <circle cx="${currentXLat}" cy="${currentYLat}" r="5" fill="${inLimits?'var(--green)':'var(--red)'}" />
              <circle cx="${currentXLat}" cy="${currentYLat}" r="9" fill="none" stroke="${inLimits?'var(--green)':'var(--red)'}" stroke-width="1">
                <animate attributeName="r" values="5;11;5" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            `:''}
          </svg>
        </div>
      </div>
    </div>
    
    <div class="card wb-result-card" style="border-left: 4px solid ${inLimits?'var(--green)':'var(--red)'}">
      <h3 style="margin-bottom:10px;color:${inLimits?'var(--green)':'var(--red)'}">
        ${inLimits ? '✅ CONFIGURACIÓN DE CARGA EXCELENTE (DENTRO DE LÍMITES)' : '❌ ADVERTENCIA: FUERA DE LÍMITES OPERACIONALES'}
      </h3>
      
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        <div style="background:var(--bg3);border-radius:var(--radius);padding:10px">
          <div class="tag">Peso Bruto Total</div>
          <div style="font-size:16px;font-weight:700;color:var(--text)">${totalW.toFixed(1)} lbs</div>
          <div style="font-size:12px;color:var(--blue2);font-weight:500">${(totalW * 0.45359237).toFixed(1)} kg</div>
          <span style="font-size:10px;color:var(--text3)">Límite: ${maxStructuralW} lbs / ${(maxStructuralW * 0.45359237).toFixed(0)} kg</span>
        </div>
        
        <div style="background:var(--bg3);border-radius:var(--radius);padding:10px">
          <div class="tag">CG Longitudinal</div>
          <div style="font-size:16px;font-weight:700;color:var(--text)">${cgLong.toFixed(2)} in</div>
          <div style="font-size:12px;color:var(--blue2);font-weight:500">${(cgLong * 25.4).toFixed(0)} mm</div>
          <span style="font-size:10px;color:var(--text3)">Límites: ${cgLongMin.toFixed(1)} - ${cgLongMax.toFixed(2)} in / ${(cgLongMin*25.4).toFixed(0)} - ${(cgLongMax*25.4).toFixed(0)} mm</span>
        </div>
        
        <div style="background:var(--bg3);border-radius:var(--radius);padding:10px">
          <div class="tag">CG Lateral</div>
          <div style="font-size:16px;font-weight:700;color:var(--text)">${cgLat.toFixed(2)} in</div>
          <div style="font-size:12px;color:var(--blue2);font-weight:500">${(cgLat * 25.4).toFixed(1)} mm</div>
          <span style="font-size:10px;color:var(--text3)">Límites: -3.0L - +4.0R in / -76L - +101R mm</span>
        </div>
      </div>
      
      ${baggageW > 250 ? `<div class="danger-box alarm-blink" style="margin-top:10px"><p>⚠ EXCESO DE PESO EN PORTAEQUIPAJES: El compartimento intermedio está limitado a un máximo estricto de <strong>113.4 kg (250 lbs)</strong>.</p></div>`:''}
      ${fuelL > 344.5 ? `<div class="danger-box alarm-blink" style="margin-top:10px"><p>⚠ EXCESO DE COMBUSTIBLE: La capacidad máxima del tanque de vejiga es de <strong>344.5 litros (91 galones)</strong>.</p></div>`:''}
    </div>
  </div>`;
}

window.updateWB = (field, val) => {
  // Store the ID of the field we are editing to ensure we can restore focus/cursor
  let id = 'wb-' + field.replace(/_/g, '-');
  if (field.startsWith('rear_')) {
    id = 'wb-rear-' + field.substring(5);
  }
  state.currentlyEditingId = id;

  // Allow only numbers, one decimal point, and negative sign
  val = val.replace(/[^0-9.-]/g, '');
  const parts = val.split('.');
  if (parts.length > 2) {
    val = parts[0] + '.' + parts.slice(1).join('');
  }
  state.weight_balance[field] = val;
  render();
};

window.resetWeightBalance = () => {
  state.weight_balance = {
    empty_weight: 727.6, // kg
    empty_arm: 111.0,
    empty_lat_arm: 0.0,
    oil_qty: 1.5,
    pilot: 77.1, // kg
    copilot: 0,
    rear_left: 0,
    rear_center: 0,
    rear_right: 0,
    fuel: 189.3, // L
    baggage: 0,
    cargo_hook: 0
  };
  render();
};

function renderPerformance() {
  const perf = state.performance;
  const wb = state.weight_balance;
  
  const emptyW_kg = parseFloat(wb.empty_weight) || 0;
  const oilW = parseFloat(wb.oil_qty) * 7.5; // oilW in lbs
  const pilotW_kg = parseFloat(wb.pilot) || 0;
  const copilotW_kg = parseFloat(wb.copilot) || 0;
  const rlW_kg = parseFloat(wb.rear_left) || 0;
  const rcW_kg = parseFloat(wb.rear_center) || 0;
  const rrW_kg = parseFloat(wb.rear_right) || 0;
  const fuelL = parseFloat(wb.fuel) || 0;
  const baggageW_kg = parseFloat(wb.baggage) || 0;
  const hookW_kg = parseFloat(wb.cargo_hook) || 0;
  
  const emptyW = emptyW_kg * 2.20462262;
  const pilotW = pilotW_kg * 2.20462262;
  const copilotW = copilotW_kg * 2.20462262;
  const rlW = rlW_kg * 2.20462262;
  const rcW = rcW_kg * 2.20462262;
  const rrW = rrW_kg * 2.20462262;
  const fuelW = fuelL * (6.7 / 3.785411784);
  const baggageW = baggageW_kg * 2.20462262;
  const hookW = hookW_kg * 2.20462262;
  
  const currentWeight = emptyW + oilW + pilotW + copilotW + rlW + rcW + rrW + fuelW + baggageW + hookW;
  
  const pressAlt = parseFloat(perf.alt_press) || 0;
  const oat = parseFloat(perf.oat) || 0;
  const isaTemp = 15 - 0.0019816 * pressAlt;
  const densAlt = pressAlt + 120 * (oat - isaTemp);
  
  let maxIGE = 3200;
  if (densAlt > 5000) {
    maxIGE = 3200 - ((densAlt - 5000) / 15000) * 1200;
  }
  
  let maxOGE = 3200;
  if (densAlt > 3000) {
    maxOGE = 3200 - ((densAlt - 3000) / 13000) * 1200;
  }
  
  if (perf.anti_ice) {
    maxIGE -= 220;
    maxOGE -= 295;
  }
  
  let climbPenalty = 0;
  let weightPenalty = 0;
  if (perf.doors === 'rear_off') {
    climbPenalty = 350;
    weightPenalty = 100;
  } else if (perf.doors === 'front_off') {
    climbPenalty = 450;
    weightPenalty = 150;
  } else if (perf.doors === 'all_off') {
    climbPenalty = 600;
    weightPenalty = 250;
  }
  
  maxIGE -= weightPenalty;
  maxOGE -= weightPenalty;
  
  if (maxIGE < 1400) maxIGE = 1400;
  if (maxOGE < 1400) maxOGE = 1400;
  
  let climbRate = 1350 - (densAlt * 0.05);
  const excessW = currentWeight - 1604;
  climbRate -= (excessW * 0.5);
  
  if (perf.anti_ice) climbRate -= 240;
  climbRate -= climbPenalty;
  if (climbRate < 0) climbRate = 0;
  
  let tqRequired = 72 + (densAlt * 0.0015);
  tqRequired += (oat - 15) * 0.05;
  tqRequired += (currentWeight - 3200) * 0.025;
  if (perf.anti_ice) tqRequired += 5.0;
  
  const canHoverIGE = currentWeight <= maxIGE;
  const canHoverOGE = currentWeight <= maxOGE;
  const powerOk = tqRequired <= 100;

  return `
  <div class="view-enter">
    <div class="flex-between" style="margin-bottom:14px">
      <h2>📊 Cálculos de Rendimiento (Performance)</h2>
      <span class="badge badge-blue">Peso actual: ${currentWeight.toFixed(0)} lbs / ${(currentWeight * 0.45359237).toFixed(1)} kg</span>
    </div>
    
    <div class="perf-grid">
      <div class="card">
        <h3 style="margin-bottom:12px;color:var(--amber2)">📥 Parámetros Atmosféricos</h3>
        
        <div class="wb-input-group">
          <label>Altitud de Presión (ft / ${(pressAlt * 0.3048).toFixed(0)} m)</label>
          <input type="text" inputmode="decimal" id="perf-alt-press" value="${perf.alt_press}" oninput="updatePerf('alt_press', this.value)" style="margin-bottom:8px" />
          
          <label>Temperatura Exterior (OAT °C)</label>
          <input type="text" inputmode="decimal" id="perf-oat" value="${perf.oat}" oninput="updatePerf('oat', this.value)" style="margin-bottom:8px" />
          
          <div style="display:flex;align-items:center;gap:8px;margin:10px 0">
            <input type="checkbox" id="perf-antiice" ${perf.anti_ice?'checked':''} onchange="updatePerf('anti_ice', this.checked)" style="width:16px;height:16px" />
            <label for="perf-antiice" style="margin-bottom:0;cursor:pointer">Calefacción / Anti-Hielo de Motor (ON)</label>
          </div>
          
          <label>Configuración de Puertas</label>
          <select id="perf-doors" onchange="updatePerf('doors', this.value)" style="background:var(--bg3);border:1.5px solid var(--border2);border-radius:var(--radius);padding:11px 16px;color:var(--text);font-size:14px;width:100%;margin-bottom:14px">
            <option value="installed" ${perf.doors==='installed'?'selected':''}>Todas instaladas</option>
            <option value="rear_off" ${perf.doors==='rear_off'?'selected':''}>Puertas traseras quitadas (-350 ft/min / -1.78 m/s R/C)</option>
            <option value="front_off" ${perf.doors==='front_off'?'selected':''}>Puertas delanteras quitadas (-450 ft/min / -2.29 m/s R/C)</option>
            <option value="all_off" ${perf.doors==='all_off'?'selected':''}>Todas las puertas quitadas (-600 ft/min / -3.05 m/s R/C)</option>
          </select>
        </div>
      </div>
      
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <h3 style="margin-bottom:10px;color:var(--blue2)">📈 Resultados Calculados</h3>
          
          <div class="data-row">
            <span class="data-label">Altitud de Densidad</span>
            <span class="data-value" style="color:var(--text)">${densAlt.toFixed(0)} pies / ${(densAlt * 0.3048).toFixed(0)} m</span>
          </div>
          
          <div class="data-row">
            <span class="data-label">Techo Estacionario IGE (Máx Peso)</span>
            <span class="data-value" style="color:${canHoverIGE?'var(--green)':'var(--red)'}">${maxIGE.toFixed(0)} lbs / ${(maxIGE * 0.45359237).toFixed(0)} kg</span>
          </div>
          
          <div class="data-row">
            <span class="data-label">Techo Estacionario OGE (Máx Peso)</span>
            <span class="data-value" style="color:${canHoverOGE?'var(--green)':'var(--red)'}">${maxOGE.toFixed(0)} lbs / ${(maxOGE * 0.45359237).toFixed(0)} kg</span>
          </div>
          
          <div class="data-row">
            <span class="data-label">Razón de Ascenso (R/C Máx)</span>
            <span class="data-value" style="color:var(--text)">${climbRate > 0 ? climbRate.toFixed(0) + ' ft/min / ' + (climbRate * 0.00508).toFixed(2) + ' m/s' : 'No es posible el ascenso'}</span>
          </div>
          
          <div class="data-row">
            <span class="data-label">Torque Requerido (Power Check)</span>
            <span class="data-value" style="color:${powerOk?'var(--amber2)':'var(--red)'}">${tqRequired.toFixed(1)}%</span>
          </div>
        </div>
        
        <div class="card">
          <h3 style="font-size:13px;margin-bottom:8px">Análisis de Capacidad Operativa</h3>
          <p style="font-size:13px;line-height:1.6">
            Para el peso actual de <strong>${currentWeight.toFixed(0)} lbs (${(currentWeight * 0.45359237).toFixed(0)} kg)</strong> en la atmósfera especificada:<br>
            • Estacionario IGE: ${canHoverIGE?'<span style="color:var(--green)">✓ Posible</span>':'<span style="color:var(--red)">✗ Peso excede capacidad IGE</span>'}<br>
            • Estacionario OGE: ${canHoverOGE?'<span style="color:var(--green)">✓ Posible</span>':'<span style="color:var(--red)">✗ Peso excede capacidad OGE</span>'}<br>
            • Límite de Torque: ${powerOk?'<span style="color:var(--green)">✓ Dentro de límites motor</span>':'<span style="color:var(--red)">✗ Excede 100% Torque (¡Peligro!)</span>'}
          </p>
        </div>
      </div>
    </div>
  </div>`;
}

window.updatePerf = (field, val) => {
  let id = 'perf-' + field.replace(/_/g, '-');
  state.currentlyEditingId = id;

  if (field === 'anti_ice') {
    state.performance.anti_ice = val;
  } else if (field === 'doors') {
    state.performance.doors = val;
  } else {
    // Allow only numbers, one decimal point, and negative sign
    val = val.replace(/[^0-9.-]/g, '');
    const parts = val.split('.');
    if (parts.length > 2) {
      val = parts[0] + '.' + parts.slice(1).join('');
    }
    state.performance[field] = val;
  }
  render();
};

function renderHVDiagram() {
  const perf = state.performance;
  const wb = state.weight_balance;
  
  const emptyW_kg = parseFloat(wb.empty_weight) || 0;
  const oilW = parseFloat(wb.oil_qty) * 7.5; // oilW in lbs
  const pilotW_kg = parseFloat(wb.pilot) || 0;
  const copilotW_kg = parseFloat(wb.copilot) || 0;
  const rlW_kg = parseFloat(wb.rear_left) || 0;
  const rcW_kg = parseFloat(wb.rear_center) || 0;
  const rrW_kg = parseFloat(wb.rear_right) || 0;
  const fuelL = parseFloat(wb.fuel) || 0;
  const baggageW_kg = parseFloat(wb.baggage) || 0;
  const hookW_kg = parseFloat(wb.cargo_hook) || 0;
  
  const emptyW = emptyW_kg * 2.20462262;
  const pilotW = pilotW_kg * 2.20462262;
  const copilotW = copilotW_kg * 2.20462262;
  const rlW = rlW_kg * 2.20462262;
  const rcW = rcW_kg * 2.20462262;
  const rrW = rrW_kg * 2.20462262;
  const fuelW = fuelL * (6.7 / 3.785411784);
  const baggageW = baggageW_kg * 2.20462262;
  const hookW = hookW_kg * 2.20462262;
  
  const currentWeight = emptyW + oilW + pilotW + copilotW + rlW + rcW + rrW + fuelW + baggageW + hookW;
  
  const pressAlt = parseFloat(perf.alt_press) || 0;
  const oat = parseFloat(perf.oat) || 0;
  const isaTemp = 15 - 0.0019816 * pressAlt;
  const densAlt = pressAlt + 120 * (oat - isaTemp);
  
  const flightHeight = perf.flight_height !== undefined ? perf.flight_height : 150;
  const flightSpeed = perf.flight_speed !== undefined ? perf.flight_speed : 60;
  
  const F = 1.0 + Math.max(0, densAlt / 10000) * 0.18 + Math.max(0, (currentWeight - 2500) / 1000) * 0.15;
  
  const getX = (v) => 40 + (v / 120) * 220;
  const getY = (h) => 190 - (h / 600) * 160;
  
  const hPoints = [
    {x: 0, y: 10},
    {x: 22 * F, y: 80},
    {x: 46 * F, y: 250},
    {x: 49 * F, y: 400 * F > 520 ? 520 : 400 * F},
    {x: 32 * F, y: 480 * F > 550 ? 550 : 480 * F},
    {x: 0, y: 520 * F > 560 ? 560 : 520 * F}
  ];
  const hPath = `M ${getX(hPoints[0].x)} ${getY(hPoints[0].y)} ` + 
                hPoints.slice(1).map(p => `L ${getX(p.x)} ${getY(p.y)}`).join(' ') + 
                ` L ${getX(0)} ${getY(hPoints[5].y)} Z`;
                
  const lPoints = [
    {x: 80 / F, y: 0},
    {x: 90 / F, y: 15},
    {x: 120, y: 15},
    {x: 120, y: 0}
  ];
  const lPath = `M ${getX(lPoints[0].x)} ${getY(lPoints[0].y)} L ${getX(lPoints[1].x)} ${getY(lPoints[1].y)} L ${getX(lPoints[2].x)} ${getY(lPoints[2].y)} L ${getX(lPoints[3].x)} ${getY(lPoints[3].y)} Z`;
  
  let avoidSpeedLimit = 0;
  const h = flightHeight;
  if (h >= 10 && h < 80) {
    avoidSpeedLimit = 0 + ((h - 10) / 70) * 22 * F;
  } else if (h >= 80 && h < 250) {
    avoidSpeedLimit = 22 * F + ((h - 80) / 170) * 24 * F;
  } else if (h >= 250 && h < 400 * F) {
    avoidSpeedLimit = 46 * F + ((h - 250) / (400 * F - 250)) * 3 * F;
  } else if (h >= 400 * F && h < 480 * F) {
    avoidSpeedLimit = 49 * F - ((h - 400 * F) / (80 * F)) * 17 * F;
  } else if (h >= 480 * F && h <= 520 * F) {
    avoidSpeedLimit = 32 * F - ((h - 480 * F) / (40 * F)) * 32 * F;
  }
  
  const isInsideAvoid1 = flightSpeed < avoidSpeedLimit && h >= 10 && h <= 520 * F;
  const isInsideAvoid2 = h < 15 && flightSpeed > (80 / F);
  const isDeadMan = isInsideAvoid1 || isInsideAvoid2;
  
  return `
  <div class="view-enter">
    <div class="flex-between" style="margin-bottom:14px">
      <h2>📈 Gráfico de Altura-Velocidad (Hombre Muerto)</h2>
      <span class="badge ${isDeadMan?'badge-red':'badge-green'}">${isDeadMan?'⚠️ ZONA EVITAR':'✅ OPERACIÓN SEGURA'}</span>
    </div>
    
    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px">
      <div class="card" style="display:flex;flex-direction:column;align-items:center;padding:20px">
        <h3 style="font-size:14px;margin-bottom:10px;color:var(--text2)">Curva de Altura vs Velocidad Relativa</h3>
        
        <svg width="320" height="240" style="background:#0a0f1d;border-radius:12px;border:1px solid var(--border)">
          <line x1="40" y1="${getY(100)}" x2="310" y2="${getY(100)}" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="40" y1="${getY(200)}" x2="310" y2="${getY(200)}" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="40" y1="${getY(300)}" x2="310" y2="${getY(300)}" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="40" y1="${getY(400)}" x2="310" y2="${getY(400)}" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="40" y1="${getY(500)}" x2="310" y2="${getY(500)}" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          
          <line x1="${getX(20)}" y1="20" x2="${getX(20)}" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="${getX(40)}" y1="20" x2="${getX(40)}" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="${getX(60)}" y1="20" x2="${getX(60)}" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="${getX(80)}" y1="20" x2="${getX(80)}" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          <line x1="${getX(100)}" y1="20" x2="${getX(100)}" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
          
          <text x="35" y="225" fill="var(--text3)" font-size="8" text-anchor="middle">0</text>
          <text x="${getX(40)}" y="225" fill="var(--text3)" font-size="8" text-anchor="middle">40</text>
          <text x="${getX(80)}" y="225" fill="var(--text3)" font-size="8" text-anchor="middle">80</text>
          <text x="${getX(120)}" y="225" fill="var(--text3)" font-size="8" text-anchor="middle">120</text>
          
          <text x="35" y="${getY(0)}" fill="var(--text3)" font-size="8" text-anchor="end">0</text>
          <text x="35" y="${getY(200)}" fill="var(--text3)" font-size="8" text-anchor="end">200</text>
          <text x="35" y="${getY(400)}" fill="var(--text3)" font-size="8" text-anchor="end">400</text>
          <text x="35" y="${getY(600)}" fill="var(--text3)" font-size="8" text-anchor="end">600 ft</text>
          
          <path d="${hPath}" fill="rgba(255,69,96,0.22)" stroke="var(--red)" stroke-width="1.8" />
          <path d="${lPath}" fill="rgba(255,69,96,0.22)" stroke="var(--red)" stroke-width="1.8" />
          
          <circle cx="${getX(flightSpeed)}" cy="${getY(flightHeight)}" r="6" fill="${isDeadMan?'var(--red)':'var(--green)'}" />
          <circle cx="${getX(flightSpeed)}" cy="${getY(flightHeight)}" r="10" fill="none" stroke="${isDeadMan?'var(--red)':'var(--green)'}" stroke-width="1">
            <animate attributeName="r" values="6;13;6" dur="1.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
        
        <div style="margin-top:14px;font-size:11px;color:var(--text3);text-align:center">
          Eje X: Velocidad (MPH / km/h) | Eje Y: Altura sobre el suelo (Pies / Metros)
        </div>
      </div>
      
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="card">
          <h3 style="margin-bottom:10px;color:var(--amber2)">🕹️ Control de Vuelo</h3>
          <p style="font-size:12.5px;color:var(--text2);margin-bottom:12px">Mueve los deslizadores para simular tu perfil de vuelo:</p>
          
          <div class="wb-input-group">
            <div style="display:flex;justify-content:space-between">
              <label>Velocidad: <strong>${flightSpeed} MPH / ${(flightSpeed*1.60934).toFixed(0)} km/h</strong></label>
              <span class="metric">${(flightSpeed*0.868976).toFixed(0)} nudos (kts)</span>
            </div>
            <input type="range" id="perf-flight-speed" min="0" max="120" value="${flightSpeed}" oninput="updatePerf('flight_speed', this.value)" style="margin-bottom:12px;width:100%" />
            
            <div style="display:flex;justify-content:space-between">
              <label>Altura: <strong>${flightHeight} FT / ${(flightHeight*0.3048).toFixed(0)} m</strong></label>
              <span class="metric">${(flightHeight*0.3048).toFixed(1)} metros</span>
            </div>
            <input type="range" id="perf-flight-height" min="0" max="600" step="5" value="${flightHeight}" oninput="updatePerf('flight_height', this.value)" style="width:100%" />
          </div>
        </div>
        
        <div class="card" style="border-left: 4px solid ${isDeadMan?'var(--red)':'var(--green)'}">
          <h3 style="margin-bottom:8px;color:${isDeadMan?'var(--red)':'var(--green)'}">
            ${isDeadMan ? '⚠️ ESTADO CRÍTICO: EVITAR' : '✅ ESTADO DE VUELO SEGURO'}
          </h3>
          <p style="font-size:13px;line-height:1.6;color:var(--text2)">
            ${isDeadMan 
              ? 'Te encuentras dentro de la **envolvente de evitación de altura-velocidad**. En caso de falla de motor, la energía del rotor y la velocidad no permitirán realizar una transición segura a autorrotación para amortiguar el impacto.' 
              : 'Te encuentras en una zona segura de operación. En caso de falla de motor, dispones de la altura necesaria para acelerar o la velocidad necesaria para ejecutar una guiñada y planeo correctos hacia un aterrizaje forzoso controlado.'}
          </p>
          <div style="background:var(--bg3);border-radius:var(--radius);padding:8px;margin-top:10px;font-size:11px;color:var(--text3)">
            Factor de Ensanchamiento de Curva: <strong>${F.toFixed(2)}x</strong> (Escala según altitud de densidad y peso bruto actual: ${currentWeight.toFixed(0)} lbs / ${(currentWeight*0.453592).toFixed(0)} kg y altitud ${densAlt.toFixed(0)} ft / ${(densAlt*0.3048).toFixed(0)} m).
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderChecklists() {
  const activeTab = state.activeChecklistTab;
  const activeId = state.activeChecklistId;
  const lists = CHECKLISTS[activeTab];
  const list = lists.find(l => l.id === activeId) || lists[0];
  
  return `
  <div class="view-enter">
    <div class="flex-between" style="margin-bottom:14px">
      <h2>📋 Listas de Chequeo Interactivas</h2>
      <button class="btn btn-sm" onclick="resetActiveChecklist()">Restablecer Lista</button>
    </div>
    
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <button class="btn btn-sm ${activeTab==='normales'?'btn-primary':''}" onclick="setChecklistTab('normales')">Normales</button>
      <button class="btn btn-sm btn-danger ${activeTab==='emergencias'?'btn-primary':''}" onclick="setChecklistTab('emergencias')" style="border-color:var(--red);color:${activeTab==='emergencias'?'#000':'var(--red)'}">🚨 Emergencias</button>
    </div>
    
    <div class="chk-layout">
      <div class="chk-sidebar">
        ${lists.map(l => `
          <button class="chk-sidebar-btn ${l.id === activeId ? 'active' : ''} ${activeTab==='emergencias'?'emergency':''}" onclick="setActiveChecklist('${l.id}')">
            ${l.title}
          </button>
        `).join('')}
      </div>
      
      <div class="chk-list">
        <h3 style="margin-bottom:12px;color:${activeTab==='emergencias'?'var(--red)':'var(--amber)'}">${list.title}</h3>
        
        ${list.warning ? `
          <div class="${activeTab==='emergencias'?'danger-box':'warn-box'}" style="margin-bottom:14px">
            <p>${list.warning}</p>
          </div>
        ` : ''}
        
        <div style="display:flex;flex-direction:column">
          ${list.items.map((item, idx) => {
            const key = `${list.id}_${idx}`;
            const checked = !!state.checkedItems[key];
            return `
              <div class="chk-item ${checked?'checked':''}" onclick="toggleChecklistItem('${key}')">
                <div class="chk-checkbox"></div>
                <div class="chk-text">${item}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

window.setChecklistTab = (tab) => {
  state.activeChecklistTab = tab;
  state.activeChecklistId = CHECKLISTS[tab][0].id;
  render();
};

window.setActiveChecklist = (id) => {
  state.activeChecklistId = id;
  render();
};

window.toggleChecklistItem = (key) => {
  state.checkedItems[key] = !state.checkedItems[key];
  render();
};

window.resetActiveChecklist = () => {
  const lists = CHECKLISTS[state.activeChecklistTab];
  const list = lists.find(l => l.id === state.activeChecklistId) || lists[0];
  list.items.forEach((_, idx) => {
    const key = `${list.id}_${idx}`;
    delete state.checkedItems[key];
  });
  render();
};

function renderBody() {
  if(state.view==='intro') return renderIntro();
  if(state.view==='register') return renderRegister();
  if(state.view==='module') return renderModule();
  if(state.view==='moduleExam') return renderModuleExam();
  if(state.view==='examResult') return renderExamResult();
  if(state.view==='map') return renderMap();
  if(state.view==='finalExam') return renderFinalExam();
  if(state.view==='finalResult') return renderFinalResult();
  if(state.view==='weight_balance') return renderWeightBalance();
  if(state.view==='performance') return renderPerformance();
  if(state.view==='hv_diagram') return renderHVDiagram();
  if(state.view==='checklists') return renderChecklists();
  return '';
}

function render(){
  // Preserve focus and cursor coordinates/selection for inputs during re-renders
  const activeEl = document.activeElement;
  const activeElId = state.currentlyEditingId || (activeEl ? activeEl.id : null);
  let start = null;
  let end = null;
  
  if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
    try {
      start = activeEl.selectionStart;
      end = activeEl.selectionEnd;
    } catch(e) {}
  }
  
  // Reset currentlyEditingId
  state.currentlyEditingId = null;

  const root=document.getElementById('root');
  
  root.className = 'app app-container';
  root.innerHTML = renderSidebar() + `<div class="main-content" style="flex:1">${renderBody()}</div>`;
  
  // Restore focus and selection range (both synchronously and deferred for paint cycle)
  if (activeElId) {
    const restoreFocus = () => {
      const el = document.getElementById(activeElId);
      if (el) {
        try {
          el.focus();
          
          let posStart = (start !== null) ? start : el.value.length;
          let posEnd = (end !== null) ? end : el.value.length;
          
          // Force cursor to the end if it reset to 0 but the value is not empty (anti-reverse typing)
          if (posStart === 0 && el.value.length > 0) {
            posStart = el.value.length;
            posEnd = el.value.length;
          }
          
          el.setSelectionRange(posStart, posEnd);
        } catch(e) {}
      }
    };
    restoreFocus();
    setTimeout(restoreFocus, 0);
  }
  
  // Auto-trigger score pops / confetti on results
  if (state.view === 'examResult') {
    const m=MODULES[state.currentModule];
    const correct=m.quiz.filter((q,i)=>state.examAnswers[i]===q.ans).length;
    if(correct>=4) setTimeout(launchConfetti, 300);
  } else if (state.view === 'finalResult') {
    const correct=FINAL_EXAM.filter((q,i)=>state.finalAnswers[i]===q.ans).length;
    if(correct>=24) setTimeout(()=>launchConfetti(true), 400);
  }

  if(state.adminOpen) showAdminPanel();
  saveState();
  
  if(root.querySelector('.main-content > div') || root.firstElementChild) {
    const el = root.querySelector('.main-content > div') || root.firstElementChild;
    el.classList.add('view-enter');
  }
  
  root.querySelectorAll('.btn, .sidebar-btn').forEach(btn=>{
    btn.addEventListener('click',function(e){
      const r=document.createElement('span');
      r.className='ripple';
      const rect=btn.getBoundingClientRect();
      const size=Math.max(rect.width,rect.height);
      r.style.cssText=`width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
      btn.appendChild(r);
      setTimeout(()=>r.remove(),600);
    },{once:true});
  });
}

render();

