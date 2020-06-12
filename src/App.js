import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import AboutMe from './AboutMe';
import Gif from './Gif';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';




function App() {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',
  ]);

  return(
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
// would the wrapper class go here? but then state should be lifted? 
      <List />
      <AboutMe />
      <h1>Drag those GIFs around</h1>
      <h2>Set 1</h2>
        {gifs.map((gif,  i) => <Gif key={gif} gif={gif} />)}
    </div>
  );
}

export default App;
