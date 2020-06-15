<<<<<<< HEAD
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import AboutMe from "./AboutMe";
import Gif from "./Gif";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
=======
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import AboutMe from './AboutMe';
import Gif from './Gif';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

>>>>>>> 532e2fc6a1ec3931c7e36729955e3812564ccfd0

// this might go in List for todo proj
const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);

// move the part with mapping a each todoItem to component
// wrapping each ListItem in a HOC sortableConponent
const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);

const SortableGifsContainer = sortableContainer(({ children }) => (
  <div >{children}</div>
));

// const SortableGif = sortableElement(({ gif, onGifClick }) => <Gif key={gif} gif={gif} onGifClick={onGifClick} />);
const SortableGif = sortableElement(({ ...props }) => <Gif key={props.gif} gif={props.gif} onClick={props.onClick} />);
function App() {
  const [gifs, setGifs] = useState([
    "https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif",
    "https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif",
    "https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif",
    "https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif"
  ]);
  

  const onSortEnd = ({ oldIndex, newIndex }) => setGifs(arrayMove(gifs, oldIndex, newIndex));

  function onGifClick(){
    console.log("oh hello click");
    alert("hello");
  }

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <List />
      <AboutMe />
      <h1>Drag those GIFs around</h1>
      <h2>Set 1</h2>
      <SortableGifsContainer axis="y" distance="5" onSortEnd={onSortEnd}>
        {gifs.map((gif, i) => (
          <SortableGif
            index={i}
            key={gif}
            gif={gif}
            onClick={e => onGifClick()}
          />
        ))}
      </SortableGifsContainer>
      
    </div>
  );
}

export default App;
