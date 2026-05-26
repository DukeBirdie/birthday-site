import '../App.css'
import { useParams, Link } from 'react-router-dom'

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
      <h1 className="font-light">Happy Birthday <span className={font}>{(name === "Sam") ? "Samantha" : name}</span>!</h1>
      <Link to={`/presents/${name}`}>View Presents</Link>
    </>
  )
}

export default User