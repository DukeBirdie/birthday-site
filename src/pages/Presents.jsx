import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { users, sam, sophie, bella } from '../data/UserData'


function Presents() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';
  const [initialMsg, setInitialMsg] = useState(false);
  const [secondMsg, setSecondMsg] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correctIndex] = useState(() => Math.floor(Math.random() * 3)); // randomly pick correct present
  const [clickedIndexes, setClickedIndexes] = useState([]); // track all clicked presents
  const [wrongRevealed, setWrongRevealed] = useState([]);

  function handleClick(i) {
    if (clickedIndexes.includes(i)) return; // prevent clicking another present
    setClickedIndexes(prev => [...prev, i]);
    if (i === correctIndex) {
      setTimeout(() => setRevealed(true), 2900);
      setGameCompleted(true);
    } else {
      setTimeout(() => setWrongRevealed(prev => [...prev, i]), 2900);
    }
  }

  function handleHover(index) {
    // replace current image w/ hover image 
    setHoveredIndex(index);
  }

  function handleUnHover() {
    // replace hover image w/ still image
    setHoveredIndex(null);
  }

  // first message -> thinking about presents
  useEffect(() => {
    if (!initialMsg) {
      const timer = setTimeout(() => setInitialMsg(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [initialMsg]);

  // second message -> carousel
  useEffect(() => {
    if (initialMsg) {
      const timer = setTimeout(() => setSecondMsg(true), 4500);
      return () => clearTimeout(timer);
    }
  }, [initialMsg, secondMsg]);

  useEffect(() => {
    if (secondMsg) {
      const timer = setTimeout(() => setShowGame(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [secondMsg, showGame]);

  useEffect(() => {
    if (gameCompleted) {
      const timer = setTimeout(() => setShowPresent(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [gameCompleted, showPresent]);



  return (
    <>
      <div className='flex flex-col items-center m-10 gap-4'>
        <h1><span className={`${font} text-6xl`}>Presents!🎁</span></h1>

        {initialMsg && (
          <h2 className='text-left'>{(name === "Sam") ? sam["chapter_1"].intro : (name === "Sophie") ? sophie["chapter_1"].intro : bella["chapter_1"].intro}</h2>
        )}

        {secondMsg && (
          <h2 className='text-left'>{(name === "Sam") ? sam["chapter_1"].mid : (name === "Sophie") ? sophie["chapter_1"].mid : bella["chapter_1"].mid}</h2>
        )}

        {/* Present Roulette Game */}
        {showGame && (
          <div>
            <h2>Let's play a game. It's called Present Roulette.</h2>
            <h3 className='text-white mb-10'>There are no consequences for losing though.</h3>
            <div className='flex flex-row gap-10'>
              {[0, 1, 2].map((i) => (
                <img
                  key={i}
                  src={
                    clickedIndexes.includes(i) && i === correctIndex && revealed ? users[name].temp_revealed :
                    clickedIndexes.includes(i) && i !== correctIndex && wrongRevealed.includes(i) ? users[name].present_wrong :
                    clickedIndexes.includes(i) ? users[name].present_open :
                    hoveredIndex === i ? users[name].present_hover :
                    users[name].present
                  }
                  alt='A present'
                  style={{ width: '200px', height: 'auto' }}
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={handleUnHover}
                  onTouchStart={() => handleHover(i)}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>

          </div>
        )}

        {showPresent && (
          <>
            {/* DEBUG - REPLACE W/ CORRECT LINK */}
            <Link to={`/`} className='text-xl text-gray-300 mt-25'>
              <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
                Link To Present
              </button>
            </Link>

            <h2>It should be prepaid but if not shoot me a message!</h2>

          </>
        )}

        {showPresent && (
          <>
            <Link to={`/`} className='text-xl text-gray-300'>
              <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
                Back to Menu
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Presents