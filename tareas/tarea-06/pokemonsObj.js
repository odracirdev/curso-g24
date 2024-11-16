// Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.

let pokemon = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

/*
El método filter de JavaScript recorre todo el array de objetos "pokemon" y devuelve un nuevo arreglo
con todos los elementos que coinciden con el tipo "fuego". Además se usa el método ".toLowerCase()"
para evitar cualquier incongruencia entre mayúsculas y minúsculas.
*/

let pokemonFuego = pokemon.filter(pokemon => pokemon.tipo.toLowerCase() === 'fuego');

console.log(pokemonFuego)