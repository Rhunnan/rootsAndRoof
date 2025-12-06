import procedure1 from '../../assets/procedure-1.png'
import procedure3 from '../../assets/procedure-2.png'
import procedure2 from '../../assets/procedue-3.png'
import bgHero from '../../assets/homePage/bg-hero.png'
import CardProcedure from '../../components/cards'


export default function Services(){
    return (
        <>
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
        </>
    )
}