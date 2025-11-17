import portfolio1 from '../assets/portfolio/portfolio-1.jpg'
import portfolio2 from '../assets/portfolio/portfolio2.jpg'
import portfolio3 from '../assets/portfolio/portfolio-3.jpg'
import portfolio4 from '../assets/portfolio/portfolio-4.jpg'
import portfolio5 from '../assets/portfolio/portfolio-5.jpg'
import portfolio6 from '../assets/portfolio/portfolio-6.jpg'
import portfolio7 from '../assets/portfolio/portfolio-7.jpg'
import portfolio8 from '../assets/portfolio/portfolio-8.jpg'
import portfolio9 from '../assets/portfolio/portfolio-9.jpg'
import portfolio10 from '../assets/portfolio/portfolio-10.jpg'
import portfolio11 from '../assets/portfolio/portfolio-11.jpg'
import portfolio12 from '../assets/portfolio/portfolio-12.jpg'
import portfolio13 from '../assets/portfolio/portfolio-13.jpg'
import NavBar from '../components/navbar'
import bgHero from "../assets/bg-hero-2.png"
import FooterComponent from '../components/footer'


export default function PortfolioPage(){
    return (<>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-[size:200%_200%] bg-no-repeat bg-bottom bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='text-4xl md:text-6xl font-bold'>Portfolio Page</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        <h3 className='text-sm md:text-2xl lg:text-3xl pt-10'>BIOPHILIC DESIGNS</h3>
        <h2 className='pt-2 pb-10 text-3xl md:text-5xl semi-bold  font-bold  tracking-wider'>PROJECT GALLERY</h2>
        <section className='flex flex-wrap justify-center items-center gap-3 w-full lg:w-full h-auto' >
          <div style={{backgroundImage: `url(${portfolio1})`}} className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio2})`}} className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio3})`}}className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio4})`}}  className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio5})`}}className='bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio6})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio7})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio8})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio9})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio10})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio11})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio12})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>
          <div style={{backgroundImage: `url(${portfolio13})`}}className='bg-no-repeat bg-cover bg-center h-[300px] w-[300px] bg-amber-300'></div>        
        </section>
        <FooterComponent/>
    </main>
    </>
    );

}