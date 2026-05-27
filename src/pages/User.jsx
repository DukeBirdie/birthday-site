import '../App.css'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { confetti } from '@tsparticles/confetti'

/**
 * Map to define different fonts for different users.
 */
const users = {
  "Sam": {
    "font": "font-sam",
    "particleList": ["🍾", "🎁"],
  },
  "Sophie": {
    "font": "font-sophie",
    "particleList": ["🎉", "🍾"],
  },
  "Bella": {
    "font": "font-bella",
    "particleList": ["🍾", "🎊"]
  },
};

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


/**
 * Select current user. Only 3 options.
 * @returns User
 */
function User() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';

  // confetti particles
  useEffect(() => {
    setTimeout(shoot(name), 0);
    setTimeout(shoot(name), 100);
    setTimeout(shoot(name), 200);
  }, [name])

  return (
    <>
      {/* Do candles for age on this page -> blowing out animation */}
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

      {/* 22 Candles? */}
      <div className='flex flex-wrap'>
        {Array.from({ length: 22 }, (_, i) => (
          <React.Fragment key={i}>
            <div className='flex flex-col p-3'>
              <img src='/candle_fire.gif' alt='A fire' style={{ width: '50px', height: 'auto', transform: 'translateX(28px)' }} className='-mb-3' />
              <img src='/candle.png' alt='A candle' style={{ width: '100px', height: 'auto' }} />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className='flex justify-center mt-4'>
        <Link to={`/presents/${name}`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>
          {name}'s Presents 🎁
        </Link>
      </div>
    </>
  )
}

export default User