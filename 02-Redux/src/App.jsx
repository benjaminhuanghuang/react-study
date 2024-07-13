import React from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import {hot} from 'react-hot-loader'

import './App.css'
import Header from "./components/Header";

import Home from "./pages/Home";
import {TodoList} from "./pages/todos";


function App() {
   return (
     <Router>
       <Header />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/todos" component={TodoList} />
       </Switch>
     </Router>
   );
 }

export default hot(module)(App);