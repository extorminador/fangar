$(document).ready(function(){var e=window.matchMedia("(max-width: 767px)");e.matches?$("#hamburgare").addClass("hamburgare"):$("#hamburgare").addClass("hamburgareOpen"),$("#menuToggle").click(function(){$("#nav").toggle(),$("#hamburgare").toggleClass("hamburgareOpen")}),$(".datepicker").pickadate({firstDay:!0,selectMonths:!0,selectYears:4,labelMonthNext:"Mes siguiente",labelMonthPrev:"Mes anterior",labelMonthSelect:"Selecciona un mes",labelYearSelect:"Selecciona un año",monthsFull:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],weekdaysFull:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],weekdaysShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],weekdaysLetter:["D","L","M","X","J","V","S"],today:"Hoy",clear:"Limpiar",close:"Cerrar"}),$("select").material_select()});