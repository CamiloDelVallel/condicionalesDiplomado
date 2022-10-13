
// 1 Un número primo es una cantidad entera positiva únicamente divisible por uno o por sí mismo. Calcular y tabular los n primeros números primos.

let buttonPrimo = document.getElementById('primos');
let primoRespuesta = document.getElementById('primoResultado')
buttonPrimo.addEventListener('click', primos);


function primos(n) {
    n = Number(prompt("Define a n", ""));
    let primo = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    let respuesta = [];
    let resultado;
    if (primo.indexOf(n) !== -1) {
        for (let i = 0; i <= primo.indexOf(n); i++) {
            let array = respuesta.push(primo[i]);
           }
        resultado = "Los primos hasta el " + n + " son: " + respuesta.toString();
        //console.log("Los primos hasta el " + n + " son: " + respuesta.toString());
    } else {
        resultado = n + ' no es un número primo entre 1 y 1000';
        // console.log(n + ' no es un número primo')
    }
    primoRespuesta.innerHTML = resultado;
}

// 2. Escriba un programa que lea un valor entero positivo y determine:
// a) Si el entero es un número primo.
// b) Si el entero es un número de Fibonacci. (Los números de Fibonacci forman una secuencia en la cual cada número es igual a la suma de los dos anteriores, siendo los dos primeros números iguales a 1)

let buttonPrimoFibonnacci = document.getElementById('primo-fibonacci');
let primoFibonacciRespuesta = document.getElementById('primoFibonacciResultado')
buttonPrimoFibonnacci.addEventListener('click', numero);


function numero(a){
    a = Number(prompt("Ingrese un valor entero y positivo"));
    let resultado2;
    let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149];
    let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    if (primos.indexOf(a) !== -1 && fibonacci.indexOf(a) !== -1){
        resultado2 = a + " es un número primo y también de fibonacci"
        // console.log(a + " es un número primo y también de fibonacci");
    } else if (primos.indexOf(a) === -1 && fibonacci.indexOf(a) !== -1) {
        resultado2 = a + " es un número fibonacci"
        // console.log(a + " es un número fibonacci");
    } else if (primos.indexOf(a) !== -1 && fibonacci.indexOf(a) === -1) {
        resultado2 = a + " es un número primo"
        // console.log(a + " es un número primo");
    } else {
        resultado2 = "Por favor selecciona un número entero positivo entre 1 y 150 que sea primo o Fibonacci"
        // console.log("Por favor selecciona un número entero positivo entre 1 y 150");
    }
    primoFibonacciRespuesta.innerHTML = resultado2;
}

// numero(0);
// numero(2);
// numero(11);
// numero(21);
// numero(55);
// numero(-3);
// numero(6.5);
// numero(151);



//  3. Un entrenador le ha propuesto a un atleta recorrer una ruta de cinco kilómetros durante 10 días, para determinar si es apto para la prueba de 5 Kilómetros o debe buscar otra especialidad. Para considerarlo apto debe cumplir por lo menos una de las siguientes condiciones:
// 	- Que en ninguna de las pruebas haga un tiempo mayor a 16 minutos.
// 	- Que al menos en una de las pruebas realice un tiempo mayor a 16 minutos.
// 	- Que su promedio de tiempos sea menor o igual a 15 minutos.

let buttonTimes = document.getElementById('sumarInputValues');
let aptoRespuesta = document.getElementById('result');
let form = document.getElementById('tiempos');
let preguntas = document.getElementById('preguntas');
let result = document.getElementById('result');
let ti1 = document.getElementById('tiempo1');
let ti2 = document.getElementById('tiempo2');
let ti3 = document.getElementById('tiempo3');
let ti4 = document.getElementById('tiempo4');
let ti5 = document.getElementById('tiempo5');

//let inputTiempos = document.createElement('input')
buttonTimes.addEventListener('click', apto);

function apto(){
    let t1 = Number(ti1.value);
    let t2 = Number(ti2.value);
    let t3 = Number(ti3.value);
    let t4 = Number(ti4.value);
    let t5 = Number(ti5.value);

    let sumaTiempos = 0;
    sumaTiempos = (t1 + t2+ t3 + t4 + t5);
    let promedioTiempos = (sumaTiempos / 5);

    // for (let i = 0; i < tiempos.length; i++) {
    //     let sumaTiempos = 0;
    //     sumaTiempos = sumaTiempos + tiempos[i];
    if( t1 < 16  && t2<16 && t3<16 && t4<16 && t5<16 &&  promedioTiempos<= 15 ){
        result.innerText="Es apto para la prueba de 5 km.";
        return 
    } else {
        result.innerText="NO es apto para la prueba de 5 km."; 
        return   
    }
}

// apto([12,13,14,15,16]);
// apto([18,15,15,15,15]);


// 4. Obtener el promedio de calificaciones de un grupo de n alumnos.

let cantidadAlumnos = document.getElementById('cantidad-alumnos');
let grupos = document.getElementById('grupos');
let inputGrupos = document.createElement('input');
let promedio = document.getElementById('promedio');
let result4 = document.getElementById('result4');
let input = document.getElementsByTagName('input');
cantidadAlumnos.addEventListener('click', lineas);
promedio.addEventListener('click', promedio2);

let c;
function lineas(){
    c = Number(prompt("Ingrese la cantidad de alumnos"));
    for (let i = 1; i <= c; i++) {
        let idInput = grupos.appendChild(document.createElement('input'));
        idInput.id = 'alumn'+i;
        idInput.type = 'number';
    }
}

let alumno1 = document.getElementById('alumn1');
let alumno2 = document.getElementById('alumn2');
let alumno3 = document.getElementById('alumn3');
let alumno4 = document.getElementById('alumn4');
let alumno5 = document.getElementById('alumn5');
let alumno6 = document.getElementById('alumn6');
let alumno7 = document.getElementById('alumn7');
let alumno8 = document.getElementById('alumn8');
let alumno9 = document.getElementById('alumn9');
let alumno10 = document.getElementById('alumn10');

function promedio2(){
    let cal1 = Number(alumno1);
    console.log(Number(alumno1));
    console.log(cal1);
    let cal2 = Number(alumno2);
    let cal3 = Number(alumno3);
    let cal4 = Number(alumno4);
    let cal5 = Number(alumno5);
    let cal6 = Number(alumno6);
    let cal7 = Number(alumno7);
    let cal8 = Number(alumno8);
    let cal9 = Number(alumno9);
    let cal10 = Number(alumno10);
    let resultado2 = ((cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7 + cal8 + cal9 + cal10)/c);
    console.log(resultado2)
    // for (let i = 0; i < calificaciones.length; i++) {
    //     resultado = resultado + calificaciones[i]
    // }
    // let prom = resultado / calificaciones.length;
    result4.innerText = "El promedio de calificaciones del grupo es: " + resultado2; 
    console.log("El promedio de califincaciones del grupo es: " + resultado2);
}

// promedio([3,4,5,4.5,3.8]);
// promedio([3,4,5,4.5,3.8,1,3,6,9,10]);


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
            // console.log("El promedio del alumno es: " + promedioAlumno)
        }

    }
}

// calificaciones1 = [3,4,5];
// calificaciones2 = [3,4,5];
// calificaciones3 = [4,4,5];
// calificaciones4 = [5,4,5];


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

let calculo = document.getElementById('suma-100-0');
let resultado7 = document.getElementById('result7');
calculo.addEventListener('click', suma);

function suma(n){
    n = 100;
    let parcial=0;
    for (let i = n; i >= 0; i-=2) {
        parcial = parcial + i;
    }
    resultado7.innerText = "El resultado es: " + parcial; 
    console.log(parcial);
}

//suma(100);
// suma(10);
// suma(4);



// 8. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. Diseñe un algoritmo que lea por cada cliente, el monto total de su compra. Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.

/*
Proceso RegistroDeVentas
    clientes_atendidos <- 0;
    total_de_ventas <- 0;
    Repetir
        Escribir Sin Saltar "Ingresa el valor de total de la compra:";
        Leer total_de_la_compra;
        total_de_ventas <- total_de_ventas+total_de_la_compra;
        clientes_atendidos <- clientes_atendidos+1;
        Escribir "";
        Repetir
            Escribir Sin Saltar "¿Deseas repetir el proceso? (S/N):";
            Leer tecla_repetir;
        Hasta Que tecla_repetir='s' O tecla_repetir='n' O tecla_repetir='S' O tecla_repetir='N'
    Hasta Que tecla_repetir='n' O tecla_repetir='N'
    Escribir "Valor de clientes atendidos: ", clientes_atendidos;
    Escribir "Valor de total de ventas: ", total_de_ventas;
FinProceso
*/
const cliente1 = document.getElementById('cliente-1');
const cliente2 = document.getElementById('cliente-2');
const cliente3 = document.getElementById('cliente-3');
const cliente4 = document.getElementById('cliente-4');
const cliente5 = document.getElementById('cliente-5');
const cliente6 = document.getElementById('cliente-6');
const cliente7 = document.getElementById('cliente-7');
const cliente8 = document.getElementById('cliente-8');
const botonTienda = document.getElementById('boton-tienda');
const totalVentas = document.getElementById('total-ventas');
const cantidadVentas = document.getElementById('cantidad-ventas');

botonTienda.addEventListener('click', ventas);



function ventas(){
    let cl1 = Number(cliente1.value);
    let cl2 = Number(cliente2.value);
    let cl3 = Number(cliente3.value);
    let cl4 = Number(cliente4.value);
    let cl5 = Number(cliente5.value);
    let cl6 = Number(cliente6.value);
    let cl7 = Number(cliente7.value);
    let cl8 = Number(cliente8.value);
    let total9;
    total9 = (cl1 + cl2 + cl3 + cl4 + cl5 + cl6 + cl7 + cl8);
    totalVentas.innerHTML='El total de ventas es: ' + total9;
    numVentas();
}

function numVentas(){
    let numClientes = 0;
    let cl1 = Number(cliente1.value);
    let cl2 = Number(cliente2.value);
    let cl3 = Number(cliente3.value);
    let cl4 = Number(cliente4.value);
    let cl5 = Number(cliente5.value);
    let cl6 = Number(cliente6.value);
    let cl7 = Number(cliente7.value);
    let cl8 = Number(cliente8.value);

    if(cl1 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl2 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl3 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl4 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl5 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl6 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl7 !== 0){
        numClientes = numClientes + 1;
    }
    if(cl8 !== 0){
        numClientes = numClientes + 1;
    }
    //return numClientes;
    cantidadVentas.innerText='La cantidad de ventas es: ' + numClientes;
}


// 9. Un jefe de casilla desea determinar cuántas personas de cada una de las secciones que componen su zona asisten el día de las votaciones. Las secciones son: norte, sur y centro. También desea determinar cuál es la sección con mayor número de votantes.

const norte = document.getElementById('norte');
const sur = document.getElementById('sur');
const centro = document.getElementById('centro');
const result9 = document.getElementById('result9');
const result91 = document.getElementById('result91');
const votacionResultado = document.getElementById('votacion-resultado');
norte.addEventListener('click', sumaNorte);
sur.addEventListener('click', sumaSur);
centro.addEventListener('click', sumaCentro);
votacionResultado.addEventListener('click', votantes);

let sumarNorte = 0;
let sumarSur = 0;
let sumarCentro = 0;

function sumaNorte(){
    sumarNorte = sumarNorte + 1;
    console.log(sumarNorte);
}

function sumaSur(){
    sumarSur = sumarSur + 1;
    console.log(sumarSur);

}

function sumaCentro(){
    sumarCentro = sumarCentro + 1;
    console.log(sumarCentro);

}

function votantes(){

    // for (let i = 0; i <= secciones.length; i++) {
    //     if(secciones[i] == 'norte'){
    //         sumaNorte = sumaNorte + 1;
    //     } else if (secciones[i] == 'sur'){
    //         sumaSur = sumaSur + 1;
    //     } else if (secciones[i] == 'centro'){
    //         sumaCentro = sumaCentro + 1;
    //     }
    // }

    result9.innerHTML='Total norte = ' + sumarNorte + '   Total sur = ' + sumarSur +   '    Total centro = ' + sumarCentro;


    // console.log('Total sur = ' + sumaSur);
    // console.log('Total norte = ' + sumaNorte);
    // console.log('Total centro = ' + sumaCentro);
    if(sumarNorte > sumarSur && sumarNorte > sumarCentro){
        result91.innerHTML='El norte tiene la mayor cantidad de votantes';
        // console.log('El norte tiene la mayor cantidad de votantes')
    } else if(sumarSur > sumarNorte && sumarSur > sumarCentro){
        result91.innerHTML='El sur tiene la mayor cantidad de votantes';
        // console.log('El sur tiene la mayor cantidad de votantes')
    } else if(sumarCentro > sumarNorte && sumarCentro > sumarSur){
        result91.innerHTML='El centro tiene la mayor cantidad de votantes';
    // console.log('El centro tiene la mayor cantidad de votantes')
    } else {
        result91.innerHTML='Dos o tres zonas están empatadas en la mayor cantidad de votantes';
    }

}

// votantes(['norte','sur','norte','sur','norte','sur','centro','sur','centro']);

// 10. Leer dos números y ver en la pantalla si están en orden crecientes o decrecientes

const number1 = document.getElementById('numero1');
const number2 = document.getElementById('numero2');
const botonCreciente = document.getElementById('creciente');
const result10 = document.getElementById('result10');
botonCreciente.addEventListener('click', crecienteDecreciente)


function crecienteDecreciente(){
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    if(num1 > num2){
        result10.innerHTML='Están en forma decreciente';
    } else if (num1 < num2){
        result10.innerHTML='Están en forma creciente';
        // console.log('Están en forma creciente')
    } else {
        result10.innerHTML='Son iguales';
        // console.log('Son iguales')
    }
}

// crecienteDecreciente(1,3);
// crecienteDecreciente(4,2);
// crecienteDecreciente(-1,-3);
// crecienteDecreciente(-4,-2);
// crecienteDecreciente(1,1);
