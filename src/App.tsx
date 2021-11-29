import React, {FunctionComponent} from 'react';
import PokemonList from './page/pokemon-list';
import PokemonsDetail from './page/pokemon-detail';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import PageNotFound from './page/page-not-found';
import PokemonEdit from './page/pokemon-edit';
  
const App: FunctionComponent = () => {
   
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <div className="nav-wrapper teal">
                            <Link to="/" className="brand-logo center">
                                Pokédex
                            </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={PokemonList} />
                        <Route exact path="/pokemons" component={PokemonList} />
                        <Route exact path ="/pokemons/edit/:id" component={PokemonEdit} />
                        <Route path ="/pokemons/:id" component={PokemonsDetail} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
  
export default App;