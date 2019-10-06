import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar';
//import Landing from './components/Landing';
//import Books from './components/Books';
//import Name from './name';
import Dashboard from './dashboard';

const App = () => 
<Router>
        
       <Navbar/>
       <Switch>
         <Route exact path="/dashboard" component={Dashboard}></Route>
       </Switch>
    
</Router>
export default App;
