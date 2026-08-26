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
  // const [scrolled, setScrolled] = useState(true);
  const [scrolled] = useState(true);

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