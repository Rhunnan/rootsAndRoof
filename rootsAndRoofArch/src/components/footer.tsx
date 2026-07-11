import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#262421] w-full text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Brand */}

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#A9AF94]">

              ROOTS & ROOF

            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-light leading-tight">

              Designing spaces

              <br />

              inspired by

              <span className="italic text-[#B7BE9F]">

                {" "}nature.

              </span>

            </h2>

            <p className="mt-8 text-gray-400 leading-8 max-w-md">

              We create sustainable architecture that connects people,
              nature and timeless design through biophilic principles
              and regenerative thinking.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-[#A9AF94]">

              Navigation

            </p>

            <nav className="mt-8 flex flex-col gap-5">

              <Link
                to="/"
                className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#B7BE9F] transition"
              >
                Home

                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />

              </Link>

              <Link
                to="/about"
                className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#B7BE9F] transition"
              >
                About

                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />

              </Link>

              <Link
                to="/portfolio"
                className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#B7BE9F] transition"
              >
                Portfolio

                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />

              </Link>

              <Link
                to="/contact"
                className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#B7BE9F] transition"
              >
                Contact

                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition"
                />

              </Link>

            </nav>

          </div>

          {/* Contact */}

          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-[#A9AF94]">

              Contact

            </p>

            <div className="mt-8 space-y-6">

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">

                  Email

                </p>

                <a
                  href="mailto:info@rootsandroof.com"
                  className="mt-2 inline-block text-lg hover:text-[#B7BE9F] transition"
                >
                  info@rootsandroof.com
                </a>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">

                  Phone

                </p>

                <a
                  href="tel:+639171801858"
                  className="mt-2 inline-block text-lg hover:text-[#B7BE9F] transition"
                >
                  +63 917 180 1858
                </a>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">

                  Location

                </p>

                <p className="mt-2 text-lg leading-8 text-gray-300">

                  Cebu

                  <br />

                  Philippines

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-white/10"></div>

      {/* Bottom */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">

            © {year} Roots & Roof Designers Inc.
            All rights reserved.

          </p>

          <p className="text-sm text-gray-500">

            Designed & Developed by
            <span className="text-[#B7BE9F]">

              {" "}Rhunnan Dwight Liao

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}