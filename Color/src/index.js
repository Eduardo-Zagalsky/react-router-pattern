import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Colors from './colors';
import Color from './color';
import newColor from './newColor';

const App = (
  <BrowserRouter>
    <Route path='/colors' >
      <Colors />
    </Route>
    <Route path='/colors/:color' >
      <Color />
    </Route>
    <Route path='/colors/new' >
      <newColor />
    </Route>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
