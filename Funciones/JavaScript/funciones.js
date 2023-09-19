alert("Funcionando");

/**
 * Perímetro de un círculo
 * Función con nombre
 */

function perimetroCirculo (diametro){
    const PI_NUMBER = 3.1416;
    let perimetro = PI_NUMBER*diametro;
    return 'El perimetro del circulo es: ' + perimetro;
    
}

/**
 * Perimetro de un circulo 
 * Funciojn flecha
 */

const perimetroCirculoFlecha = (diametro) => 3.1416*diametro;

// ** ÁREA DE UN RECTANGULO **  

function areaRectangulo(base, altura){
    let area = base*altura;
    return 'El area del rectangulo es: '+ area;
}


// funcion flecha

const areaRectanguloFlecha = (base, altura) => area=base*altura;

// ** CUADRADO DE UN NUMERO **

function cuadradoNumero (num){
    let resultado = num*num;
    return 'El cuadrado del númro ingresado es: ' +resultado;
}

// funcion flecha 

const cuadradoNumeroFlecha = (num) => resultado=num*num;

// ** DE GRADOS CELSIUS A FAHRENHEIT **

function gradosCeliusAFahrenheit(gradosCelsius){
    let resultado = gradosCelsius*1.8+32;
    return 'Es igual a ' +resultado;
}

// funcion flecha

const deCelciusAFahrenheitFlecha=(gradosC)=> resultado=gradosC*1.8+32;

// ** CALCULAR EL VALOR DEL VOLTAJE **

function valorVoltaje(amperios, resistencia){
    let Voltaje = amperios * resistencia;
    return 'El valor del voltaje es' +Voltaje ;
}

// arrow fuction

const valorVoltajeFlecha = (amp, resis) => voltaje=amp*resis;

// *** VOLUMEN DE UNA ESFERA **

function volumenEsfera(radio){
    const PI_NUMERO = 3.1416;
    let = volumen = 4/3 * PI_NUMERO * radio**3;
    return 'El volumen de la esfera, dado su radio es ' + volumen;
}

// ** VOLUMEN ESFERA ARROW FUCTION

const volumenEsferaArrow = (radio) => Volum = 4/3 * 3.1416 * radio**3;
