import { useParams } from 'react-router-dom';

function Room() {

  let params = useParams();
  
  return (
    <>
      {params.roomId !== undefined &&
        <div>
          <p className='text-center py-2 text-gray-700 text-xl font-semibold'>Room code:
            <span className='text-teal-500 hover:cursor-pointer'> {params.roomId}</span>
          </p>
        </div>
      }
    </>
  );
}

export default Room;
