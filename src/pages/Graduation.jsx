import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { confetti } from '@tsparticles/confetti'
import { users } from '../data/UserData'

// source: https://confetti.js.org/
const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: .94,
  startVelocity: 30
};

function shoot(name) {
  confetti({
    ...defaults,
    particleCount: 15,
    scalar: 1.2,
    shapes: ["circle", "square"],
    colors: [
      "#a864fd",
      "#29cdff",
      "#78ff44",
      "#ff718d",
      "#fdff6a"
    ]
  });
  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: { emoji: { value: users[name].particleList } }
  });
}

function Graduation() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';
  const [showGraduating, setShowGraduating] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [triggerConfetti] = useState(false);
  const [showChampagne, setShowChampagne] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showHike, setShowHike] = useState(false);
  const [msgFinished, setMsgFinished] = useState(false);

  // show congrats text
  useEffect(() => {
    if (!showGraduating) {
      const timer = setTimeout(() => setShowGraduating(true), 2000);

      return () => clearTimeout(timer); // if setShowGraduating doesn't execute, return
    }
  }, [showGraduating]);


  // setTriggerConfetti never set = true
  useEffect(() => {
    if (showGraduating && !triggerConfetti) {
      setTimeout(() => shoot(name), 0);
      setTimeout(() => shoot(name), 100);
      setTimeout(() => shoot(name), 200);
    }
  }, [showGraduating, name, triggerConfetti]);

  // show champagne animation
  useEffect(() => {
    if (showGraduating && !showChampagne) {
      const timer = setTimeout(() => setShowChampagne(true), 0);
      return () => clearTimeout(timer);
    }
  }, [showGraduating, showChampagne])

  // ask graduation plans / show drink message
  useEffect(() => {
    if (showGraduating && showChampagne) {
      const question = setTimeout(() => setShowQuestion(true), 2000);
      const drink = setTimeout(() => setShowDrink(true), 5000);
      const hike = setTimeout(() => setShowHike(true), 8000);
      return () => clearTimeout(question || drink || hike);
    }
  }, [showGraduating, showChampagne, showQuestion, showDrink, showHike]);

  // show final message
  useEffect(() => {
    if (showGraduating && showChampagne && showQuestion && showDrink && showHike) {
      const timer = setTimeout(() => setShowFinalMessage(true), 0);
      return () => clearTimeout(timer);
    }
  }, [showGraduating, showChampagne, showFinalMessage, showQuestion, showDrink, showHike]);
  
  useEffect(() => {
    if (showChampagne && showQuestion && showDrink && showHike) {
      const timer = setTimeout(() => setMsgFinished(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [showChampagne, showQuestion, showDrink, showHike, msgFinished]);

  return (
    <>
      {showGraduating ? (
        <h1 className='leading-normal'>Congrats on Graduating <span className={font}>{name}</span>!!!</h1>
      ) : (
        <>
          <h1 className='leading-normal'>{(name === "Sam") ? ("Got you 🙃") : ("Sorry for tricking you but...")}</h1>
        </>
      )}

      {showGraduating && showChampagne && showFinalMessage && (
        <TypeAnimation
          sequence={["Well... in a couple days."]}
          speed={20}
          cursor={true}
          repeat={0}
          className="typing-cursor"
        />
      )}

      <div className='flex flex-col items-center m-20'>
        {showChampagne && (
          <img src='/FULL_champagne.gif' alt='A bottle of champagine exploding' style={{ width: '800px', height: 'auto', transform: 'translateX(14px)' }} />
        )}
      </div>

      <div className='flex flex-col items-center'>
        {showQuestion && (name === "Sam") && (
          <h2>What are your plans after graduation?</h2>
        )}
        {showDrink && (name === "Sam") && (
          <h2>If you're free maybe we can go get a drink.</h2>
        )}
        {showHike && (name === "Sam") && (
          <h2>Or better yet... go on a hike 😇</h2>
        )}
      </div>

      <div className='flex justify-center m-5'>
        {showChampagne && showGraduating && msgFinished && (
          <Link to={`/presents/${name}`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>
            {name}'s Presents 🎁 (Fr this time)
          </Link>
        )}
      </div>

    </>
  )
}

export default Graduation;