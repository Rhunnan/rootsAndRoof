import NavBar from "../components/navbar";
import bgHero from "../assets/bg-hero-3.png"
import FooterComponent from "../components/footer";
import VisionComponent from "./components/vision";
import MissionComponent from "./components/mission";
import TeamComponent from "./components/team";
import InviteComponent from "../components/invite";

export default function AboutPage(){
    return (<>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-1/4 md:top-1/4 left-10 text-4xl text-white w-[90%]'>
            <span className='text-3xl md:text-5xl font-bold whitespace-pre-line'>{`Architecture That Breathes\nwith the Planet`}</span><br/>
            <span className='text-sm md:text-2xl lg:text-3xl'>Roots & Roof Designers Inc. is an innovative architecture firm reshaping the future of
              sustainable living. We fuse permaculture, biophilic design, aquaponics technology,
              advance waste water treatment systems, back to Eden gardening, and food forest
              systems to create regenerative spaces where architecture becomes a living extension
              of nature..
            </span>
          </h2>
        </section>
        <MissionComponent/>
        <VisionComponent/>
        {/* <TeamComponent/> */}
        <InviteComponent/>
        <FooterComponent/>       
    </main>
    </>
    );

}