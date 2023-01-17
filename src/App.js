import './App.css';
import Landing from './Components/Landing';
import Home from './Components/Home';
import RecipesCreate from './Components/RecipesCreate';
import Details from './Components/Details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/login';
import Logout from './Components/logout';
import Profile from './Components/profile';

import { useAuth0 } from '@auth0/auth0-react'


function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <h1>Loading Login...</h1>

  return (
    <BrowserRouter>
      <div className="App">

        <h1>auth0</h1>
      {
        isAuthenticated ? <Logout /> : <Login />
      }
      <Profile />

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
