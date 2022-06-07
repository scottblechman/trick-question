import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {

  const [name, setName] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');

  return (
    <div className='h-screen bg-slate-100'>
      <div className='bg-teal-500 py-1'>
        <p className='text-2xl text-center font-semibold text-gray-50'>trick question</p>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} roomCode={roomCode} setRoomCode={setRoomCode} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
