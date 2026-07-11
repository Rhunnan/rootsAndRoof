import LazyImage from "../../components/LazyImage";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/project";
import React from "react";
type FeaturedProjectProps = {
  showAll?: boolean;
  onImageClick?: (index: number) => void;
};

export type Project = {
  title: string;
  location: string;
  image: string;
};
function FeaturedProject({
  showAll = false,
  onImageClick,
}: FeaturedProjectProps) {
  const navigate = useNavigate();

  const ref = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0,
            rootMargin: "300px 0px",
        }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
}, []);

  // const displayedProjects = projects.slice(0, 4);
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, 4);
      return (
    <section
      ref={ref}
      className={`w-full bg-[#F8F6F2] transition-all duration-1000 ${
        isVisible ? "fade-in-normal" : "opacity-0"
      }`}
    >
      {/* ================= HEADER ================= */}

      <div className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-24 pb-14">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <p className="uppercase tracking-[0.35em] text-[#66714B] text-sm">

              {showAll ? "Portfolio Collection" : "Featured Projects"}

            </p>

            <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-semibold text-[#2D2A26] leading-tight">

              {showAll
                ? "Architecture Portfolio"
                : "Spaces Designed Around Nature"}

            </h2>

            <div className="mt-7 w-28 h-[2px] bg-[#D6D1C4]" />

          </div>

          {!showAll && (
            <button
              onClick={() => navigate("/portfolio")}
              className="group flex items-center gap-4 uppercase tracking-[0.25em] text-sm text-[#66714B]"
            >
              View Complete Portfolio

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          )}

        </div>

      </div>

      {/* ================= GRID ================= */}

      <div
        className={`
        grid
        gap-[2px]

        ${
          showAll
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        }
      `}
      >
        {displayedProjects.map((project, index) => (
          <article
            key={index}
            className="relative overflow-hidden group cursor-pointer h-[520px]"
            onClick={() => {
              if (showAll) {
                onImageClick?.(index);
              } else {
                navigate("/portfolio");
              }
            }}
          >
            {/* IMAGE */}

            <LazyImage
    src={project.image}
    alt={project.title}
    className="group-hover:scale-110"
/>
            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              "
            />

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  text-[#D5D5D5]
                "
              >
                {project.location}
              </p>

              <h3
                className="
                  mt-3
                  text-white
                  text-3xl
                  font-light
                  transition-all
                  duration-500
                  group-hover:-translate-y-2
                "
              >
                {project.title}
              </h3>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    text-[#D6D1C4]
                  "
                >
                  {showAll ? "Open Image" : "View Project"}
                </span>

                <ArrowRight size={16} color="#D6D1C4" />

              </div>

            </div>

          </article>
        ))}
      </div>
            {!showAll && (
        <section className="relative h-[430px] overflow-hidden">

          <LazyImage
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt="Nature"
              className="absolute inset-0 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative h-full flex flex-col justify-center items-center text-center px-6">

            <p className="uppercase tracking-[0.35em] text-[#C8D1BC] text-sm">

              Our Philosophy

            </p>

            <h2 className="mt-8 text-white text-3xl md:text-5xl font-light leading-relaxed">

              LIGHT.

              <span className="mx-3">AIR.</span>

              <span className="text-[#D6D1C4]">

                NATURE.

              </span>

              <br />

              MATERIALS.

              <span className="ml-3">

                PEOPLE.

              </span>

            </h2>

            <p className="mt-8 max-w-3xl text-gray-200 text-lg leading-8">

              We believe exceptional architecture begins by understanding nature,
              honoring the environment, and creating timeless spaces where people
              can truly thrive.

            </p>

          </div>

        </section>
      )}

    </section>
  );
}

export default React.memo(FeaturedProject);
