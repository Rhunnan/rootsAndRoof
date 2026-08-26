import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import type React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import NavBar from "../components/navbar";
import FooterComponent from "../components/footer";
import InviteComponent from "../components/invite";

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Roots & Roof Designers Inc.",
    image: "https://www.rootsnroof.com/logornr.png",
    "@id": "https://rootsnroof.com/contact",
    url: "https://rootsnroof.com/contact",
    telephone: "+639171801858",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Talisay City",
      addressRegion: "Cebu",
      postalCode: "6000",
      addressCountry: "PH",
    },
    description:
      "Roots & Roof Designers Inc. creates regenerative architecture through sustainable design, biophilic principles, permaculture, aquaponics and environmentally responsible planning.",
    sameAs: [
      "https://www.facebook.com/people/Roots-and-Roof-Architects/61580777288357/",
    ],
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  // submit function goes in Part 2
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaRef.current) return;

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        alert("Please complete the reCAPTCHA.");
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("token", token);

      const response = await fetch("https://rootsnroof.com/email.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message || "Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Unable to send message.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Roots & Roof Architects | Cebu</title>

        <meta
          name="description"
          content="Connect with Roots & Roof Designers Inc. for architecture, biophilic design, regenerative planning, and sustainable residential and commercial projects."
        />

        <link rel="canonical" href="https://rootsnroof.com/contact" />

        <meta property="og:title" content="Contact | Roots & Roof Architects" />

        <meta
          property="og:description"
          content="Let's create architecture inspired by nature."
        />

        <meta
          property="og:image"
          content="https://www.rootsnroof.com/preview.png"
        />

        <meta property="og:url" content="https://rootsnroof.com/contact" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="bg-[#F8F6F2] text-[#2D2A26] overflow-hidden">
        <NavBar />

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://rootsnroof-663b5.web.app/firebase-images/bg-hero-4.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20">
              <p className="uppercase tracking-[0.35em] text-sm text-[#D6D1C4]">
                Contact
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-light text-white leading-tight">
                Let's Create
                <br />
                Something Timeless.
              </h1>

              <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
                Every meaningful space begins with a conversation. We'd love to
                hear your vision and explore how architecture can bring it to
                life.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* INTRO */}
        {/* ================================================= */}

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">
                Get In Touch
              </p>

              <h2 className="mt-6 text-4xl lg:text-6xl font-semibold leading-tight">
                Let's discuss your next project.
              </h2>

              <div className="mt-8 w-24 h-[2px] bg-[#D6D1C4]" />

              <p className="mt-10 text-lg text-gray-600 leading-9">
                Whether you're planning a private residence, commercial
                development, hospitality project, or a regenerative masterplan,
                our team is ready to collaborate with you from concept through
                completion.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CONTACT SECTION */}
        {/* ================================================= */}

        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* LEFT */}

              <div>
                <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">
                  Contact Information
                </p>

                <div className="mt-12 space-y-10">
                  <div>
                    <h3 className="text-lg uppercase tracking-[0.2em] text-[#66714B]">
                      Email
                    </h3>

                    <p className="mt-3 text-2xl font-light">
                      inquiry@rootsnroof.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg uppercase tracking-[0.2em] text-[#66714B]">
                      Phone
                    </h3>

                    <p className="mt-3 text-2xl font-light">+63 917 180 1858</p>
                  </div>

                  <div>
                    <h3 className="text-lg uppercase tracking-[0.2em] text-[#66714B]">
                      Office
                    </h3>

                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/hFcsV4EW5dvChANN8"
                      aria-label="Redirect to Google Map Comapny Location"
                    >
                      <p className="mt-2 text-lg leading-8 text-[#66714B]">
                        Acacia St, Unit 103, Creative Hub, Advent Business
                        Center, Brgy. Camputhaw Cebu City, Philippines, 6000
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div>
                <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">
                  Send an Inquiry
                </p>

                <form
                  className="mt-12 bg-white border border-[#E7E1D8] shadow-xl p-10 lg:p-14"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-8">
                    <div>
                      <label className="block uppercase tracking-[0.25em] text-xs text-[#66714B] mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className="
            w-full
            h-14
            px-5
            border
            border-[#D8D2C8]
            bg-white
            outline-none
            transition
            focus:border-[#66714B]
          "
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-[0.25em] text-xs text-[#66714B] mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="
            w-full
            h-14
            px-5
            border
            border-[#D8D2C8]
            bg-white
            outline-none
            transition
            focus:border-[#66714B]
          "
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-[0.25em] text-xs text-[#66714B] mb-3">
                        Contact Number
                      </label>

                      <input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        className="
            w-full
            h-14
            px-5
            border
            border-[#D8D2C8]
            bg-white
            outline-none
            transition
            focus:border-[#66714B]
          "
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-[0.25em] text-xs text-[#66714B] mb-3">
                        Tell us about your project
                      </label>

                      <textarea
                        rows={7}
                        value={message}
                        onChange={handleMessageChange}
                        required
                        className="
            w-full
            p-5
            border
            border-[#D8D2C8]
            bg-white
            outline-none
            resize-none
            transition
            focus:border-[#66714B]
          "
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="
        mt-10
        bg-[#66714B]
        hover:bg-[#556041]
        transition-all
        duration-300
        text-white
        uppercase
        tracking-[0.3em]
        px-10
        py-5
        text-sm
      "
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ================================================= */}
        {/* LOCATION */}
        {/* ================================================= */}

        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">
              Visit Us
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold">
              Our Studio Location
            </h2>

            <div className="mt-8 w-24 h-[2px] bg-[#D6D1C4]" />

            <iframe
              title="Roots & Roof Location"
              loading="lazy"
              allowFullScreen
              className="
                mt-12
                w-full
                h-[550px]
                rounded-sm
                border-0
                shadow-xl
              "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.7241000386543!2d123.89730110880897!3d10.32113038975873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95431354fba5af5%3A0x3c43f69543ab9de!2sRoots%20and%20Roof%20Architects!5e1!3m2!1sen!2sph!4v1785080019508!5m2!1sen!2sph"
            />
          </div>
        </section>

        {/* ================================================= */}
        {/* DESIGN PROCESS */}
        {/* ================================================= */}

        <section className="py-32 bg-[#F8F6F2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="uppercase tracking-[0.35em] text-sm text-[#66714B] text-center">
              Our Process
            </p>

            <h2 className="mt-5 text-center text-4xl lg:text-5xl font-semibold">
              How We Bring Ideas To Life
            </h2>

            <div className="mx-auto mt-8 w-24 h-[2px] bg-[#D6D1C4]" />

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16 mt-24">
              <div>
                <span className="text-6xl font-light text-[#D6D1C4]">01</span>

                <h3 className="mt-8 text-2xl font-semibold">Discovery</h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Understanding your vision, goals, site conditions, and
                  aspirations before beginning the design journey.
                </p>
              </div>

              <div>
                <span className="text-6xl font-light text-[#D6D1C4]">02</span>

                <h3 className="mt-8 text-2xl font-semibold">Design</h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Crafting thoughtful spaces inspired by nature, sustainability,
                  and timeless architectural principles.
                </p>
              </div>

              <div>
                <span className="text-6xl font-light text-[#D6D1C4]">03</span>

                <h3 className="mt-8 text-2xl font-semibold">Documentation</h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Producing detailed architectural and engineering drawings
                  ready for approvals and construction.
                </p>
              </div>

              <div>
                <span className="text-6xl font-light text-[#D6D1C4]">04</span>

                <h3 className="mt-8 text-2xl font-semibold">
                  Construction Support
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Collaborating closely throughout construction to ensure every
                  detail is executed as intended.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InviteComponent isProjectPage={false} />

        <FooterComponent />

        <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="invisible" />
      </main>
    </>
  );
}
