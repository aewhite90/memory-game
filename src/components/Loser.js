import React from 'react';
import weight from '../img/weight.jpg';

const Loser = (props) => {
  return(
    <div className='my-20'>
      <img src={weight} alt='space-cowboy' />
      <button className='border transition px-10 py-4 border-gray-600 rounded-md bg-gray-400 text-white opacity-75 hover:opacity-100 transform hover:scale-110 hover:animate-none' onClick={props.reset}>Play again?</button>
    </div>
  )
}

export default Loser;