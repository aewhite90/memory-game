import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-hero-pattern min-h-screen bg-fill w-full align-middle justify-center inline-block py-0 top-0 font-sans '>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);