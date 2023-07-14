import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Colors from './colors';
import Color from './color';
import NewColor from './newColor';
import { useState } from 'react';

const App = () => {
  const INITIAL_COLOR = { red: "000", green: "000", blue: "000" };
  const [colors, setColors] = useState(INITIAL_COLOR);
  const addColor = (formData) => {
    setColors(color => [...color, { ...formData }])
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/colors' >
          <Colors colors={colors} />
        </Route>
        <Route path='/colors/new' >
          <NewColor addColor={addColor} />
        </Route>
        <Route path='/colors/:color' >
          <Color colors={colors} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
