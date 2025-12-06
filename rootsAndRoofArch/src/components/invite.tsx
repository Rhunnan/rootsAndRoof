import plantInvite from '../assets/plant-invite.png'
import woodInvite from '../assets/wood-invite.png'
import integSystems from '../assets/integrated-systems.png'
import { useLocation, Link } from "react-router-dom"


export default function InviteComponent(){
    const location = useLocation();

    return (
        <>
            <section className="flex flex-col-reverse lg:flex-row w-screen h-auto min-h-[30vh] md:min-h-[50vh]">
                {/* text and buttons */}
                <div className="flex flex-col justify-around items-center p-2 bg-gray-100 w-screen lg:w-[50vw] min-h-[30vh] md:min-h-[40vh] h-auto">
                    <h2 className="text-3xl md:text-6xl font-semibold whitespace-pre-line">{`
                    Let's Create a Space That
                    Breathes With Nature
                    `}</h2>
    
                    {/* buttons */}
                    <div className="flex justify-center gap-x-10 w-full h-auto">
                        <div className={`transition-all duration-500 ease-in-out  ${location.pathname === "/contact" ? "hidden" : "flex"} justify-center items-center text-white roots-btn-color text-[20px] w-auto min-w-[25%] h-10 rounded-[5px] px-6 py-2`}>
                            <Link className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light" to="/contact">Start Your Project</Link>
                        </div>
                        <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[5px] px-6 py-2'>
                            <Link className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light" to="/portfolio">Learn More</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center p-5 gap-x-5 gap-y-10 bg-gray-100 w-screen lg:w-[50vw] min-h-[40vh] h-auto">
                    <div className='bg-gray-100 h-auto w-[220px] flex-col justify-center items-center'>
                        <img src={plantInvite} className="w-50" alt="plant-image, rootsandroof" />
                        <h2 className='font-semibold text-center text-gray-700'>Green Nature</h2>
                        <p className='text-sm whitespace-pre-line text-center'>Focuses on: Integrating indoor plants, natural light, and natural elements for wellness.</p>
                    </div>
                    <div className='bg-gray-100 h-auto w-[220px]  flex-col justify-center items-center'>
                        <img src={woodInvite} className="w-50" alt="plant-image, rootsandroof" />
                        <h2  className='font-semibold text-center text-gray-700' >Natural Materials</h2>
                        <p className='text-sm whitespace-pre-line text-center'>Focuses on: The use of wood, stone, and other natural textures/patterns in the design.</p>
                    </div>
                    <div className='bg-gray-100 h-auto w-[220px] flex-col justify-center items-center'>
                        <img src={integSystems} className="w-50" alt="plant-image, rootsandroof" />
                        <h2  className='font-semibold text-center text-gray-700'>Regenerative Systems</h2>
                        <p className='text-sm whitespace-pre-line text-center'>Focuses on: The integrated systems like aquaponics, water treatment, and permaculture.</p>
                    </div>
                </div>
            </section>
        </>
    );
}