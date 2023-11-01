const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
const PokemonCard = () => {
    const pokemon = pokemonList [1];
    return (
    <figure>
    {pokemon.imgSrc ? <img src={pokemon.imgSrc} />:<p>???</p>}
 
    <figcaption> 
        {pokemon.name}
    </figcaption>
     </figure>
    )
};




/*function PokemonCard(){
 return <figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"/>
<figcaption> 
    Bulbasaur
</figcaption>
</figure>
}*/


export default PokemonCard;


