import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { users, sam, sophie, bella } from '../data/UserData'


function Presents() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';
  const [initialMsg, setInitialMsg] = useState();
  
  // first message -> thinking about presents
  useEffect(() => {
    if (!initialMsg) {
      const timer = setTimeout(() => setInitialMsg(true), 1000);
      return () => clearTimeout(timer); 
    }
  }, [initialMsg])

  return (
    <>
      <div className='flex flex-col items-center m-10'>
        <h1><span className={`${font} text-6xl`}>Presents!🎁</span></h1>
        
        {initialMsg && (
          <h2 className='text-left'>{(name === "Sam") ? sam["chapter_1"].intro : (name === "Sophie") ? sophie["chapter_1"].intro : bella["chapter_1"].intro}</h2>
        )}
        
        <Link to={`/`} className='text-xl text-gray-300'>
          <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
            View People
          </button>
        </Link>
      </div>
    </>
  );
}

export default Presents