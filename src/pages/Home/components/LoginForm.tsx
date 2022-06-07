interface LoginFormProps {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  onJoin: any
}

function LoginForm({ name, setName, onJoin }: LoginFormProps) {

  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 m-6'>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
          Name
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          id='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='flex items-center justify-between mt-6'>
        <button className='bg-teal-500 hover:bg-teal-700 disabled:hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75'
        type='button'
        disabled={name.length === 0}>
          Host Game
        </button>
        <button className='bg-teal-500 hover:bg-teal-700 disabled:hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75'
        type='button'
        disabled={name.length === 0}
        onClick={onJoin}>
          Join Game
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
