import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {

  const [name, setName] = useState<string>('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
