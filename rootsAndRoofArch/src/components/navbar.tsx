import { useEffect, useState } from "react";
import longLogo from '../assets/homePage/long-logo.png'
import navBurgerButton from '../assets/burger-button.png'
import navXButton from '../assets/xbutton.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar(){
    const [scrolled, setScrolled] = useState(false);
    const [isClickNavButton, setIsClickNavButton] = useState<boolean>(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
        const halfScreen = 50;
        if (window.scrollY > halfScreen) { 
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleClick = () => {
        if(isClickNavButton === true){
            setIsClickNavButton(false);
        }else{
            setIsClickNavButton(true);
        }
    }

    return (

        <>
            <header>
                {/* navContanier */}
                <nav className='w-screen h-auto'>
                {/* NavDivContainer for layout */}
                <div className={`hidden md:flex w-full h-18 transition-all duration-500 ease-in-out ${ location.pathname === "/about" || scrolled ? "bg-white" : "bg-transparent"} fixed top-0 left-0 z-20 flex justify-around items-center`}>
                    {/* icon */}
                    <Link to="/">
                        <div id="logo" className='h-13 w-50 bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${longLogo})`}}></div>
                    </Link>

                    {/* navbars */}
                    <ul className='flex justify-center gap-x-16 items-center md:w-[60%] lg:w-[40%]'>
                    <li>
                        <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/portfolio">Portfolio</Link>
                    </li>
                    {
                    location.pathname === "/about" ||   scrolled ? 
                    <li className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
                        <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/contact">Contact</Link>
                    </li>
                    :
                    <li>
                        <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/contact">Contact</Link>
                    </li>
                    }
                    
                    </ul>
                    {/* contact button */}
                </div>
                </nav>
                {/* small screens navbar */}
                <div className="fixed top-0 left-0 z-20 flex flex-col w-full h-[full] justify-start md:hidden lg:hidden xl:hidden">
                    {/* button and logo */}
                    <div className="flex w-screen h-[60px] justify-center items-center gap-x-25 bg-white">
                        <Link to="/">
                            <div id="logo" className='ml-3 h-13 w-50 bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${longLogo})`}}></div>
                        </Link>
                        <button type="button" className="cursor-pointer"  aria-label = "Toggle Navigation Menu Button" onClick={handleClick}>
                            {isClickNavButton ?
                            <img className="w-10 h-10" src={navXButton} alt="Roots And Roof Cebu Architect Navigation Burger Button" aria-label="Roots And Roof Cebu Architect Navigation Burger Button"/> 
                             :
                            <img className="w-[50px] h-[50px]" src={navBurgerButton} alt="Roots And Roof Cebu Architect Navigation Burger Button" aria-label="Roots And Roof Cebu Architect Navigation Burger Button"/> }
                        </button>

                    </div>
                    {/* small screen nav bar */}
                    {isClickNavButton && 
                    <nav className="w-screen h-auto flex flex-col">
                        <ul>
                            <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
                                <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/">Home</Link>
                            </div>
                            <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
                                <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/about">About</Link>
                            </div>
                            <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
                                <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/portfolio">Portfolio</Link>
                            </div>
                            <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
                                <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/contact">Contact</Link>
                            </div>
                        </ul>
                    </nav>}
                </div>
            </header>
        </>
    );
}