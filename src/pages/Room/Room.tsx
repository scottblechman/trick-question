import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerRow from './components/PlayerRow';

interface RoomProps {
  name: string,
  players: any[]
}

function Room({ name, players }: RoomProps) {

  let params = useParams();
  const [ready, setReady] = useState(false);
  
  return (
    <>
      {params.roomId !== undefined &&
        <div className='mx-4'>
          <p className='text-center py-2 text-gray-700 text-xl font-semibold border-b border-gray-300'>Room code:
            <span className='text-teal-500 hover:cursor-pointer'> {params.roomId}</span>
          </p>
          <PlayerRow playerName={name} playerReady={ready} setPlayerReady={setReady} />
          {Array.from({length: 7-players.length}, (_x, i) => i).map(key => {
            return <div key={key}><PlayerRow playerName={key.toString()} playerReady={false} setPlayerReady={() => {}} inactive /></div>
          })}
          <div className='flex justify-center'>
            <button className='bg-teal-500 hover:bg-teal-700 disabled:hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75'
              type='button'
              disabled={!ready}>
                Start Game
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Room;
