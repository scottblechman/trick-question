interface PlayerRowProps {
  playerName: string,
  playerReady: boolean,
  setPlayerReady: React.Dispatch<React.SetStateAction<boolean>>,
  inactive?: boolean
}

function PlayerRow({ playerName, playerReady, setPlayerReady, inactive }: PlayerRowProps) {
  return (
    <div>
      <div className={`${inactive ? 'bg-gray-200' : 'bg-white'} shadow-md rounded p-4 mx-6 my-4 flex justify-between items-center`}>
        <p className={`${inactive ? 'text-gray-200' : 'text-gray-700'} text-sm font-bold`}>{playerName}</p>
        {!inactive && 
          <p className={`${playerReady ? 'text-teal-500' : 'text-rose-500'} text-sm font-semibold px-0.5 rounded border-2 ${playerReady ? 'border-teal-500' : 'border-rose-500'} hover:cursor-pointer`}
            onClick={() => setPlayerReady(!playerReady)}>
            {!playerReady && 'not'} ready
          </p>
        }
      </div>
    </div>
  );
}

export default PlayerRow;
