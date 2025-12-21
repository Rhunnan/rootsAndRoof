import NavBar from "../components/navbar";
import bgHero from "../assets/bg-hero-4.webp"
import FooterComponent from "../components/footer";
import InviteComponent from "../components/invite";
import procedure1 from '../assets/procedure-1.webp'
import procedure3 from '../assets/procedure-2.webp'
import procedure2 from '../assets/procedue-3.webp'
import CardProcedure from "../components/cards";
import AnimationObserver from "../components/observerAnimation";
import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactPage(){
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Home | Root And Roof Architects | Cebu",
      image: "https://www.rootsnroof.com/preview.png",
      "@id": "https://rootsnroof.com/contact",
      url: "https://rootsnroof.com/contact",
      telephone: "+639171801858",
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Talisay City, Cebu",
        addressRegion: "Cebu",
        postalCode: "6000",
        addressCountry: "PH",
      },
      description:
        "Roots & Roof Designers Inc. is an innovative architecture firm reshaping the future of sustainable living. We fuse permaculture, biophilic design, aquaponics technology, advance waste water treatment systems, back to Eden gardening, and food forest systems to create regenerative spaces where architecture becomes a living extension of nature",
      serviceType: [
        "Feasibility Studies",
        "Site Selection and Analysis",
        "Site Utilization and Land-Use Studies",
        "Schematic Design",
        "Contract Document Phase",
        "Design Development Phase",
        "Quality Control",
        "Evaluation of Construction Work",
        "Preparation of Daily Inspection Reports",
        "Design",
        "Post Construction Services",
        "Site Supervision & Quality Control"
      ],
      sameAs: [
        "https://www.facebook.com/people/Roots-and-Roof-Architects/61580777288357/",
      ],

      knowsAbout: [
              "Architecture",
              "Construction",
              "Biophilic Design",
              "Aquaponics",
              "Permaculture",
              "sustainability",
              "Composting",
          ],
      areaServed: "Cebu Philippines, and International Countries",
      slogan: "Roots & Roof Designers Inc. is an innovative architecture firm reshaping the future of sustainable living. We fuse permaculture, biophilic design, aquaponics technology, advance waste water treatment systems, back to Eden gardening, and food forest systems to create regenerative spaces where architecture becomes a living extension of nature",
      // founder: {
      //   "@type": "Person",
      //   name: "Kim Encabo Torrequemada" 
      // },
      brand: {
        "@type": "Brand",
        name: "RootsnRoof | Roots and Roof Acrchitects | Cebu"
      },
    };  

    
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
   
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handlePhoneChange = (e:React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    const handleMessageChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!recaptchaRef.current) {
            console.error("reCAPTCHA ref not available");
            return;
        }

        try {
            const token = await recaptchaRef.current.executeAsync();
            console.log("reCAPTCHA token:", token);  // This is normal
            recaptchaRef.current.reset();

            if (!token) {
                console.error("reCAPTCHA token is null");
                alert("Please complete the reCAPTCHA.");
                return;
            }

            const formData = new FormData();
            formData.append("email", email);
            formData.append("name", name);
            formData.append("phone", phone);
            formData.append("message", message);
            formData.append("token", token);
            // for testing
            // const response = await fetch("http://localhost/rootsnroof-website/email.php", {
              //for production mode
            const response = await fetch("https://rootsnroof.com/email.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message || "There was an error sending the message.");
                throw new Error(result.message || "Unknown error from server.");
            }

            alert(result.message || "Message Sent Successfully!");
            setEmail("");
            setName("");
            setPhone("");
            setMessage("");
        } catch (error: any) {
            console.error("Error sending Email", error.message);
            alert("There was an error sending the message. Please try again later.");
        }
    };

    return (<>
    <Helmet>
      <title>Contact | Roots & Roof Architects | Cebu</title>
      <meta
        name="description"
        content="Get in touch with Roots & Roof Designers Inc., Cebu. We specialize in sustainable architecture, biophilic design, aquaponics, permaculture, and regenerative living spaces."
      />
      <link rel="canonical" href="https://rootsnroof.com/contact" />

      {/* Open Graph */}
      <meta property="og:title" content="Contact | Roots & Roof Architects | Cebu" />
      <meta property="og:description" content="Connect with Roots & Roof Designers Inc., Cebu for innovative sustainable architecture services." />
      <meta property="og:image" content="https://www.rootsnroof.com/preview.png" />
      <meta property="og:url" content="https://rootsnroof.com/contact" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Roots & Roof Architects | Cebu" />
      <meta name="twitter:description" content="Connect with Roots & Roof Designers Inc., Cebu for innovative sustainable architecture services." />
      <meta name="twitter:image" content="https://www.rootsnroof.com/preview.png" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <main className='flex flex-col items-center relative min-h-screen h-auto w-screen'>
        <NavBar/>
        <section id="HomeHero" className='fade-in-up relative h-screen w-screen bg-no-repeat bg-position-[center_20%] md:bg-position-[center_70%] bg-cover' style={{backgroundImage: `url(https://rootsnroof-663b5.web.app/firebase-images/bg-hero-4.webp)`}}>
          <h2 className='absolute top-9/12 left-10 md:left-20 text-4xl text-white'>
            <span className='fade-in-normal text-4xl font-semibold md:text-7xl lg:font-normal'>Contact Page</span><br/><span className='text-2xl'>WHERE NATURE MEETS DESIGN</span>
          </h2>
        </section>
        
        <section className='fade-in-up min-h-screen h-auto w-screen'>
          {/* lets connect div container */}
          <div className="flex flex-col justify-center h-[10vh] md:h-[15vh] lg:h-[20vh] w-screen roots-btn-color">
            <h2 className="pl-15 md:pl-20 lg:pl-40 text-3xl md:text-6xl lg:text-7xl font-semibold text-white">LET'S CONNECT</h2>
            <p className=" pl-28 md:pl-38 lg:pl-58 md:text-3xl lg:text-4xl font-normal text-white">BUILD YOUR FUTURE</p>
          </div>
          {/* form and map continer */}
          <AnimationObserver>
             <div className="w-screen min-h-[70vh] h-auto flex flex-col lg:flex-row">
            {/* forms */}
            <div className="my-5 flex flex-col gap-y-10 justify-center items-center min-h-[50vh] lg:min-h-[80vh] h-auto w-screen lg:w-[50vw]">
              <form id="contactForm" name="contactForm" onSubmit={handleSubmit} className="h-auto w-[80%] p-5 lg:w-[70%] lg:min-h-[65%] flex flex-col items-center justify-center gap-y-8 roots-btn-color rounded-2xl">
                <input 
                type="text" 
                placeholder="Full Name" 
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" />
                <input 
                  type="text" 
                  placeholder="Email Address" 
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" 
                />
                <input 
                  type="text"
                  placeholder="Contact Number"
                  autoComplete="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  name="phone"
                  id="phone"
                  className="pl-3 w-[85%] h-[45px] text-xl rounded-md text-input-color" 
                />
                <textarea
                  placeholder="Message"
                  autoComplete="off"
                  aria-required
                    value={message}
                    onChange={handleMessageChange}
                    id="message"
                    name="message"
                    rows={5}                        required
                   className=" pl-3 w-[85%] h-auto min-h-20 text-xl rounded-md text-input-color" />
                   <div className='transition-all duration-500 ease-in-out flex justify-center items-center active:bg-green-200 hover:bg-green-100 akiro-bg-btn border border-white hover:text-gray-400 text-white text-[20px] w-auto h-10 rounded-[5px] px-6 py-2'>
                      {/* //button */}
                      <button type="submit" className="roots-btn-hover-color text-shadow-2xs text-sm md:text-2xl font-light">SEND MESSAGE</button>
                    </div>
              </form>
            </div>
            {/* map */}
            <div className="flex flex-col w-screen lg:w-[50vw] min-h-[30vh] lg:min-h-[50vh] gap-y-5 items-center lg:items-start justify-center h-auto relative" >
                <div>
                  <h2 className="text-md md:text-2xl font-light"><span className="text-xl md:text-3xl font-light">EMAIL:</span> info@rootsnroof.com</h2>
                  <p className="text-sm md:text-2xl font-light"><span className="text-xl  md:text-3xl font-light">ADDRESS:</span> Talisay City, Cebu Philippines, 6000</p>
                </div>
                <iframe
                  aria-label="Map or Location of akiroconstruction cebu"
                  title="Akiro Construction and Supply Location"
                  className="w-[80%] h-[20vh] lg:w-[80%] lg:h-[50vh] border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=villa%20raya%20talisay&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                >
                </iframe>
            </div>
          </div>
          </AnimationObserver>
        </section>    
        <section className='flex flex-wrap justify-center items-center gap-8 md:w-screen lg:w-[70%] h-auto' > 
        </section>
        <section id="procedureSection" className=" flex flex-col items-center justify-between bg-white w-screen min-h-screen lg:min-h-screen h-auto" >
          {/* procedureSection */}
          <h3 className='text-sm md:text-2xl lg:text-4xl fade-in-normal'>WELCOME TO ROOTS AND ROOF ARCHITECTURE</h3>
          <h2 className='p-5 text-2xl md:text-3xl lg:text-5xl font-bold  tracking-wider fade-in-slow'>SERVICES OFFERED</h2>
          {/* procedureContainer */}
          <div className='bg-gray-100 w-screen min-h-[40%] p-5 h-auto flex flex-wrap justify-center items-center gap-8 '>
            <CardProcedure 
              number={1} 
              title="PRE-DESIGN" 
              description={`Feasibility Studies
                Site Selection and Analysis
                Site Utilization and Land-Use Studies
                `}
              imagePath={procedure1}
              animation="slideFromLeftFast"
          />
            <CardProcedure 
              number={2} 
              title="ARCHITECTURAL DESIGN" 
              description={`Schematic Design
                Contract Document Phase
                Design Development Phase
                `}
              imagePath={procedure2}
              animation="slideFromLeftNormal"
              />
            <CardProcedure 
              number={3} 
              title="SUPERVISION" 
              description={`Quality Control
                Evaluation of Construction Work
                Preparation of Daily Inspection Reports`}
              imagePath={procedure3}
              animation="slideFromLeftSlow"
              />
            <CardProcedure 
              number={4} 
              title="ARCH & ENGR DESIGN" 
              description={`Design
                Post Construction Services
                Site Supervision & Quality Control
                `} 
              imagePath={bgHero}
              animation="slideFromLeftVerySlow"
              />
          </div>
        </section>
        <InviteComponent/>
        <FooterComponent/>   
        <ReCAPTCHA
                    //for testing
                    // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          sitekey={siteKey}
          size="invisible"
          ref={recaptchaRef}
        />
    </main>
    </>
    );

}