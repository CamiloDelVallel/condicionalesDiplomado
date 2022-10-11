// 1 Un número primo es una cantidad entera positiva únicamente divisible por uno o por sí mismo. Calcular y tabular los n primeros números primos.

const buttonPrimo = document.getElementById('primos');
buttonPrimo = addEventListener('click', primos(n));

function primos(n) {
    n = prompt('Elija n');
    let primo = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    let respuesta = [];
    if (primo.indexOf(n) !== -1) {
        for (let i = 0; i <= primo.indexOf(n); i++) {
            let array = respuesta.push(primo[i]);
           }
        console.log("Los primos hasta el " + n + " son: " + respuesta.toString());
    } else {
        console.log(n + ' no es un número primo')
    }
}

primos(11);
primos(97);
primos(100);


// 2. Escriba un programa que lea un valor entero positivo y determine:
// a) Si el entero es un número primo.
// b) Si el entero es un número de Fibonacci. (Los números de Fibonacci forman una secuencia en la cual cada número es igual a la suma de los dos anteriores, siendo los dos primeros números iguales a 1)

function numero(n){
    let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149];
    let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    if (primos.indexOf(n) !== -1 && fibonacci.indexOf(n) !== -1){
        console.log(n + " es un número primo y también de fibonacci");
    } else if (primos.indexOf(n) === -1 && fibonacci.indexOf(n) !== -1) {
        console.log(n + " es un número fibonacci");
    } else if (primos.indexOf(n) !== -1 && fibonacci.indexOf(n) === -1) {
        console.log(n + " es un número primo");
    } else {
        console.log("Por favor selecciona un número entero positivo entre 1 y 150");
    }
}

numero(0);
numero(2);
numero(11);
numero(21);
numero(55);
numero(-3);
numero(6.5);
numero(151);



//  3. Un entrenador le ha propuesto a un atleta recorrer una ruta de cinco kilómetros durante 10 días, para determinar si es apto para la prueba de 5 Kilómetros o debe buscar otra especialidad. Para considerarlo apto debe cumplir por lo menos una de las siguientes condiciones:
// 	- Que en ninguna de las pruebas haga un tiempo mayor a 16 minutos.
// 	- Que al menos en una de las pruebas realice un tiempo mayor a 16 minutos.
// 	- Que su promedio de tiempos sea menor o igual a 15 minutos.

function apto(tiempos){
    for (let i = 0; i < tiempos.length; i++) {
        let sumaTiempos = 0;
        sumaTiempos = sumaTiempos + tiempos[i];
        if(tiempos[i] <= 16 || tiempos[i] > 16 || (sumaTiempos/tiempos.length) <= 15 ){}}
    console.log("Es apto para la prueba de 5 km.")
}

apto([12,13,14,15,16]);
apto([18,15,15,15,15]);


// 4. Obtener el promedio de calificaciones de un grupo de n alumnos.

function promedio(calificaciones){
    let resultado = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        resultado = resultado + calificaciones[i]
    }
    let prom = resultado / calificaciones.length;
    console.log("El promedio de califincaciones del grupo es: " + prom);
}

promedio([3,4,5,4.5,3.8]);
promedio([3,4,5,4.5,3.8,1,3,6,9,10]);


// 5. Se desea obtener el promedio de g grupos que están en un mismo año escolar; siendo que cada grupo puede tener n alumnos que cada alumno puede llevar m materias y que en todas las materias se promedian tres calificaciones para obtener el promedio de la materia. Lo que se desea desplegar es el promedio de los grupos, el promedio de cada grupo y el promedio de cada alumno.

function promedioGrupos(grupos){
    function promedioGrupos(grupos){
        grupos = [];
        for (let i = 0; i < grupos.length; i++) {
            const grupos = grupos.array[i];
        }
        function alumno(materias){

            function materia(calificaciones){
            let sumaCalificaciones;
            for (let i = 0; i < calificaciones.length; i++) {
                sumaCalificaciones = sumaCalificaciones + calificaciones[i]
            }
            let promedioMateria = sumaCalificaciones / calificaciones.length
            return promedioMateria
            }

            let sumaMaterias;
            for (let i = 0; i < materias.length; i++) {
                sumaMaterias = sumaMaterias + materias[i]
            }
            let promedioAlumno = sumaCalificaciones / materias.length
            return promedioAlumno
            console.log("El promedio del alumno es: " + promedioAlumno)
        }

    }
}

calificaciones1 = [3,4,5];
calificaciones2 = [3,4,5];
calificaciones3 = [4,4,5];
calificaciones4 = [5,4,5];


// Forma 2:

function Grupos(grupo){
    this.grupo = grupo
}

function Grupo(alumno){
    this.nombre = nombre;
}

function Alumno(materia){
    this.materia = materia;
}

function Materia(calificacion){
    this.calificacion = calificacion;
}

function Calificaciones(calificacion){
    this.calificacion = calificacion
}

function promedioCalificacionesMateria (a,b,c){
    let promedio = a+b+c
}

/*
Algoritmo detarea
	Definir a,b,c Como Entero
	Definir suma1,suma2,suma3,c1,c2,c3 Como Real
	Escribir "Ingresa el total de grupos"
	leer grupos
	suma3 = 0
	para a = 1 Hasta grupos Con Paso 1 Hacer
		Escribir "Ingresa el total de alumnos"
		leer alumnos
		suma2 = 0
		para b = 1 Hasta alumnos Con Paso 1 Hacer
			Escribir "Ingresa el total de materias"
			leer materias
			suma1 = 0
			para c = 1 Hasta  materias Con Paso 1 Hacer
				Escribir "Ingresa las calificaciones: "
				leer c1,c2,c3
				suma1 = suma1 + (c1+c2+c3)/3
			FinPara
			Escribir "El promedio del alumno ",b," es: ",suma1/materias
			suma2 = suma2 + (suma1/materias)
		FinPara
		Escribir "El promedio del grupo ",a," es: ",suma2/alumnos
		suma3 = suma3 + (suma2/alumnos)
	FinPara
	Escribir "El promedio de los ",grupos," grupos es: ",suma3/grupos
FinAlgoritmo
*/

//PREGUNTAR!!!

// 6. Una persona que va de compras a la tienda “la rebaja.”, decide llevar un control sobre lo que va comprando, para saber la cantidad de dinero que tendrá que pagar al llegar a la caja. La tienda tiene una promoción del 20% de descuento sobre aquellos artículos cuya etiqueta sea roja. Determinar la cantidad de dinero que esta persona deberá pagar.

function pagar(articulos, valorArticulo, descuento){
    if(descuento === true){
        valorArticulo = (valorArticulo * 0,80)
    }
    let valorTotal
    for (let i = 0; i < articulos.length; i++) {
        const element = valorTotalarray[i];

    }
}
//PREGUNTAR!!!

// 7. Calcular la suma siguiente:
// 	100 + 98 + 96 + 94 + . . . + 0 en este orden


function suma(n){
    let parcial=0;
    for (let i = n; i >= 0; i--) {
        parcial = parcial + i;
}
    console.log(parcial);
}

suma(100);
suma(10);
suma(4);



// 8. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. Diseñe un algoritmo que lea por cada cliente, el monto total de su compra. Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.



// 9. Un jefe de casilla desea determinar cuántas personas de cada una de las secciones que componen su zona asisten el día de las votaciones. Las secciones son: norte, sur y centro. También desea determinar cuál es la sección con mayor número de votantes.

function votantes(secciones){
    let sumaNorte = 0;
    let sumaSur = 0;
    let sumaCentro = 0;
    for (let i = 0; i <= secciones.length; i++) {
        if(secciones[i] == 'norte'){
            sumaNorte = sumaNorte + 1;
        } else if (secciones[i] == 'sur'){
            sumaSur = sumaSur + 1;
        } else if (secciones[i] == 'centro'){
            sumaCentro = sumaCentro + 1;
        }
    }
    console.log('Total norte = ' + sumaNorte)
    console.log('Total sur = ' + sumaSur)
    console.log('Total centro = ' + sumaCentro)
    if(sumaNorte>sumaSur && sumaNorte>sumaCentro){
        console.log('El norte tiene la mayor cantidad de votantes')
    } else if(sumaSur>sumaNorte && sumaSur>sumaCentro){
        console.log('El sur tiene la mayor cantidad de votantes')
    } else {
    console.log('El centro tiene la mayor cantidad de votantes')
}

}

votantes(['norte','sur','norte','sur','norte','sur','centro','sur','centro']);

// 10. Leer dos números y ver en la pantalla si están en orden crecientes o decrecientes

function crecienteDecreciente(num1, num2){
    if(num1 > num2){
        console.log('Están en forma decreciente')
    } else if (num1 < num2){
        console.log('Están en forma creciente')
    } else {
        console.log('Son iguales')
    }
}

crecienteDecreciente(1,3);
crecienteDecreciente(4,2);
crecienteDecreciente(-1,-3);
crecienteDecreciente(-4,-2);
crecienteDecreciente(1,1);
