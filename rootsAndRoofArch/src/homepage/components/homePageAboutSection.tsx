import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="bg-[#FAF8F4] w-full py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-5xl">

          {/* Small Heading */}

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#7C8260]">
            OUR PURPOSE
          </p>

          {/* Main Heading */}

          <h2
            className="
              mt-8
              text-4xl
              md:text-6xl
              xl:text-7xl
              font-semibold
              leading-[1.15]
              text-[#2D2A26]
            "
          >
            We don't just design houses.
            <br />

            We create spaces where{" "}

            <span className="text-[#66714B]">
              life grows
            </span>

            {" "}beautifully.
          </h2>

          {/* Divider */}

          <div className="w-24 h-[2px] bg-[#D8D2C8] my-12"></div>

          {/* Description */}

          <div className="max-w-3xl">

            <p className="text-lg md:text-xl leading-9 text-gray-600">
              Every project begins by understanding the relationship
              between people, nature, and place. We create architecture
              that embraces natural light, ventilation, landscape, and
              sustainable systems to enrich everyday living while
              respecting the environment.
            </p>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600">
              Our goal is not simply to construct beautiful buildings,
              but to design timeless homes that improve well-being,
              encourage connection with nature, and leave a lasting
              positive impact for generations.
            </p>

          </div>

          {/* Button */}

          <Link
            to="/about"
            className="
              mt-14
              inline-flex
              items-center
              gap-3
              uppercase
              tracking-[0.22em]
              text-sm
              font-medium
              text-[#66714B]
              group
            "
          >
            Discover Our Philosophy

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>

          {/* Signature */}

          <div className="mt-20">

            <h3
              className="
                text-3xl
                md:text-5xl
                italic
                font-light
                text-[#66714B]
              "
            >
              Designed with Nature.
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}