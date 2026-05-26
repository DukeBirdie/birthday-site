import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  const names = ["Sam", "Sophie", "Bella"];

  return (
    <>
      <section id="center">
        <ul className="list-none text-left text-3xl text-white">
          {names.map(name => (
            <li className='transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Link to={`/user/${name}`} key={name}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </>
  )
}

export default Home