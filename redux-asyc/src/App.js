import React from 'react';
import logo from './logo.svg';
import './App.css';

import Joke from "./components/joke"

/* 
https://api.chucknorris.io/jokes/random

returns 
  {
    "categories": [],
    "created_at": "2020-01-05 13:42:29.855523",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "Mkrdm5BJQHOxmKaOkXVKpg",
    "updated_at": "2020-01-05 13:42:29.855523",
    "url": "https://api.chucknorris.io/jokes/Mkrdm5BJQHOxmKaOkXVKpg",
    "value": "Chuck Norris can see a black person on Friends."
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <Joke/>
      </header>
    </div>
  );
}

export default App;
