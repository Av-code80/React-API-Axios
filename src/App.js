 //import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Movies from './components/Movies';
import Details from './components/Details';


import "./App.css";



const App = () => {

                  
  return (
    <>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/details/:id" component={Details} />
    
      </Switch>
    </>
  );
}

export default App;
