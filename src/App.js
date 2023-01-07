import './App.css';
import Landing from './Components/Landing';
import Home from './Components/Home';
import RecipesCreate from './Components/RecipesCreate';
import Details from './Components/Details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/recipes" component={RecipesCreate} />
          <Route path="/recipeDetails/:id" component={Details}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
