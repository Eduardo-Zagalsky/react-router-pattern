import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from './navbar';
import Dog from './dog';
import Home from './home';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "/images/whiskey.jpg",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: "/images/duke.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: "/images/perry.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: "/images/tubby.jpg",
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];
const App = (
  <BrowserRouter>
    <Switch>
      <Navbar />
      <Route path='/dogs/:name'>
        <Dog dogs={dogs} />
      </Route>
      <Route path='/' >
        <Home dogs={dogs} />
      </Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);