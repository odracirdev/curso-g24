// Declaramos un arreglo que contiene las notas del alumno
let notas = [6, 8, 9, 2, 5, 10]

// Función para sumar todas las notas del arreglo
const sumarNotas = (array) => {
  let suma = 0

  for (let i = 0; i < array.length; i++) {
    suma += array[i]
  }
  
  return suma
}

// Función para calcular el promedio de las notas
const promediarNotas = () => sumarNotas(notas) / notas.length

console.log("Las notas del alumno son:", notas)
console.log("La suma de las notas es:", sumarNotas(notas))
console.log("El promedio de las notas es:", promediarNotas())