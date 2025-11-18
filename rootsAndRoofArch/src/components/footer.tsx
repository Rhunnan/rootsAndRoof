import { Link } from "react-router-dom";

export default function FooterComponent(){
    const recentYear = new Date().getFullYear();

    return(
        <div className='min-h-[150px] h-auto w-screen roots-btn-color'>
            <footer aria-label="footer section of every page - Akiro Construction and Supply Cebu" className="h-auto w-auto flex flex-col">
            <div className="pt-10 flex min-h-[40vh] md:min-h-[30vh] lg:min-h-[35vh] h-auto w-screen akiro-primary-color-bg justify-around">
            {/* <Link to="/">
                    <div id="logo" className='h-13 w-50 bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${logo})`}}></div>
                </Link> */}

            {/* main pages */}
            <nav aria-label="list of Main pages in footer section - Akiro Construction and Supply Cebu" className="w-auto h-auto">
                <ul className="flex flex-col gap-y-1.5">
                <li className="text-md md:text-2xl pb-1 text-gray-200 akiro-hover-text font-normal">Main Pages</li>
                <li><Link className="text-sm md:text-xl font-light text-white akiro-hover-text" to="/">Home</Link></li>
                <li><Link to="/about" className="text-sm md:text-xl font-light text-white akiro-hover-text">About Us</Link></li>
                <li><Link to="/portfolio" className="text-sm md:text-xl font-light text-white akiro-hover-text">Portfolio</Link></li>
                <li><Link to="/contact" className="text-sm md:text-xl font-light text-white akiro-hover-text">Contact Us</Link></li>
                </ul>
            </nav>
            {/* findus */}
            <nav aria-label="list of ways to find us in footer section - Akiro Construction and Supply Cebu" className="w-auto h-auto">
                <ul className="flex flex-col gap-y-1.5">
                {/* <li className="text-md md:text-2xl pb-1 text-gray-200">Find Us</li>
                <li><a target="_blank" href="https://www.google.com/maps/place/Akiro+Construction+and+Supply/@10.2622051,123.823068,1143m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33a99dd300d66f0b:0xe59b5900828ac369!8m2!3d10.2622051!4d123.8256429!16s%2Fg%2F11n02xgd46?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" className="text-sm md:text-xl font-light text-white akiro-hover-text ">Block 4 Lot 5 Villaraya<br/>  Subd,Lawaan 3 Street, Talisay<br/>  6045 Cebu</a></li> */}
                <li className="gap-x-2 pb-1.5 pt-2.5 flex w-auto h-auto">
                    <a target="_blank" href="https://www.facebook.https://www.facebook.com/profile.php?id=61580777288357&mibextid=wwXIfr&rdid=MkCXhe6mB2hcollX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bsvqd1LCK#://www.facebook.com/share/1Bsvqd1LCK/?mibextid=wwXIfr/https://www.facebook.com">
                    <i className="fa-brands fa-facebook text-white text-3xl akiro-hover-text font-light"></i>
                    </a>
                    <i className="fa-brands fa-square-instagram text-white text-3xl akiro-hover-text font-light"></i>
                    <i className="fa-brands fa-twitter text-3xl text-white akiro-hover-text font-light"></i>
                </li>
                <li><a href="mailto:info@rootsandroof.com" className="text-white akiro-hover-text text-sm md:text-xl font-light" >info@rootsandroof.com</a>              </li>
                <li><p className="text-sm md:text-xl text-white">09171801858</p></li>
                </ul>
            </nav>
            </div>
            {/* copyright section */}
            <div className="p-3 flex justify-center items-center akiro-primary-color-bg h-[5vh] w-[full] shadow-2xl">
                <p className="text-[10px] md:text-xl text-white font-light">&#169; {recentYear} Roots and Roof Architects. All rights reserved. | Site by Rhunnan Dwight Liao</p>
            </div>
            </footer>
        </div>

    );
}