import '../App.css'
import { useParams, Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

/**
 * Map to define different fonts for different users.
 */
const users = {
  "Sam": "font-sam",
  "Sophie": "font-sophie",
  "Bella": "font-bella",
};


/**
 * Select current user. Only 3 options.
 * @returns User
 */
function User() {
  const { name } = useParams();
  const font = users[name] || 'font-sam';

  return (
    <>
      <h1 className="font-light">
        Happy Birthday{' '}
        <span className={font}>
          <TypeAnimation
            sequence={[(name === "Sam") ? "Samantha !🍾🎉" : name + " !🍾🎉", 1000]}
            speed={10}
            cursor={true}
            repeat={0}
            className="typing-cursor"
          />
        </span>
      </h1>

      <Link to={`/presents/${name}`} className='text-xl text-gray-300'>
        <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
          View Presents
        </button>
      </Link>
    </>
  )
}

export default User