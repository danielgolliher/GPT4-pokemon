const pokemons = [
  {
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    stats: 'HP: 35, Attack: 55, Defense: 40',
  },
  {
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    stats: 'HP: 39, Attack: 52, Defense: 43',
  },
  {
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    stats: 'HP: 45, Attack: 49, Defense: 49',
  },
  {
    name: 'Squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    stats: 'HP: 44, Attack: 48, Defense: 65',
  },
  {
    name: 'Jigglypuff',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    stats: 'HP: 115, Attack: 45, Defense: 20',
  },
  {
    name: 'Meowth',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    stats: 'HP: 40, Attack: 45, Defense: 35',
  },
  {
    name: 'Psyduck',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    stats: 'HP: 50, Attack: 52, Defense: 48',
  },
  {
    name: 'Geodude',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    stats: 'HP: 40, Attack: 80, Defense: 100',
  },
  {
    name: 'Slowpoke',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    stats: 'HP: 90, Attack: 65, Defense: 65',
  },
  {
    name: 'Gastly',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    stats: 'HP: 30, Attack: 35, Defense: 30',
  },
  {
    name: 'Krabby',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    stats: 'HP: 30, Attack: 105, Defense: 90',
  },
  {
    name: 'Eevee',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    stats: 'HP: 55, Attack: 55, Defense: 50',
  },
  // Add more Pokemon here
];

const pokemonList = document.querySelector('.pokemon-list');
const battleContainer = document.querySelector('.battle-container');
const battleResult = document.getElementById('battle-result');
const resetButton = document.getElementById('reset-button');

let selectedPokemons = [];

function selectPokemon(index) {
  if (selectedPokemons.length < 2 && !selectedPokemons.includes(index)) {
    selectedPokemons.push(index);
    pokemonList.children[index].classList.add('selected');

    if (selectedPokemons.length === 2) {
      startBattle();
    }
  }
}

function startBattle() {
  const winnerIndex =
    Math.random() < 0.5 ? selectedPokemons[0] : selectedPokemons[1];
  const winner = pokemons[winnerIndex];
  battleResult.textContent = `${winner.name} wins!`;
  pokemonList.hidden = true;
  battleContainer.hidden = false;
}

function resetGame() {
  selectedPokemons = [];
  Array.from(pokemonList.children).forEach((item) =>
    item.classList.remove('selected')
  );
  pokemonList.hidden = false;
  battleContainer.hidden = true;
}

// Populate the Pokémon list
pokemons.forEach((pokemon, index) => {
  const pokemonItem = document.createElement('div');
  pokemonItem.classList.add('pokemon-item');
  pokemonItem.innerHTML = `
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <span>${pokemon.name}</span>
  `;
  pokemonItem.addEventListener('click', () => selectPokemon(index));
  pokemonList.appendChild(pokemonItem);
});

resetButton.addEventListener('click', resetGame);
