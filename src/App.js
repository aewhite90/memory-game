import React, { useState } from 'react';
import { Transition } from '@tailwindui/react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Winner from './components/Winner';
import Loser from './components/Loser';

const App = () => {
  const [loader, setLoader] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWin, setGameWin] = useState(false);
  const [gameLost, setLostGame] = useState(false);

  const handleLoader = () => {
    setLoader(true)
  }

  const scoreIncrement = () => {
    if (score === 7) {
      setScore(8)
      setHighScore(8)
      setGameWin(true)
    }
    setScore(score + 1);
    if(highScore <= score && highScore !== 8) {
      setHighScore(highScore + 1)
    }
  }

  const lostGame = () => {
    setLostGame(true)
  }

  const reset = () => {
    setScore(0)
    setGameWin(false)
    setLostGame(false)
  }

  return(
    <div className='h-full'>
      <Transition
        show={!loader}
        enter='transition-opacity duration-1000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='p-6 max-w-sm mx-auto my-56 bg-white rounded-xl shadow-md flex flex-col items-center justify-around space-x-4'>
          <h1 className='mb-5'>Test your Cowboy Bebop memory?</h1>
          <button className='border transition px-10 py-4 border-gray-600 rounded-md bg-gray-400 text-white opacity-75 hover:opacity-100 transform hover:scale-110 hover:animate-none' onClick={handleLoader}>Play</button>
        </div>
      </Transition>

      <Transition
        show={loader && !gameWin && !gameLost}
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Header score={score} highScore={highScore} />
        <div className='flex text-center flex-wrap mx-5 justify-around w-100 pt-4 pb-6'>
          <Content scoreIncrement={scoreIncrement} lostGame={lostGame} />
        </div>
        <Footer />
      </Transition>

      <Transition
        show={gameWin}
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='flex text-center flex-wrap mx-5 justify-around w-100 pt-4 pb-6'>
          <Winner reset={reset} />
        </div>
        <Footer />
      </Transition>

      <Transition
        show={gameLost}
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='flex text-center flex-wrap mx-5 justify-around w-100 pt-4 pb-6'>
          <Loser reset={reset} />
        </div>
        <Footer />
      </Transition>
    </div>
  )
}

export default App;
