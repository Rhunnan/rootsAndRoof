// // import { useNavigate } from "react-router-dom";
// // import { useEffect, useRef, useState } from "react";
// // import { ArrowRight } from "lucide-react";

// // export default function FeaturedProject() {
// //   const navigate = useNavigate();

// //   const ref = useRef<HTMLElement | null>(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.2 }
// //     );

// //     if (ref.current) observer.observe(ref.current);

// //     return () => observer.disconnect();
// //   }, []);

// //   const featuredProjects = [
// //     {
// //       title: "Sloping Terrain Residence",
// //       location: "Residential • Cebu",
// //       image:
// //         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-1.webp",
// //     },
// //     {
// //       title: "Contemporary Residence",
// //       location: "Residential • Cebu",
// //       image:
// //         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio2.webp",
// //     },
// //     {
// //       title: "Modern Countryside Home",
// //       location: "Residential • Cebu",
// //       image:
// //         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-3.webp",
// //     },
// //     {
// //       title: "Biophilic Villa",
// //       location: "Luxury Residence",
// //       image:
// //         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-4.webp",
// //     },
// //   ];

// //   return (
// //     <section
// //       ref={ref}
// //       className={`w-full bg-[#F8F6F2] ${
// //         isVisible ? "fade-in-normal" : "opacity-0"
// //       }`}
// //     >
// //       {/* HEADER */}

// //       <div className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-24 pb-10 flex justify-between items-center">

// //         <div>

// //           <p className="uppercase tracking-[0.35em] text-[#6C7554] text-sm">

// //             Featured Projects

// //           </p>

// //           <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#2C2C2C]">

// //             Spaces Designed Around Nature

// //           </h2>

// //         </div>

// //         <button
// //           onClick={() => navigate("/portfolio")}
// //           className="hidden md:flex items-center gap-3 uppercase tracking-[0.25em] text-sm text-[#66714B] group"
// //         >
// //           View All Projects

// //           <ArrowRight
// //             size={18}
// //             className="transition-all duration-300 group-hover:translate-x-2"
// //           />
// //         </button>
// //       </div>

// //       {/* PROJECT GRID */}

// //       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

// //         {featuredProjects.map((project, index) => (

// //           <div
// //             key={index}
// //             onClick={() => navigate("/portfolio")}
// //             className="relative h-[520px] overflow-hidden cursor-pointer group"
// //           >

// //             <img
// //               src={project.image}
// //               alt={project.title}
// //               loading="lazy"
// //               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
// //             />

// //             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

// //             <div className="absolute bottom-8 left-8 right-8">

// //               <p className="uppercase tracking-[0.25em] text-xs text-gray-300">

// //                 {project.location}

// //               </p>

// //               <h3 className="mt-2 text-white text-3xl font-light transition-all duration-500 group-hover:-translate-y-2">

// //                 {project.title}

// //               </h3>

// //               <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">

// //                 <span className="text-[#D5D0C2] flex items-center gap-2">

// //                   View Project

// //                   <ArrowRight size={16} />

// //                 </span>

// //               </div>

// //             </div>

// //           </div>

// //         ))}

// //       </div>

// //       {/* PHILOSOPHY */}

// //       <section className="relative h-[420px] overflow-hidden">

// //         <img
// //           src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
// //           className="absolute inset-0 w-full h-full object-cover"
// //           alt="Forest"
// //         />

// //         <div className="absolute inset-0 bg-black/50"></div>

// //         <div className="relative h-full flex flex-col justify-center items-center text-center px-6">

// //           <p className="uppercase tracking-[0.35em] text-[#C9D0BC] text-sm">

// //             Our Philosophy

// //           </p>

// //           <h2 className="mt-8 text-white text-2xl md:text-5xl font-light leading-relaxed">

// //             LIGHT.

// //             <span className="mx-3">AIR.</span>

// //             <span className="text-[#D6D1C4]">

// //               NATURE.

// //             </span>

// //             <br />

// //             MATERIALS.

// //             <span className="ml-3">

// //               PEOPLE.

// //             </span>

// //           </h2>

// //           <p className="mt-8 max-w-3xl text-gray-200 leading-8 text-lg">

// //             We believe exceptional architecture begins by understanding
// //             nature, honoring the environment, and creating timeless spaces
// //             where people can truly thrive.

// //           </p>

// //         </div>

// //       </section>
// //     </section>
// //   );
// // }

// import { useNavigate } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";

// type FeaturedProjectProps = {
//   showAll?: boolean;
// };

// export default function FeaturedProject({
//   showAll = false,
// }: FeaturedProjectProps) {
//   const navigate = useNavigate();

//   const ref = useRef<HTMLElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   const projects = [
//     {
//       title: "Sloping Terrain Residence",
//       location: "Residential • Cebu",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-1.webp",
//     },
//     {
//       title: "Contemporary Residence",
//       location: "Residential • Cebu",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio2.webp",
//     },
//     {
//       title: "Modern Countryside Home",
//       location: "Residential • Cebu",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-3.webp",
//     },
//     {
//       title: "Biophilic Villa",
//       location: "Luxury Residence",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-4.webp",
//     },
//     {
//       title: "Forest Residence",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-5.webp",
//     },
//     {
//       title: "Tropical Home",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-6.webp",
//     },
//     {
//       title: "Luxury Pavilion",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-14.webp",
//     },
//     {
//       title: "Garden House",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-15.webp",
//     },
//     {
//       title: "Nature Courtyard",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-16.webp",
//     },
//     {
//       title: "Minimal Retreat",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-17.webp",
//     },
//     {
//       title: "Luxury Estate",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-18.webp",
//     },
//     {
//       title: "Eco Villa",
//       location: "Biophilic",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-19.webp",
//     },
//     {
//       title: "Regenerative House",
//       location: "Biophilic",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-20.webp",
//     },
//     {
//       title: "Courtyard Residence",
//       location: "Residential",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-11.webp",
//     },
//     {
//       title: "Luxury Interior",
//       location: "Interior",
//       image:
//         "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-7.webp",
//     },
//   ];

//   const displayedProjects = showAll ? projects : projects.slice(0, 4);

//   return (
//     <section
//       ref={ref}
//       className={`w-full bg-[#F8F6F2] transition-all duration-1000 ${
//         isVisible ? "fade-in-normal" : "opacity-0"
//       }`}
//     >
//       {/* HEADER */}

//       <div className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-24 pb-12 flex flex-col md:flex-row justify-between md:items-end gap-8">
//         <div>
//           <p className="uppercase tracking-[0.35em] text-[#66714B] text-sm">
//             {showAll ? "Portfolio" : "Featured Projects"}
//           </p>

//           <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-[#2D2A26]">
//             {showAll
//               ? "Our Complete Collection"
//               : "Spaces Designed Around Nature"}
//           </h2>
//         </div>

//         {!showAll && (
//           <button
//             onClick={() => navigate("/portfolio")}
//             className="flex items-center gap-3 uppercase tracking-[0.2em] text-sm text-[#66714B] group"
//           >
//             View All Projects

//             <ArrowRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-2"
//             />
//           </button>
//         )}
//       </div>

//       {/* GRID */}

//       <div
//         className={`grid gap-[2px]
//         ${
//           showAll
//             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//             : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
//         }`}
//       >
//         {displayedProjects.map((project, index) => (
//           <article
//             key={index}
//             className="relative h-[500px] overflow-hidden cursor-pointer group"
//             onClick={() => {
//               if (!showAll) {
//                 navigate("/portfolio");
//               }
//             }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               loading="lazy"
//               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>

//             <div className="absolute bottom-8 left-8 right-8">
//               <p className="uppercase tracking-[0.25em] text-xs text-gray-300">
//                 {project.location}
//               </p>

//               <h3 className="mt-3 text-white text-3xl font-light transition-all duration-500 group-hover:-translate-y-2">
//                 {project.title}
//               </h3>

//               <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                 <span className="text-[#D8D2C8] uppercase tracking-[0.2em] text-sm">
//                   {showAll ? "Open Image" : "View Project"}
//                 </span>

//                 <ArrowRight size={16} color="#D8D2C8" />
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* PHILOSOPHY */}

//       {!showAll && (
//         <section className="relative h-[420px] overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
//             alt="Forest"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           <div className="absolute inset-0 bg-black/55"></div>

//           <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
//             <p className="uppercase tracking-[0.35em] text-[#C9D0BC] text-sm">
//               Our Philosophy
//             </p>

//             <h2 className="mt-8 text-white text-3xl md:text-5xl font-light leading-relaxed">
//               LIGHT.
//               <span className="mx-3">AIR.</span>
//               <span className="text-[#D6D1C4]">NATURE.</span>

//               <br />

//               MATERIALS.
//               <span className="ml-3">PEOPLE.</span>
//             </h2>

//             <p className="mt-8 max-w-3xl text-gray-200 leading-8 text-lg">
//               We believe exceptional architecture begins by understanding
//               nature, honoring the environment, and creating timeless spaces
//               where people can truly thrive.
//             </p>
//           </div>
//         </section>
//       )}
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type FeaturedProjectProps = {
  showAll?: boolean;
  onImageClick?: (index: number) => void;
};

type Project = {
  title: string;
  location: string;
  image: string;
};

export default function FeaturedProject({
  showAll = false,
  onImageClick,
}: FeaturedProjectProps) {
  const navigate = useNavigate();

  const ref = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "Sloping Terrain Residence",
      location: "Residential • Cebu",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-1.webp",
    },
    {
      title: "Contemporary Residence",
      location: "Residential • Cebu",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio2.webp",
    },
    {
      title: "Modern Countryside Home",
      location: "Residential • Cebu",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-3.webp",
    },
    {
      title: "Biophilic Villa",
      location: "Luxury Residence",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-4.webp",
    },
    {
      title: "Forest Residence",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-5.webp",
    },
    {
      title: "Tropical Home",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-6.webp",
    },
    {
      title: "Luxury Pavilion",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-14.webp",
    },
    {
      title: "Garden House",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-15.webp",
    },
    {
      title: "Nature Courtyard",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-16.webp",
    },
    {
      title: "Minimal Retreat",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-17.webp",
    },
    {
      title: "Luxury Estate",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-18.webp",
    },
    {
      title: "Eco Villa",
      location: "Biophilic",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-19.webp",
    },
    {
      title: "Regenerative House",
      location: "Biophilic",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-20.webp",
    },
    {
      title: "Courtyard Residence",
      location: "Residential",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-11.webp",
    },
    {
      title: "Luxury Interior",
      location: "Interior",
      image:
        "https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-7.webp",
    },
  ];

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

            <img
              src={project.image}
              loading="lazy"
              alt={project.title}
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
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

          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Nature"
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