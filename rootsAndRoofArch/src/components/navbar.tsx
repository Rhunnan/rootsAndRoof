// import { useEffect, useState } from "react";
// import longLogo from '../assets/homePage/long-logo.png'
// import navBurgerButton from '../assets/burger-button.png'
// import navXButton from '../assets/xbutton.png'
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// export default function NavBar(){
//     const [scrolled, setScrolled] = useState(false);
//     const [isClickNavButton, setIsClickNavButton] = useState<boolean>(false);
//     const location = useLocation();
//     useEffect(() => {
//         const handleScroll = () => {
//         const halfScreen = 10;
//         if (window.scrollY > halfScreen) { 
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);


//     const handleClick = () => {
//         if(isClickNavButton === true){
//             setIsClickNavButton(false);
//         }else{
//             setIsClickNavButton(true);
//         }
//     }

//     return (

//         <>
//             <header>
//                 {/* navContanier */}
//                 <nav className='w-screen h-auto'>
//                 {/* NavDivContainer for layout */}
//                 {/* just put this commented code bck if the background of logo is already transparent/ */}
//                 {/* <div className={`hidden md:flex w-full h-18 transition-all duration-500 ease-in-out ${ location.pathname === "/about" || scrolled ? "bg-white" : "bg-transparent"} fixed top-0 left-0 z-20 flex justify-around items-center`}> */}
//                 <div className={`hidden md:flex w-full h-18 ${ location.pathname === "/about" || scrolled ? "bg-white" : "bg-transparent"} fixed top-0 left-0 z-20 flex justify-around items-center`}>
//                     {/* icon */}
//                     <Link to="/">
//                         <div id="logo" className='md:h-13 md:w-60'>
//                             <img 
//                         src={longLogo} 
//                         alt="rootsnroof Website Logo" 
//                         // Make the image always fill the now-responsive parent div
//                         className="h-full w-full object-cover" 
//                     />
//                         </div>
//                     </Link>

//                     {/* navbars */}
//                     <ul className='flex justify-center gap-x-16 items-center md:w-[60%] lg:w-[40%]'>
//                     <li>
//                         <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/portfolio">Portfolio</Link>
//                     </li>
//                     {
//                     location.pathname === "/about" ||   scrolled ? 
//                     <li className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
//                         <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/contact">Contact</Link>
//                     </li>
//                     :
//                     <li>
//                         <Link className="roots-btn-hover-color text-shadow-2xs text-[20px]" to="/contact">Contact</Link>
//                     </li>
//                     }
                    
//                     </ul>
//                     {/* contact button */}
//                 </div>
//                 </nav>
//                 {/* small screens navbar */}
//                 <div className="fixed top-0 left-0 z-20 flex flex-col w-full h-[full] justify-start md:hidden lg:hidden xl:hidden">
//                     {/* button and logo */}
//                     <div className="flex w-screen h-[60px] justify-center items-center gap-x-25 bg-white">
//                         <Link to="/">
//                         <div id="logo" className=' h-10 w-50'>
//                             <img 
//                         src={longLogo} 
//                         alt="rootnroof Website Logo" 
//                         // Make the image always fill the now-responsive parent div
//                         className="h-full w-full object-cover" 
//                     />
//                         </div>
//                     </Link>
//                         <button type="button" className="cursor-pointer"  aria-label = "Toggle Navigation Menu Button" onClick={handleClick}>
//                             {isClickNavButton ?
//                             <img className="w-10 h-10" src={navXButton} alt="Roots And Roof Cebu Architect Navigation Close Button" aria-label="Roots And Roof Cebu Architect Navigation Burger Button"/> 
//                              :
//                             <img className="w-[50px] h-[50px]" src={navBurgerButton} alt="Roots And Roof Cebu Architect Navigation Burger Button" aria-label="Roots And Roof Cebu Architect Navigation Burger Button"/> }
//                         </button>

//                     </div>
//                     {/* small screen nav bar */}
//                     {isClickNavButton && 
//                     <nav className="w-screen h-auto flex flex-col">
//                         <ul>
//                             <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
//                                 <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/">Home</Link>
//                             </div>
//                             <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
//                                 <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/about">About</Link>
//                             </div>
//                             <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
//                                 <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/portfolio">Portfolio</Link>
//                             </div>
//                             <div className="w-screen h-[47.5px] bg-gray-50 border-[0.5px] border-green-100 cursor-pointer flex justify-between items-center">
//                                 <Link aria-label = "Navigation a to Home" className="akiro-primary-color-text akiro-hover-text font-normal ml-6" to="/contact">Contact</Link>
//                             </div>
//                         </ul>
//                     </nav>}
//                 </div>
//             </header>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import longLogo from "../assets/homePage/long-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
//im forcing this to be true, if balikon ang transparent just set this to false and uncomment the useEffect
  const [scrolled, setScrolled] = useState(true);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setScrolled(window.scrollY > 40);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Desktop */}

      <nav
        className={`hidden lg:flex transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white shadow-lg h-20"
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-10">

          <Link to="/">
            <img
              src={longLogo}
              className="w-72 object-contain transition-all duration-500"
              alt="Roots & Roof"
            />
          </Link>

          <ul className="flex items-center gap-10">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative uppercase tracking-[0.2em] text-sm ${scrolled || !(location.pathname == "/"|| location.pathname == "/about") ? "text-[#35543B]": "text-white"} font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#35543B] after:transition-all after:duration-300 ${
                    location.pathname === item.path
                      ? "after:w-full text-[#35543B]"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

          <Link
            to="/contact"
            className={`rounded-full border ${scrolled || !(location.pathname == "/" || location.pathname == "/about")? "border-[#35543B] text-[#35543B] hover:text-white" :"border-white hover:border-[#35543B] text-white"}  hover:bg-[#35543B] px-6 py-3 flex items-center gap-2 transition-all duration-300`}
          >
            Schedule Consultation

            <ArrowRight size={18} />
          </Link>
        </div>
      </nav>

      {/* Mobile */}

      <nav
        className={`lg:hidden transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between">

          <Link to="/">
            <img
              src={longLogo}
              className="w-52"
              alt="Roots & Roof"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>

        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? "max-h-[500px]"
              : "max-h-0"
          }`}
        >
          <div className="bg-white border-t">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-8 py-5 uppercase tracking-wider ${
                  location.pathname === item.path
                    ? "text-[#35543B] font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="p-6">

              <Link
                to="/contact"
                className="rounded-full bg-[#35543B] text-white flex justify-center py-4"
              >
                Schedule Consultation
              </Link>

            </div>

          </div>
        </div>
      </nav>

    </header>
  );
}