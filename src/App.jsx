import PokemonCard from "./components/PokemonCard";
import "./App.css";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
  
  
function App() {
  /*const listpokemon = pokemonList[2];*/
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
       <PokemonCard pokemon={pokemonList[1]} />
       <PokemonCard pokemon={pokemonList[2]} />
       <PokemonCard pokemon={pokemonList[3]} /> 
    </div>
  );
}






export default App;
