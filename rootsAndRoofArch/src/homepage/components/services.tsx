import procedure1 from '../../assets/procedure-1.webp'
import procedure3 from '../../assets/procedure-2.webp'
import procedure2 from '../../assets/procedue-3.webp'
import bgHero from '../../assets/homePage/bg-hero.webp'
import CardProcedure from '../../components/cards'


// export default function Services(){
//     return (
//         <>
//         <section id="procedureSection" className="p-10 flex flex-col items-center justify-around bg-white w-screen min-h-screen lg:min-h-screen h-auto" >
//           {/* procedureSection */}
//           <h2 className='text-sm md:text-2xl lg:text-4xl fade-in-normal'>WELCOME TO ROOTS AND ROOF ARCHITECTURE</h2>
//           <h3 className='p-5 text-2xl md:text-3xl lg:text-5xl font-bold  tracking-wider fade-in-slow'>SERVICES OFFERED</h3>
//           {/* procedureContainer */}
//           <div className='bg-gray-100 w-screen min-h-[40%] p-5 h-auto flex flex-wrap justify-center items-center gap-8 '>
//             <CardProcedure 
//               number={1} 
//               title="PRE-DESIGN" 
//               description={`Feasibility Studies
//                 Site Selection and Analysis
//                 Site Utilization and Land-Use Studies
//                 `}
//               imagePath={procedure1}
//               animation="slideFromLeftFast"
//           />
//             <CardProcedure 
//               number={2} 
//               title="ARCHITECTURAL DESIGN" 
//               description={`Schematic Design
//                 Contract Document Phase
//                 Design Development Phase
//                 `}
//               imagePath={procedure2}
//               animation="slideFromLeftNormal"
//               />
//             <CardProcedure 
//               number={3} 
//               title="SUPERVISION" 
//               description={`Quality Control
//                 Evaluation of Construction Work
//                 Preparation of Daily Inspection Reports`}
//               imagePath={procedure3}
//               animation="slideFromLeftSlow"
//               />
//             <CardProcedure 
//               number={4} 
//               title="ARCH & ENGR DESIGN" 
//               description={`Design
//                 Post Construction Services
//                 Site Supervision & Quality Control
//                 `} 
//               imagePath={bgHero}
//               animation="slideFromLeftVerySlow"
//               />
//           </div>
//         </section>
//         </>
//     )
// }
import { ArrowRight } from "lucide-react";
import { Wind, Sun, CloudRain } from "lucide-react";

const benefits = [
  {
    title: "Natural Cooling",
    description:
      "Reduce indoor heat while improving airflow through passive biophilic design strategies.",
    icon: <Wind className="w-7 h-7" />,
    image:
      "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-4.webp",
  },
  {
    title: "Healthier Spaces",
    description:
      "Natural daylight, fresh air and greenery improve physical wellness and everyday comfort.",
    icon: <Sun className="w-7 h-7" />,
    image:
      "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-5.webp",
  },
  {
    title: "Climate Responsive",
    description:
      "Designed specifically for Cebu's tropical climate to withstand heat and heavy rainfall.",
    icon: <CloudRain className="w-7 h-7" />,
    image:
      "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-6.webp",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F7F4EE] py-28">

      <div className="w-screen mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <p className="uppercase tracking-[0.35em] text-sm text-[#7C8260]">

              WHY BIOPHILIC LIVING?

            </p>

            <h2 className="mt-6 text-5xl leading-tight font-light">

              Better for you.

              <br />

              Better for the

              <span className="text-[#66714B]">

                {" "}planet.

              </span>

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              Biophilic homes integrate nature into everyday living,
              improving comfort, reducing energy consumption and creating
              healthier environments for families.

            </p>

            <button
              className="mt-12 border border-[#66714B]
              px-8 py-4 uppercase tracking-widest
              text-sm
              hover:bg-[#66714B]
              hover:text-white
              transition-all
              duration-300
              flex items-center gap-3"
            >
              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-8">

            <div className="grid md:grid-cols-3 gap-8">

              {benefits.map((item) => (

                <article
                  key={item.title}
                  className="group"
                >

                  <div className="relative overflow-hidden">

                    <img
                      src={item.image}
                      className="h-[330px] w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    <div
                      className="
                      absolute
                      bottom-5
                      left-1/2
                      -translate-x-1/2
                      w-16
                      h-16
                      rounded-full
                      bg-[#66714B]
                      flex
                      justify-center
                      items-center
                      text-white
                      shadow-xl"
                    >

                      {item.icon}

                    </div>

                  </div>

                  <div className="pt-12 text-center">

                    <h3 className="uppercase tracking-widest text-lg">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">

                      {item.description}

                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}