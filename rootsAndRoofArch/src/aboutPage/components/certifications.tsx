// src/pages/components/certifications.tsx

import type { JSX } from "react";
import cert1 from "../../assets/Certificates/cert-1.webp"
import cert2 from "../../assets/Certificates/cert-2.webp"
import cert3 from "../../assets/Certificates/cert-3.webp"
import cert4 from "../../assets/Certificates/cert-4.webp"
import cert5 from "../../assets/Certificates/cert-5.webp"
import cert6 from "../../assets/Certificates/cert-6.webp"
import cert7 from "../../assets/Certificates/cert-7.webp"
import cert8 from "../../assets/Certificates/cert-8.webp"
import cert9 from "../../assets/Certificates/cert-9.webp"
import cert10 from "../../assets/Certificates/cert-10.webp"

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Permaculture Design Certificate PRO",
    organization: "Oregon State University Professional and continuing Education",
    date: "January 16, 2026",
    image: cert2,
  },
  {
    id: 2,
    title: "Permaculture Design Certificate PRO",
    organization: "Oregon State University Professional and continuing Education",
    date: "January 17, 2026",
    image: cert1,
  },
  {
    id: 3,
    title: "Soil Food Web Foundation",
    organization: "Dr. Elaine's Soil Food Web School",
    date: "July 09–10, 2026",
    image: cert10,
    
  },
  {
    id: 4,
    title: "Aquaponics Design Course",
    organization: "Murray Hallam's Aquaponics Design Course",
    date: "July 09–10, 2026",
    image: cert9,
  },
  {
    id: 5,
    title: "ACIT Water Treatment Specialist Master Program In Advanced Water and Wastewater Treatment",
    organization: "AQUASIAN Water Technologies",
    date: "March 19-21, 2026",
    image: cert3,
  },
  {
    id: 6,
    title: "ACIT Industrial Water Treatment for Filtration Training Course",
    organization: "AQUASIAN Water Technologies",
    date: "March 19-21, 2025",
    image: cert4,
  },
  {
    id: 7,
    title: "Professional UAV Mapping & Digital Photogrammetry For Geospatial",
    organization: "AHEAD Innovations Inc. & Bayaw Engineering",
    date: "May 09, 2026",
    image: cert7,
  },
  {
    id: 8,
    title: "Strategic Land Sustainability Analysis Using QGIS and AHP Integration",
    organization: "AHEAD Innovations Inc. & Bayaw Engineering",
    date: "February 11-13, 2026",
    image: cert8,
  },
   {
    id: 9,
    title: "HEC-RAS Hydraulic and Floodplain Modeling for Flood Risk Assessment",
    organization: "AHEAD Innovations Inc. Bayaw Engineering Consultancy & Allied Services",
    date: "May 14–15, 2026",
    image: cert5,
  },
  {
    id: 10,
    title: "HEC-HMS Hydrologic Modeling for Watershed and Flood Analysis",
    organization: "AHEAD Innovations Inc. Bayaw Engineering Consultancy & Allied Services",
    date: "June 11–12, 2026",
    image: cert6,
  }
];

export default function CertificationsComponent(): JSX.Element {
  return (
    <section className="w-full bg-[#F7F6F1] text-[#1C3A38]">

      {/* INTRODUCTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-start">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#78908B]">
                Our Credentials
              </span>

              <span className="w-8 h-px bg-[#C5B78B]" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight max-w-md">
              Certified by
              <br />
              Knowledge. Shaped by
              <br />
              Experience. Rooted in 
              <br />
              Purpose.
            </h2>

            <div className="mt-7 w-12 h-px bg-[#1C3A38]" />
          </div>

          {/* RIGHT */}
          <div className="lg:pt-2 max-w-2xl">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#526966]">
              Our team continues to strengthen its knowledge, technical
              capabilities, and professional practice through recognized
              training and continuing education.
            </p>

            <p className="mt-5 text-sm sm:text-base leading-7 text-[#6A7976]">
              These certifications represent our commitment to professional
              growth, responsible design, and the continuous pursuit of
              better solutions for our clients, communities, and the
              environment.
            </p>
          </div>

        </div>

        {/* CERTIFICATES */}
        <div className="mt-16 md:mt-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">

            {certificates.map((certificate: Certificate) => (

              <article
                key={certificate.id}
                className="group"
              >

                {/* Certificate Image */}
                <div className={` relative overflow-hidden bg-[#E8E7E1] border border-[#D8D6CD] ${ certificate.id === 9 || certificate.id === 10 ? "h-auto" : "aspect-[4/3]" } `} >

                  {/* PLACEHOLDER
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      px-6
                      bg-[#F1F0EA]
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        tracking-[0.35em]
                        uppercase
                        text-[#78908B]
                      "
                    >
                      Certificate
                    </span>

                    <span
                      className="
                        mt-3
                        text-2xl
                        sm:text-3xl
                        font-serif
                        text-[#1C3A38]
                      "
                    >
                      Certificate of Completion
                    </span>

                    <span
                      className="
                        mt-3
                        text-xs
                        text-[#8A918E]
                      "
                    >
                      Placeholder Image
                    </span>

                  </div> */}

                  {/* 
                    ACTUAL IMAGE

                    When your certificates are ready,
                    replace the placeholder above with:
                  */}
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className={` w-full transition-transform duration-700 group-hover:scale-[1.02] ${ certificate.id === 9 || certificate.id === 10 ? "h-auto object-contain" : "h-full object-cover" } `}
                      loading="lazy"
                    />
      

                </div>

                {/* Certificate Information */}
                <div className="mt-5">

                  <h3
                    className="
                      text-sm
                      sm:text-base
                      uppercase
                      tracking-[0.12em]
                      font-medium
                      text-[#1C3A38]
                    "
                  >
                    {certificate.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      sm:text-sm
                      text-[#71817D]
                    "
                  >
                    {certificate.organization}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#9A9D96]
                    "
                  >
                    {certificate.date}
                  </p>

                  <div
                    className="
                      mt-4
                      w-8
                      h-px
                      bg-[#C5B78B]
                      transition-all
                      duration-300
                      group-hover:w-14
                    "
                  />

                </div>

              </article>

            ))}

          </div>

          {/* CLOSING STATEMENT */}
          <div
            className="
              mt-20
              md:mt-28
              pt-10
              md:pt-14
              border-t
              border-[#D8D6CD]
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-end
            "
          >

            <div
              className="
                max-w-lg
                border-l
                border-[#B7A978]
                pl-6
                md:pl-8
              "
            >

              <p
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-serif
                  italic
                  leading-relaxed
                  text-[#526966]
                "
              >
                Continuous learning builds better designs,
                stronger communities, and a more sustainable future.
              </p>

              <div className="mt-6 flex items-center gap-3">

                <span className="w-8 h-px bg-[#C5B78B]" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#78908B]
                  "
                >
                  Roots & Roof Designers Inc.
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}