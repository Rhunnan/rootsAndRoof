import bgHero from './assets/bg-hero.webp'
import longLogo from './assets/long-logo.png'
function App() {

  return (
    <>
      <main className='flex flex-col relative min-h-screen h-auto w-screen'>
        {/* navContanier */}
        <nav className='w-screen h-auto'>
          {/* NavDivContainer for layout */}
          <div className='w-full h-18 bg-white fixed top-0 left-0 z-20 flex justify-around items-center'>
            {/* icon */}
            <div id="logo" className='h-13 w-50 bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${longLogo})`}}>

            </div>
            {/* navbars */}
            <ul className='flex justify-around  items-center md:w-[40%] lg:w-[25%]'>
              <li>
                <a className="roots-btn-hover-color text-shadow-2xs text-[20px]" href="">Home</a>
              </li>
              <li>
                <a className="roots-btn-hover-color text-shadow-2xs text-[20px]" href="">About Us</a>
              </li>
              <li>
                <a className="roots-btn-hover-color text-shadow-2xs text-[20px]" href="">Portfolio</a>
              </li>
            </ul>
            {/* contact button */}
            <div className='flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
              Contact Us
            </div>
          </div>
        </nav>
        {/* HeroSection */}
        <section id="HomeHero" className='relative h-screen w-screen bg-no-repeat bg-bottom bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-20 text-4xl text-white'>
            <span className='text-6xl font-bold'>BIOPHILIC HOMES</span><br/><span>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        {/* procedureSection */}
        <section id="procedureSection" className="flex flex-col items-center justify-around bg-white w-screen h-screen" >
            <h3 className='text-4xl'>WELCOME TO ROOTS AND ROOF ARCHITECTURE</h3>
            <h2 className='text-5xl font-bold  tracking-wider'>MODERN BIOPHILIC ARCHITECTURE</h2>
            {/* procedureContainer */}
            <div className='bg-gray-200 w-screen min-h-[60%] h-auto flex justify-center items-center gap-x-8'>
              {/* cardContainer */}
              <div className='flex w-[20%] h-[90%] bg-amber-500'>
                {/* imageOfCard */}
                <div>

                </div>
                {/* circleNum */}
                <div>

                </div>
                {/* steps */}
                <div>

                </div>
              </div>
              {/* cardContainer */}
              <div className='flex w-[20%] h-[90%] bg-amber-500'>
                {/* imageOfCard */}
                <div>

                </div>
                {/* circleNum */}
                <div>

                </div>
                {/* steps */}
                <div>

                </div>
              </div>
              {/* cardContainer */}
              <div className='flex w-[20%] h-[90%] bg-amber-500'>
                {/* imageOfCard */}
                <div>

                </div>
                {/* circleNum */}
                <div>

                </div>
                {/* steps */}
                <div>

                </div>
              </div>
            </div>
        </section>
        <section className='bg-red-400 w-screen h-screen' >

        </section>
        <section className='bg-red-600 w-screen h-screen' >

        </section>
        
      </main>      
    </>
  )
}

export default App
