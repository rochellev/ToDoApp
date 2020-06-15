import React from 'react';


function Gif(props){
  return(
    <img src={props.gif} alt="fun gif" onClick={props.onClick}/>
  )
}

export default Gif;