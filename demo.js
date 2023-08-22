// var aprendiendojavascript = true // boolean

// var saludo = 'bienvenidos'
// var tema = ' al curso preparatorio de javascrript'

// console.log(saludo + tema)

// OPERADORES DE COMPARACION

  // PERADORES LOGICOS 
  
  // Not (!)
  // And (&&)
  // Or (||)

  // OPERADOR (&&)
 
  // 2023 && 'holiii' = holiii
// "buenas tardes" && 5 = 5  
// 0 && "holii" = 0
// 0 && false = 0
// 'leandro $$ null; = null


// OPERADORES (||)

// 0 || 'hola'
// 2023 || 0
// N0 || null || undefined || 'mariana'

// OPERADOR NOT (!)

// var nombre = 'mayra'
// var niego_nombre = !nombre
// console.log(niego_nombre);


// METODOS

// var nombreGato = 'felix'
// console.log(nombreGato.length);
// console.log(nombreGato);

// var nombreMascota = 'nala'
// console.log(nombreMascota);
// console.log(nombreMascota.length);


// FUNCION 

// function sumar (x, y){
   // var suma = x + y
    //  console.log(suma);
    // return suma;
// }
// sumar (5,8)
  
// CONTROLADORES DE FLUJO


//var nombre = 'mayra';
 // function puedeManejar(edad){
 // if (edad >= 18){
    // return nombre + ': puede manejar por que tiene ' + edad + 'años ' 
 // }else{
    // return nombre + ' es menor de edad';
 // }
 // }
// console.log(puedeManejar(20))
// console.log(puedeManejar(16))

function semaforo(color){
    if (color === 'rojo'){
        return 'los autos se detienen';
    }else if (color === 'amarillo'){
        return 'los autos se detienen o avanzan';
    }else if (color === 'verde'){
        return 'los autos avanzan';
    }else{
        return 'este color no es de un semaforo';
    }
}
console.log(semaforo('rojo'))
console.log(semaforo('verde'))
console.log(semaforo('amarillo'))
console.log(semaforo('morado'))

// OBJETOS Math 

Math(2, 3)




