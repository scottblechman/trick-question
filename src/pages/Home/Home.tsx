import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../common';
import { LoginForm } from './components';

interface HomeProps {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  roomCode: string,
  setRoomCode: React.Dispatch<React.SetStateAction<string>>
}

function Home({ name, setName, roomCode, setRoomCode }: HomeProps) {

  let navigate = useNavigate();
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  return (
    <>
      <LoginForm name={name} setName={setName} onJoin={() => setJoinModalVisible(true)} />
      <Modal visible={joinModalVisible}
        setVisible={setJoinModalVisible}
        title='Enter Room Code'
        okDisabled={roomCode.length !== 4}
        okClick={() => navigate('/rooms/' + roomCode)}>
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
