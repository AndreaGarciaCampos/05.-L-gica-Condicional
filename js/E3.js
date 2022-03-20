alert('CALCULAR EL MAYOR DE 3 DIGITOS');

var num1,num2,num3,m,mayor;
	num1 = parseInt(prompt("Ingrese el primer digito:"));
	num2 = parseInt(prompt("Ingrese el segundo digito:"));
	num3 = parseInt(prompt("Ingrese el tercer digito:"));
    
	if (num1 > num2) {
		m = num1;
	}else{
		m = num2;
	}

	if (m > num3) {
		mayor = m;
	}else{
		mayor = num3;
	}

	document.write("El mayor es "+mayor);