import '../App.css'
import { useParams, Link } from 'react-router-dom';

/**
 * Select current user. Only 3 options.
 * @returns User
 */
function User() {
  const { name } = useParams();

  return (
    <>
      <h1>Happy Birthday <span className='font-sam italic font-bold'>{name}</span>!</h1>
      <Link to={`/presents/${name}`}>View Presents</Link>
    </>
  )
}

export default User