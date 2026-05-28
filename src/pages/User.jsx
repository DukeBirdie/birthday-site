import '../App.css'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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


/**
 * Select current user. Only 3 options.
 * @returns User
 */
function User() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';
  const [blown, setBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [wished, setWished] = useState(false);
  const [newCandle, setNewCandle] = useState(false);

  // blow out animation
  function blowOutFire() {
    setBlown(true);

    // show the show wish text
    // show 'I did' button -> allow animation to finish
    setTimeout(() => setShowWish(true), 2000);


    // trigger new candle
    setTimeout(() => setNewCandle(true), 1300);

    // trigger confetti
    setTimeout(() => shoot(name), 1300);
    setTimeout(() => shoot(name), 1400);
    setTimeout(() => shoot(name), 1500);
  }

  function makeAWish() {
    setWished(true);
  }

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

      <div className='flex flex-col p-3 items-center'>
        {/* Show candle fire if not blown out */}
        {!blown ? (
          <img src='/candle_fire.gif' alt='A fire' style={{ width: '200px', height: 'auto', transform: 'translateX(14px)' }} className='-mb-30' />
        ) : (
          <img src='/fire_blown_out_new.gif' alt='A fire' style={{ width: '200px', height: 'auto', transform: 'translateX(14px)' }} className='-mb-30' />
        )}

        {!newCandle ? (
          <img src='/candle.gif' alt='A candle' style={{ width: '300px', height: 'auto' }} className='-mb-15' />
        ) : (
          <img src='/blown_out_candle.png' alt='A candle' style={{ width: '300px', height: 'auto' }} className='-mb-15' />
        )}
        <img src={(name === "Sam") ? (users[name].cupcake) : name === "Sophie" ? (users[name].cupcake) : (users[name].cupcake)} alt='A cupcake' style={{ width: '300px', height: 'auto' }} />
      </div>


      {blown && !wished && showWish && (
        <h1>Make a Wish!</h1>
      )}

      {blown && showWish && !wished && (
        <div className='flex justify-center mt-4'>
          <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20' onClick={makeAWish}>
            I did!
          </button>
        </div>
      )}

      {/* Wish was made */}
      {wished && (
        <h1>Hope 22 Treats You Well {name}!</h1>
      )}

      {/* Blow out candle -> show smoke animation for 1 cycle -> at bottom show text: -> Make a Wish -> Hope 22 Treats you well (or something like that) */}

      {!blown && (
        <div className='flex justify-center mt-4'>
          <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20' onClick={blowOutFire}>
            Blow Out
          </button>
        </div>
      )}

      <div className='flex justify-center mt-4'>
        {blown && wished && (
          <Link to={`/grad/${name}`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>
            {name}'s Presents 🎁
          </Link>
        )}
      </div>
    </>
  )
}

export default User