 //import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Movies from './components/Movies';
import Details from './components/Details';
import Quote from './components/Quote';  
import Character from './components/Character';

import "./App.css";



const App = () => {

                  
  return (
    <>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/details/:id" component={Details} />
        <Route path="/quote" component={Quote} />
        <Route path="/character" component={Character} />
      </Switch>
    </>
  );
}

export default App;
