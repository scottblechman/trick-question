import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Home, NotFound, Room } from './pages';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

function App() {

  const firebaseConfig = {
    apiKey: 'AIzaSyDoPJLE0rIl7c_H3UqZP_ttMSV3w0E0IK0',
    authDomain: 'trick-question.firebaseapp.com',
    projectId: 'trick-question',
    storageBucket: 'trick-question.appspot.com',
    messagingSenderId: '546421366392',
    appId: '1:546421366392:web:3145006102fb69d72d978d',
    measurementId: 'G-G0WWZX845V'
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='h-screen bg-slate-100'>
      <div className='bg-teal-500 py-1'>
        <p className='text-2xl text-center font-semibold text-gray-50'>trick question</p>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home auth={auth} firestore={firestore} user={user} />} />
        <Route path='rooms' element={<Room name={''} players={[]} />}>
          <Route path=':roomId' element={<></>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
