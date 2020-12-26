import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import SubHeader from './SubHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SubHeader />
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
