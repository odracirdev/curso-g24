const createCard = ({ name, image }) => {
  const card = document.createElement('div')
  card.classList.add('card')

  card.innerHTML = `
    <img src="${image}" alt="${name}" />
    <h3>${name}</h3>
  `;

  return card
}

const dataGenerateCard = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  try {
    const response = await fetch(URL)

    if (!response) throw new Error('No se pudo obtener la lista de pokemones.')

    const data = await response.json()
    const pokemonList = data.results

    const container = document.getElementById('container-cards')

    for (const pokemon of pokemonList) {
      const pokeResponse = await fetch(pokemon.url)
      const pokeData = await pokeResponse.json()

      const card = createCard({
        name: pokeData.name,
        image: pokeData.sprites.other.dream_world.front_default
      })
      container.appendChild(card)
    }

  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
}

dataGenerateCard()
