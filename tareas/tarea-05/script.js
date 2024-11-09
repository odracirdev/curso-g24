// Declaramos un arreglo que contiene las notas del alumno
let notas = [6, 8, 9, 2, 5, 10]

// Función para sumar todas las notas del arreglo
const sumarNotas = () => {
  // Suma cada elemento en el arreglo de notas y lo asigna a la variable suma
  let suma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]
  return suma // Retorna el valor de la suma total
}

// Función para calcular el promedio de las notas
const promediarNotas = () => {
  // Llama a la función sumarNotas y divide el resultado entre la cantidad de notas
  return sumarNotas() / notas.length
}

// Imprime las notas del alumno en la consola
console.log("Las notas del alumno son:", notas)

// Imprime la suma total de las notas en la consola
console.log("La suma de las notas es:", sumarNotas())

// Imprime el promedio de las notas en la consola
console.log("El promedio de las notas es:", promediarNotas())