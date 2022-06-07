import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, signInAnonymously, User } from 'firebase/auth';
import { addDoc, collection, doc, Firestore, limit, query, setDoc, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Modal } from '../../common';
import { LoginForm } from './components';

interface HomeProps {
  auth: Auth,
  firestore: Firestore
  user: User | null | undefined
}

function Home({ auth, firestore, user }: HomeProps) {

  let navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  const [value, loading, error] = useCollection(
    query(
      collection(firestore, 'users'),
      where('uid', '==', user !== undefined && user !== null ? user.uid : ''),
      limit(1)
    )
  );

  useEffect(() => {
    if (user !== null && user !== undefined && value !== undefined && value.docs.length === 0) {
      (async () => {
        await addDoc(collection(firestore, 'users'), {
          uid: user.uid,
          name: name
        });
      })();
    }
  }, [firestore, name, user, value]);

  useEffect(() => {
    if (value !== undefined && value.docs.length > 0 && name.length === 0) {
      setName(value.docs[0].data().name)
    }
  }, [value, name]);

  const createGame = () => {
    setRoomCode('');
    joinGame();
  };

  const joinGame = () => {
    if (user === undefined || user === null) {
      signInAnonymously(auth);
    }
    navigate('/rooms/' + roomCode)
  }

  return (
    <>
      <LoginForm name={name} setName={setName} onHost={createGame} onJoin={() => setJoinModalVisible(true)} />
      <Modal visible={joinModalVisible}
        setVisible={setJoinModalVisible}
        title='Enter Room Code'
        okDisabled={roomCode.length !== 4}
        okClick={joinGame}>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='A1B2'
          value={roomCode}
          onChange={e => setRoomCode(e.target.value.toUpperCase())}
          maxLength={4} />
      </Modal>
    </>
  );
}

export default Home;
