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
        <section
              className="relative w-full h-screen bg-cover bg-center"            style={{
                backgroundImage:
                    "url(https://rootsnroof-663b5.web.app/firebase-images/bg-hero-3.webp)",
            }}
        >
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 h-full flex items-end">

                <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pb-24">

                    <p className="uppercase tracking-[0.35em] text-sm text-[#D6D1C4]">

                        About Roots & Roof

                    </p>

                    <h1 className="mt-6 text-5xl lg:text-7xl font-light text-white leading-tight">

                        Architecture

                        <br />

                        Inspired

                        <br />

                        By Nature.

                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">

                        We believe architecture should exist in harmony with nature,
                        creating spaces that enrich lives, respect the environment,
                        and endure beautifully for generations.

                    </p>

                </div>

            </div>

        </section>
        <AnimationObserver>
          <MissionComponent/>
        </AnimationObserver>
        <AnimationObserver>
          <VisionComponent/>
        </AnimationObserver>
        {/* <TeamComponent/> */}
        <InviteComponent isProjectPage={false}/>
        <FooterComponent/>       
    </main>
    </>
    );

}