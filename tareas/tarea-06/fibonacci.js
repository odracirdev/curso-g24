/*
La función "fibo" se usa para calcular el término "n" de la sucesión Fibonacci
usando memoización para optimizar la ejecución del código y no hacer explotar
nuestro computadores.

- n: Es el término de la serie Fibonacci que queremos calcular.
- memo: Es un objeto utilizado para almacenar los valores previamente calculados.
*/

const fibo = (n, memo = {}) => {
  // Si n es 0 o 1 se retorna n ya que es el Fibonacci correspondiente a estos valores.
  if (n <= 1) return n
  
  /*
  Verifica si el valor Fibonacci para "n" ya existe en el objeto "memo".
  En caso de existir, este es retornado inmediatamente para evitar cálculos redundantes.
  */
  if (memo[n]) return memo[n]

  /*
  Si el valor Fibonacci no existe en "memo", se calcula el valor de manera recursiva, 
  los suma y luego los guarda en "memo".
  */
  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)
  
  // Se retornan todos los valores calculados.
  return memo[n]
}

// num - Es el número de términos de la sucesión de Fibonacci que queremos imprimir.
const num = 1000

/*
Se ejecuta la función "fibo" la cantidad de veces necesarias y se verifica si el valor Fibonacci es par o impar.
De esta manera podemos calcular el valor de Fibonacci para cualquier número, solo debemos cambiar el valor de "num".
*/
for (let i = 0; i <= num; i++){
  if (fibo(i) % 2 === 0) {
    console.log(`El Fibonacci(${i}) = ${fibo(i)} ¡Es par!`)
  }else {
    console.log(`El Fibonacci(${i}) = ${fibo(i)} ¡Es impar!`)
  }
}