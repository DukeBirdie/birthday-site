import { Link } from 'react-router-dom'

function Presents() {
  return (
    <>
      <Link to={`/`} className='text-xl text-gray-300'>
        <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
          View People 
        </button>
      </Link>
    </>
  );
}

export default Presents