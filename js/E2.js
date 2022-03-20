
alert('Ingrese temperatura');

var temp = prompt('Ingrese la temperatura en °F', '');
var celsius = ((temp -32)* (5/9));
document.write(`<p>Temperatura °C: ${celsius}</p>`);
