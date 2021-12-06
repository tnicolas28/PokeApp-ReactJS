import React, { FunctionComponent, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/pokemon-card';
import PokemonSearch from '../components/pokemon-search';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

  
const PokemonList: FunctionComponent = () => {
  const [pokemons,setPokemons] = useState<Pokemon[]>([]);

    useEffect( () => {
      PokemonService.getPokemons().then((pokemons) => {
        setPokemons(pokemons);
      })
    },[]);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
         
          <div className="row"> 
          <PokemonSearch />
          {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="green"/>
          ))}
        </div>
        <Link to={`/pokemons/insert`} className="btn-floating btn-large waves-effect waves-light red z-depth-3"
          style={{position : 'fixed', bottom : '25px', right : '25px'}}>
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;