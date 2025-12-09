import NavBar from "../components/navbar";
import bgHero from "../assets/bg-hero-4.webp"
import FooterComponent from "../components/footer";
import InviteComponent from "../components/invite";
import procedure1 from '../assets/procedure-1.webp'
import procedure3 from '../assets/procedure-2.webp'
import procedure2 from '../assets/procedue-3.webp'
import CardProcedure from "../components/cards";
import AnimationObserver from "../components/observerAnimation";

export default function ContactPage(){
    return (<>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-position-[center_20%] md:bg-position-[center_70%] bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='fade-in-normal text-4xl font-semibold md:text-7xl lg:font-normal'>Contact Page</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        
        <section className='fade-in-up min-h-screen h-auto w-screen'>
          {/* lets connect div container */}
          <div className="flex flex-col justify-center h-[10vh] md:h-[15vh] lg:h-[20vh] w-screen roots-btn-color">
            <h2 className="pl-15 md:pl-20 lg:pl-40 text-3xl md:text-6xl lg:text-7xl font-semibold text-white">LET'S CONNECT</h2>
            <p className=" pl-28 md:pl-38 lg:pl-58 md:text-3xl lg:text-4xl font-normal text-white">BUILD YOUR FUTURE</p>
          </div>
          {/* form and map continer */}
          <AnimationObserver>
             <div className="w-screen min-h-[70vh] h-auto flex flex-col lg:flex-row">
            {/* forms */}
            <div className="my-5 flex flex-col gap-y-10 justify-center items-center min-h-[50vh] lg:min-h-[80vh] h-auto w-screen lg:w-[50vw]">
              <form action="" className="h-auto w-[80%] p-5 lg:w-[70%] lg:min-h-[65%] flex flex-col items-center justify-center gap-y-8 roots-btn-color rounded-2xl">
                <input type="text" placeholder="Full Name" className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" />
                <input type="text" placeholder="Email Address" className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" />
                <input type="text" placeholder="Contact Number" className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" />
                <textarea  placeholder="Message" className=" pl-3 w-[85%] h-auto min-h-20 text-xl rounded-md text-input-color" />
              </form>
              {/* //button */}
              <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[5px] px-6 py-2'>
                <button type="submit" className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light" onClick={()=>{
                  alert("We apologize for the hassle. This functionality is under maintenance. \n\nFor the meantime,\nPlease Email Us directly at info@rootsnroof.com")
                }}>SEND MESSAGE</button>
              </div>
            </div>
            {/* map */}
            <div className="flex flex-col w-screen lg:w-[50vw] min-h-[30vh] lg:min-h-[50vh] gap-y-5 items-center lg:items-start justify-center h-auto relative" >
                <div>
                  <h2 className="text-md md:text-2xl font-light"><span className="text-xl md:text-3xl font-light">EMAIL:</span> info@rootsandroofdesign.com</h2>
                  <p className="text-sm md:text-2xl font-light"><span className="text-xl  md:text-3xl font-light">ADDRESS:</span> Talisay City, Cebu Philippines, 6000</p>
                </div>
                <iframe
                  aria-label="Map or Location of akiroconstruction cebu"
                  title="Akiro Construction and Supply Location"
                  className="w-[80%] h-[20vh] lg:w-[80%] lg:h-[50vh] border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=villa%20raya%20talisay&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                >
                </iframe>
            </div>
          </div>
          </AnimationObserver>
        </section>    
        <section className='flex flex-wrap justify-center items-center gap-8 md:w-screen lg:w-[70%] h-auto' > 
        </section>
        <section id="procedureSection" className=" flex flex-col items-center justify-between bg-white w-screen min-h-screen lg:min-h-screen h-auto" >
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
        <InviteComponent/>
        <FooterComponent/>   
    </main>
    </>
    );

}