import React from 'react';

const Card = (props) => {
  return(
    <div  id={props.title} onClick={props.onClick} className='bg-white w-1/6 rounded-md mx-5 md:min-w-1 min-w-1/2 mb-4 max-w-min cursor-pointer hover:scale-105 transform'>
      <img src={props.source} alt={props.title} className='rounded-md rounded-b-none'/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Card;