import NavBar from "../components/navbar";
import bgHero from "../assets/bg-hero-4.png"
import FooterComponent from "../components/footer";

export default function ContactPage(){
    return (<>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-position-[center_20%] md:bg-position-[center_70%] bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='text-4xl md:text-6xl font-bold'>Contact Page</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        <section className='fade-in-up relative min-h-screen h-auto w-screen bg-red-200'>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='text-4xl md:text-6xl font-bold'>BIOPHILIC HOMES</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>   
        <section className='fade-in-up relative min-h-screen h-auto w-screen bg-red-200'>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='text-4xl md:text-6xl font-bold'>BIOPHILIC HOMES</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>    
        <FooterComponent/>   
    </main>
    </>
    );

}