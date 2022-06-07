import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Room } from './pages';

function App() {

  const [name, setName] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');
  const [players, setPlayers] = useState([]);

  return (
    <div className='h-screen bg-slate-100'>
      <div className='bg-teal-500 py-1'>
        <p className='text-2xl text-center font-semibold text-gray-50'>trick question</p>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} roomCode={roomCode} setRoomCode={setRoomCode} />} />
        <Route path='rooms' element={<Room name={name} players={players} />}>
          <Route path=':roomId' element={<></>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
