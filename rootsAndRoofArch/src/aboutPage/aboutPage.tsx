import NavBar from "../components/navbar";
// import bgHero from "../assets/bg-hero-3.webp"
import FooterComponent from "../components/footer";
import VisionComponent from "./components/vision";
import MissionComponent from "./components/mission";
import InviteComponent from "../components/invite";
import AnimationObserver from "../components/observerAnimation";
import { Helmet } from "react-helmet-async";

export default function AboutPage(){
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Roots & Roof Architects | About",
    image: "https://www.rootsnroof.com/logornr.png",
    "@id": "https://rootsnroof.com/about",  
    url: "https://rootsnroof.com/about",
    telephone: "+639171801858",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Talisay City",
      addressRegion: "Cebu",
      postalCode: "6000",
      addressCountry: "PH",
    },
    description: "Roots & Roof Designers Inc. is an innovative architecture firm reshaping the future of sustainable living.",
    founder: { "@type": "Person", name: "Kim Encabo Torrequemada" },
    sameAs: [
      "https://www.facebook.com/rootsnroof",
      "https://www.instagram.com/rootsnroof"
    ],
    brand: { "@type": "Brand", name: "RootsnRoof | Roots & Roof Architects | Cebu" },
  };

  return (
    <>
    <Helmet>
      <title>About | Roots & Roof Architects | Cebu</title>
      <meta
        name="description"
        content="Learn about Roots & Roof Designers Inc., an innovative architecture firm in Cebu specializing in sustainable and regenerative architecture, biophilic design, permaculture, and aquaponics technology."
      />
      <link rel="canonical" href="https://rootsnroof.com/about" />

      {/* Open Graph */}
      <meta property="og:title" content="About | Roots & Roof Architects | Cebu" />
      <meta property="og:description" content="Learn about Roots & Roof Designers Inc., an innovative architecture firm in Cebu specializing in sustainable and regenerative architecture." />
      <meta property="og:image" content="https://www.rootsnroof.com/preview.png" />
      <meta property="og:url" content="https://rootsnroof.com/about" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About | Roots & Roof Architects | Cebu" />
      <meta name="twitter:description" content="Learn about Roots & Roof Designers Inc., an innovative architecture firm in Cebu specializing in sustainable and regenerative architecture." />
      <meta name="twitter:image" content="https://www.rootsnroof.com/preview.png" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-cover' style={{backgroundImage: `url(https://rootsnroof-663b5.web.app/firebase-images/bg-hero-3.webp)`}}>
          <h2 className='absolute top-1/4 md:top-1/4 left-10 text-4xl text-white w-[90%]'>
            <span className='fade-in-fast text-3xl md:text-5xl font-bold whitespace-pre-line'>{`Architecture That Breathes\nwith the Planet`}</span><br/>
            <span className='fade-in-normal text-sm md:text-2xl lg:text-3xl'>Roots & Roof Designers Inc. is an innovative architecture firm reshaping the future of
              sustainable living. We fuse permaculture, biophilic design, aquaponics technology,
              advance waste water treatment systems, back to Eden gardening, and food forest
              systems to create regenerative spaces where architecture becomes a living extension
              of nature..
            </span>
          </h2>
        </section>
        <AnimationObserver>
          <MissionComponent/>
        </AnimationObserver>
        <AnimationObserver>
          <VisionComponent/>
        </AnimationObserver>
        {/* <TeamComponent/> */}
        <InviteComponent/>
        <FooterComponent/>       
    </main>
    </>
    );

}