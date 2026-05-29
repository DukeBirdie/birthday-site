import '../App.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  const names = ["Sam", "Sophie", "Bella"];

  return (
    <>
      <section id="center">
        <h1>
          <TypeAnimation
            sequence={["Click on your name..."]}
            speed={20}
            cursor={true}
            repeat={0}
            className="typing-cursor font-medium text-left text-3xl transform-x-20 text-white"
          />
        </h1>
        <ul className="list-none text-left text-3xl text-white">
          {names.map(name => (
            <li key={name} className='transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Link to={`/check/${name}`}>
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