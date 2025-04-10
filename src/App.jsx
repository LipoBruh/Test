import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image
import Container from './components/container';

function App() {
  return (
    <>
      <div className='flex flex-col justify-around bg-gray-500 h-screen text-center'>
        <div className='bg-white flex-grow '>    
          <h1 className='text-5xl m-3'>Planifium</h1>
          <h2 className='text-3xl'>Plan</h2>
        </div>

        <div className='bg-white flex-grow'>
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;


