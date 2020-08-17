import React from "react";
import "./App.css";
import Pokemons from "./pages/Pokemons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Items from "./pages/Items";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons/:name">
            <Pokemon />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Redirect to="/pokemons" />
          </Route>
        </Switch>
        <footer className="bottomNav">
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
