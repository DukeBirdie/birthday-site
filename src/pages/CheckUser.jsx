import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

/**
 * A function I'm writing into this website simply because I think it would be funny.
 */
function CheckUser() {
  const { name } = useParams();
  const [q2, showQ2] = useState(false);
  const [q3, showQ3] = useState(false);
  const [jokeOver, setJokeOver] = useState(false);

  function firstQuestionYes() {
    showQ2(true);
  }

  function secondQuestionYes() {
    showQ3(true);
  }

  useEffect(() => {
    if (q2 && q3) {
      const timer = setTimeout(() => setJokeOver(true), 1500)
      return () => clearTimeout(timer);
    }
  }, [q2, q3, jokeOver]);

  return (
    <>
      {/* Question 1 */}
      <div className='flex flex-col items-center mt-20'>
        <h2>Are you {name}?</h2>

        <div className='flex flex-row gap-2'>
          <button onClick={firstQuestionYes} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>Yes</button>
          <Link to={`/`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>No</Link>
        </div>
      </div>

      {q2 && (
        <>
          {/* Question 2*/}
          <div className='flex flex-col items-center mt-20'>
            <h2>Are you sure you're {name}?</h2>

            <div className='flex flex-row gap-2'>
              <button onClick={secondQuestionYes} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>Yes</button>
              <Link to={`/`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>No</Link>
            </div>
          </div>
        </>
      )}

      {q3 && (
        <>
          {/* Question 3 */}
          <div className='flex flex-col items-center mt-20'>
            <div className='mb-10'>
              <label for="visitors" class="block mb-2.5 text-xl text-white font-medium text-heading">Okay prove it:</label>
              <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
            </div>
            {jokeOver && (
              <>
                <h2>I'm just kidding 😅</h2>
                <Link to={`/user/${name}`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>Click Me!</Link>
              </>
            )}
          </div>
        </>
      )}

    </>
  )
}

export default CheckUser;