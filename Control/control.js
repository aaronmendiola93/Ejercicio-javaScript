alert("Funcionando Control");
/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
function edadVotar (edad) {

if(edad >= 18){
    console.log("Es mayor de edad, puede votar")
}else{
    console.log("No puede votar")
}
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function promedioAlumno (cal1, cal2, cal3, cal4){
    let promedio = cal1+cal2+cal3+cal4/4;
    if(promedio >= 7){
        console.log("Aprobado")

    } else{
        console.log("Reprobado")
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisible7y8(numero){
          if(numero = 0 == 7 && numero%8 == 0) {
        console.log("Verdadero")
    }else {
        console.log("Falso")
    }

}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function numeroDivisible4o9(numero){
    if(numero%100%4==0 || numero%9==0){
        console.log("Verdadero")       
    } else {
        console.log("Falso")
    }

}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora (operacion, a, b){
    switch(operacion){
        case "suma":
            let suma = a+b;
            console.log(suma);
            break;
        case "resta":
            let resta = a-b;
            console.log(resta);
            break;
        case "multiplicacion":
            let multi = a*b;
            console.log(multi);
            break;
        case "division":
            let division = a/b;
            console.log(division);
            break;
        default:
            console.log("No existe esa operacion");
            break;
    }   
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliculas(genero){
    switch(genero){
        case "accion":
            let accion="Duro de matar"
            console.log(accion);
            break;
        case "drama":
            let drama="A Star is Born"
            console.log(drama);
            break;
        case "comedia":
            let comedia="Shaun of th dead"
            console.log(comedia);
            break;
        case "romance":
            let romance="Lo Mejor de Mi"
            console.log(romance);
            break;
        case "suspenso":
            let suspenso="La Casa de Cristal"
            console.log(suspenso);
            break; 
        case "terror":
            let terror="28 days later"
            console.log(terror);
            break; 
            default:
                console.log("Ese género no existe");
                break;
        
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function cajeroATM(opcion){
        if(opcion === 1){
            console.log("Retirar dinero: ")
        } else if (opcion === 2){
            console.log("Transferencia: ")
        } else if (opcion === 3){
            console.log("Deposito: ")
        } else if (opcion === 4){
            console.log("Pago de Servicios: ")
        } else {
            console.log ("Escribe un número del 1 al 4");
        }

}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function conversorDivisas (moneda,a){
    switch(moneda){
        case "dolar":
            let dolar= a*0.59;
            console.log(`${a} peso(s) es igual a ${dolar} dolares`);
            break;
        case "euro":
            let euro= a*0.55;
            console.log(`${a} peso(s) es igual a ${euro} euros`);
            break;
            case "yen japones":
                let yen= a*8.66;
                console.log(`${a} peso(s) es igual a ${yen} yenes japoneses`);
                break;
            case "libra esterlina":
                let libra= a*8.66;
                console.log(`${a} peso(s) es igual a ${libra} libras esterlinas`);
                break;
            case "franco suizo":
                let franco= a*0.053;
                console.log(`${a} peso(s) es igual a ${franco} francos suizos`);
                break;
                default:
                    console.log("No existe esa divisa para convertir");
                    break;

    }

}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa
 * el codigo de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuentos(costo,codigo){
    let cod="DESCUENTO10";
    let descuento= costo*.10;
    let precioDescuento=descuento;
    if(codigo===cod) {

        console.log(`Se ha aplicado un descuento de ${precioDescuento}MXN al producto "Xbox One"`);

    }else { 
        console.log("Codigo incorrecto, no hay descuento")

    }

}