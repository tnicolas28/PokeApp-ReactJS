import React, { FunctionComponent, useState} from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

  
const PokemonInsert : FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className="row">
            <h2 className="header center">Ajouter un pokémon</h2>
            <PokemonForm pokemon={pokemon} edition={false}></PokemonForm>
        </div>
    );
}
  
export default PokemonInsert;