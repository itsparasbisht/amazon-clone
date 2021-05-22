import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Slider from './Components/Slider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Basket from './Components/Basket';
import {createContext, useReducer} from 'react';
import { initialState, reducer } from './Components/reducer';
import Payment from './Components/Payment';
import Login from './Components/Login';
import Auth from './Components/Auth';
import Orders from './Components/Orders';

export const StateContext = createContext()

function App() {

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>

      <div className="App">
        <Router>
          <Auth />
          <Switch>
            
            <Route exact path='/'>
              <Header />
              <Slider />
              <Home />
            </Route>

            <Route exact path='/basket'>
              <Header />
              <Basket />
            </Route>

            <Route exact path='/payment'>
              <Header />
              <Payment />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/orders'>
              <Header />
              <Orders />
            </Route>

          </Switch>
        </Router>
      </div>

    </StateContext.Provider>
  );
}

export default App;
