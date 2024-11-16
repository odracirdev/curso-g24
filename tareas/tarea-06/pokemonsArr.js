// Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']

// Usando "for"

console.log('Convirtiendo texto a mayúsculas usando for \n')

let pokeFor = []

for (let i = 0; i < pokemons.length; i++){
  pokeFor.push(pokemons[i].toUpperCase())
}

console.log(pokeFor)

// Usando "for...of"

console.log('\nConvirtiendo texto a mayúsculas usando for...of \n')

let pokeForOf = []

for (let pokemon of pokemons) pokeForOf.push(pokemon.toUpperCase())

console.log(pokeForOf)

// Usando "forEach"

console.log('\nConvirtiendo texto a mayúsculas usando forEach \n')

let pokeForEach = []

pokemons.forEach((pokemon) => pokeForEach.push(pokemon.toLocaleUpperCase()))

console.log(pokeForEach)
