import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
    const [triggerConfetti] = useState(false);
    const [showChampagne, setShowChampagne] = useState(false);

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
    })

    return (
        <>
            {showGraduating ? (
                <h1>Congrats on Graduating <span className={font}>{name}</span>!!!</h1>
            ) : (
                <>
                    <h1>{(name === "Sam") ? ("Got you 🙃") : ("Sorry for tricking you but...")}</h1>
                </>
            )}

            <div className='flex flex-col items-center'>
                {showChampagne && (
                    <img src='/champagine_animated.gif' alt='A bottle of champagine exploding' style={{ width: '800px', height: 'auto', transform: 'translateX(14px)' }} className='-mb-30' />
                )}
            </div>

            <div className='flex justify-center mt-50'>
                {showChampagne && showGraduating && (
                    <Link to={`/presents/${name}`} className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'>
                        {name}'s Presents 🎁 (Fr this time)
                    </Link>
                )}
            </div>

        </>
    )
}

export default Graduation;