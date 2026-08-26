// import plantInvite from '../assets/plant-invite.webp'
// import woodInvite from '../assets/wood-invite.webp'
// import integSystems from '../assets/integrated-systems.webp'
// import { useLocation, Link } from "react-router-dom"


// export default function InviteComponent(){
//     const location = useLocation();

//     return (
//         <>
//             <section className="flex flex-col-reverse lg:flex-row w-screen h-auto min-h-[30vh] md:min-h-[50vh]">
//                 {/* text and buttons */}
//                 <div className="flex flex-col justify-around items-center p-2 bg-gray-100 w-screen lg:w-[50vw] min-h-[30vh] md:min-h-[40vh] h-auto">
//                     <h2 className="text-3xl md:text-6xl font-semibold whitespace-pre-line">{`
//                     Let's Create a Space That
//                     Breathes With Nature
//                     `}</h2>
    
//                     {/* buttons */}
//                     <div className="flex justify-center gap-x-10 w-full h-auto">
//                         <div className={`transition-all duration-500 ease-in-out  ${location.pathname === "/contact" ? "hidden" : "flex"} justify-center items-center text-white roots-btn-color text-[20px] w-auto min-w-[25%] h-10 rounded-[5px] px-6 py-2`}>
//                             <Link className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light" to="/contact">Start Your Project</Link>
//                         </div>
//                         <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[5px] px-6 py-2'>
//                             <Link className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light" to="/portfolio" aria-label="View Roots & Roof portfolio">See Our Portfolio</Link>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="flex flex-col md:flex-row justify-center items-center p-5 gap-x-5 gap-y-10 bg-gray-100 w-screen lg:w-[50vw] min-h-[40vh] h-auto">
//                     <div className='bg-gray-100 h-auto w-[220px] flex-col justify-center items-center'>
//                         <img src={plantInvite} className="w-50" alt="plant-image, rootsandroof" />
//                         <h2 className='font-semibold text-center text-gray-700'>Green Nature</h2>
//                         <p className='text-sm whitespace-pre-line text-center'>Focuses on: Integrating indoor plants, natural light, and natural elements for wellness.</p>
//                     </div>
//                     <div className='bg-gray-100 h-auto w-[220px]  flex-col justify-center items-center'>
//                         <img src={woodInvite} className="w-50" alt="natural materials, rootsandroof" />
//                         <h2  className='font-semibold text-center text-gray-700' >Natural Materials</h2>
//                         <p className='text-sm whitespace-pre-line text-center'>Focuses on: The use of wood, stone, and other natural textures/patterns in the design.</p>
//                     </div>
//                     <div className='bg-gray-100 h-auto w-[220px] flex-col justify-center items-center'>
//                         <img src={integSystems} className="w-50" alt="regenarative systems, rootsandroof" />
//                         <h2  className='font-semibold text-center text-gray-700'>Regenerative Systems</h2>
//                         <p className='text-sm whitespace-pre-line text-center'>Focuses on: The integrated systems like aquaponics, water treatment, and permaculture.</p>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Leaf, Trees, Droplets } from "lucide-react";

interface props {
    isProjectPage: boolean
}
export default function InviteComponent({isProjectPage}:props) {
    const location = useLocation();

    const features = [
        {
            icon: <Leaf size={34} />,
            title: "Nature First",
            description:
                "Every project begins by understanding the land before drawing the first line."
        },
        {
            icon: <Trees size={34} />,
            title: "Timeless Design",
            description:
                "Spaces crafted to remain elegant, functional and valuable for generations."
        },
        {
            icon: <Droplets size={34} />,
            title: "Climate Smart",
            description:
                "Designed for your specific location’s climate using passive design strategies."
        }
    ];

    return (
        <section className="w-full relative overflow-hidden bg-[#F7F5F0]">

            {/* Hero CTA */}

            <div className="relative h-[650px]">

                <img
                    src="https://rootsnroof-663b5.web.app/firebase-images/homePage/bg-hero.webp"
                    alt="Roots & Roof Luxury Residence"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">

                    <p className="uppercase tracking-[0.4em] text-[#D5D9C7] text-sm">

                        Start Your Journey

                    </p>

                    <h2
                        className="
                        mt-6
                        text-white
                        text-4xl
                        md:text-6xl
                        lg:text-7xl
                        font-light
                        leading-tight
                        max-w-5xl"
                    >

                        Let's Create a Home

                        <br />

                        That Breathes

                        <span className="text-[#C5B37D]">

                            {" "}With Nature

                        </span>

                    </h2>

                    <p
                        className="
                        mt-8
                        text-gray-200
                        max-w-3xl
                        text-lg
                        leading-8"
                    >

                        Every remarkable home begins with a conversation.
                        Together we'll create architecture that embraces
                        nature, enhances well-being, and stands beautifully
                        for generations.

                    </p>

                    <div className="mt-14 flex flex-col sm:flex-row gap-5">

                        {location.pathname !== "/contact" && (

                            <Link
                                to="/contact"
                                className="
                                border
                                border-[#C5B37D]
                                bg-[#C5B37D]
                                text-black
                                px-10
                                py-4
                                uppercase
                                tracking-[0.25em]
                                text-sm
                                transition
                                hover:bg-white"
                            >

                                Schedule Consultation

                            </Link>

                        )}

                        <Link
                            to="/portfolio"
                            className="
                            border
                            border-white
                            text-white
                            px-10
                            py-4
                            uppercase
                            tracking-[0.25em]
                            text-sm
                            transition
                            hover:bg-white
                            hover:text-black
                            flex
                            items-center
                            gap-3"
                        >

                            Explore Projects

                            <ArrowRight size={18} />

                        </Link>

                    </div>

                </div>

            </div>

            {/* Bottom Features */}

            <div className={`${isProjectPage ? "hidden" : "block"} max-w-7xl mx-auto px-6 py-20`}>

                <div className="grid md:grid-cols-3 gap-14">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="text-center"
                        >

                            <div
                                className="
                                w-20
                                h-20
                                rounded-full
                                bg-[#66714B]
                                text-white
                                flex
                                justify-center
                                items-center
                                mx-auto"
                            >

                                {feature.icon}

                            </div>

                            <h3
                                className="
                                mt-8
                                uppercase
                                tracking-[0.2em]
                                text-xl
                                text-[#2C2C2C]"
                            >

                                {feature.title}

                            </h3>

                            <p
                                className="
                                mt-4
                                text-gray-600
                                leading-8"
                            >

                                {feature.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}