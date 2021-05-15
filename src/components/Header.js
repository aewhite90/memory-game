import React from 'react';

const Header = (props) => {
  return(
    <div className='my-0 py-3'>
      <header className="p-6 max-w-sm text-3xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center justify-around space-x-4">
        <h1>3...2...1... Let's Jam!</h1>
        <h1 className='text-sm'>Current Score: {props.score}</h1>
        <h1 className='text-sm'>High Score: {props.highScore}</h1>
      </header>
    </div>
    )
}

export default Header;