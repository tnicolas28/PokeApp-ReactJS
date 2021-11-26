import React, { FunctionComponent,useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import DateFormatter from '../helpers/format-date';
import TypeFormatter from '../helpers/format-type';
import { useHistory } from "react-router-dom";

type Props = {
  pokemon: Pokemon,
  borderColor?: string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor='#009688'}) => {
    
  const [color,setColor] = useState<string>();
  const history          = useHistory();
	const dateFormatter    = new DateFormatter();
	const typeFormatter    = new TypeFormatter();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor("#f5f5f5");
    }

    const goToPokemon = (id: number) => {
      history.push(`/pokemons/${id}`);
    }

  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToPokemon(pokemon.id)} >
      <div className="card horizontal" style={{ borderColor : color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>Date de création : {dateFormatter.dateFormat(pokemon.created)}</small></p>
            {pokemon.types.map((type) => ( 
                <span key={type} className={typeFormatter.formatType(type)}> {type} </span>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;