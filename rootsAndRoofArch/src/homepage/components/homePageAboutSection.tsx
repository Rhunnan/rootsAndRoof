import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useEffect, useRef, useState } from "react";

export default function HomeAboutSection(){
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        { threshold: 0.35 } 
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    
    return (<>
        <section ref={ref} className={`${isVisible ? "fade-in-normal" : "opacity-0" } flex flex-col justify-center items-center bg-white w-screen gap-20 min-h-screen h-auto`} >
          <img className="w-[150px] h-[150px]" src={logo} alt="Roots And Roof Architects Cebu City Logo" />
          <p className='md:text-3xl lg:text-5xl font-light '>
            A network of visionary architects with a passion for<br/>
            &nbsp;&nbsp;innovative, beautiful and sustainable buildings
          </p>
           <Link to="/about" className='roots-btn-hover-color font-light text-shadow-2xs text-[30px] transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color w-auto h-10 rounded-[10px] px-10 py-7'>
              About Us
            </Link>
        </section>
        </>)
}