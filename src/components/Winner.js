import React from 'react';
import cowboy from '../img/cowboy.jpg';

const Winner = (props) => {
  return(
    <div className='my-20 max-w-max'>
      <img src={cowboy} alt='space-cowboy' />
      <button className='border transition px-10 py-4 border-gray-600 rounded-md bg-gray-400 text-white opacity-75 hover:opacity-100 transform hover:scale-110 hover:animate-none' onClick={props.reset}><span>Congratulations!</span><br></br>Play again?</button>
    </div>
  )
}

export default Winner;