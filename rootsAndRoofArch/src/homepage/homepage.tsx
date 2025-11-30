import bgHero from '../assets/homePage/bg-hero.png'
import logo from '../assets/logo.png'
import CardProcedure from '../components/cards';
import NavBar  from '../components/navbar';
import bioPhilic_Design from  '../assets/biophilic_design.png'
import portfolio1 from '../assets/portfolio/portfolio-1.jpg'
import portfolio2 from '../assets/portfolio/portfolio2.jpg'
import portfolio3 from '../assets/portfolio/portfolio-3.jpg'
import portfolio4 from '../assets/portfolio/portfolio-4.jpg'
import portfolio5 from '../assets/portfolio/portfolio-5.jpg'
import portfolio6 from '../assets/portfolio/portfolio-6.jpg'
import procedure1 from '../assets/procedure-1.png'
import procedure3 from '../assets/procedure-2.png'
import procedure2 from '../assets/procedue-3.png'
import { Link } from 'react-router-dom';
import FooterComponent from '../components/footer';
import InviteComponent from '../components/invite';

export default function HomePage(){
    return (
        <>
      <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        {/* HeroSection */}
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-bottom bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='fade-in-normal text-4xl font-semibold md:text-7xl lg:font-normal'>BIOPHILIC HOMES</span><br/><span className='fade-in-slow text-2xl font-normal'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        <section id="procedureSection" className="p-10 flex flex-col items-center justify-around bg-white w-screen min-h-screen lg:min-h-screen h-auto" >
          {/* procedureSection */}
          <h3 className='text-sm md:text-2xl lg:text-4xl fade-in-normal'>WELCOME TO ROOTS AND ROOF ARCHITECTURE</h3>
          <h2 className='p-5 text-2xl md:text-3xl lg:text-5xl font-bold  tracking-wider fade-in-slow'>SERVICES OFFERED</h2>
          {/* procedureContainer */}
          <div className='bg-gray-100 w-screen min-h-[40%] p-5 h-auto flex flex-wrap justify-center items-center gap-8 '>
            <CardProcedure 
              number={1} 
              title="PRE-DESIGN" 
              description={`Feasibility Studies
                Site Selection and Analysis
                Site Utilization and Land-Use Studies
                `}
              imagePath={procedure1}
              animation="slideFromLeftFast"
          />
            <CardProcedure 
              number={2} 
              title="ARCHITECTURAL DESIGN" 
              description={`Schematic Design
                Contract Document Phase
                Design Development Phase
                `}
              imagePath={procedure2}
              animation="slideFromLeftNormal"
              />
            <CardProcedure 
              number={3} 
              title="SUPERVISION" 
              description={`Quality Control
                Evaluation of Construction Work
                Preparation of Daily Inspection Reports`}
              imagePath={procedure3}
              animation="slideFromLeftSlow"
              />
            <CardProcedure 
              number={4} 
              title="ARCH & ENGR DESIGN" 
              description={`Design
                Post Construction Services
                Site Supervision & Quality Control
                `} 
              imagePath={bgHero}
              animation="slideFromLeftVerySlow"
              />
          </div>
        </section>
        {/* about roots and roof section */}
        <section className='flex flex-col justify-center items-center bg-white w-screen gap-20 min-h-screen h-auto' >
          <img className="w-[150px] h-[150px]" src={logo} alt="Roots And Roof Architects Cebu City Logo" />
          <p className='md:text-3xl lg:text-5xl font-light '>
            A network of visionary architects with a passion for<br/>
            &nbsp;&nbsp;innovative, beautiful and sustainable buildings
          </p>
           <Link to="/about" className='roots-btn-hover-color font-light text-shadow-2xs text-[30px] transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color w-auto h-10 rounded-[10px] px-10 py-7'>
              About Us
            </Link>
        </section>
         {/* Featured Project */}
        <h2 className='p-10 text-3xl md:text-4xl semi-bold  tracking-wider font-bold'>FEATURED PROJECT</h2>
        <section className='fade-in-normal flex flex-wrap justify-center items-center gap-3 w-full lg:w-[70%] h-auto' >
          <div style={{backgroundImage: `url(${portfolio1})`}} className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio2})`}} className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio3})`}}className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio4})`}}  className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio5})`}}className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio6})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
        </section>
        <h2 className='p-10 text-3xl md:text-4xl semi-bold  tracking-wider'>Like To See More Of Our Projects ?</h2>
        <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
            <a className="roots-btn-hover-color text-shadow-2xs text-2xl font-light" href="">View our Gallery</a>
        </div>
        <section className='mt-30 h-auto w-screen flex flex-col '></section>
        <h2 className='p-10 text-2xl md:text-4xl semi-bold tracking-wider'>WHAT IS IN OUR HOMES?</h2>
        <img aria-label='' src={bioPhilic_Design} className='fade-in-up relative h-[80%] lg:h-[60%] bg-no-repeat bg-bottom bg-fill w-[80%] lg:w-[60%] pb-10 '/>
        <section  className='fade-in-up relative h-auto min-h-[50vh] md:h-[70vh] lg:h-[80vh] w-screen pb-10' >
          <h2 className='pl-15 text-4xl w-[90%] text-[13px] md:text-2xl lg:text-3xl text-black'>
              What makes our design revolutionary is the seamless integration of natural phenomena
              with human ingenuity. We have engineered a home that prioritizes environmental
              stewardship while delivering unparalleled comfort, high functionality, and structural
              resilience. Our core components include:
              <ul className='mt-10 list-disc pl-6 text-black '>
                <li>
                  Permaculture: Integrates sustainable flora ecosystems to manage storm runoff
                  effectively and naturally mitigate localized flooding.
                </li>
                <li>
                  Aquaponics: Provides an efficient, closed-loop system for generating essential
                  nutrients, fueling plant growth without chemical fertilizers.
                </li>
                <li>
                  STP (Sustainable Water Treatment): Manages and recycles the home's
                  wastewater, supplying clean, non-potable water to integrated systems like
                  irrigation and landscaping.
                </li>
                <li>
                  Natural Light & Ventilation: Optimizes daylight penetration and utilizes passive
                  air movement to maximize energy efficiency and enhance occupant well-being.
                </li>
              </ul>
          </h2>
        </section>
        <InviteComponent/>
        {/* footer */}
        <FooterComponent/>
      </main> 
    
    </>
    );
}


