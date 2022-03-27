import React from "react";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
//
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
