import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='m-4'>
      <p className='text-gray-700 text-2xl font-bold'>404 Not Found</p>
      <p className='text-gray-700 text-md font-normal'>The specified page does not exist.</p>
      <div className='pt-4'>
        <Link className='underline text-teal-400 hover:text-teal-500' to='/'>
          Return home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
