
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

export default function FeaturedProject(){
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState<number|null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef(null);
    const navigate = useNavigate();
    useEffect(()=>{
      const observer = new IntersectionObserver(
        ([entry])=>{
          if(entry.isIntersecting){
            setIsVisible(true);
          }
        },
        {threshold:0.30}
      );
      if(ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    const featuredProjects:{projectName:string, description:string, image:string}[] = [
        {projectName:"Sitting on a Slopping Terrain", description:"", image: 'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-1.webp'},
        {projectName:"3 Storey Contemporary Residence", description:"", image:'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio2.webp'},
        {projectName:"Modern Country Side Residence", description:"", image:'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-3.webp'},
        {projectName:"Biophilic Design", description:"", image:'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-4.webp'},
        {projectName:"Biophilic Design", description:"", image:'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-5.webp'},
        {projectName:"Biophilic Design", description:"", image:'https://rootsnroof-663b5.web.app/firebase-images/portfolio/portfolio-6.webp'},


    ];
    return (
       
      <section
        ref={ref}
        id="FeaturedProjects"
        aria-labelledby="featured-projects-heading"
        className={`flex flex-wrap justify-center items-center gap-3 w-full lg:w-[70%] h-auto ${isVisible ? "fade-in-normal" : "opacity-0"}`}
        // className={`bg-gray-100 w-full min-h-[60vh] flex flex-col items-center justify-around px-4 py-10
        >
        <h2 className='p-10 text-3xl md:text-4xl semi-bold  tracking-wider font-bold'>FEATURED PROJECT</h2>
        <div className="mt-10 w-full flex flex-wrap justify-center gap-6">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className="bg-no-repeat bg-cover bg-center h-[300px] w-[300px] relative group rounded-md overflow-hidden shadow-md"
              aria-label={`Featured project: ${project.projectName}`}
            >
              {/* Interactive image container */}
              <div
                className="relative w-full h-full cursor-pointer"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setIsHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setIsHoveredIndex(null);
                }}
                onClick={() => {
                        navigate("/portfolio")
                    }}
              >
                <img
                  src={project.image}
                  loading="lazy"
                  alt={`${project.projectName} - Akiro Construction and Supply Project`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/70 p-4 text-white flex flex-col justify-center transition-opacity duration-300 ${
                    isHovered && isHoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.projectName}
                  </h3>
                  <p className="text-sm mt-1 line-clamp-3">{project.description}</p>
                  <div className="mt-3">
                    <button className="btn btn-primary" 
                    onClick={()=> {
                        navigate("/portfolio")
      
                    }}>Learn More</button>
                  </div>
                </div>
              </div>
            </article>
          ))} 
        </div>
      </section>

    );
}