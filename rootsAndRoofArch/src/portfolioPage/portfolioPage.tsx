// import portfolio1 from '../assets/portfolio/portfolio-1.jpg'
// import portfolio2 from '../assets/portfolio/portfolio2.jpg'
// import portfolio3 from '../assets/portfolio/portfolio-3.jpg'
// import portfolio4 from '../assets/portfolio/portfolio-4.jpg'
// import portfolio5 from '../assets/portfolio/portfolio-5.jpg'
// import portfolio6 from '../assets/portfolio/portfolio-6.jpg'
// import portfolio7 from '../assets/portfolio/portfolio-7.jpg'
// import portfolio8 from '../assets/portfolio/portfolio-8.jpg'
// import portfolio9 from '../assets/portfolio/portfolio-9.jpg'
// import portfolio10 from '../assets/portfolio/portfolio-10.jpg'
// import portfolio11 from '../assets/portfolio/portfolio-11.jpg'
// import portfolio12 from '../assets/portfolio/portfolio-12.jpg'
// import portfolio13 from '../assets/portfolio/portfolio-13.jpg'
import NavBar from '../components/navbar'
import bgHero from "../assets/bg-hero-2.png"
import InviteComponent from '../components/invite'
import FooterComponent from '../components/footer'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../components/spinner'
import ImageWithSkeleton from '../components/imageWithSkeleton'


export default function PortfolioPage(){
    const [loading, setLoading] = useState<boolean>(true); 

    const [images, setImages] = useState<string[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [indexClicked, setIndexClicked] = useState<number>(0);

    useEffect(() => {
        const loadImages = async () => {
        let imgArray = [
                (await import("../assets/portfolio/portfolio-1.jpg")).default,
                (await import("../assets/portfolio/portfolio2.jpg")).default,
                (await import("../assets/portfolio/portfolio-3.jpg")).default,
                (await import("../assets/portfolio/portfolio-4.jpg")).default,
                (await import("../assets/portfolio/portfolio-5.jpg")).default,
                (await import("../assets/portfolio/portfolio-6.jpg")).default,
                (await import("../assets/portfolio/portfolio-7.jpg")).default,
                (await import("../assets/portfolio/portfolio-8.jpg")).default,
                (await import("../assets/portfolio/portfolio-9.jpg")).default,
                (await import("../assets/portfolio/portfolio-10.jpg")).default,
                (await import("../assets/portfolio/portfolio-11.jpg")).default,
                (await import("../assets/portfolio/portfolio-12.jpg")).default,
                (await import("../assets/portfolio/portfolio-13.jpg")).default,
              ];  
        setImages(imgArray);
        setLoading(false);
        };
        
        loadImages();
    }, []);
    return (<>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-bottom bg-cover' style={{backgroundImage: `url(${bgHero})`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='text-4xl md:text-6xl font-bold'>Portfolio Page</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        <h3 className='text-sm md:text-2xl lg:text-3xl pt-10'>BIOPHILIC DESIGNS</h3>
        <h2 className='pt-2 pb-10 text-3xl md:text-5xl semi-bold  font-bold  tracking-wider'>PROJECT GALLERY</h2>
        <section className='relative flex flex-wrap justify-center items-center gap-2 w-full lg:w-full h-auto pb-10' >
          {/* images display */}
          {loading ? (<LoadingSpinner />
                    ) : (
                        images.map((imgSrc, index) => (
                            <ImageWithSkeleton key={index} src={imgSrc} index={index} indexImageClick={setIndexClicked} isImageClick={setIsClicked}/>
                        ))
                    )}
          <InviteComponent/>
          <FooterComponent/>
        </section>
        {/* clicked image display */}
        <div className={`${isClicked ? "flex" : "hidden"} bg-black/80 justify-center items-center fixed z-10 w-screen h-screen overflow-y-scroll`}>
                    <button onClick={() => setIsClicked(false)}><span className="absolute top-18 left-10 z-30  ml-10 text-white text-[40px] select-none akiro-hover-text">X</span></button>
                    <button onClick={() => {
                        if (indexClicked >= images.length - 1) {
                            setIndexClicked(0);
                        } else {
                            setIndexClicked(indexClicked + 1);
                        }
                    } } className="absolute top-8/12 md:top-9/12 lg:top-60 right-40 z-30  ml-10  text-white text-[50px] md:text-[100px] lg:akiro-hover-text akiro-active-text select-none">{">"}</button>
                    <button onClick={() => {
                        if (indexClicked <= 0) {
                            setIndexClicked(images.length - 1);
                        } else {
                            setIndexClicked(indexClicked - 1);
                        }
                    } } className="absolute top-8/12 md:top-9/12 lg:top-60 left-25 md:left-40 z-30  ml-10 text-white text-[50px] md:text-[100px] lg:akiro-hover-text akiro-active-text select-none">{"<"}</button>
                    <img src={images[indexClicked]} alt="akiroconstruction gallery image" className="absolute z-20 lg:h-[60vh] w-[90vw] md:w-[90vw] lg:w-[50vw]" />

                </div>
        
    </main>
    </>
    );

}