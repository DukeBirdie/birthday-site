import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { users, sam, sophie, bella } from '../data/UserData'


function Presents() {
  const { name } = useParams();
  const font = users[name].font || 'font-sam';
  const [initialMsg, setInitialMsg] = useState(false);
  const [secondMsg, setSecondMsg] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const [showCarousel, setShowCarosel] = useState(false);


  // first message -> thinking about presents
  useEffect(() => {
    if (!initialMsg) {
      const timer = setTimeout(() => setInitialMsg(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [initialMsg]);

  // second message -> carousel
  useEffect(() => {
    if (initialMsg) {
      const timer = setTimeout(() => setSecondMsg(true), 4500);
      return () => clearTimeout(timer);
    }
  }, [initialMsg, secondMsg]);

  useEffect(() => {
    if (secondMsg) {
      const timer = setTimeout(() => setShowPresent(true), 3000);
      return () => clearTimeout(timer);
    }
  })

  useEffect(() => {
    if (showPresent) {
      const timer = setTimeout(() => setShowCarosel(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [showPresent, showCarousel])


  return (
    <>
      <div className='flex flex-col items-center m-10 gap-4'>
        <h1><span className={`${font} text-6xl`}>Presents!🎁</span></h1>

        {initialMsg && (
          <h2 className='text-left'>{(name === "Sam") ? sam["chapter_1"].intro : (name === "Sophie") ? sophie["chapter_1"].intro : bella["chapter_1"].intro}</h2>
        )}

        {secondMsg && (
          <h2 className='text-left'>{(name === "Sam") ? sam["chapter_1"].mid : (name === "Sophie") ? sophie["chapter_1"].mid : bella["chapter_1"].mid}</h2>
        )}

        {/* Replace with better present -> then animated present on click */}
        <div className='m-10'>
          {showPresent && (
            <img src='/present_not_animated.png' alt='A fire' style={{ width: '200px', height: 'auto', transform: 'translateX(14px)' }} className='-mb-30' />
          )}
        </div>

        {/* Carousel */}
        {showCarousel && (
          <>
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
              {/* Carousel Wrapper */}
              <div class="relative h-56 overflow-hidden rounded-base md:h-96">
                {/* Item 1 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 2 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 3 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 4 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 5 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
              </div>
              {/* Slider Indicators */}
              <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              </div>
              {/* Slider Controls */}
              <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </>
        )}

        {showPresent && showCarousel && (
          <>
            {/* DEBUG - REPLACE W/ CORRECT LINK */}
            <Link to={`/`} className='text-xl text-gray-300'>
              <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
                Link To Present
              </button>
            </Link>

            <h2>It should be prepaid but if not shoot me a message!</h2>

          </>
        )}

        {showPresent && showCarousel && (
          <>
            <Link to={`/`} className='text-xl text-gray-300'>
              <button className='inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20'>
                Back to Menu
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Presents