var prueba = function(par1){
	
	return par1 || 10
}

var pruebaB = function(par2){
	return par2 || 20
}

var resultado = function (prueba,pruebaB) {
	
	var resultado = prueba + pruebaB;
	return resultado
}

//========================================

//funcion sin parametros retorna  NaN
console.log(resultado());
//funcion con parametros retorna 5 
console.log(resultado(2,3));
//funcion con  parametros anidados en funciones retorna 8
// o 30 si no se meten parametros
console.log(resultado(prueba(5),pruebaB(3)));
//se pueden llamar funciones dentro de otra funcion siempre y cuadno
//ésta entregue algo.


