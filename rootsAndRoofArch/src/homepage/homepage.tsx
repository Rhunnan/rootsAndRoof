import bgHero from '../assets/homePage/bg-hero.png'
import NavBar  from '../components/navbar';
import bioPhilic_Design from  '../assets/biophilic_design.png'
import FooterComponent from '../components/footer';
import InviteComponent from '../components/invite';
import Services from './components/services';
import HomeAboutSection from './components/homePageAboutSection';
import FeaturedProject from './components/featuredProject';
import Slider from './components/slider';

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
        {/* carprocedure services */}
        <Services/>
        <HomeAboutSection/>
        <FeaturedProject/>
        <h2 className='p-10 text-3xl md:text-4xl semi-bold  tracking-wider'>Like To See More Of Our Projects ?</h2>
        <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
            <a className="roots-btn-hover-color text-shadow-2xs text-2xl font-light" href="">View our Gallery</a>
        </div>
        <section className='mt-30 h-auto w-screen flex flex-col '></section>
        <h2 className='p-10 text-2xl md:text-4xl semi-bold tracking-wider'>WHAT IS IN OUR HOMES?</h2>
        <img aria-label='' src={bioPhilic_Design} className='fade-in-up relative h-[80%] lg:h-[60%] bg-no-repeat bg-bottom bg-fill w-[80%] lg:w-[60%] pb-10 '/>
        <section  className='fade-in-up relative h-auto min-h-[50vh] md:h-[70vh] lg:h-[80vh] w-screen pb-10' >
          <h2 className='pl-25 text-4xl w-[90%] text-[13px] md:text-2xl lg:text-3xl text-black'>
              What makes our design revolutionary is the seamless integration of natural phenomena
              with human ingenuity. We have engineered a home that prioritizes environmental
              stewardship while delivering unparalleled comfort, high functionality, and structural
              resilience. Our core components include:
              <ul className='mt-10 list-disc pl-6 text-black '>
                <Slider slideDirection='left' description='Permaculture: Integrates sustainable flora ecosystems to manage storm runoff
                  effectively and naturally mitigate localized flooding.'>
                </Slider>
                <Slider slideDirection='right' description='Aquaponics: Provides an efficient, closed-loop system for generating essential
                  nutrients, fueling plant growth without chemical fertilizers.'>
                </Slider>
                <Slider slideDirection='left' description='STP (Sustainable Water Treatment): Manages and recycles the homes
                  wastewater, supplying clean, non-potable water to integrated systems like
                  irrigation and landscaping.'>
                </Slider>
                <Slider slideDirection='right' description='Natural Light & Ventilation: Optimizes daylight penetration and utilizes passive
                  air movement to maximize energy efficiency and enhance occupant well-being.'>
                </Slider>
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


